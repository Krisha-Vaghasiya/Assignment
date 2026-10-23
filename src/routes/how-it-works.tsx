import type { CSSProperties } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { importedSiteHead } from "../lib/imported-site-head";
import capturedCSS from "../styles/pages/how-it-works.css?raw";

export const Route = createFileRoute("/how-it-works")({
  head: () => importedSiteHead("How it works | TeddyPups U.A.E.", "Explore the puppy journey, from choosing your breed to meeting your puppy with TeddyPups U.A.E."),
  staticData: { importedDocument: { html: { "className": "\x56eu4Sq_variable \x68pvSLW_variable \x5f91XIoq_variable \x6cenis", "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  const isMobile = useSyncExternalStore(subscribeMobile, () => matchMedia("(max-width: 767px)").matches, () => false);
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
                <a aria-current="page" className={"\x74p-nav-link"} data-active="true" href="#">
                  <span>How it works</span>
                  <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                    <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a className={"\x74p-nav-link"} data-active="false" href="/faq">
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
                      <a aria-current="page" className={"\x74p-menu-link \x66ont-plush \x62lock \x70y-2 \x74ext-[\x63lamp(\x32.\x34rem,\x311vw,\x33.\x34rem)]"} data-active="true" href="#">
                        <span>How it works</span>
                        <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a className={"\x74p-menu-link \x66ont-plush \x62lock \x70y-2 \x74ext-[\x63lamp(\x32.\x34rem,\x311vw,\x33.\x34rem)]"} data-active="false" href="/faq">
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
          <section data-tone="light" className={"\x74p-scene "} style={{ "--sky-top": "#fffbf3", "--sky-bottom": "#f6cc85" } as unknown as CSSProperties} aria-labelledby="how-title">
            <div className={"\x67utter \x6dx-auto \x6dax-w-[\x3110rem] \x70b-24 \x70t-10 \x6dd:\x70t-16"}>
              <header className={"\x67rid \x67ap-8 \x6dd:\x67rid-cols-12 \x6dd:\x69tems-end"}>
                <h1 id="how-title" className={"\x66ont-plush \x74ext-giant \x6dd:\x63ol-span-7"}>How it works</h1>
                <p className={"\x74ext-lede \x74ext-[\x76ar(\x2d-ink-soft)] \x6dd:\x63ol-span-5 \x6dd:\x70b-4"}>Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.</p>
              </header>
              <nav aria-label="On this page" className={"\x6dt-10 \x66lex \x66lex-wrap \x67ap-2"}>
                <a className={"\x63hip \x68-11 \x62order-2 \x62order-cocoa !\x62g-milk \x70x-4 \x68over:!\x62g-honey-soft"} href="#two-ways"><span className={"\x66ont-plush \x74ext-toffee"}>1</span>{" "}{/*  */}Two ways home</a>
                <a className={"\x63hip \x68-11 \x62order-2 \x62order-cocoa !\x62g-milk \x70x-4 \x68over:!\x62g-honey-soft"} href="#promise"><span className={"\x66ont-plush \x74ext-toffee"}>2</span>{" "}{/*  */}Our premium puppy promise</a>
                <a className={"\x63hip \x68-11 \x62order-2 \x62order-cocoa !\x62g-milk \x70x-4 \x68over:!\x62g-honey-soft"} href="#delivery"><span className={"\x66ont-plush \x74ext-toffee"}>3</span>{" "}{/*  */}Delivery &amp; collection</a>
                <a className={"\x63hip \x68-11 \x62order-2 \x62order-cocoa !\x62g-milk \x70x-4 \x68over:!\x62g-honey-soft"} href="#why"><span className={"\x66ont-plush \x74ext-toffee"}>4</span>{" "}{/*  */}Why choose us</a>
              </nav>
              <div id="two-ways">
                <section className={"\x74p-journeys"} aria-labelledby="two-ways-title" data-ready="true">
                  <div className={"\x74p-journeys__top"}>
                    <div>
                      <p className={"\x66ont-scrawl \x74p-journeys__kicker"}>choose your way</p>
                      <h2 id="two-ways-title" className={"\x66ont-plush \x74ext-big"}>Two ways home</h2>
                    </div>
                    <div className={"\x74p-journeys__pick"}>
                      <div role="tablist" aria-label="Ways to bring your puppy home" className={"\x74p-switch"} style={{ "--at": "0", "--n": "2" } as unknown as CSSProperties}>
                        <span aria-hidden="true" className={"\x74p-switch__thumb"} />
                        <button type="button" role="tab" id="tab-local" aria-selected="true" aria-controls="panel-local" tabIndex={0} className={"\x74p-switch__tab"}>
                          <span className={"\x66ont-plush \x74p-switch__label"}>In Dubai</span>
                          <span className={"\x74p-switch__hint"}>meet in person</span>
                        </button>
                        <button type="button" role="tab" id="tab-imported" aria-selected="false" aria-controls="panel-imported" tabIndex={-1} className={"\x74p-switch__tab"}>
                          <span className={"\x66ont-plush \x74p-switch__label"}>Imported</span>
                          <span className={"\x74p-switch__hint"}>order upon request</span>
                        </button>
                      </div>
                      <div className={"\x70up-buddy \x74p-journeys__teddy"} data-facing="right" data-live="">
                        <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, waiting to see which way you pick" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
                          <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
                            <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -2.53) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -2.04) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="73">
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
                              <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(18.84 84 150)" : "rotate(48.27 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="78">
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
                            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(-10 -6.8) rotate(-4.49 212 100)" : "translate(-10 -6.06) rotate(-10 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="92">
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
                  </div>
                  <div role="tabpanel" id="panel-local" aria-labelledby="tab-local" className={"\x74p-journey"}>
                    <div className={"\x74p-journey__head"}>
                      <div>
                        <h3 className={"\x66ont-plush \x74p-journey__title"}>Meet your puppy in person</h3>
                        <p className={"\x74ext-lede \x6dt-4 \x74ext-[\x76ar(\x2d-ink-soft)]"}>Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks.</p>
                      </div>
                      <div aria-hidden="true" className={"\x74p-postcard"}>
                        <span className={"\x74p-postcard__sun"} />
                        <svg viewBox="0 0 300 120" className={"\x74p-postcard__city"} aria-hidden="true">
                          <path d="M4 116h292M20 116V78h16v38M44 116V60h18v56M70 116V84h12v32M150 116V36l4-6v-14l3-4 3 4v14l4 6v80M118 116V70l12-8v54M174 116V64l14 8v44M200 116V82h18v34M226 116V56h14v60M248 116V88h22v28" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={"\x66ont-scrawl \x74p-postcard__to \x74p-postcard__to--left"}>Downtown Dubai</span>
                      </div>
                    </div>
                    <ol className={"\x74p-steps"}>
                      <li className={"\x74p-step"} style={{ "--i": "0", "--tint": "#fbe3b4", translate: "0px", opacity: "1", rotate: "0deg" } as unknown as CSSProperties}>
                        <span aria-hidden="true" className={"\x74p-step__icon"}>
                          <svg viewBox="0 0 48 48">
                            <circle cx="21" cy="21" r="12" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="m30 30 10 10" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 27c-3-2-4.4-3.6-4.4-5.2a2.2 2.2 0 0 1 4.4-.4 2.2 2.2 0 0 1 4.4.4c0 1.6-1.4 3.2-4.4 5.2z" fill="currentColor" />
                          </svg>
                        </span>
                        <span className={"\x74p-step__num \x66ont-plush"}>Step {/*  */}1</span>
                        <h4 className={"\x66ont-plush-text \x74p-step__title"}>Explore our puppies</h4>
                        <p className={"\x74p-step__text"}>Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information.</p>
                      </li>
                      <li className={"\x74p-step"} style={{ "--i": "1", "--tint": "#fde6de", translate: "0px", opacity: "1", rotate: "0deg" } as unknown as CSSProperties}>
                        <span aria-hidden="true" className={"\x74p-step__icon"}>
                          <svg viewBox="0 0 48 48">
                            <path d="M24 40C11 31 6 24.5 6 17.8 6 12.4 10.2 8 15.4 8c3.7 0 6.8 2.1 8.6 5.3C25.8 10.1 28.9 8 32.6 8 37.8 8 42 12.4 42 17.8 42 24.5 37 31 24 40z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="m17 22 5 5 9-10" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className={"\x74p-step__num \x66ont-plush"}>Step {/*  */}2</span>
                        <h4 className={"\x66ont-plush-text \x74p-step__title"}>Choose your puppy</h4>
                        <p className={"\x74p-step__text"}>Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly if you have any questions.</p>
                      </li>
                      <li className={"\x74p-step"} style={{ "--i": "2", "--tint": "#e3f0fb", translate: "0px", opacity: "1", rotate: "0deg" } as unknown as CSSProperties}>
                        <span aria-hidden="true" className={"\x74p-step__icon"}>
                          <svg viewBox="0 0 48 48">
                            <path d="M14 18c-3-6-1-10 3-10s5 4 4 8M34 18c3-6 1-10-3-10s-5 4-4 8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                            <ellipse cx="24" cy="27" rx="13" ry="12" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="19.5" cy="25" r="1.6" fill="currentColor" />
                            <circle cx="28.5" cy="25" r="1.6" fill="currentColor" />
                            <path d="M22 31h4l-2 2z" fill="currentColor" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className={"\x74p-step__num \x66ont-plush"}>Step {/*  */}3</span>
                        <h4 className={"\x66ont-plush-text \x74p-step__title"}>Meet before you choose</h4>
                        <p className={"\x74p-step__text"}>Spend time bonding before making your decision.</p>
                      </li>
                      <li className={"\x74p-step"} style={{ "--i": "3", "--tint": "#e6f2df", translate: "0px", opacity: "1", rotate: "0deg" } as unknown as CSSProperties}>
                        <span aria-hidden="true" className={"\x74p-step__icon"}>
                          <svg viewBox="0 0 48 48">
                            <path d="M5 30V18h22v12M27 22h8l6 6v2H27" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 30h36" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="13" cy="33" r="3.4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="34" cy="33" r="3.4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 26c-2.3-1.6-3.4-2.8-3.4-4a1.7 1.7 0 0 1 3.4-.4 1.7 1.7 0 0 1 3.4.4c0 1.2-1.1 2.4-3.4 4z" fill="currentColor" />
                          </svg>
                        </span>
                        <span className={"\x74p-step__num \x66ont-plush"}>Step {/*  */}4</span>
                        <h4 className={"\x66ont-plush-text \x74p-step__title"}>Pick-up or delivery</h4>
                        <p className={"\x74p-step__text"}>Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable, ensuring your puppy arrives comfortably.</p>
                      </li>
                    </ol>
                  </div>
                  <div role="tabpanel" id="panel-imported" aria-labelledby="tab-imported" className={"\x74p-journey"} hidden>
                    <div className={"\x74p-journey__head"}>
                      <div>
                        <h3 className={"\x66ont-plush \x74p-journey__title"}>Order upon request</h3>
                        <p className={"\x74ext-lede \x6dt-4 \x74ext-[\x76ar(\x2d-ink-soft)]"}>Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world's most sought-after teacup breeds — ethically sourced from the most reputable, certified breeders across Europe, Korea, and beyond.</p>
                        <p className={"\x66ont-scrawl \x6dt-4 \x74ext-toffee-ink"}>From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring the world's finest puppies to Dubai, just for you.</p>
                      </div>
                      <div aria-hidden="true" className={"\x74p-postcard \x74p-postcard--sky"}>
                        <svg viewBox="0 0 320 150" className={"\x74p-postcard__route"} preserveAspectRatio="none">
                          <path d="M28 128C90 20 230 20 292 118" />
                        </svg>
                        <svg viewBox="0 0 64 40" className={"\x74p-postcard__plane"} aria-hidden="true">
                          <path d="M4 22l20-2 12-14h6l-6 14 14-1 6-7h4l-3 10 3 10h-4l-6-7-14-1 6 14h-6L24 24 4 22z" fill="#fffdf8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={"\x66ont-scrawl \x74p-postcard__from"}>Europe · Korea</span>
                        <span className={"\x66ont-scrawl \x74p-postcard__to"}>Dubai</span>
                      </div>
                    </div>
                    <ol className={"\x74p-steps"}>
                      <li className={"\x74p-step"} style={{ "--i": "0", "--tint": "#fbe3b4" } as unknown as CSSProperties}>
                        <span aria-hidden="true" className={"\x74p-step__icon"}>
                          <svg viewBox="0 0 48 48">
                            <rect x="7" y="10" rx="5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" {...({ width: "34", height: "30" } as any)} />
                            <path d="M7 19h34M16 6v8M32 6v8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="m17 29 5 5 9-9" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className={"\x74p-step__num \x66ont-plush"}>Step {/*  */}1</span>
                        <h4 className={"\x66ont-plush-text \x74p-step__title"}>Reserve your puppy</h4>
                        <p className={"\x74p-step__text"}>Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart. Our reservation-only model ensures that each puppy is specifically sourced to meet your preferences.</p>
                      </li>
                      <li className={"\x74p-step"} style={{ "--i": "1", "--tint": "#fde6de" } as unknown as CSSProperties}>
                        <span aria-hidden="true" className={"\x74p-step__icon"}>
                          <svg viewBox="0 0 48 48">
                            <path d="M6 12a5 5 0 0 1 5-5h16a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-9l-6 5v-5h-1a5 5 0 0 1-5-5z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M36 17h1a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-1v5l-6-5h-6a5 5 0 0 1-4-2" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className={"\x74p-step__num \x66ont-plush"}>Step {/*  */}2</span>
                        <h4 className={"\x66ont-plush-text \x74p-step__title"}>Personalized consultation</h4>
                        <p className={"\x74p-step__text"}>Once your reservation is confirmed, we will work closely with you to finalize details and provide updates on your puppy's journey.</p>
                      </li>
                      <li className={"\x74p-step"} style={{ "--i": "2", "--tint": "#e3f0fb" } as unknown as CSSProperties}>
                        <span aria-hidden="true" className={"\x74p-step__icon"}>
                          <svg viewBox="0 0 48 48">
                            <path transform="matrix(-1 0 0 1 48 0)" d="M4 27l13-1.5 8-10h4l-4 9.5 9-.8 4-4.7h3l-2 6.6 2 6.6h-3l-4-4.7-9-.8 4 9.5h-4l-8-10L4 29z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className={"\x74p-step__num \x66ont-plush"}>Step {/*  */}3</span>
                        <h4 className={"\x66ont-plush-text \x74p-step__title"}>Import and arrival</h4>
                        <p className={"\x74p-step__text"}>We manage all aspects of the import process, including health checks, travel arrangements, and necessary documentation. Your puppy will be carefully transported and will arrive ready to join your family.</p>
                      </li>
                      <li className={"\x74p-step"} style={{ "--i": "3", "--tint": "#e6f2df" } as unknown as CSSProperties}>
                        <span aria-hidden="true" className={"\x74p-step__icon"}>
                          <svg viewBox="0 0 48 48">
                            <path d="M6 23 24 8l18 15M11 19v21h26V19" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M24 35c-4.6-3.2-6.8-5.7-6.8-8.2a3.4 3.4 0 0 1 6.8-.8 3.4 3.4 0 0 1 6.8.8c0 2.5-2.2 5-6.8 8.2z" fill="currentColor" />
                          </svg>
                        </span>
                        <span className={"\x74p-step__num \x66ont-plush"}>Step {/*  */}4</span>
                        <h4 className={"\x66ont-plush-text \x74p-step__title"}>Welcome home</h4>
                        <p className={"\x74p-step__text"}>Upon arrival, we provide support to help your new puppy acclimate to their new environment. Our team is available for any additional assistance and to ensure a smooth transition into your home.</p>
                      </li>
                    </ol>
                  </div>
                </section>
              </div>
              <section id="promise" aria-labelledby="promise-title" className={"\x74p-paper \x6dt-24 \x2drotate-[\x30.\x36deg]"}>
                <p aria-hidden="true" className={"\x66ont-scrawl \x74ext-lg \x74ext-toffee-ink"}>puppy passport</p>
                <h2 id="promise-title" className={"\x66ont-plush \x74ext-huge \x6dt-1 \x6dax-w-[\x316ch]"}>Our premium puppy promise</h2>
                <ul className={"\x6dt-12 \x67rid \x67ap-10 \x73m:\x67rid-cols-2 \x6cg:\x67rid-cols-3"}>
                  <li className={"\x74p-entry"} style={{ "--ink-stamp": "#a24a1a", "--tilt": "-8deg", "--i": "0" } as unknown as CSSProperties}>
                    <span className={"\x74p-stamp \x74p-stamp--round"}>
                      <svg viewBox="0 0 64 64" className={"\x74p-stamp__icon"} aria-hidden="true">
                        <path d="M32 54C16 43 8 34 8 24c0-7 5.4-12 12-12 5 0 9 3 12 7 3-4 7-7 12-7 6.6 0 12 5 12 12 0 10-8 19-24 30z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 30h7l3-7 4 13 3-6h7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className={"\x74p-stamp__title \x66ont-plush"}>Hand-selected breeders</span>
                    </span>
                    <p className={"\x74p-entry__text"}>We work only with breeders who uphold the highest ethical and health standards.</p>
                  </li>
                  <li className={"\x74p-entry"} style={{ "--ink-stamp": "#1f6b45", "--tilt": "5deg", "--i": "1" } as unknown as CSSProperties}>
                    <span className={"\x74p-stamp \x74p-stamp--ticket"}>
                      <svg viewBox="0 0 64 64" className={"\x74p-stamp__icon"} aria-hidden="true">
                        <path d="M6 36l22-3 12-17h6l-6 17 12-1 6-7h3l-2 10 2 10h-3l-6-7-12-1 6 17h-6L28 37 6 36z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 50c10 4 20 4 30 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 7" />
                      </svg>
                      <span className={"\x74p-stamp__title \x66ont-plush"}>Full transparency</span>
                    </span>
                    <p className={"\x74p-entry__text"}>Photos, videos, and health certificates are shared before your puppy travels.</p>
                  </li>
                  <li className={"\x74p-entry"} style={{ "--ink-stamp": "#5a3a28", "--tilt": "-4deg", "--i": "2" } as unknown as CSSProperties}>
                    <span className={"\x74p-stamp \x74p-stamp--oval"}>
                      <svg viewBox="0 0 64 64" className={"\x74p-stamp__icon"} aria-hidden="true">
                        <path d="M10 14h44v28H30l-12 10v-10h-8z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 28h0M32 28h0M42 28h0" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className={"\x74p-stamp__title \x66ont-plush"}>Safe, stress-free delivery</span>
                    </span>
                    <p className={"\x74p-entry__text"}>We handle every detail of the import process, so your puppy arrives happy, healthy, and ready to love you.</p>
                  </li>
                </ul>
              </section>
              <section id="delivery" aria-labelledby="delivery-title" className={"\x6dt-24 \x67rid \x69tems-center \x67ap-10 \x6cg:\x67rid-cols-12"}>
                <div className={"\x6cg:\x63ol-span-6"}>
                  <h2 id="delivery-title" className={"\x66ont-plush \x74ext-huge"}>Delivery &amp; collection</h2>
                  <p className={"\x74ext-lede \x6dt-5 \x74ext-[\x76ar(\x2d-ink-soft)]"}>From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely.</p>
                  <ul className={"\x6dt-10 \x67rid \x67ap-x-8 \x67ap-y-7 \x73m:\x67rid-cols-2"}>
                    <li>
                      <h3 className={"\x66ont-plush-text \x74ext-[\x31.\x33rem] \x66ont-bold \x6ceading-snug"}>Take your puppy home the same day</h3>
                      <p className={"\x6dt-1.\x35 \x74ext-[\x76ar(\x2d-ink-soft)]"}>Local puppies are available immediately — visit, fall in love, and go home together.</p>
                    </li>
                    <li>
                      <h3 className={"\x66ont-plush-text \x74ext-[\x31.\x33rem] \x66ont-bold \x6ceading-snug"}>Delivery within Dubai</h3>
                      <p className={"\x6dt-1.\x35 \x74ext-[\x76ar(\x2d-ink-soft)]"}>Prefer to stay home? We deliver your puppy to your door within Dubai, safely and comfortably.</p>
                    </li>
                    <li>
                      <h3 className={"\x66ont-plush-text \x74ext-[\x31.\x33rem] \x66ont-bold \x6ceading-snug"}>Safe international cargo</h3>
                      <p className={"\x6dt-1.\x35 \x74ext-[\x76ar(\x2d-ink-soft)]"}>We handle all the paperwork and ensure comfortable travel so your puppy arrives happy and stress-free.</p>
                    </li>
                    <li>
                      <h3 className={"\x66ont-plush-text \x74ext-[\x31.\x33rem] \x66ont-bold \x6ceading-snug"}>Worldwide delivery</h3>
                      <p className={"\x6dt-1.\x35 \x74ext-[\x76ar(\x2d-ink-soft)]"}>We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance.</p>
                    </li>
                  </ul>
                </div>
                <div className={"\x72elative \x68-[\x63lamp(\x314rem,\x330vw,\x322rem)] \x6cg:\x63ol-span-6"}>
                  <svg viewBox="0 0 300 120" className={"\x61bsolute \x69nset-x-0 \x62ottom-0 \x77-full \x74ext-cocoa/\x325"} aria-hidden="true">
                    <path d="M4 116h292M20 116V78h16v38M44 116V60h18v56M70 116V84h12v32M150 116V36l4-6v-14l3-4 3 4v14l4 6v80M118 116V70l12-8v54M174 116V64l14 8v44M200 116V82h18v34M226 116V56h14v60M248 116V88h22v28" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className={"\x74p-flight"}>
                    <svg viewBox="0 0 660 300" role="img" aria-label="A plane flying puppies from Korea to Dubai">
                      <defs>
                        <clipPath id="_R_1albsnkivb_">
                          <circle r="25" />
                        </clipPath>
                      </defs>
                      <path d="M40 250 C 170 40, 470 20, 620 168" className={"\x74p-flight__route"} />
                      <circle cx="40" cy="250" r="7" className={"\x74p-flight__dot"} />
                      <circle cx="620" cy="168" r="7" className={"\x74p-flight__dot"} />
                      <text x="40" y="284" textAnchor="middle" className={"\x74p-flight__label"}>Korea</text>
                      <text x="620" y="202" textAnchor="middle" className={"\x74p-flight__label"}>Dubai</text>
                      <g transform="translate(40.0 250.0) rotate(-58.1)" style={{ opacity: "0" } as unknown as CSSProperties}>
                        <g transform="translate(-126 -78)">
                          <path d="M28 60 L8 26 L34 26 L60 54 Z" className={"\x74p-flight__wing"} />
                          <path d="M108 112 L142 156 L172 156 L158 112 Z" className={"\x74p-flight__wing \x74p-flight__wing--far"} />
                          <path d="M20 80 C20 52 52 44 80 44 L168 44 C200 44 224 60 232 80 C224 100 200 112 168 112 L80 112 C52 112 20 104 20 80 Z" className={"\x74p-flight__body"} />
                          <path d="M104 44 L138 2 L168 2 L154 44 Z" className={"\x74p-flight__wing"} />
                          <path d="M206 64 C215 67 221 73 224 80" className={"\x74p-flight__line"} />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </section>
              <section id="why" aria-labelledby="why-title" className={"\x6dt-24 \x67rid \x67ap-12 \x6cg:\x67rid-cols-12"}>
                <div className={"\x6cg:\x63ol-span-5"}>
                  <h2 id="why-title" className={"\x66ont-plush \x74ext-huge"}>Why choose us</h2>
                  <p className={"\x74ext-lede \x6dt-6 \x74ext-[\x76ar(\x2d-ink-soft)]"}>We're here to help you find a new family member. From the moment you visit our site to the joyful day your puppy arrives at your door, we're with you every step of the way. Our mission is to make the entire adoption process smooth, transparent, and full of love.</p>
                </div>
                <ul className={"\x73pace-y-8 \x6cg:\x63ol-span-6 \x6cg:\x63ol-start-7"}>
                  <li className={"\x66lex \x67ap-5"}>
                    <svg viewBox="0 0 64 64" className={"\x73ize-14 \x73hrink-0 \x74ext-toffee-deep"} aria-hidden="true">
                      <path d="M6 36l22-3 12-17h6l-6 17 12-1 6-7h3l-2 10 2 10h-3l-6-7-12-1 6 17h-6L28 37 6 36z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 50c10 4 20 4 30 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 7" />
                    </svg>
                    <div>
                      <h3 className={"\x66ont-plush \x74ext-[\x31.\x37rem]"}>International cargo</h3>
                      <p className={"\x6dt-2 \x74ext-[\x76ar(\x2d-ink-soft)]"}>We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance.</p>
                    </div>
                  </li>
                  <li className={"\x66lex \x67ap-5"}>
                    <svg viewBox="0 0 64 64" className={"\x73ize-14 \x73hrink-0 \x74ext-toffee-deep"} aria-hidden="true">
                      <path d="M10 14h44v28H30l-12 10v-10h-8z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 28h0M32 28h0M42 28h0" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <h3 className={"\x66ont-plush \x74ext-[\x31.\x37rem]"}>Support 24/7</h3>
                      <p className={"\x6dt-2 \x74ext-[\x76ar(\x2d-ink-soft)]"}>Our team is available 24/7 to answer your questions and assist you through every step of the adoption process. From choosing your puppy to post-delivery support — we're just a message away.</p>
                    </div>
                  </li>
                  <li className={"\x66lex \x67ap-5"}>
                    <svg viewBox="0 0 64 64" className={"\x73ize-14 \x73hrink-0 \x74ext-toffee-deep"} aria-hidden="true">
                      <path d="M32 54C16 43 8 34 8 24c0-7 5.4-12 12-12 5 0 9 3 12 7 3-4 7-7 12-7 6.6 0 12 5 12 12 0 10-8 19-24 30z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 30h7l3-7 4 13 3-6h7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <h3 className={"\x66ont-plush \x74ext-[\x31.\x37rem]"}>Health guarantee</h3>
                      <p className={"\x6dt-2 \x74ext-[\x76ar(\x2d-ink-soft)]"}>All our puppies come with a verified health certificate from licensed vets. We ensure every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.</p>
                    </div>
                  </li>
                </ul>
              </section>
              <section aria-labelledby="care-title" className={"\x74p-board \x6dt-24 \x67rid \x69tems-center \x67ap-8 \x6dd:\x67rid-cols-[\x31fr_auto] \x6dd:!\x70-12"}>
                <div>
                  <h2 id="care-title" className={"\x66ont-plush \x74ext-big"}>Unique and high quality puppies</h2>
                  <p className={"\x74ext-lede \x6deasure \x6dt-5 \x74ext-cocoa-soft"}>When you choose TeddyPups, you can trust that you're getting a puppy of the highest quality. We also provide guidance and support to new pet owners, offering advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
                  <div className={"\x6dt-8 \x66lex \x66lex-wrap \x67ap-3"}>
                    <a className={"\x62tn \x62tn-whatsapp"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies." rel="noopener noreferrer" target="_blank">Ask us on WhatsApp</a>
                    <a className={"\x62tn \x62tn-ghost"} href="/puppies">See available puppies</a>
                  </div>
                </div>
                <div className={"\x70up-buddy \x6dx-auto \x77-48 \x6dd:\x77-56"} data-facing="left" data-live="">
                  <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, ready to play" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
                    <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(-1.000 1) translate(-150 0)">
                      <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                      <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 1.71) rotate(15 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 1.58) rotate(15 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="256">
                        <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="1">
                          <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
                          <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                          <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                        </g>
                        <g data-p="ff" transform="translate(168 192) rotate(-67)">
                          <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
                          <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                          <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                        </g>
                        <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(-17.09 84 150)" : "rotate(-27.63 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="265">
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
                        <g data-p="fn" transform="translate(186 194) rotate(-73)">
                          <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
                          <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                          <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                        </g>
                      </g>
                      <g data-p="haunch" opacity="0" transform="translate(0 -0.9)">
                        <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                        <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                        <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                      </g>
                      <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(14 29.56) rotate(-13.66 212 100)" : "translate(14 29.37) rotate(0 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="279">
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
                          <g data-p="open" opacity="0">
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
                        <path data-p="happy" d="M186.5 101 Q194 91.5 201.5 101 M222.5 101 Q230 91.5 237.5 101" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="1" />
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
                  <span aria-hidden="true" className={"\x70up-bubble"} data-show="true">hm?</span>
                </div>
              </section>
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
                      <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 0.48) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -0.26) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="0" data-site-import-responsive="614">
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
                        <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(-21.63 84 150)" : "rotate(-19.39 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="623">
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
                      <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 9.72) rotate(15.42 212 100)" : "translate(0 8.61) rotate(4 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="332">
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
                  <span aria-hidden="true" className={"\x70up-bubble"} data-show="false">hm?</span>
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
                <a className={"\x66ont-semibold \x74ext-milk/\x390 \x75nderline-offset-4 \x68over:\x74ext-honey \x68over:\x75nderline"} href="#">How it works</a>
              </li>
              <li>
                <a className={"\x66ont-semibold \x74ext-milk/\x390 \x75nderline-offset-4 \x68over:\x74ext-honey \x68over:\x75nderline"} href="#delivery">Delivery &amp; collection</a>
              </li>
              <li>
                <a className={"\x66ont-semibold \x74ext-milk/\x390 \x75nderline-offset-4 \x68over:\x74ext-honey \x68over:\x75nderline"} href="/faq">FAQ</a>
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
