import type { CSSProperties } from "react";
import { useSyncExternalStore } from "react";
import { Fragment } from "react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { importedSiteHead } from "../lib/imported-site-head";
import { useSuspenseQuery } from "@tanstack/react-query";
import { catalogQuery } from "../lib/catalog-query";
import { ManagedPuppies, ManagedFaqs, ManagedStories } from "../components/managed-content";
import capturedCSS from "../styles/pages/faq.css?raw";

export const Route = createFileRoute("/faq")({
  head: () => importedSiteHead("Questions \u0026 answers | TeddyPups U.A.E.", "Find answers about meeting puppies, health details, delivery and TeddyPups U.A.E."),
  staticData: { importedDocument: { html: { "className": "\x56eu4Sq_variable \x68pvSLW_variable \x5f91XIoq_variable \x6cenis", "lang": "en" }, body: {  } } },
  loader: ({ context }) => context.queryClient.ensureQueryData(catalogQuery),
  component: Index,
});

function Index() {
  const { data: catalogData } = useSuspenseQuery(catalogQuery);

  const [control0, setControl0] = useState(0);
  const isMobile = useSyncExternalStore(subscribeMobile, () => matchMedia("(max-width: 767px)").matches, () => false);
  const carouselContent0 = (<>
{control0 === 0 && <Fragment key={0}>
<aside className={"\x74p-notes__side"} aria-label="Find a question">
  <label htmlFor="_R_4pbsnkivb_" className={"\x66ont-scrawl \x74p-notes__label"}>sniff out a question</label>
  <div className={"\x74p-notes__search"}>
    <svg viewBox="0 0 24 24" aria-hidden="true" className={"\x74p-notes__lens"}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
    <input id="_R_4pbsnkivb_" type="search" placeholder="delivery, Korea, vaccinated…" autoComplete="off" defaultValue="" />
  </div>
  <p className={"\x74p-notes__count"} aria-live="polite">9 notes on the board</p>
  <div className={"\x74p-notes__teddy"}>
    <span aria-hidden="true" className={"\x74p-notes__bubble \x66ont-plush"}>
      <span className={"\x74p-notes__q"}>?</span>
      <span className={"\x74p-notes__a"}>!</span>
    </span>
    <div className={"\x70up-buddy "} data-facing="right" data-live="">
      <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, reading the notes" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
        <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
          <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -1.62) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -1.42) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="62">
            <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="0">
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g data-p="ff" transform="translate(168 192) rotate(24)">
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(28.6 84 150)" : "rotate(23.25 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="67">
              <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            </g>
            <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="0">
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <g data-p="fn" transform="translate(186 194) rotate(24)">
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
          </g>
          <g data-p="haunch" opacity="1" transform="translate(0 1.44)">
            <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(-10 -5.42) rotate(-0.48 212 100)" : "translate(-10 -5.13) rotate(-8.71 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="81">
            <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
            <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 174 82)" />
            <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 250 82)" />
            <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
            <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <g data-p="eyes" transform="translate(0 0)">
              <g data-p="open" opacity="1">
                <g data-p="blink" transform="translate(0 0) scale(1 1)">
                  <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                  <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                </g>
              </g>
            </g>
            <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
            <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="1" />
            <g data-p="mouth" opacity="0">
              <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" />
            </g>
          </g>
          <g data-p="ledge" opacity="0">
            <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
        </g>
      </svg>
      <span aria-hidden="true" className={"\x70up-bubble"} data-show="false">hm?</span>
    </div>
  </div>
  <a className={"\x62tn \x62tn-whatsapp \x74p-notes__ask"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I%20have%20a%20question%3A" rel="noopener noreferrer" target="_blank">Ask your own question</a>
</aside>
<div className={"\x74p-notes__board"}>
  <ul className={"\x74p-notes__list"}>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "0" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" aria-expanded="false" aria-controls="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc">
          <span className={"\x66ont-plush-text"}>Are your puppies vaccinated and health-checked?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" role="region" aria-labelledby="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.2deg", "--pin": "var(--color-sky-deep)", "--i": "1" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-45fb5252-c038-41c7-afae-c8478b8f4f76" aria-expanded="false" aria-controls="a-45fb5252-c038-41c7-afae-c8478b8f4f76">
          <span className={"\x66ont-plush-text"}>Can I meet a puppy before I decide?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-45fb5252-c038-41c7-afae-c8478b8f4f76" role="region" aria-labelledby="q-45fb5252-c038-41c7-afae-c8478b8f4f76" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-0.8deg", "--pin": "#d9a13c", "--i": "2" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9585fb34-9d0d-4ee3-a903-38442633135d" aria-expanded="false" aria-controls="a-9585fb34-9d0d-4ee3-a903-38442633135d">
          <span className={"\x66ont-plush-text"}>Can I take my puppy home the same day?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9585fb34-9d0d-4ee3-a903-38442633135d" role="region" aria-labelledby="q-9585fb34-9d0d-4ee3-a903-38442633135d" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Local puppies are available immediately, so you can take your puppy home the same day.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.8deg", "--pin": "#c45a6a", "--i": "3" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" aria-expanded="false" aria-controls="a-bd85389d-2116-4c4b-8500-0a5a82cae22c">
          <span className={"\x66ont-plush-text"}>Do you import puppies from abroad?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-bd85389d-2116-4c4b-8500-0a5a82cae22c" role="region" aria-labelledby="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.2deg", "--pin": "var(--color-toffee)", "--i": "4" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" aria-expanded="false" aria-controls="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e">
          <span className={"\x66ont-plush-text"}>How does an imported puppy travel to Dubai?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e" role="region" aria-labelledby="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "0.7deg", "--pin": "var(--color-sky-deep)", "--i": "5" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + 1 + 11) % 11); }} type="button" id="q-18483536-4415-4cc9-8ef8-913421f9da89" aria-expanded="false" aria-controls="a-18483536-4415-4cc9-8ef8-913421f9da89">
          <span className={"\x66ont-plush-text"}>Will I see photos and health details first?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-18483536-4415-4cc9-8ef8-913421f9da89" role="region" aria-labelledby="q-18483536-4415-4cc9-8ef8-913421f9da89" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.9deg", "--pin": "#d9a13c", "--i": "6" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + -1 + 11) % 11); }} type="button" id="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" aria-expanded="false" aria-controls="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123">
          <span className={"\x66ont-plush-text"}>Do you deliver?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" role="region" aria-labelledby="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.4deg", "--pin": "#c45a6a", "--i": "7" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" aria-expanded="false" aria-controls="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa">
          <span className={"\x66ont-plush-text"}>Which breeds do you usually have?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa" role="region" aria-labelledby="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "8" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-67b95211-ac7c-4582-a684-90fcd4e00812" aria-expanded="false" aria-controls="a-67b95211-ac7c-4582-a684-90fcd4e00812">
          <span className={"\x66ont-plush-text"}>Is there help after my puppy comes home?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-67b95211-ac7c-4582-a684-90fcd4e00812" role="region" aria-labelledby="q-67b95211-ac7c-4582-a684-90fcd4e00812" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</Fragment>}
{control0 === 1 && <Fragment key={1}>
<aside className={"\x74p-notes__side"} aria-label="Find a question">
  <label htmlFor="_R_4pbsnkivb_" className={"\x66ont-scrawl \x74p-notes__label"}>sniff out a question</label>
  <div className={"\x74p-notes__search"}>
    <svg viewBox="0 0 24 24" aria-hidden="true" className={"\x74p-notes__lens"}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
    <input id="_R_4pbsnkivb_" type="search" placeholder="delivery, Korea, vaccinated…" autoComplete="off" defaultValue="" />
  </div>
  <p className={"\x74p-notes__count"} aria-live="polite">9 notes on the board</p>
  <div className={"\x74p-notes__teddy"}>
    <span aria-hidden="true" className={"\x74p-notes__bubble \x66ont-plush"}>
      <span className={"\x74p-notes__q"}>?</span>
      <span className={"\x74p-notes__a"}>!</span>
    </span>
    <div className={"\x70up-buddy "} data-facing="right" data-live="">
      <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, reading the notes" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
        <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
          <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -1.62) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -1.47) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="62">
            <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="0">
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g data-p="ff" transform="translate(168 192) rotate(24)">
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(28.6 84 150)" : "rotate(48.43 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="67">
              <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            </g>
            <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="0">
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <g data-p="fn" transform="translate(186 194) rotate(24)">
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
          </g>
          <g data-p="haunch" opacity="1" transform="translate(0 1.44)">
            <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(-10 -5.42) rotate(-0.48 212 100)" : "translate(-10 -5.21) rotate(13 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="81">
            <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
            <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 174 82)" />
            <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 250 82)" />
            <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
            <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <g data-p="eyes" transform="translate(0 0)">
              <g data-p="open" opacity="1">
                <g data-p="blink" transform="translate(0 0) scale(1 1)">
                  <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                  <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                </g>
              </g>
            </g>
            <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
            <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="1" />
            <g data-p="mouth" opacity="0">
              <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" />
            </g>
          </g>
          <g data-p="ledge" opacity="0">
            <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
        </g>
      </svg>
      <span aria-hidden="true" className={"\x70up-bubble"} data-show="false">hm?</span>
    </div>
  </div>
  <a className={"\x62tn \x62tn-whatsapp \x74p-notes__ask"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I%20have%20a%20question%3A" rel="noopener noreferrer" target="_blank">Ask your own question</a>
</aside>
<div className={"\x74p-notes__board"}>
  <ul className={"\x74p-notes__list"}>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "0" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" aria-expanded="false" aria-controls="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc">
          <span className={"\x66ont-plush-text"}>Are your puppies vaccinated and health-checked?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" role="region" aria-labelledby="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.2deg", "--pin": "var(--color-sky-deep)", "--i": "1" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-45fb5252-c038-41c7-afae-c8478b8f4f76" aria-expanded="false" aria-controls="a-45fb5252-c038-41c7-afae-c8478b8f4f76">
          <span className={"\x66ont-plush-text"}>Can I meet a puppy before I decide?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-45fb5252-c038-41c7-afae-c8478b8f4f76" role="region" aria-labelledby="q-45fb5252-c038-41c7-afae-c8478b8f4f76" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-0.8deg", "--pin": "#d9a13c", "--i": "2" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9585fb34-9d0d-4ee3-a903-38442633135d" aria-expanded="false" aria-controls="a-9585fb34-9d0d-4ee3-a903-38442633135d">
          <span className={"\x66ont-plush-text"}>Can I take my puppy home the same day?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9585fb34-9d0d-4ee3-a903-38442633135d" role="region" aria-labelledby="q-9585fb34-9d0d-4ee3-a903-38442633135d" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Local puppies are available immediately, so you can take your puppy home the same day.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.8deg", "--pin": "#c45a6a", "--i": "3" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" aria-expanded="false" aria-controls="a-bd85389d-2116-4c4b-8500-0a5a82cae22c">
          <span className={"\x66ont-plush-text"}>Do you import puppies from abroad?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-bd85389d-2116-4c4b-8500-0a5a82cae22c" role="region" aria-labelledby="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.2deg", "--pin": "var(--color-toffee)", "--i": "4" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" aria-expanded="false" aria-controls="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e">
          <span className={"\x66ont-plush-text"}>How does an imported puppy travel to Dubai?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e" role="region" aria-labelledby="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "0.7deg", "--pin": "var(--color-sky-deep)", "--i": "5" } as unknown as CSSProperties} data-armed="true" data-revealed="true" data-unfolded="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + 1 + 11) % 11); }} type="button" id="q-18483536-4415-4cc9-8ef8-913421f9da89" aria-expanded="true" aria-controls="a-18483536-4415-4cc9-8ef8-913421f9da89">
          <span className={"\x66ont-plush-text"}>Will I see photos and health details first?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-18483536-4415-4cc9-8ef8-913421f9da89" role="region" aria-labelledby="q-18483536-4415-4cc9-8ef8-913421f9da89" className={"\x74p-note__answer"}>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.9deg", "--pin": "#d9a13c", "--i": "6" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + -1 + 11) % 11); }} type="button" id="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" aria-expanded="false" aria-controls="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123">
          <span className={"\x66ont-plush-text"}>Do you deliver?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" role="region" aria-labelledby="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.4deg", "--pin": "#c45a6a", "--i": "7" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" aria-expanded="false" aria-controls="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa">
          <span className={"\x66ont-plush-text"}>Which breeds do you usually have?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa" role="region" aria-labelledby="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "8" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-67b95211-ac7c-4582-a684-90fcd4e00812" aria-expanded="false" aria-controls="a-67b95211-ac7c-4582-a684-90fcd4e00812">
          <span className={"\x66ont-plush-text"}>Is there help after my puppy comes home?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-67b95211-ac7c-4582-a684-90fcd4e00812" role="region" aria-labelledby="q-67b95211-ac7c-4582-a684-90fcd4e00812" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</Fragment>}
{control0 === 2 && <Fragment key={2}>
<aside className={"\x74p-notes__side"} aria-label="Find a question">
  <label htmlFor="_R_4pbsnkivb_" className={"\x66ont-scrawl \x74p-notes__label"}>sniff out a question</label>
  <div className={"\x74p-notes__search"}>
    <svg viewBox="0 0 24 24" aria-hidden="true" className={"\x74p-notes__lens"}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
    <input id="_R_4pbsnkivb_" type="search" placeholder="delivery, Korea, vaccinated…" autoComplete="off" defaultValue="" />
  </div>
  <p className={"\x74p-notes__count"} aria-live="polite">9 notes on the board</p>
  <div className={"\x74p-notes__teddy"}>
    <span aria-hidden="true" className={"\x74p-notes__bubble \x66ont-plush"}>
      <span className={"\x74p-notes__q"}>?</span>
      <span className={"\x74p-notes__a"}>!</span>
    </span>
    <div className={"\x70up-buddy "} data-facing="right" data-live="">
      <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, reading the notes" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
        <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
          <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -1.62) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -2.6) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="62">
            <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="0">
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g data-p="ff" transform="translate(168 192) rotate(24)">
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(28.6 84 150)" : "rotate(47.94 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="67">
              <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            </g>
            <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="0">
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <g data-p="fn" transform="translate(186 194) rotate(24)">
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
          </g>
          <g data-p="haunch" opacity="1" transform="translate(0 1.44)">
            <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(-10 -5.42) rotate(-0.48 212 100)" : "translate(-10 -6.89) rotate(-9.73 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="81">
            <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
            <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 174 82)" />
            <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 250 82)" />
            <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
            <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <g data-p="eyes" transform="translate(0 0)">
              <g data-p="open" opacity="1">
                <g data-p="blink" transform="translate(0 0) scale(1 1)">
                  <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                  <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                </g>
              </g>
            </g>
            <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
            <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="1" />
            <g data-p="mouth" opacity="0">
              <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" />
            </g>
          </g>
          <g data-p="ledge" opacity="0">
            <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
        </g>
      </svg>
      <span aria-hidden="true" className={"\x70up-bubble"} data-show="false">hm?</span>
    </div>
  </div>
  <a className={"\x62tn \x62tn-whatsapp \x74p-notes__ask"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I%20have%20a%20question%3A" rel="noopener noreferrer" target="_blank">Ask your own question</a>
</aside>
<div className={"\x74p-notes__board"}>
  <ul className={"\x74p-notes__list"}>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "0" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" aria-expanded="false" aria-controls="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc">
          <span className={"\x66ont-plush-text"}>Are your puppies vaccinated and health-checked?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" role="region" aria-labelledby="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.2deg", "--pin": "var(--color-sky-deep)", "--i": "1" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-45fb5252-c038-41c7-afae-c8478b8f4f76" aria-expanded="false" aria-controls="a-45fb5252-c038-41c7-afae-c8478b8f4f76">
          <span className={"\x66ont-plush-text"}>Can I meet a puppy before I decide?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-45fb5252-c038-41c7-afae-c8478b8f4f76" role="region" aria-labelledby="q-45fb5252-c038-41c7-afae-c8478b8f4f76" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-0.8deg", "--pin": "#d9a13c", "--i": "2" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9585fb34-9d0d-4ee3-a903-38442633135d" aria-expanded="false" aria-controls="a-9585fb34-9d0d-4ee3-a903-38442633135d">
          <span className={"\x66ont-plush-text"}>Can I take my puppy home the same day?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9585fb34-9d0d-4ee3-a903-38442633135d" role="region" aria-labelledby="q-9585fb34-9d0d-4ee3-a903-38442633135d" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Local puppies are available immediately, so you can take your puppy home the same day.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.8deg", "--pin": "#c45a6a", "--i": "3" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" aria-expanded="false" aria-controls="a-bd85389d-2116-4c4b-8500-0a5a82cae22c">
          <span className={"\x66ont-plush-text"}>Do you import puppies from abroad?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-bd85389d-2116-4c4b-8500-0a5a82cae22c" role="region" aria-labelledby="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.2deg", "--pin": "var(--color-toffee)", "--i": "4" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" aria-expanded="false" aria-controls="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e">
          <span className={"\x66ont-plush-text"}>How does an imported puppy travel to Dubai?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e" role="region" aria-labelledby="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "0.7deg", "--pin": "var(--color-sky-deep)", "--i": "5" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + 1 + 11) % 11); }} type="button" id="q-18483536-4415-4cc9-8ef8-913421f9da89" aria-expanded="false" aria-controls="a-18483536-4415-4cc9-8ef8-913421f9da89">
          <span className={"\x66ont-plush-text"}>Will I see photos and health details first?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-18483536-4415-4cc9-8ef8-913421f9da89" role="region" aria-labelledby="q-18483536-4415-4cc9-8ef8-913421f9da89" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.9deg", "--pin": "#d9a13c", "--i": "6" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + -1 + 11) % 11); }} type="button" id="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" aria-expanded="false" aria-controls="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123">
          <span className={"\x66ont-plush-text"}>Do you deliver?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" role="region" aria-labelledby="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.4deg", "--pin": "#c45a6a", "--i": "7" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" aria-expanded="false" aria-controls="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa">
          <span className={"\x66ont-plush-text"}>Which breeds do you usually have?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa" role="region" aria-labelledby="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "8" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-67b95211-ac7c-4582-a684-90fcd4e00812" aria-expanded="false" aria-controls="a-67b95211-ac7c-4582-a684-90fcd4e00812">
          <span className={"\x66ont-plush-text"}>Is there help after my puppy comes home?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-67b95211-ac7c-4582-a684-90fcd4e00812" role="region" aria-labelledby="q-67b95211-ac7c-4582-a684-90fcd4e00812" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</Fragment>}
{control0 === 3 && <Fragment key={3}>
<aside className={"\x74p-notes__side"} aria-label="Find a question">
  <label htmlFor="_R_4pbsnkivb_" className={"\x66ont-scrawl \x74p-notes__label"}>sniff out a question</label>
  <div className={"\x74p-notes__search"}>
    <svg viewBox="0 0 24 24" aria-hidden="true" className={"\x74p-notes__lens"}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
    <input id="_R_4pbsnkivb_" type="search" placeholder="delivery, Korea, vaccinated…" autoComplete="off" defaultValue="" />
  </div>
  <p className={"\x74p-notes__count"} aria-live="polite">9 notes on the board</p>
  <div className={"\x74p-notes__teddy"}>
    <span aria-hidden="true" className={"\x74p-notes__bubble \x66ont-plush"}>
      <span className={"\x74p-notes__q"}>?</span>
      <span className={"\x74p-notes__a"}>!</span>
    </span>
    <div className={"\x70up-buddy "} data-facing="right" data-live="">
      <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, reading the notes" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
        <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
          <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -1.62) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -1.43) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="62">
            <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="0">
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g data-p="ff" transform="translate(168 192) rotate(24)">
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(28.6 84 150)" : "rotate(42.4 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="67">
              <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            </g>
            <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="0">
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <g data-p="fn" transform="translate(186 194) rotate(24)">
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
          </g>
          <g data-p="haunch" opacity="1" transform="translate(0 1.44)">
            <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(-10 -5.42) rotate(-0.48 212 100)" : "translate(-10 -5.14) rotate(-10 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="81">
            <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
            <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 174 82)" />
            <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 250 82)" />
            <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
            <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <g data-p="eyes" transform="translate(0 0)">
              <g data-p="open" opacity="1">
                <g data-p="blink" transform="translate(0 0) scale(1 1)">
                  <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                  <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                </g>
              </g>
            </g>
            <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
            <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="1" />
            <g data-p="mouth" opacity="0">
              <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" />
            </g>
          </g>
          <g data-p="ledge" opacity="0">
            <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
        </g>
      </svg>
      <span aria-hidden="true" className={"\x70up-bubble"} data-show="false">hm?</span>
    </div>
  </div>
  <a className={"\x62tn \x62tn-whatsapp \x74p-notes__ask"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I%20have%20a%20question%3A" rel="noopener noreferrer" target="_blank">Ask your own question</a>
</aside>
<div className={"\x74p-notes__board"}>
  <ul className={"\x74p-notes__list"}>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "0" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" aria-expanded="false" aria-controls="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc">
          <span className={"\x66ont-plush-text"}>Are your puppies vaccinated and health-checked?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" role="region" aria-labelledby="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.2deg", "--pin": "var(--color-sky-deep)", "--i": "1" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-45fb5252-c038-41c7-afae-c8478b8f4f76" aria-expanded="false" aria-controls="a-45fb5252-c038-41c7-afae-c8478b8f4f76">
          <span className={"\x66ont-plush-text"}>Can I meet a puppy before I decide?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-45fb5252-c038-41c7-afae-c8478b8f4f76" role="region" aria-labelledby="q-45fb5252-c038-41c7-afae-c8478b8f4f76" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-0.8deg", "--pin": "#d9a13c", "--i": "2" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9585fb34-9d0d-4ee3-a903-38442633135d" aria-expanded="false" aria-controls="a-9585fb34-9d0d-4ee3-a903-38442633135d">
          <span className={"\x66ont-plush-text"}>Can I take my puppy home the same day?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9585fb34-9d0d-4ee3-a903-38442633135d" role="region" aria-labelledby="q-9585fb34-9d0d-4ee3-a903-38442633135d" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Local puppies are available immediately, so you can take your puppy home the same day.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.8deg", "--pin": "#c45a6a", "--i": "3" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" aria-expanded="false" aria-controls="a-bd85389d-2116-4c4b-8500-0a5a82cae22c">
          <span className={"\x66ont-plush-text"}>Do you import puppies from abroad?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-bd85389d-2116-4c4b-8500-0a5a82cae22c" role="region" aria-labelledby="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.2deg", "--pin": "var(--color-toffee)", "--i": "4" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" aria-expanded="false" aria-controls="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e">
          <span className={"\x66ont-plush-text"}>How does an imported puppy travel to Dubai?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e" role="region" aria-labelledby="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "0.7deg", "--pin": "var(--color-sky-deep)", "--i": "5" } as unknown as CSSProperties} data-armed="true" data-revealed="true" data-unfolded="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + 1 + 11) % 11); }} type="button" id="q-18483536-4415-4cc9-8ef8-913421f9da89" aria-expanded="true" aria-controls="a-18483536-4415-4cc9-8ef8-913421f9da89">
          <span className={"\x66ont-plush-text"}>Will I see photos and health details first?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-18483536-4415-4cc9-8ef8-913421f9da89" role="region" aria-labelledby="q-18483536-4415-4cc9-8ef8-913421f9da89" className={"\x74p-note__answer"}>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.9deg", "--pin": "#d9a13c", "--i": "6" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + -1 + 11) % 11); }} type="button" id="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" aria-expanded="false" aria-controls="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123">
          <span className={"\x66ont-plush-text"}>Do you deliver?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" role="region" aria-labelledby="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.4deg", "--pin": "#c45a6a", "--i": "7" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" aria-expanded="false" aria-controls="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa">
          <span className={"\x66ont-plush-text"}>Which breeds do you usually have?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa" role="region" aria-labelledby="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "8" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-67b95211-ac7c-4582-a684-90fcd4e00812" aria-expanded="false" aria-controls="a-67b95211-ac7c-4582-a684-90fcd4e00812">
          <span className={"\x66ont-plush-text"}>Is there help after my puppy comes home?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-67b95211-ac7c-4582-a684-90fcd4e00812" role="region" aria-labelledby="q-67b95211-ac7c-4582-a684-90fcd4e00812" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</Fragment>}
{control0 === 4 && <Fragment key={4}>
<aside className={"\x74p-notes__side"} aria-label="Find a question">
  <label htmlFor="_R_4pbsnkivb_" className={"\x66ont-scrawl \x74p-notes__label"}>sniff out a question</label>
  <div className={"\x74p-notes__search"}>
    <svg viewBox="0 0 24 24" aria-hidden="true" className={"\x74p-notes__lens"}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
    <input id="_R_4pbsnkivb_" type="search" placeholder="delivery, Korea, vaccinated…" autoComplete="off" defaultValue="" />
  </div>
  <p className={"\x74p-notes__count"} aria-live="polite">9 notes on the board</p>
  <div className={"\x74p-notes__teddy"}>
    <span aria-hidden="true" className={"\x74p-notes__bubble \x66ont-plush"}>
      <span className={"\x74p-notes__q"}>?</span>
      <span className={"\x74p-notes__a"}>!</span>
    </span>
    <div className={"\x70up-buddy "} data-facing="right" data-live="">
      <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, reading the notes" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
        <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
          <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -1.62) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -2.47) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="62">
            <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="0">
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g data-p="ff" transform="translate(168 192) rotate(24)">
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(28.6 84 150)" : "rotate(16.44 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="67">
              <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            </g>
            <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="0">
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <g data-p="fn" transform="translate(186 194) rotate(24)">
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
          </g>
          <g data-p="haunch" opacity="1" transform="translate(0 1.44)">
            <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(-10 -5.42) rotate(-0.48 212 100)" : "translate(-10 -6.7) rotate(-0.07 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="81">
            <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
            <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 174 82)" />
            <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 250 82)" />
            <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
            <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <g data-p="eyes" transform="translate(0 0)">
              <g data-p="open" opacity="1">
                <g data-p="blink" transform="translate(0 0) scale(1 1)">
                  <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                  <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                </g>
              </g>
            </g>
            <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
            <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="1" />
            <g data-p="mouth" opacity="0">
              <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" />
            </g>
          </g>
          <g data-p="ledge" opacity="0">
            <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
        </g>
      </svg>
      <span aria-hidden="true" className={"\x70up-bubble"} data-show="false">hm?</span>
    </div>
  </div>
  <a className={"\x62tn \x62tn-whatsapp \x74p-notes__ask"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I%20have%20a%20question%3A" rel="noopener noreferrer" target="_blank">Ask your own question</a>
</aside>
<div className={"\x74p-notes__board"}>
  <ul className={"\x74p-notes__list"}>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "0" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" aria-expanded="false" aria-controls="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc">
          <span className={"\x66ont-plush-text"}>Are your puppies vaccinated and health-checked?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" role="region" aria-labelledby="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.2deg", "--pin": "var(--color-sky-deep)", "--i": "1" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-45fb5252-c038-41c7-afae-c8478b8f4f76" aria-expanded="false" aria-controls="a-45fb5252-c038-41c7-afae-c8478b8f4f76">
          <span className={"\x66ont-plush-text"}>Can I meet a puppy before I decide?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-45fb5252-c038-41c7-afae-c8478b8f4f76" role="region" aria-labelledby="q-45fb5252-c038-41c7-afae-c8478b8f4f76" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-0.8deg", "--pin": "#d9a13c", "--i": "2" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9585fb34-9d0d-4ee3-a903-38442633135d" aria-expanded="false" aria-controls="a-9585fb34-9d0d-4ee3-a903-38442633135d">
          <span className={"\x66ont-plush-text"}>Can I take my puppy home the same day?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9585fb34-9d0d-4ee3-a903-38442633135d" role="region" aria-labelledby="q-9585fb34-9d0d-4ee3-a903-38442633135d" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Local puppies are available immediately, so you can take your puppy home the same day.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.8deg", "--pin": "#c45a6a", "--i": "3" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" aria-expanded="false" aria-controls="a-bd85389d-2116-4c4b-8500-0a5a82cae22c">
          <span className={"\x66ont-plush-text"}>Do you import puppies from abroad?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-bd85389d-2116-4c4b-8500-0a5a82cae22c" role="region" aria-labelledby="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.2deg", "--pin": "var(--color-toffee)", "--i": "4" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" aria-expanded="false" aria-controls="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e">
          <span className={"\x66ont-plush-text"}>How does an imported puppy travel to Dubai?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e" role="region" aria-labelledby="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "0.7deg", "--pin": "var(--color-sky-deep)", "--i": "5" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + 1 + 11) % 11); }} type="button" id="q-18483536-4415-4cc9-8ef8-913421f9da89" aria-expanded="false" aria-controls="a-18483536-4415-4cc9-8ef8-913421f9da89">
          <span className={"\x66ont-plush-text"}>Will I see photos and health details first?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-18483536-4415-4cc9-8ef8-913421f9da89" role="region" aria-labelledby="q-18483536-4415-4cc9-8ef8-913421f9da89" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.9deg", "--pin": "#d9a13c", "--i": "6" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + -1 + 11) % 11); }} type="button" id="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" aria-expanded="false" aria-controls="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123">
          <span className={"\x66ont-plush-text"}>Do you deliver?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" role="region" aria-labelledby="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.4deg", "--pin": "#c45a6a", "--i": "7" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" aria-expanded="false" aria-controls="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa">
          <span className={"\x66ont-plush-text"}>Which breeds do you usually have?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa" role="region" aria-labelledby="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "8" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-67b95211-ac7c-4582-a684-90fcd4e00812" aria-expanded="false" aria-controls="a-67b95211-ac7c-4582-a684-90fcd4e00812">
          <span className={"\x66ont-plush-text"}>Is there help after my puppy comes home?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-67b95211-ac7c-4582-a684-90fcd4e00812" role="region" aria-labelledby="q-67b95211-ac7c-4582-a684-90fcd4e00812" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</Fragment>}
{control0 === 5 && <Fragment key={5}>
<aside className={"\x74p-notes__side"} aria-label="Find a question">
  <label htmlFor="_R_4pbsnkivb_" className={"\x66ont-scrawl \x74p-notes__label"}>sniff out a question</label>
  <div className={"\x74p-notes__search"}>
    <svg viewBox="0 0 24 24" aria-hidden="true" className={"\x74p-notes__lens"}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
    <input id="_R_4pbsnkivb_" type="search" placeholder="delivery, Korea, vaccinated…" autoComplete="off" defaultValue="" />
  </div>
  <p className={"\x74p-notes__count"} aria-live="polite">9 notes on the board</p>
  <div className={"\x74p-notes__teddy"}>
    <span aria-hidden="true" className={"\x74p-notes__bubble \x66ont-plush"}>
      <span className={"\x74p-notes__q"}>?</span>
      <span className={"\x74p-notes__a"}>!</span>
    </span>
    <div className={"\x70up-buddy "} data-facing="right" data-live="">
      <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, reading the notes" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
        <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
          <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -1.62) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -1.7) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="62">
            <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="0">
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g data-p="ff" transform="translate(168 192) rotate(24)">
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(28.6 84 150)" : "rotate(49.83 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="67">
              <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            </g>
            <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="0">
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <g data-p="fn" transform="translate(186 194) rotate(24)">
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
          </g>
          <g data-p="haunch" opacity="1" transform="translate(0 1.44)">
            <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(-10 -5.42) rotate(-0.48 212 100)" : "translate(-10 -5.56) rotate(0 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="81">
            <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
            <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 174 82)" />
            <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 250 82)" />
            <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
            <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <g data-p="eyes" transform="translate(0 0)">
              <g data-p="open" opacity="1">
                <g data-p="blink" transform="translate(0 0) scale(1 1)">
                  <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                  <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                </g>
              </g>
            </g>
            <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
            <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="1" />
            <g data-p="mouth" opacity="0">
              <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" />
            </g>
          </g>
          <g data-p="ledge" opacity="0">
            <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
        </g>
      </svg>
      <span aria-hidden="true" className={"\x70up-bubble"} data-show="false">hm?</span>
    </div>
  </div>
  <a className={"\x62tn \x62tn-whatsapp \x74p-notes__ask"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I%20have%20a%20question%3A" rel="noopener noreferrer" target="_blank">Ask your own question</a>
</aside>
<div className={"\x74p-notes__board"}>
  <ul className={"\x74p-notes__list"}>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "0" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" aria-expanded="false" aria-controls="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc">
          <span className={"\x66ont-plush-text"}>Are your puppies vaccinated and health-checked?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" role="region" aria-labelledby="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.2deg", "--pin": "var(--color-sky-deep)", "--i": "1" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-45fb5252-c038-41c7-afae-c8478b8f4f76" aria-expanded="false" aria-controls="a-45fb5252-c038-41c7-afae-c8478b8f4f76">
          <span className={"\x66ont-plush-text"}>Can I meet a puppy before I decide?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-45fb5252-c038-41c7-afae-c8478b8f4f76" role="region" aria-labelledby="q-45fb5252-c038-41c7-afae-c8478b8f4f76" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-0.8deg", "--pin": "#d9a13c", "--i": "2" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9585fb34-9d0d-4ee3-a903-38442633135d" aria-expanded="false" aria-controls="a-9585fb34-9d0d-4ee3-a903-38442633135d">
          <span className={"\x66ont-plush-text"}>Can I take my puppy home the same day?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9585fb34-9d0d-4ee3-a903-38442633135d" role="region" aria-labelledby="q-9585fb34-9d0d-4ee3-a903-38442633135d" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Local puppies are available immediately, so you can take your puppy home the same day.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.8deg", "--pin": "#c45a6a", "--i": "3" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" aria-expanded="false" aria-controls="a-bd85389d-2116-4c4b-8500-0a5a82cae22c">
          <span className={"\x66ont-plush-text"}>Do you import puppies from abroad?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-bd85389d-2116-4c4b-8500-0a5a82cae22c" role="region" aria-labelledby="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.2deg", "--pin": "var(--color-toffee)", "--i": "4" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" aria-expanded="false" aria-controls="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e">
          <span className={"\x66ont-plush-text"}>How does an imported puppy travel to Dubai?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e" role="region" aria-labelledby="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "0.7deg", "--pin": "var(--color-sky-deep)", "--i": "5" } as unknown as CSSProperties} data-armed="true" data-revealed="true" data-unfolded="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + 1 + 11) % 11); }} type="button" id="q-18483536-4415-4cc9-8ef8-913421f9da89" aria-expanded="true" aria-controls="a-18483536-4415-4cc9-8ef8-913421f9da89">
          <span className={"\x66ont-plush-text"}>Will I see photos and health details first?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-18483536-4415-4cc9-8ef8-913421f9da89" role="region" aria-labelledby="q-18483536-4415-4cc9-8ef8-913421f9da89" className={"\x74p-note__answer"}>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.9deg", "--pin": "#d9a13c", "--i": "6" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + -1 + 11) % 11); }} type="button" id="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" aria-expanded="false" aria-controls="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123">
          <span className={"\x66ont-plush-text"}>Do you deliver?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" role="region" aria-labelledby="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.4deg", "--pin": "#c45a6a", "--i": "7" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" aria-expanded="false" aria-controls="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa">
          <span className={"\x66ont-plush-text"}>Which breeds do you usually have?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa" role="region" aria-labelledby="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "8" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-67b95211-ac7c-4582-a684-90fcd4e00812" aria-expanded="false" aria-controls="a-67b95211-ac7c-4582-a684-90fcd4e00812">
          <span className={"\x66ont-plush-text"}>Is there help after my puppy comes home?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-67b95211-ac7c-4582-a684-90fcd4e00812" role="region" aria-labelledby="q-67b95211-ac7c-4582-a684-90fcd4e00812" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</Fragment>}
{control0 === 6 && <Fragment key={6}>
<aside className={"\x74p-notes__side"} aria-label="Find a question">
  <label htmlFor="_R_4pbsnkivb_" className={"\x66ont-scrawl \x74p-notes__label"}>sniff out a question</label>
  <div className={"\x74p-notes__search"}>
    <svg viewBox="0 0 24 24" aria-hidden="true" className={"\x74p-notes__lens"}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
    <input id="_R_4pbsnkivb_" type="search" placeholder="delivery, Korea, vaccinated…" autoComplete="off" defaultValue="" />
  </div>
  <p className={"\x74p-notes__count"} aria-live="polite">9 notes on the board</p>
  <div className={"\x74p-notes__teddy"}>
    <span aria-hidden="true" className={"\x74p-notes__bubble \x66ont-plush"}>
      <span className={"\x74p-notes__q"}>?</span>
      <span className={"\x74p-notes__a"}>!</span>
    </span>
    <div className={"\x70up-buddy "} data-facing="right" data-live="">
      <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, reading the notes" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
        <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
          <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -1.62) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -2.08) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="62">
            <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="0">
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g data-p="ff" transform="translate(168 192) rotate(24)">
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(28.6 84 150)" : "rotate(48.26 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="67">
              <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            </g>
            <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="0">
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <g data-p="fn" transform="translate(186 194) rotate(24)">
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
          </g>
          <g data-p="haunch" opacity="1" transform="translate(0 1.44)">
            <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(-10 -5.42) rotate(-0.48 212 100)" : "translate(-10 -6.12) rotate(1.81 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="81">
            <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
            <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 174 82)" />
            <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 250 82)" />
            <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
            <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <g data-p="eyes" transform="translate(0 0)">
              <g data-p="open" opacity="1">
                <g data-p="blink" transform="translate(0 0) scale(1 1)">
                  <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                  <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                </g>
              </g>
            </g>
            <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
            <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="1" />
            <g data-p="mouth" opacity="0">
              <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" />
            </g>
          </g>
          <g data-p="ledge" opacity="0">
            <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
        </g>
      </svg>
      <span aria-hidden="true" className={"\x70up-bubble"} data-show="false">hm?</span>
    </div>
  </div>
  <a className={"\x62tn \x62tn-whatsapp \x74p-notes__ask"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I%20have%20a%20question%3A" rel="noopener noreferrer" target="_blank">Ask your own question</a>
</aside>
<div className={"\x74p-notes__board"}>
  <ul className={"\x74p-notes__list"}>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "0" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" aria-expanded="false" aria-controls="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc">
          <span className={"\x66ont-plush-text"}>Are your puppies vaccinated and health-checked?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" role="region" aria-labelledby="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.2deg", "--pin": "var(--color-sky-deep)", "--i": "1" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-45fb5252-c038-41c7-afae-c8478b8f4f76" aria-expanded="false" aria-controls="a-45fb5252-c038-41c7-afae-c8478b8f4f76">
          <span className={"\x66ont-plush-text"}>Can I meet a puppy before I decide?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-45fb5252-c038-41c7-afae-c8478b8f4f76" role="region" aria-labelledby="q-45fb5252-c038-41c7-afae-c8478b8f4f76" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-0.8deg", "--pin": "#d9a13c", "--i": "2" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9585fb34-9d0d-4ee3-a903-38442633135d" aria-expanded="false" aria-controls="a-9585fb34-9d0d-4ee3-a903-38442633135d">
          <span className={"\x66ont-plush-text"}>Can I take my puppy home the same day?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9585fb34-9d0d-4ee3-a903-38442633135d" role="region" aria-labelledby="q-9585fb34-9d0d-4ee3-a903-38442633135d" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Local puppies are available immediately, so you can take your puppy home the same day.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.8deg", "--pin": "#c45a6a", "--i": "3" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" aria-expanded="false" aria-controls="a-bd85389d-2116-4c4b-8500-0a5a82cae22c">
          <span className={"\x66ont-plush-text"}>Do you import puppies from abroad?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-bd85389d-2116-4c4b-8500-0a5a82cae22c" role="region" aria-labelledby="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.2deg", "--pin": "var(--color-toffee)", "--i": "4" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" aria-expanded="false" aria-controls="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e">
          <span className={"\x66ont-plush-text"}>How does an imported puppy travel to Dubai?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e" role="region" aria-labelledby="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "0.7deg", "--pin": "var(--color-sky-deep)", "--i": "5" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + 1 + 11) % 11); }} type="button" id="q-18483536-4415-4cc9-8ef8-913421f9da89" aria-expanded="false" aria-controls="a-18483536-4415-4cc9-8ef8-913421f9da89">
          <span className={"\x66ont-plush-text"}>Will I see photos and health details first?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-18483536-4415-4cc9-8ef8-913421f9da89" role="region" aria-labelledby="q-18483536-4415-4cc9-8ef8-913421f9da89" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.9deg", "--pin": "#d9a13c", "--i": "6" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + -1 + 11) % 11); }} type="button" id="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" aria-expanded="false" aria-controls="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123">
          <span className={"\x66ont-plush-text"}>Do you deliver?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" role="region" aria-labelledby="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.4deg", "--pin": "#c45a6a", "--i": "7" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" aria-expanded="false" aria-controls="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa">
          <span className={"\x66ont-plush-text"}>Which breeds do you usually have?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa" role="region" aria-labelledby="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "8" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-67b95211-ac7c-4582-a684-90fcd4e00812" aria-expanded="false" aria-controls="a-67b95211-ac7c-4582-a684-90fcd4e00812">
          <span className={"\x66ont-plush-text"}>Is there help after my puppy comes home?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-67b95211-ac7c-4582-a684-90fcd4e00812" role="region" aria-labelledby="q-67b95211-ac7c-4582-a684-90fcd4e00812" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</Fragment>}
{control0 === 7 && <Fragment key={7}>
<aside className={"\x74p-notes__side"} aria-label="Find a question">
  <label htmlFor="_R_4pbsnkivb_" className={"\x66ont-scrawl \x74p-notes__label"}>sniff out a question</label>
  <div className={"\x74p-notes__search"}>
    <svg viewBox="0 0 24 24" aria-hidden="true" className={"\x74p-notes__lens"}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
    <input id="_R_4pbsnkivb_" type="search" placeholder="delivery, Korea, vaccinated…" autoComplete="off" defaultValue="" />
  </div>
  <p className={"\x74p-notes__count"} aria-live="polite">9 notes on the board</p>
  <div className={"\x74p-notes__teddy"}>
    <span aria-hidden="true" className={"\x74p-notes__bubble \x66ont-plush"}>
      <span className={"\x74p-notes__q"}>?</span>
      <span className={"\x74p-notes__a"}>!</span>
    </span>
    <div className={"\x70up-buddy "} data-facing="right" data-live="">
      <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, reading the notes" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
        <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
          <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -1.62) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -2.14) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="62">
            <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="0">
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g data-p="ff" transform="translate(168 192) rotate(24)">
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(28.6 84 150)" : "rotate(20.51 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="67">
              <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            </g>
            <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="0">
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <g data-p="fn" transform="translate(186 194) rotate(24)">
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
          </g>
          <g data-p="haunch" opacity="1" transform="translate(0 1.44)">
            <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(-10 -5.42) rotate(-0.48 212 100)" : "translate(-10 -6.22) rotate(-9.97 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="81">
            <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
            <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 174 82)" />
            <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 250 82)" />
            <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
            <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <g data-p="eyes" transform="translate(0 0)">
              <g data-p="open" opacity="1">
                <g data-p="blink" transform="translate(0 0) scale(1 1)">
                  <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                  <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                </g>
              </g>
            </g>
            <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
            <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="1" />
            <g data-p="mouth" opacity="0">
              <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" />
            </g>
          </g>
          <g data-p="ledge" opacity="0">
            <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
        </g>
      </svg>
      <span aria-hidden="true" className={"\x70up-bubble"} data-show="false">hm?</span>
    </div>
  </div>
  <a className={"\x62tn \x62tn-whatsapp \x74p-notes__ask"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I%20have%20a%20question%3A" rel="noopener noreferrer" target="_blank">Ask your own question</a>
</aside>
<div className={"\x74p-notes__board"}>
  <ul className={"\x74p-notes__list"}>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "0" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" aria-expanded="false" aria-controls="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc">
          <span className={"\x66ont-plush-text"}>Are your puppies vaccinated and health-checked?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" role="region" aria-labelledby="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.2deg", "--pin": "var(--color-sky-deep)", "--i": "1" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-45fb5252-c038-41c7-afae-c8478b8f4f76" aria-expanded="false" aria-controls="a-45fb5252-c038-41c7-afae-c8478b8f4f76">
          <span className={"\x66ont-plush-text"}>Can I meet a puppy before I decide?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-45fb5252-c038-41c7-afae-c8478b8f4f76" role="region" aria-labelledby="q-45fb5252-c038-41c7-afae-c8478b8f4f76" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-0.8deg", "--pin": "#d9a13c", "--i": "2" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9585fb34-9d0d-4ee3-a903-38442633135d" aria-expanded="false" aria-controls="a-9585fb34-9d0d-4ee3-a903-38442633135d">
          <span className={"\x66ont-plush-text"}>Can I take my puppy home the same day?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9585fb34-9d0d-4ee3-a903-38442633135d" role="region" aria-labelledby="q-9585fb34-9d0d-4ee3-a903-38442633135d" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Local puppies are available immediately, so you can take your puppy home the same day.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.8deg", "--pin": "#c45a6a", "--i": "3" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" aria-expanded="false" aria-controls="a-bd85389d-2116-4c4b-8500-0a5a82cae22c">
          <span className={"\x66ont-plush-text"}>Do you import puppies from abroad?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-bd85389d-2116-4c4b-8500-0a5a82cae22c" role="region" aria-labelledby="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.2deg", "--pin": "var(--color-toffee)", "--i": "4" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" aria-expanded="false" aria-controls="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e">
          <span className={"\x66ont-plush-text"}>How does an imported puppy travel to Dubai?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e" role="region" aria-labelledby="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "0.7deg", "--pin": "var(--color-sky-deep)", "--i": "5" } as unknown as CSSProperties} data-armed="true" data-revealed="true" data-unfolded="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + 1 + 11) % 11); }} type="button" id="q-18483536-4415-4cc9-8ef8-913421f9da89" aria-expanded="true" aria-controls="a-18483536-4415-4cc9-8ef8-913421f9da89">
          <span className={"\x66ont-plush-text"}>Will I see photos and health details first?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-18483536-4415-4cc9-8ef8-913421f9da89" role="region" aria-labelledby="q-18483536-4415-4cc9-8ef8-913421f9da89" className={"\x74p-note__answer"}>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.9deg", "--pin": "#d9a13c", "--i": "6" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + -1 + 11) % 11); }} type="button" id="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" aria-expanded="false" aria-controls="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123">
          <span className={"\x66ont-plush-text"}>Do you deliver?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" role="region" aria-labelledby="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.4deg", "--pin": "#c45a6a", "--i": "7" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" aria-expanded="false" aria-controls="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa">
          <span className={"\x66ont-plush-text"}>Which breeds do you usually have?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa" role="region" aria-labelledby="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "8" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-67b95211-ac7c-4582-a684-90fcd4e00812" aria-expanded="false" aria-controls="a-67b95211-ac7c-4582-a684-90fcd4e00812">
          <span className={"\x66ont-plush-text"}>Is there help after my puppy comes home?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-67b95211-ac7c-4582-a684-90fcd4e00812" role="region" aria-labelledby="q-67b95211-ac7c-4582-a684-90fcd4e00812" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</Fragment>}
{control0 === 8 && <Fragment key={8}>
<aside className={"\x74p-notes__side"} aria-label="Find a question">
  <label htmlFor="_R_4pbsnkivb_" className={"\x66ont-scrawl \x74p-notes__label"}>sniff out a question</label>
  <div className={"\x74p-notes__search"}>
    <svg viewBox="0 0 24 24" aria-hidden="true" className={"\x74p-notes__lens"}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
    <input id="_R_4pbsnkivb_" type="search" placeholder="delivery, Korea, vaccinated…" autoComplete="off" defaultValue="" />
  </div>
  <p className={"\x74p-notes__count"} aria-live="polite">9 notes on the board</p>
  <div className={"\x74p-notes__teddy"}>
    <span aria-hidden="true" className={"\x74p-notes__bubble \x66ont-plush"}>
      <span className={"\x74p-notes__q"}>?</span>
      <span className={"\x74p-notes__a"}>!</span>
    </span>
    <div className={"\x70up-buddy "} data-facing="right" data-live="">
      <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, reading the notes" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
        <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
          <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -1.62) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -1.63) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="62">
            <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="0">
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g data-p="ff" transform="translate(168 192) rotate(24)">
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(28.6 84 150)" : "rotate(19.69 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="67">
              <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            </g>
            <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="0">
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <g data-p="fn" transform="translate(186 194) rotate(24)">
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
          </g>
          <g data-p="haunch" opacity="1" transform="translate(0 1.44)">
            <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(-10 -5.42) rotate(-0.48 212 100)" : "translate(-10 -5.45) rotate(-10 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="81">
            <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
            <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 174 82)" />
            <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 250 82)" />
            <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
            <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <g data-p="eyes" transform="translate(0 0)">
              <g data-p="open" opacity="1">
                <g data-p="blink" transform="translate(0 0) scale(1 1)">
                  <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                  <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                </g>
              </g>
            </g>
            <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
            <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="1" />
            <g data-p="mouth" opacity="0">
              <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" />
            </g>
          </g>
          <g data-p="ledge" opacity="0">
            <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
        </g>
      </svg>
      <span aria-hidden="true" className={"\x70up-bubble"} data-show="false">hm?</span>
    </div>
  </div>
  <a className={"\x62tn \x62tn-whatsapp \x74p-notes__ask"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I%20have%20a%20question%3A" rel="noopener noreferrer" target="_blank">Ask your own question</a>
</aside>
<div className={"\x74p-notes__board"}>
  <ul className={"\x74p-notes__list"}>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "0" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" aria-expanded="false" aria-controls="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc">
          <span className={"\x66ont-plush-text"}>Are your puppies vaccinated and health-checked?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" role="region" aria-labelledby="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.2deg", "--pin": "var(--color-sky-deep)", "--i": "1" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-45fb5252-c038-41c7-afae-c8478b8f4f76" aria-expanded="false" aria-controls="a-45fb5252-c038-41c7-afae-c8478b8f4f76">
          <span className={"\x66ont-plush-text"}>Can I meet a puppy before I decide?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-45fb5252-c038-41c7-afae-c8478b8f4f76" role="region" aria-labelledby="q-45fb5252-c038-41c7-afae-c8478b8f4f76" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-0.8deg", "--pin": "#d9a13c", "--i": "2" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9585fb34-9d0d-4ee3-a903-38442633135d" aria-expanded="false" aria-controls="a-9585fb34-9d0d-4ee3-a903-38442633135d">
          <span className={"\x66ont-plush-text"}>Can I take my puppy home the same day?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9585fb34-9d0d-4ee3-a903-38442633135d" role="region" aria-labelledby="q-9585fb34-9d0d-4ee3-a903-38442633135d" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Local puppies are available immediately, so you can take your puppy home the same day.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.8deg", "--pin": "#c45a6a", "--i": "3" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" aria-expanded="false" aria-controls="a-bd85389d-2116-4c4b-8500-0a5a82cae22c">
          <span className={"\x66ont-plush-text"}>Do you import puppies from abroad?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-bd85389d-2116-4c4b-8500-0a5a82cae22c" role="region" aria-labelledby="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.2deg", "--pin": "var(--color-toffee)", "--i": "4" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" aria-expanded="false" aria-controls="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e">
          <span className={"\x66ont-plush-text"}>How does an imported puppy travel to Dubai?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e" role="region" aria-labelledby="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "0.7deg", "--pin": "var(--color-sky-deep)", "--i": "5" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + 1 + 11) % 11); }} type="button" id="q-18483536-4415-4cc9-8ef8-913421f9da89" aria-expanded="false" aria-controls="a-18483536-4415-4cc9-8ef8-913421f9da89">
          <span className={"\x66ont-plush-text"}>Will I see photos and health details first?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-18483536-4415-4cc9-8ef8-913421f9da89" role="region" aria-labelledby="q-18483536-4415-4cc9-8ef8-913421f9da89" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.9deg", "--pin": "#d9a13c", "--i": "6" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + -1 + 11) % 11); }} type="button" id="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" aria-expanded="false" aria-controls="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123">
          <span className={"\x66ont-plush-text"}>Do you deliver?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" role="region" aria-labelledby="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.4deg", "--pin": "#c45a6a", "--i": "7" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" aria-expanded="false" aria-controls="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa">
          <span className={"\x66ont-plush-text"}>Which breeds do you usually have?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa" role="region" aria-labelledby="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "8" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-67b95211-ac7c-4582-a684-90fcd4e00812" aria-expanded="false" aria-controls="a-67b95211-ac7c-4582-a684-90fcd4e00812">
          <span className={"\x66ont-plush-text"}>Is there help after my puppy comes home?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-67b95211-ac7c-4582-a684-90fcd4e00812" role="region" aria-labelledby="q-67b95211-ac7c-4582-a684-90fcd4e00812" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</Fragment>}
{control0 === 9 && <Fragment key={9}>
<aside className={"\x74p-notes__side"} aria-label="Find a question">
  <label htmlFor="_R_4pbsnkivb_" className={"\x66ont-scrawl \x74p-notes__label"}>sniff out a question</label>
  <div className={"\x74p-notes__search"}>
    <svg viewBox="0 0 24 24" aria-hidden="true" className={"\x74p-notes__lens"}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
    <input id="_R_4pbsnkivb_" type="search" placeholder="delivery, Korea, vaccinated…" autoComplete="off" defaultValue="" />
  </div>
  <p className={"\x74p-notes__count"} aria-live="polite">9 notes on the board</p>
  <div className={"\x74p-notes__teddy"}>
    <span aria-hidden="true" className={"\x74p-notes__bubble \x66ont-plush"}>
      <span className={"\x74p-notes__q"}>?</span>
      <span className={"\x74p-notes__a"}>!</span>
    </span>
    <div className={"\x70up-buddy "} data-facing="right" data-live="">
      <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, reading the notes" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
        <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
          <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -1.62) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -2.52) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="62">
            <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="0">
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g data-p="ff" transform="translate(168 192) rotate(24)">
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(28.6 84 150)" : "rotate(18.83 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="67">
              <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            </g>
            <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="0">
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <g data-p="fn" transform="translate(186 194) rotate(24)">
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
          </g>
          <g data-p="haunch" opacity="1" transform="translate(0 1.44)">
            <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(-10 -5.42) rotate(-0.48 212 100)" : "translate(-10 -6.78) rotate(12.11 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="81">
            <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
            <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 174 82)" />
            <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 250 82)" />
            <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
            <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <g data-p="eyes" transform="translate(0 0)">
              <g data-p="open" opacity="1">
                <g data-p="blink" transform="translate(0 0) scale(1 1)">
                  <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                  <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                </g>
              </g>
            </g>
            <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
            <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="1" />
            <g data-p="mouth" opacity="0">
              <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" />
            </g>
          </g>
          <g data-p="ledge" opacity="0">
            <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
        </g>
      </svg>
      <span aria-hidden="true" className={"\x70up-bubble"} data-show="false">hm?</span>
    </div>
  </div>
  <a className={"\x62tn \x62tn-whatsapp \x74p-notes__ask"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I%20have%20a%20question%3A" rel="noopener noreferrer" target="_blank">Ask your own question</a>
</aside>
<div className={"\x74p-notes__board"}>
  <ul className={"\x74p-notes__list"}>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "0" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" aria-expanded="false" aria-controls="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc">
          <span className={"\x66ont-plush-text"}>Are your puppies vaccinated and health-checked?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" role="region" aria-labelledby="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.2deg", "--pin": "var(--color-sky-deep)", "--i": "1" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-45fb5252-c038-41c7-afae-c8478b8f4f76" aria-expanded="false" aria-controls="a-45fb5252-c038-41c7-afae-c8478b8f4f76">
          <span className={"\x66ont-plush-text"}>Can I meet a puppy before I decide?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-45fb5252-c038-41c7-afae-c8478b8f4f76" role="region" aria-labelledby="q-45fb5252-c038-41c7-afae-c8478b8f4f76" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-0.8deg", "--pin": "#d9a13c", "--i": "2" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9585fb34-9d0d-4ee3-a903-38442633135d" aria-expanded="false" aria-controls="a-9585fb34-9d0d-4ee3-a903-38442633135d">
          <span className={"\x66ont-plush-text"}>Can I take my puppy home the same day?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9585fb34-9d0d-4ee3-a903-38442633135d" role="region" aria-labelledby="q-9585fb34-9d0d-4ee3-a903-38442633135d" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Local puppies are available immediately, so you can take your puppy home the same day.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.8deg", "--pin": "#c45a6a", "--i": "3" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" aria-expanded="false" aria-controls="a-bd85389d-2116-4c4b-8500-0a5a82cae22c">
          <span className={"\x66ont-plush-text"}>Do you import puppies from abroad?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-bd85389d-2116-4c4b-8500-0a5a82cae22c" role="region" aria-labelledby="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.2deg", "--pin": "var(--color-toffee)", "--i": "4" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" aria-expanded="false" aria-controls="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e">
          <span className={"\x66ont-plush-text"}>How does an imported puppy travel to Dubai?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e" role="region" aria-labelledby="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "0.7deg", "--pin": "var(--color-sky-deep)", "--i": "5" } as unknown as CSSProperties} data-armed="true" data-revealed="true" data-unfolded="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + 1 + 11) % 11); }} type="button" id="q-18483536-4415-4cc9-8ef8-913421f9da89" aria-expanded="true" aria-controls="a-18483536-4415-4cc9-8ef8-913421f9da89">
          <span className={"\x66ont-plush-text"}>Will I see photos and health details first?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-18483536-4415-4cc9-8ef8-913421f9da89" role="region" aria-labelledby="q-18483536-4415-4cc9-8ef8-913421f9da89" className={"\x74p-note__answer"}>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.9deg", "--pin": "#d9a13c", "--i": "6" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + -1 + 11) % 11); }} type="button" id="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" aria-expanded="false" aria-controls="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123">
          <span className={"\x66ont-plush-text"}>Do you deliver?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" role="region" aria-labelledby="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.4deg", "--pin": "#c45a6a", "--i": "7" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" aria-expanded="false" aria-controls="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa">
          <span className={"\x66ont-plush-text"}>Which breeds do you usually have?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa" role="region" aria-labelledby="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "8" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-67b95211-ac7c-4582-a684-90fcd4e00812" aria-expanded="false" aria-controls="a-67b95211-ac7c-4582-a684-90fcd4e00812">
          <span className={"\x66ont-plush-text"}>Is there help after my puppy comes home?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-67b95211-ac7c-4582-a684-90fcd4e00812" role="region" aria-labelledby="q-67b95211-ac7c-4582-a684-90fcd4e00812" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</Fragment>}
{control0 === 10 && <Fragment key={10}>
<aside className={"\x74p-notes__side"} aria-label="Find a question">
  <label htmlFor="_R_4pbsnkivb_" className={"\x66ont-scrawl \x74p-notes__label"}>sniff out a question</label>
  <div className={"\x74p-notes__search"}>
    <svg viewBox="0 0 24 24" aria-hidden="true" className={"\x74p-notes__lens"}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
    <input id="_R_4pbsnkivb_" type="search" placeholder="delivery, Korea, vaccinated…" autoComplete="off" defaultValue="" />
  </div>
  <p className={"\x74p-notes__count"} aria-live="polite">9 notes on the board</p>
  <div className={"\x74p-notes__teddy"}>
    <span aria-hidden="true" className={"\x74p-notes__bubble \x66ont-plush"}>
      <span className={"\x74p-notes__q"}>?</span>
      <span className={"\x74p-notes__a"}>!</span>
    </span>
    <div className={"\x70up-buddy "} data-facing="right" data-live="">
      <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, reading the notes" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
        <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
          <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -1.62) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -1.41) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="62">
            <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="0">
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
              <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g data-p="ff" transform="translate(168 192) rotate(24)">
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
              <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(28.6 84 150)" : "rotate(40.7 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="67">
              <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            </g>
            <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="0">
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
              <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
            <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <g data-p="fn" transform="translate(186 194) rotate(24)">
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
              <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            </g>
          </g>
          <g data-p="haunch" opacity="1" transform="translate(0 1.44)">
            <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
          <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(-10 -5.42) rotate(-0.48 212 100)" : "translate(-10 -5.11) rotate(13 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="81">
            <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
            <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 174 82)" />
            <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(0 250 82)" />
            <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
            <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <g data-p="eyes" transform="translate(0 0)">
              <g data-p="open" opacity="1">
                <g data-p="blink" transform="translate(0 0) scale(1 1)">
                  <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                  <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                  <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                  <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                </g>
              </g>
            </g>
            <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
            <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
            <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
            <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="1" />
            <g data-p="mouth" opacity="0">
              <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" />
            </g>
          </g>
          <g data-p="ledge" opacity="0">
            <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
          </g>
        </g>
      </svg>
      <span aria-hidden="true" className={"\x70up-bubble"} data-show="false">hm?</span>
    </div>
  </div>
  <a className={"\x62tn \x62tn-whatsapp \x74p-notes__ask"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I%20have%20a%20question%3A" rel="noopener noreferrer" target="_blank">Ask your own question</a>
</aside>
<div className={"\x74p-notes__board"}>
  <ul className={"\x74p-notes__list"}>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "0" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" aria-expanded="false" aria-controls="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc">
          <span className={"\x66ont-plush-text"}>Are your puppies vaccinated and health-checked?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" role="region" aria-labelledby="q-2bcfc70e-8c06-475d-aa8a-2b64932d30cc" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.2deg", "--pin": "var(--color-sky-deep)", "--i": "1" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-45fb5252-c038-41c7-afae-c8478b8f4f76" aria-expanded="false" aria-controls="a-45fb5252-c038-41c7-afae-c8478b8f4f76">
          <span className={"\x66ont-plush-text"}>Can I meet a puppy before I decide?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-45fb5252-c038-41c7-afae-c8478b8f4f76" role="region" aria-labelledby="q-45fb5252-c038-41c7-afae-c8478b8f4f76" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-0.8deg", "--pin": "#d9a13c", "--i": "2" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9585fb34-9d0d-4ee3-a903-38442633135d" aria-expanded="false" aria-controls="a-9585fb34-9d0d-4ee3-a903-38442633135d">
          <span className={"\x66ont-plush-text"}>Can I take my puppy home the same day?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9585fb34-9d0d-4ee3-a903-38442633135d" role="region" aria-labelledby="q-9585fb34-9d0d-4ee3-a903-38442633135d" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Local puppies are available immediately, so you can take your puppy home the same day.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.8deg", "--pin": "#c45a6a", "--i": "3" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" aria-expanded="false" aria-controls="a-bd85389d-2116-4c4b-8500-0a5a82cae22c">
          <span className={"\x66ont-plush-text"}>Do you import puppies from abroad?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-bd85389d-2116-4c4b-8500-0a5a82cae22c" role="region" aria-labelledby="q-bd85389d-2116-4c4b-8500-0a5a82cae22c" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.2deg", "--pin": "var(--color-toffee)", "--i": "4" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" aria-expanded="false" aria-controls="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e">
          <span className={"\x66ont-plush-text"}>How does an imported puppy travel to Dubai?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-9c865c5e-bd1e-4bd3-9c09-cf193923123e" role="region" aria-labelledby="q-9c865c5e-bd1e-4bd3-9c09-cf193923123e" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "0.7deg", "--pin": "var(--color-sky-deep)", "--i": "5" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + 1 + 11) % 11); }} type="button" id="q-18483536-4415-4cc9-8ef8-913421f9da89" aria-expanded="false" aria-controls="a-18483536-4415-4cc9-8ef8-913421f9da89">
          <span className={"\x66ont-plush-text"}>Will I see photos and health details first?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-18483536-4415-4cc9-8ef8-913421f9da89" role="region" aria-labelledby="q-18483536-4415-4cc9-8ef8-913421f9da89" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.9deg", "--pin": "#d9a13c", "--i": "6" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button onClick={event => { event.preventDefault(); event.stopPropagation(); setControl0(index => (index + -1 + 11) % 11); }} type="button" id="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" aria-expanded="false" aria-controls="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123">
          <span className={"\x66ont-plush-text"}>Do you deliver?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" role="region" aria-labelledby="q-653f64ec-6e3a-4e3a-b4ab-8862b96fd123" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "1.4deg", "--pin": "#c45a6a", "--i": "7" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" aria-expanded="false" aria-controls="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa">
          <span className={"\x66ont-plush-text"}>Which breeds do you usually have?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-c7990450-8c87-47f5-9ebe-1490c7f47ffa" role="region" aria-labelledby="q-c7990450-8c87-47f5-9ebe-1490c7f47ffa" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.</p>
        </div>
      </div>
    </li>
    <li className={"\x74p-note"} data-reveal="true" style={{ "--tilt": "-1.6deg", "--pin": "var(--color-toffee)", "--i": "8" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
      <span aria-hidden="true" className={"\x74p-note__pin"} />
      <h2 className={"\x74p-note__q"}>
        <button type="button" id="q-67b95211-ac7c-4582-a684-90fcd4e00812" aria-expanded="false" aria-controls="a-67b95211-ac7c-4582-a684-90fcd4e00812">
          <span className={"\x66ont-plush-text"}>Is there help after my puppy comes home?</span>
          <span aria-hidden="true" className={"\x74p-note__chevron"} />
        </button>
      </h2>
      <div id="a-67b95211-ac7c-4582-a684-90fcd4e00812" role="region" aria-labelledby="q-67b95211-ac7c-4582-a684-90fcd4e00812" className={"\x74p-note__answer"} inert>
        <div className={"\x74p-note__flap"}>
          <p>Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</Fragment>}
</>);
  return (<><style>{capturedCSS.replace(/(<\/|<)(s)(tyle)/gi, (_, prefix, letter, rest) => prefix + (letter === "s" ? "\\73 " : "\\53 ") + rest)}</style>
    <>
      <div hidden>
        {/* $ */}
        {/* /$ */}
      </div>
      {/* & */}
      <div className={"\x74p-curtain"} data-state="idle" aria-hidden="true">
        <div className={"\x74p-curtain__blanket"}>
          <svg className={"\x74p-curtain__edge \x74p-curtain__edge--top"} preserveAspectRatio="none" {...({ width: "100%", height: "40" } as any)}>
            <defs>
              <pattern id="tp-curtain-scallop" patternUnits="userSpaceOnUse" {...({ width: "76", height: "40" } as any)}>
                <path d="M0 40V27A38 25 0 0 1 76 27V40Z" fill="#fbe3b4" />
                <path d="M0 27A38 25 0 0 1 76 27" fill="none" stroke="#2a170e" strokeWidth="3" />
                <path d="M11 33A27 19 0 0 1 65 33" fill="none" stroke="#2a170e" strokeWidth="1.6" strokeDasharray="3.5 5.5" strokeLinecap="round" opacity=".42" />
              </pattern>
            </defs>
            <rect fill="url(#tp-curtain-scallop)" {...({ width: "100%", height: "40" } as any)} />
          </svg>
          <div className={"\x74p-curtain__stage"}>
            <div className={"\x74p-curtain__prints"}>
              <svg viewBox="0 0 64 64" className={"\x74p-curtain__print"} style={{ left: "18%", top: "6px", rotate: "14deg", animationDelay: "0.16s" } as unknown as CSSProperties}>
                <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
              </svg>
              <svg viewBox="0 0 64 64" className={"\x74p-curtain__print"} style={{ left: "27%", top: "-4px", rotate: "6deg", animationDelay: "0.28s" } as unknown as CSSProperties}>
                <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
              </svg>
              <svg viewBox="0 0 64 64" className={"\x74p-curtain__print"} style={{ left: "36%", top: "7px", rotate: "18deg", animationDelay: "0.4s" } as unknown as CSSProperties}>
                <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
              </svg>
              <svg viewBox="0 0 64 64" className={"\x74p-curtain__print"} style={{ left: "45%", top: "-3px", rotate: "4deg", animationDelay: "0.52s" } as unknown as CSSProperties}>
                <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
              </svg>
              <svg viewBox="0 0 64 64" className={"\x74p-curtain__print"} style={{ left: "54%", top: "6px", rotate: "16deg", animationDelay: "0.64s" } as unknown as CSSProperties}>
                <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
              </svg>
            </div>
            <div className={"\x74p-curtain__runner"}>
              <svg viewBox="0 0 300 240" className={"\x74p-runner "} aria-hidden="true" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
                <ellipse cx="150" cy="230" rx="86" ry="7" fill="#2a170e" opacity="0.12" className={"\x74p-runner__shadow"} />
                <g className={"\x74p-runner__body"}>
                  <g className={"\x74p-runner__leg \x74p-runner__leg--bf"} style={{ transformOrigin: "94px 192px" } as unknown as CSSProperties}>
                    <g transform="translate(94 192)">
                      <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
                      <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    </g>
                  </g>
                  <g className={"\x74p-runner__leg \x74p-runner__leg--ff"} style={{ transformOrigin: "168px 192px" } as unknown as CSSProperties}>
                    <g transform="translate(168 192)">
                      <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
                      <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    </g>
                  </g>
                  <g className={"\x74p-runner__tail"} style={{ transformOrigin: "84px 150px" } as unknown as CSSProperties}>
                    <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                  </g>
                  <g className={"\x74p-runner__leg \x74p-runner__leg--bn"} style={{ transformOrigin: "110px 194px" } as unknown as CSSProperties}>
                    <g transform="translate(110 194)">
                      <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
                      <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    </g>
                  </g>
                  <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                  <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                  <g className={"\x74p-runner__leg \x74p-runner__leg--fn"} style={{ transformOrigin: "186px 194px" } as unknown as CSSProperties}>
                    <g transform="translate(186 194)">
                      <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
                      <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    </g>
                  </g>
                  <g className={"\x74p-runner__head"}>
                    <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" className={"\x74p-runner__ear"} style={{ transformOrigin: "174px 82px" } as unknown as CSSProperties} />
                    <path d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" className={"\x74p-runner__ear \x74p-runner__ear--r"} style={{ transformOrigin: "250px 82px" } as unknown as CSSProperties} />
                    <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
                    <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                    <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                    <path d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
                    <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                    <path d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" />
                  </g>
                </g>
              </svg>
            </div>
            <p className={"\x74p-curtain__note \x66ont-scrawl"}>every puppy is family</p>
          </div>
          <svg className={"\x74p-curtain__edge \x74p-curtain__edge--bottom"} preserveAspectRatio="none" {...({ width: "100%", height: "40" } as any)}>
            <rect fill="url(#tp-curtain-scallop)" {...({ width: "100%", height: "40" } as any)} />
          </svg>
        </div>
      </div>
      <a className={"\x73r-only-focusable \x66ixed \x6ceft-4 \x74op-4 \x7a-[\x3100] \x72ounded-full \x62g-cocoa \x70x-5 \x70y-3 \x66ont-semibold \x74ext-milk"} href="#main">Skip to content</a>
      <header id="site-header" data-scrolled="false" data-hidden="false" className={"\x74p-header \x66ixed \x69nset-x-0 \x74op-0 \x7a-50"}>
        <div className={"\x74p-header__bar \x67utter"}>
          <a aria-label="TeddyPups U.A.E. — home" className={"\x74p-header__brand"} href="/">
            <img alt="" width="56" height="56" className={"\x74p-header__logo"} style={{ color: "transparent" } as unknown as CSSProperties} srcSet="/site-assets/d1d4fb136d39dd7c.webp 1x, /site-assets/8bc7e0140e0212bc.webp 2x" src="/site-assets/8bc7e0140e0212bc.webp" {...({ decoding: "async" } as any)} />
            <span className={"\x66ont-plush \x74p-header__name"}>TeddyPups</span>
          </a>
          <nav aria-label="Main" className={"\x74p-header__nav"}>
            <ul>
              <li>
                <a className={"\x74p-nav-link"} data-active="false" href="/">
                  <span>Home</span>
                  <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                    <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a className={"\x74p-nav-link"} data-active="false" href="/puppies">
                  <span>Puppies</span>
                  <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                    <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a className={"\x74p-nav-link"} data-active="false" href="/happy-families">
                  <span>Happy families</span>
                  <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                    <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a className={"\x74p-nav-link"} data-active="false" href="/how-it-works">
                  <span>How it works</span>
                  <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                    <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a aria-current="page" className={"\x74p-nav-link"} data-active="true" href="#">
                  <span>FAQ</span>
                  <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                    <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a className={"\x74p-nav-link"} data-active="false" href="/contact">
                  <span>Visit &amp; contact</span>
                  <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                    <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <div className={"\x74p-header__end"}>
            <a className={"\x62tn \x62tn-whatsapp \x74p-header__wa"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies." rel="noopener noreferrer" target="_blank">WhatsApp us</a>
            <button type="button" className={"\x69nline-flex \x68-10 \x69tems-center \x67ap-2 \x72ounded-full \x62order-2 \x62order-cocoa \x62g-milk \x70x-4 \x74ext-[\x30.\x395rem] \x66ont-semibold \x6cg:\x68idden"} aria-haspopup="dialog"><svg viewBox="0 0 64 64" className={"\x73ize-4"} aria-hidden="true" fill="currentColor"><path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" /></svg>Menu</button>
            <dialog aria-label="Site menu" className={"\x74p-menu \x6d-0 \x68-dvh \x6dax-h-none \x77-screen \x6dax-w-none \x62g-honey \x70-0 \x74ext-cocoa \x62ackdrop:\x62g-cocoa/\x340"}>
              <div className={"\x66lex \x68-full \x66lex-col \x67utter \x70b-[\x63alc(\x31.\x35rem+\x65nv(\x73afe-area-inset-bottom))] \x70t-5"}>
                <div className={"\x66lex \x69tems-center \x6austify-between"}>
                  <span className={"\x66ont-scrawl \x74ext-lg"}>where to, friend?</span>
                  <button type="button" className={"\x68-11 \x72ounded-full \x62g-cocoa \x70x-5 \x66ont-semibold \x74ext-milk"}>Close</button>
                </div>
                <nav aria-label="Mobile" className={"\x6dt-10 \x66lex-1"}>
                  <ul className={"\x73pace-y-1"}>
                    <li>
                      <a className={"\x74p-menu-link \x66ont-plush \x62lock \x70y-2 \x74ext-[\x63lamp(\x32.\x34rem,\x311vw,\x33.\x34rem)]"} data-active="false" href="/">
                        <span>Home</span>
                        <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className={"\x74p-menu-link \x66ont-plush \x62lock \x70y-2 \x74ext-[\x63lamp(\x32.\x34rem,\x311vw,\x33.\x34rem)]"} data-active="false" href="/puppies">
                        <span>Puppies</span>
                        <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className={"\x74p-menu-link \x66ont-plush \x62lock \x70y-2 \x74ext-[\x63lamp(\x32.\x34rem,\x311vw,\x33.\x34rem)]"} data-active="false" href="/happy-families">
                        <span>Happy families</span>
                        <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className={"\x74p-menu-link \x66ont-plush \x62lock \x70y-2 \x74ext-[\x63lamp(\x32.\x34rem,\x311vw,\x33.\x34rem)]"} data-active="false" href="/how-it-works">
                        <span>How it works</span>
                        <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a aria-current="page" className={"\x74p-menu-link \x66ont-plush \x62lock \x70y-2 \x74ext-[\x63lamp(\x32.\x34rem,\x311vw,\x33.\x34rem)]"} data-active="true" href="#">
                        <span>FAQ</span>
                        <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className={"\x74p-menu-link \x66ont-plush \x62lock \x70y-2 \x74ext-[\x63lamp(\x32.\x34rem,\x311vw,\x33.\x34rem)]"} data-active="false" href="/contact">
                        <span>Visit &amp; contact</span>
                        <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className={"\x73pace-y-3"}>
                  <a className={"\x62tn \x62tn-whatsapp \x77-full"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies." rel="noopener noreferrer" target="_blank">WhatsApp us</a>
                  <p className={"\x74ext-center \x74ext-sm \x66ont-medium"}>+971 54 167 6733</p>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <svg aria-hidden="true" className={"\x74p-header__hem"} preserveAspectRatio="none" {...({ width: "100%", height: "14" } as any)}>
          <defs>
            <pattern id="tp-hem" patternUnits="userSpaceOnUse" {...({ width: "44", height: "14" } as any)}>
              <path d="M0 0H44V2A22 11 0 0 1 0 2Z" className={"\x74p-header__hem-fill"} />
              <path d="M0 2A22 11 0 0 0 44 2" className={"\x74p-header__hem-line"} />
            </pattern>
          </defs>
          <rect fill="url(#tp-hem)" {...({ width: "100%", height: "14" } as any)} />
        </svg>
      </header>
      <main id="main" tabIndex={-1} className={"\x72elative \x70t-[\x76ar(\x2d-header-h)] \x6futline-none"}>
        {/* & */}
        {/* & */}
        <div className={"\x74p-page"}>
          <section data-tone="dark" className={"\x74p-scene \x74p-faqroom \x6fverflow-hidden"} style={{ "--sky-top": "#a95e32", "--sky-bottom": "#331c11" } as unknown as CSSProperties} aria-labelledby="faq-title">
            <div className={"\x67utter \x72elative \x6dx-auto \x6dax-w-[\x3110rem] \x70b-24 \x70t-10 \x6dd:\x70t-16"}>
              <header className={"\x6dax-w-4xl"}>
                <h1 id="faq-title" className={"\x66ont-plush \x74ext-giant"}>Questions &amp; answers</h1>
                <p className={"\x74ext-lede \x6dt-6 \x6dax-w-[\x352ch] \x74ext-[\x76ar(\x2d-ink-soft)]"}>Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7.</p>
              </header>
              <div className={"\x6dt-12 \x6dd:\x6dt-16"}>
                <div className={"\x74p-notes"} data-site-import-carousel-root="0">{catalogData.connected ? <ManagedFaqs faqs={catalogData.catalog.faqs} /> : carouselContent0}</div>
              </div>
            </div>
          </section>
        </div>
        {/* $ */}
        {/* /$ */}
        {/* /& */}
        {/* /& */}
      </main>
      <footer className={"\x74p-footer \x72elative \x70b-[\x63alc(\x76ar(\x2d-bar-h)+\x32rem)] \x74ext-milk \x6dd:\x70b-10"}>
        <svg aria-hidden="true" viewBox="0 0 1440 80" preserveAspectRatio="none" className={"\x74p-footer__hill"}>
          <path d="M0 80V44c120-30 240-44 360-30s240 46 360 34 240-58 360-46 240 40 360 26v52z" />
        </svg>
        <div aria-hidden="true" className={"\x70ointer-events-none \x61bsolute \x69nset-x-0 \x74op-6 \x68-64 \x6fverflow-hidden"}>
          <div aria-hidden="true" className={"\x70ointer-events-none \x61bsolute \x69nset-0"}>
            <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "6%", top: "18%", width: "12.6px", animationDelay: "0s" } as unknown as CSSProperties} aria-hidden="true">
              <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "14%", top: "42%", width: "8.4px", animationDelay: "0.4s" } as unknown as CSSProperties} aria-hidden="true">
              <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "23%", top: "12%", width: "9.8px", animationDelay: "0.8s" } as unknown as CSSProperties} aria-hidden="true">
              <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "31%", top: "30%", width: "7px", animationDelay: "1.2s" } as unknown as CSSProperties} aria-hidden="true">
              <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "44%", top: "9%", width: "11.2px", animationDelay: "1.6s" } as unknown as CSSProperties} aria-hidden="true">
              <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "52%", top: "36%", width: "7.7px", animationDelay: "2s" } as unknown as CSSProperties} aria-hidden="true">
              <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "63%", top: "15%", width: "10.5px", animationDelay: "2.4s" } as unknown as CSSProperties} aria-hidden="true">
              <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "71%", top: "40%", width: "7px", animationDelay: "2.8s" } as unknown as CSSProperties} aria-hidden="true">
              <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "92%", top: "33%", width: "8.4px", animationDelay: "3.2s" } as unknown as CSSProperties} aria-hidden="true">
              <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
            </svg>
          </div>
          <span className={"\x74p-moon"} />
        </div>
        <div className={"\x67utter \x72elative \x6dx-auto \x67rid \x6dax-w-[\x3110rem] \x67ap-12 \x70t-20 \x6dd:\x67rid-cols-12 \x6dd:\x67ap-x-12 \x6dd:\x67ap-y-6 \x6dd:\x70t-28"}>
          <div className={"\x6dd:\x63ol-span-5"}>
            <p className={"\x66ont-plush \x74ext-big \x74ext-honey-soft"}>Home, at last.</p>
            <p className={"\x6dt-5 \x6dax-w-md \x74ext-milk/\x380"}>TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.</p>
          </div>
          <div className={"\x6frder-last \x6dd:\x6frder-none \x6dd:\x63ol-span-5 \x6dd:\x63ol-start-1 \x6dd:\x72ow-start-2"}>
            <div className={"\x74p-basket"}>
              <svg aria-hidden="true" viewBox="0 0 300 240" className={"\x74p-basket__back"}>
                <ellipse cx="212" cy="145" rx="96" ry="12" className={"\x74p-basket__hollow"} />
                <path d="M116 145 A96 12 0 0 1 308 145" className={"\x74p-basket__rim-line"} />
                <path d="M116 145 A96 12 0 0 1 308 145" className={"\x74p-basket__rim"} />
              </svg>
              <div data-facing="right" data-act="basket" data-lane="true" className={"\x70up-stop \x74p-basket__pup"}>
                <div className={"\x70up-buddy "} data-facing="right" data-live="">
                  <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, sitting snug in his basket" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
                    <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
                      <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                      <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -0.07) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 0.6) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="0" data-site-import-responsive="436">
                        <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="1">
                          <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
                          <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                          <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                        </g>
                        <g data-p="ff" transform="translate(168 192) rotate(0)">
                          <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
                          <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                          <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                        </g>
                        <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(-20.97 84 150)" : "rotate(-14.55 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="445">
                          <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                          <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
                          <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                        </g>
                        <g data-p="bn" transform="translate(110 194) rotate(0)" opacity="1">
                          <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14Z" fill="#f2be6b" />
                          <path d="M-15 -14 C-15 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 15 4 15 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                          <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                        </g>
                        <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                        <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                        <g data-p="fn" transform="translate(186 194) rotate(0)">
                          <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
                          <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                          <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                        </g>
                      </g>
                      <g data-p="haunch" opacity="0" transform="translate(0 0)">
                        <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                        <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                        <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      </g>
                      <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 8.9) rotate(-9.82 212 100)" : "translate(0 9.9) rotate(4 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="216">
                        <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                        <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
                        <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(3 174 82)" />
                        <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(-3 250 82)" />
                        <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                        <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                        <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
                        <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                        <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                        <g data-p="eyes" transform="translate(0 0)">
                          <g data-p="open" opacity="1">
                            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 0) scale(1 1)" : "translate(0 57.62) scale(1 0.41)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="blink" data-site-import-responsive="228">
                              <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                              <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
                              <circle cx="196.6" cy="94.6" r="2.7" fill="#fff" />
                              <circle cx="232.6" cy="94.6" r="2.7" fill="#fff" />
                              <circle cx="192" cy="101.2" r="1.2" fill="#fff" />
                              <circle cx="228" cy="101.2" r="1.2" fill="#fff" />
                            </g>
                          </g>
                        </g>
                        <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
                        <path data-p="shut" d="M186.5 97 Q194 103.5 201.5 97 M222.5 97 Q230 103.5 237.5 97" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0" />
                        <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />
                        <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                        <path data-p="tongue" d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" opacity="0" />
                        <g data-p="mouth" opacity="0">
                          <path d="M203 126 Q212 122 221 126 Q219 138 212 139 Q205 138 203 126 Z" fill="#6b2a1c" stroke="#2a170e" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
                          <path d="M206.5 133.5 Q212 130 217.5 133.5 Q215 138 212 138 Q209 138 206.5 133.5 Z" fill="#e98c8c" />
                        </g>
                      </g>
                      <g data-p="ledge" opacity="1">
                        <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                        <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      </g>
                    </g>
                  </svg>
                  <span aria-hidden="true" className={"\x70up-bubble"} data-show="true">hm?</span>
                </div>
              </div>
              <svg aria-hidden="true" viewBox="0 0 300 240" className={"\x74p-basket__front"}>
                <path d="M116 145 C118 180 126 214 138 232 L286 232 C298 214 306 180 308 145 A96 12 0 0 1 116 145 Z" className={"\x74p-basket__body"} />
                <path d="M121 178 Q212 197 303 178 M127 206 Q212 223 297 206" className={"\x74p-basket__weave"} />
                <path d="M150 164 L158 230 M182 168 L185 232 M212 169 V232 M242 168 L239 232 M274 164 L266 230" className={"\x74p-basket__weave \x74p-basket__weave--stakes"} />
                <path d="M116 145 A96 12 0 0 0 308 145" className={"\x74p-basket__rim-line"} />
                <path d="M116 145 A96 12 0 0 0 308 145" className={"\x74p-basket__rim"} />
              </svg>
            </div>
          </div>
          <nav aria-label="Footer" className={"\x6dd:\x63ol-span-3 \x6dd:\x63ol-start-7 \x6dd:\x72ow-span-2 \x6dd:\x72ow-start-1"}>
            <h2 className={"\x66ont-scrawl \x74ext-lg \x74ext-honey"}>Explore</h2>
            <ul className={"\x6dt-4 \x73pace-y-2.\x35"}>
              <li>
                <a className={"\x66ont-semibold \x74ext-milk/\x390 \x75nderline-offset-4 \x68over:\x74ext-honey \x68over:\x75nderline"} href="/puppies">Available puppies</a>
              </li>
              <li>
                <a className={"\x66ont-semibold \x74ext-milk/\x390 \x75nderline-offset-4 \x68over:\x74ext-honey \x68over:\x75nderline"} href="/gone-home">Gone home</a>
              </li>
              <li>
                <a className={"\x66ont-semibold \x74ext-milk/\x390 \x75nderline-offset-4 \x68over:\x74ext-honey \x68over:\x75nderline"} href="/happy-families">Happy families</a>
              </li>
              <li>
                <a className={"\x66ont-semibold \x74ext-milk/\x390 \x75nderline-offset-4 \x68over:\x74ext-honey \x68over:\x75nderline"} href="/how-it-works">How it works</a>
              </li>
              <li>
                <a className={"\x66ont-semibold \x74ext-milk/\x390 \x75nderline-offset-4 \x68over:\x74ext-honey \x68over:\x75nderline"} href="/how-it-works#delivery">Delivery &amp; collection</a>
              </li>
              <li>
                <a className={"\x66ont-semibold \x74ext-milk/\x390 \x75nderline-offset-4 \x68over:\x74ext-honey \x68over:\x75nderline"} href="#">FAQ</a>
              </li>
              <li>
                <a className={"\x66ont-semibold \x74ext-milk/\x390 \x75nderline-offset-4 \x68over:\x74ext-honey \x68over:\x75nderline"} href="/contact">Visit &amp; contact</a>
              </li>
            </ul>
          </nav>
          <div className={"\x6dd:\x63ol-span-3 \x6dd:\x72ow-span-2 \x6dd:\x72ow-start-1"}>
            <h2 className={"\x66ont-scrawl \x74ext-lg \x74ext-honey"}>Say hello</h2>
            <ul className={"\x6dt-4 \x73pace-y-2.\x35 \x74ext-milk/\x390"}>
              <li>
                <a className={"\x66ont-semibold \x68over:\x74ext-honey"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies." rel="noopener noreferrer" target="_blank">WhatsApp {/*  */}+971 54 167 6733</a>
              </li>
              <li>
                <a className={"\x62reak-all \x68over:\x74ext-honey"} href="mailto:teddypupsadmin@gmail.com">teddypupsadmin@gmail.com</a>
              </li>
              <li>Downtown Dubai, United Arab Emirates</li>
            </ul>
            <ul className={"\x6dt-6 \x66lex \x66lex-wrap \x67ap-3"} aria-label="Social media">
              <li>
                <a className={"\x69nline-flex \x68-11 \x69tems-center \x72ounded-full \x62order-2 \x62order-milk/\x330 \x70x-4 \x74ext-sm \x66ont-semibold \x68over:\x62order-honey \x68over:\x74ext-honey"} href="https://www.instagram.com/teddypups.worldwide/" rel="noopener noreferrer" target="_blank">Instagram</a>
              </li>
              <li>
                <a className={"\x69nline-flex \x68-11 \x69tems-center \x72ounded-full \x62order-2 \x62order-milk/\x330 \x70x-4 \x74ext-sm \x66ont-semibold \x68over:\x62order-honey \x68over:\x74ext-honey"} href="https://www.tiktok.com/@teddypupsuae" rel="noopener noreferrer" target="_blank">TikTok</a>
              </li>
              <li>
                <a className={"\x69nline-flex \x68-11 \x69tems-center \x72ounded-full \x62order-2 \x62order-milk/\x330 \x70x-4 \x74ext-sm \x66ont-semibold \x68over:\x62order-honey \x68over:\x74ext-honey"} href="https://www.facebook.com/profile.php?id=61567496944539" rel="noopener noreferrer" target="_blank">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={"\x67utter \x72elative \x6dx-auto \x6dt-16 \x66lex \x6dax-w-[\x3110rem] \x66lex-col \x69tems-start \x6austify-between \x67ap-4 \x62order-t \x62order-milk/\x315 \x70t-6 \x74ext-sm \x74ext-milk/\x360 \x6dd:\x66lex-row \x6dd:\x69tems-center"}>
          <span className={"\x66lex \x69tems-center \x67ap-3"}><img alt="" width="36" height="36" className={"\x73ize-9"} style={{ color: "transparent" } as unknown as CSSProperties} srcSet="/site-assets/4a769ca448ac39ad.webp 1x, /site-assets/7da4412f54d79d4e.webp 2x" src="/site-assets/7da4412f54d79d4e.webp" {...({ loading: "lazy", decoding: "async" } as any)} />© {/*  */}2026{/*  */}{" "}{/*  */}TeddyPups U.A.E.</span>
          <span className={"\x66ont-scrawl \x74ext-base \x74ext-honey/\x380"}>every puppy is family</span>
        </div>
      </footer>
      <div className={"\x66ixed \x69nset-x-0 \x62ottom-0 \x7a-40 \x62order-t-2 \x62order-cocoa \x62g-milk \x70x-3 \x70b-[\x63alc(\x30.\x36rem+\x65nv(\x73afe-area-inset-bottom))] \x70t-2.\x35 \x6dd:\x68idden"}>
        <div className={"\x6dx-auto \x66lex \x6dax-w-md \x67ap-2"}>
          <a className={"\x62tn \x62tn-whatsapp !\x6din-h-12 \x66lex-1 !\x73hadow-none"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies." rel="noopener noreferrer" target="_blank">WhatsApp us</a>
          <a className={"\x62tn \x62tn-ghost !\x6din-h-12 !\x70x-5"} href="tel:+971541676733">Call</a>
        </div>
      </div>
      <picture style={{ display: "contents" } as unknown as CSSProperties}>
        <source media="(max-width: 767px)" srcSet="data:image/webp;base64,UklGRsgCAABXRUJQVlA4WAoAAAAQAAAAhQEASwMAQUxQSB4AAAABBxARERASJP5/byKi/xn/+c9//vOf//znP//5PwVWUDgghAIAAFBKAJ0BKoYBTAM+MRiMRKIhoRAEACADBLS3cLuwjaAE9gHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77Y4AD+//gtkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" />
        <img aria-hidden="true" className={"\x70ointer-events-none \x66ixed \x69nset-0 \x7a-[\x370] \x73ize-full"} width="1536" height="864" src="data:image/webp;base64,UklGRs4JAABXRUJQVlA4WAoAAAAQAAAA/wUAXwMAQUxQSEcAAAABBxARERCQJP3/T0b0P+M///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//zfBABWUDggYAkAABAaAZ0BKgAGYAM+MRiMRKIhoRAEACADBLS3cLuwjaAE9gHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfWAAD+//gtkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==" alt="" />
      </picture>
      {/* $ */}
      {/* /$ */}
      {/* /& */}

    </>
  </>);
}

function subscribeMobile(onChange: () => void) {
  const query = matchMedia("(max-width: 767px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
