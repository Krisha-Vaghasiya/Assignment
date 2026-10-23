/** Restore the interactive timelines omitted by the static site import. */
export function restoreImportedAnimations() {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const meet = document.querySelector<HTMLElement>(".tp-meet");
  const track = meet?.querySelector<HTMLElement>(".tp-meet__track");
  const stage = meet?.querySelector<HTMLElement>(".tp-meet__stage");
  const hall = meet?.querySelector<HTMLElement>(".tp-meet__hall");
  const spacer = stage?.parentElement;
  const layer = document.querySelector<HTMLElement>(".pup-layer");
  const actor = layer?.querySelector<HTMLElement>(".pup-actor");
  const actorBody = actor?.querySelector<HTMLElement>(".pup-actor__body");
  const stops = [...document.querySelectorAll<HTMLElement>(".pup-stop")];
  const header = document.querySelector<HTMLElement>(".tp-header");
  const chat = document.querySelector<HTMLElement>(".tp-chat");
  const steps = [...document.querySelectorAll<HTMLElement>(".tp-chat__step")];
  const groups = [...document.querySelectorAll<HTMLElement>(".tp-msg-group")];
  const timers: ReturnType<typeof setTimeout>[] = [];
  let frame = 0;
  let disposed = false;
  let travel = 0;
  let previousScroll = window.scrollY;
  let previousTime = performance.now();
  let currentStop: HTMLElement | undefined;
  let lastChatStep = -1;
  let position: { x: number; y: number; width: number } | undefined;

  const revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.setAttribute("data-revealed", "true");
      revealObserver.unobserve(entry.target);
    }
  }, { rootMargin: "0px 0px -5% 0px", threshold: 0.08 });
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
    element.setAttribute("data-armed", "true");
    if (!reducedMotion.matches && element.getBoundingClientRect().top > innerHeight * 0.95) {
      element.removeAttribute("data-revealed");
      revealObserver.observe(element);
    } else element.setAttribute("data-revealed", "true");
  });

  function resize() {
    const pinned = innerWidth >= 768 && !reducedMotion.matches;
    if (meet && track && spacer && hall) {
      if (pinned) {
        meet.setAttribute("data-pinned", "true");
        hall.style.removeProperty("--door-w");
        travel = Math.max(0, track.scrollWidth - innerWidth);
        spacer.style.height = `${travel + innerHeight}px`;
      } else {
        meet.removeAttribute("data-pinned");
        spacer.style.height = "auto";
        track.style.transform = "none";
        travel = 0;
      }
    }
    if (layer && actorBody && stops.length && !reducedMotion.matches) {
      document.documentElement.setAttribute("data-pup", "");
      layer.setAttribute("data-restored", "");
    } else {
      document.documentElement.removeAttribute("data-pup");
      layer?.removeAttribute("data-restored");
      stops.forEach(stop => stop.querySelector(".pup-buddy")?.removeAttribute("data-live"));
    }
    position = undefined;
  }

  function update(time: number) {
    if (disposed) return;
    const scroll = window.scrollY;
    const speed = Math.min(1, Math.abs(scroll - previousScroll) / 25);
    const dt = Math.min(64, time - previousTime);
    previousTime = time;
    if (header) {
      header.setAttribute("data-scrolled", String(scroll > 32));
      if (Math.abs(scroll - previousScroll) > 2) {
        header.setAttribute("data-hidden", String(scroll > previousScroll && scroll > 180));
      }
    }
    previousScroll = scroll;

    if (meet && track && travel) {
      const offset = Math.min(travel, Math.max(0, -meet.getBoundingClientRect().top));
      track.style.transform = `translate3d(${-offset}px,0,0)`;
      hall?.style.setProperty("--floor-x", `${-offset * 0.3}px`);
      const here = meet.getBoundingClientRect().top <= 0 && meet.getBoundingClientRect().bottom >= innerHeight;
      meet.setAttribute("data-here", String(here));
      track.querySelectorAll<HTMLElement>(".tp-door").forEach(door => {
        const rect = door.getBoundingClientRect();
        door.setAttribute("data-open", String(Math.abs(rect.left + rect.width / 2 - innerWidth * 0.48) < innerWidth * 0.2));
      });
    }

    if (chat && steps.length) {
      const rect = chat.getBoundingClientRect();
      const progress = (innerHeight * 0.7 - rect.top) / Math.max(1, rect.height * 0.65);
      const active = Math.max(0, Math.min(steps.length - 1, Math.floor(progress * steps.length)));
      if (active !== lastChatStep) {
        lastChatStep = active;
        steps.forEach((step, index) => {
          step.toggleAttribute("data-active", index === active);
          step.toggleAttribute("data-done", index < active);
        });
        groups.forEach((group, index) => group.setAttribute("data-show", String(index <= active)));
      }
    }

    if (layer?.hasAttribute("data-restored") && actor && actorBody) {
      const inHall = meet?.getAttribute("data-here") === "true";
      const sceneStops = inHall ? stops.filter(stop => stop.matches(".tp-meet__teddy")) : stops;
      const anchors = sceneStops.map(stop => ({ stop, rect: stop.getBoundingClientRect() }))
        .filter(({ rect }) => rect.width > 0 && rect.height > 0);
      if (anchors.length) {
        const focus = innerHeight * 0.68;
        let index = anchors.findIndex(({ rect }) => rect.top + rect.height / 2 >= focus);
        if (index < 0) index = anchors.length - 1;
        const next = anchors[index];
        const prev = anchors[Math.max(0, index - 1)];
        if (!next || !prev) {
          frame = requestAnimationFrame(update);
          return;
        }
        const a = prev.rect.top + prev.rect.height / 2;
        const b = next.rect.top + next.rect.height / 2;
        const progress = a === b ? 1 : Math.min(1, Math.max(0, (focus - a) / (b - a)));
        const eased = progress * progress * (3 - 2 * progress);
        const selected = eased < 0.5 ? prev : next;
        const target = {
          x: prev.rect.left + (next.rect.left - prev.rect.left) * eased,
          y: prev.rect.top + (next.rect.top - prev.rect.top) * eased - Math.sin(progress * Math.PI) * 55,
          width: prev.rect.width + (next.rect.width - prev.rect.width) * eased,
        };
        // Keep the puppy in the scene when crossing long sections, not over headings.
        target.y = Math.max(-target.width, Math.min(innerHeight - target.width * 0.65, target.y));
        if (currentStop !== selected.stop) {
          const svg = selected.stop.querySelector("svg");
          if (svg) actorBody.replaceChildren(svg.cloneNode(true));
          currentStop = selected.stop;
          layer.setAttribute("data-front", String(!selected.stop.matches(".tp-hero__teddy, .tp-basket__pup")));
        }
        const blend = 1 - Math.exp(-dt / 85);
        if (!position) position = target;
        else {
          position.x += (target.x - position.x) * blend;
          position.y += (target.y - position.y) * blend;
          position.width += (target.width - position.width) * blend;
        }
        actor.style.transform = `translate3d(${position.x}px,${position.y}px,0)`;
        actorBody.style.transform = `scale(${position.width / 300})`;
        const moving = speed > 0.08 || (progress > 0.08 && progress < 0.92);
        const part = (name: string) => actorBody.querySelector<SVGElement>(`[data-p="${name}"]`);
        const phase = time / 95;
        const peek = selected.stop.matches(".tp-hero__teddy, .tp-basket__pup");
        if (!peek) {
          part("body")?.setAttribute("opacity", "1");
          part("body")?.setAttribute("transform", `translate(0 ${Math.sin(phase * 2) * (moving ? 2.5 : 0.7)})`);
          part("haunch")?.setAttribute("opacity", "0");
          part("ledge")?.setAttribute("opacity", "0");
        }
        part("tail")?.setAttribute("transform", `rotate(${Math.sin(time / 115) * 22} 84 150)`);
        part("head")?.setAttribute("transform", `translate(0 ${peek ? 4 + Math.sin(time / 600) * 3 : Math.sin(time / 550)}) rotate(${Math.sin(time / 1000) * 3} 212 100)`);
        const blink = time % 5200 > 5000;
        part("open")?.setAttribute("opacity", blink ? "0" : "1");
        part("shut")?.setAttribute("opacity", blink ? "1" : "0");
        if (moving && !peek) {
          for (const [name, x, y, sign] of [["bf", 94, 192, 1], ["ff", 168, 192, -1], ["bn", 110, 194, -1], ["fn", 186, 194, 1]] as const) {
            part(name)?.setAttribute("transform", `translate(${x} ${y}) rotate(${Math.sin(phase) * 20 * sign})`);
          }
        }
      }
    }
    frame = requestAnimationFrame(update);
  }

  const curtain = document.querySelector<HTMLElement>(".tp-curtain");
  if (curtain && !reducedMotion.matches) {
    curtain.setAttribute("data-state", "intro");
    timers.push(setTimeout(() => curtain.setAttribute("data-state", "idle"), 1100));
  }
  resize();
  frame = requestAnimationFrame(update);
  window.addEventListener("resize", resize);
  reducedMotion.addEventListener("change", resize);
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    timers.forEach(clearTimeout);
    revealObserver.disconnect();
    window.removeEventListener("resize", resize);
    reducedMotion.removeEventListener("change", resize);
    document.documentElement.removeAttribute("data-pup");
  };
}