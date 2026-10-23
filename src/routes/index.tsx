import type { CSSProperties } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { importedSiteHead } from "../lib/imported-site-head";
import capturedCSS from "../styles/pages/index.css?raw";

export const Route = createFileRoute("/")({
  head: () => importedSiteHead("TeddyPups U.A.E. — Premium teacup puppies in Dubai", "Meet premium teacup puppies in Dubai, explore puppy profiles, and connect with TeddyPups U.A.E."),
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
      <header id="site-header" data-scrolled="false" data-hidden="false" data-home="true" className={"\x74p-header \x66ixed \x69nset-x-0 \x74op-0 \x7a-50"}>
        <div className={"\x74p-header__bar \x67utter"}>
          <a aria-label="TeddyPups U.A.E. — home" className={"\x74p-header__brand"} href="/">
            <img alt="" width="56" height="56" className={"\x74p-header__logo"} style={{ color: "transparent" } as unknown as CSSProperties} srcSet="/site-assets/d1d4fb136d39dd7c.webp 1x, /site-assets/8bc7e0140e0212bc.webp 2x" src="/site-assets/8bc7e0140e0212bc.webp" {...({ decoding: "async" } as any)} />
            <span className={"\x66ont-plush \x74p-header__name"}>TeddyPups</span>
          </a>
          <nav aria-label="Main" className={"\x74p-header__nav"}>
            <ul>
              <li>
                <a aria-current="page" className={"\x74p-nav-link"} data-active="true" href="/">
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
                      <a aria-current="page" className={"\x74p-menu-link \x66ont-plush \x62lock \x70y-2 \x74ext-[\x63lamp(\x32.\x34rem,\x311vw,\x33.\x34rem)]"} data-active="true" href="/">
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
        <div className={"\x74p-page"}>
          <div>
            <section data-tone="light" className={"\x74p-scene \x74p-hero"} style={{ "--sky-top": "#fffdf8", "--sky-bottom": "#fff1d8", "--quilt": "#fff1d8" } as unknown as CSSProperties} aria-labelledby="hero-title" data-here="true" data-visited="true">
              <span aria-hidden="true" className={"\x74p-hero__sun"} style={{ translate: "-50% 0%", opacity: "1" } as unknown as CSSProperties} />
              <div className={"\x74p-hero__copy \x67utter"}>
                <p className={"\x74p-hero__note \x66ont-scrawl"}>every puppy is family<svg viewBox="0 0 220 24" preserveAspectRatio="none" className={"\x61bsolute \x2dbottom-2 \x6ceft-0 \x68-3 \x77-full \x74ext-toffee"} aria-hidden="true"><path d="M4 14c18-10 30 8 48-1s28-9 46 0 30 8 48-1 30-9 48 0 18 2 22 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg></p>
                <h1 id="hero-title" className={"\x74p-hero__title \x66ont-plush"}>
                  <span className={"\x74p-hero__line"}>Premium teacup</span>
                  <span className={"\x74p-hero__line \x74p-hero__line--2"}>puppies in Dubai</span>
                </h1>
                <p className={"\x74p-hero__lede"}>Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.</p>
                <div className={"\x74p-hero__actions"}>
                  <a className={"\x62tn \x62tn-primary"} href="/puppies">View available puppies</a>
                  <a className={"\x62tn \x62tn-ghost"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies." rel="noopener noreferrer" target="_blank">Enquire on WhatsApp</a>
                </div>
              </div>
              <div className={"\x74p-hero__stage"}>
                <ul className={"\x74p-lineup"} aria-label="Some of the puppies in our showroom">
                  <li className={"\x74p-lineup__seat"} style={{ "--x": "9%", "--w": "8.6rem", "--peek": "0.62", "--tilt": "-5deg", "--i": "0" } as unknown as CSSProperties}>
                    <a aria-label="Meet Korean Teacup Maltipoo, Korean Teacup Maltipoo" className={"\x74p-lineup__pup"} href="/puppies/korean-teacup-maltipoo-female">
                      <span className={"\x74p-lineup__photo"}>
                        <img alt="Female Korean Teacup Maltipoo puppy" fetchPriority="high" sizes="11rem" srcSet="/site-assets/0d53c224a0587086.webp 32w, /site-assets/3be6495c75dcc424.webp 48w, /site-assets/7790697b4d959b25.webp 64w, /site-assets/7c403a100ffa42f4.webp 96w, /site-assets/078652e64ffdc577.webp 128w, /site-assets/ddfff7ce2e6736fd.webp 256w, /site-assets/9cbcd5c396b5d8e5.webp 384w, /site-assets/4c1c14f37ec40255.webp 640w, /site-assets/45d43dc9c750cc74.webp 750w, /site-assets/ec6e5a1c74a070d0.webp 828w, /site-assets/508a08adf912cdfc.webp 1080w, /site-assets/e6da117c97c06713.webp 1200w, /site-assets/e6da117c97c06713.webp 1920w, /site-assets/e6da117c97c06713.webp 2048w, /site-assets/e6da117c97c06713.webp 3840w" src="/site-assets/e6da117c97c06713.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "52.5% 42.6%", color: "transparent", backgroundColor: "rgb(232, 232, 232)" } as unknown as CSSProperties} {...({ loading: "eager", decoding: "async" } as any)} />
                      </span>
                    </a>
                  </li>
                  <li className={"\x74p-lineup__seat"} style={{ "--x": "22.5%", "--w": "10.4rem", "--peek": "0.8", "--tilt": "3deg", "--i": "1" } as unknown as CSSProperties}>
                    <a aria-label="Meet Korean Teacup Poodle, Korean Teacup Poodle" className={"\x74p-lineup__pup"} data-state="pop" href="/puppies/korean-teacup-poodle-female">
                      <span className={"\x74p-lineup__photo"}>
                        <img alt="Female Korean Teacup Poodle puppy" fetchPriority="high" sizes="11rem" srcSet="/site-assets/f648cc6b5c037018.webp 32w, /site-assets/5c6cbe4cd31e899c.webp 48w, /site-assets/d0f984d7fa4ad861.webp 64w, /site-assets/4e6dec907ef074b8.webp 96w, /site-assets/2de1c01e0b0edec2.webp 128w, /site-assets/9725757bf31f2add.webp 256w, /site-assets/e9fc263e5c689b5a.webp 384w, /site-assets/016dca00d313da5d.webp 640w, /site-assets/ff7947bb8824cb72.webp 750w, /site-assets/e66466ac81fd2204.webp 828w, /site-assets/8cedd9b3f8809baa.webp 1080w, /site-assets/8cedd9b3f8809baa.webp 1200w, /site-assets/8cedd9b3f8809baa.webp 1920w, /site-assets/8cedd9b3f8809baa.webp 2048w, /site-assets/8cedd9b3f8809baa.webp 3840w" src="/site-assets/8cedd9b3f8809baa.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "54.5% 45.7%", color: "transparent", backgroundColor: "rgb(248, 216, 184)" } as unknown as CSSProperties} {...({ loading: "eager", decoding: "async" } as any)} />
                      </span>
                    </a>
                  </li>
                  <li className={"\x74p-lineup__seat"} style={{ "--x": "35%", "--w": "9.2rem", "--peek": "0.7", "--tilt": "-2deg", "--i": "2" } as unknown as CSSProperties}>
                    <a aria-label="Meet Maltipoo, Maltipoo" className={"\x74p-lineup__pup"} href="/puppies/maltipoo-female-2">
                      <span className={"\x74p-lineup__photo"}>
                        <img alt="Female Maltipoo puppy" sizes="11rem" srcSet="/site-assets/e55f0e4d78595105.webp 32w, /site-assets/d670431390017eea.webp 48w, /site-assets/b5882cf8a7c4a92a.webp 64w, /site-assets/db665dcd5d3b4bea.webp 96w, /site-assets/a2d1bd04204179fb.webp 128w, /site-assets/42336a19da5c659d.webp 256w, /site-assets/2b84df3551e24d4a.webp 384w, /site-assets/74a0681f38a68e42.webp 640w, /site-assets/773cfd9406c9f0b9.webp 750w, /site-assets/69215bf60fe02f38.webp 828w, /site-assets/c585109ea25c2e99.webp 1080w, /site-assets/c585109ea25c2e99.webp 1200w, /site-assets/c585109ea25c2e99.webp 1920w, /site-assets/c585109ea25c2e99.webp 2048w, /site-assets/c585109ea25c2e99.webp 3840w" src="/site-assets/c585109ea25c2e99.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "64.6% 42.3%", color: "transparent", backgroundColor: "rgb(8, 8, 8)" } as unknown as CSSProperties} {...({ loading: "eager", decoding: "async" } as any)} />
                      </span>
                    </a>
                  </li>
                  <li className={"\x74p-lineup__seat"} style={{ "--x": "65%", "--w": "9.4rem", "--peek": "0.74", "--tilt": "3deg", "--i": "3" } as unknown as CSSProperties}>
                    <a aria-label="Meet Maltipoo, Maltipoo" className={"\x74p-lineup__pup"} href="/puppies/maltipoo-female-1">
                      <span className={"\x74p-lineup__photo"}>
                        <img alt="Female Maltipoo puppy" sizes="11rem" srcSet="/site-assets/22ba61cfcbdb2d07.webp 32w, /site-assets/948a7afeb6809544.webp 48w, /site-assets/20b365c7e4d2e035.webp 64w, /site-assets/7196aa977758f022.webp 96w, /site-assets/d27332c3b75c20fd.webp 128w, /site-assets/bc09cdcd113ce8f8.webp 256w, /site-assets/89a0347d12a0dfaf.webp 384w, /site-assets/0cae5ea7158b08ab.webp 640w, /site-assets/774d301bcc4f4455.webp 750w, /site-assets/fb050d6997b10afe.webp 828w, /site-assets/2b61e927b79e3ec0.webp 1080w, /site-assets/63dd07fed7cffb5b.webp 1200w, /site-assets/63dd07fed7cffb5b.webp 1920w, /site-assets/63dd07fed7cffb5b.webp 2048w, /site-assets/63dd07fed7cffb5b.webp 3840w" src="/site-assets/63dd07fed7cffb5b.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "47.5% 50.5%", color: "transparent", backgroundColor: "rgb(232, 216, 200)" } as unknown as CSSProperties} {...({ loading: "eager", decoding: "async" } as any)} />
                      </span>
                    </a>
                  </li>
                  <li className={"\x74p-lineup__seat"} style={{ "--x": "77.5%", "--w": "10.6rem", "--peek": "0.82", "--tilt": "-3deg", "--i": "4" } as unknown as CSSProperties}>
                    <a aria-label="Meet Copper, Cavapoo" className={"\x74p-lineup__pup"} href="/puppies/copper-male">
                      <span className={"\x74p-lineup__photo"}>
                        <img alt="Copper, male Cavapoo puppy" sizes="11rem" srcSet="/site-assets/aa38d10a8a6dd7d4.webp 32w, /site-assets/e5b7773de7a24b6c.webp 48w, /site-assets/b373dc7000632b88.webp 64w, /site-assets/fe5f78e0641be69c.webp 96w, /site-assets/d4171fac643ecc5b.webp 128w, /site-assets/aecc98b7702e6581.webp 256w, /site-assets/a32e98561f2bac3c.webp 384w, /site-assets/8a427421c46f0cf3.webp 640w, /site-assets/e5a1adb891d2b6ed.webp 750w, /site-assets/3ef93f7b3503f203.webp 828w, /site-assets/f1970628bd47aa03.webp 1080w, /site-assets/f1970628bd47aa03.webp 1200w, /site-assets/f1970628bd47aa03.webp 1920w, /site-assets/f1970628bd47aa03.webp 2048w, /site-assets/f1970628bd47aa03.webp 3840w" src="/site-assets/f1970628bd47aa03.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "43% 50.5%", color: "transparent", backgroundColor: "rgb(232, 216, 200)" } as unknown as CSSProperties} {...({ loading: "eager", decoding: "async" } as any)} />
                      </span>
                    </a>
                  </li>
                  <li className={"\x74p-lineup__seat"} style={{ "--x": "91%", "--w": "8.4rem", "--peek": "0.6", "--tilt": "4deg", "--i": "5" } as unknown as CSSProperties}>
                    <a aria-label="Meet Shih Tzu, Shih Tzu" className={"\x74p-lineup__pup"} href="/puppies/shitzu-female">
                      <span className={"\x74p-lineup__photo"}>
                        <img alt="Female Shih Tzu puppy" sizes="11rem" srcSet="/site-assets/5029ccf1708abae6.webp 32w, /site-assets/1b2dd3fd34d0ae15.webp 48w, /site-assets/bb632177919a2a43.webp 64w, /site-assets/9af79b345fd10dac.webp 96w, /site-assets/a12cdff4cf93c5ad.webp 128w, /site-assets/7006d1874654ddd4.webp 256w, /site-assets/e5589abca590ae0e.webp 384w, /site-assets/5b46b5598edb0445.webp 640w, /site-assets/99f953783afd4c0a.webp 750w, /site-assets/b4f9dc20910a5663.webp 828w, /site-assets/6502fa9273c179da.webp 1080w, /site-assets/bd0260d67616fa4d.webp 1200w, /site-assets/bd0260d67616fa4d.webp 1920w, /site-assets/bd0260d67616fa4d.webp 2048w, /site-assets/bd0260d67616fa4d.webp 3840w" src="/site-assets/bd0260d67616fa4d.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "44.8% 42.5%", color: "transparent", backgroundColor: "rgb(56, 56, 72)" } as unknown as CSSProperties} {...({ loading: "eager", decoding: "async" } as any)} />
                      </span>
                    </a>
                  </li>
                </ul>
                <ul aria-hidden="true" className={"\x74p-lineup \x74p-lineup--tags"}>
                  <li className={"\x74p-lineup__seat"} style={{ "--x": "9%", "--w": "8.6rem", "--peek": "0.62", "--tilt": "-5deg", "--i": "0" } as unknown as CSSProperties}>
                    <span className={"\x74p-lineup__ghost"}>
                      <span className={"\x74p-lineup__name \x66ont-scrawl"}>Korean Teacup Maltipoo</span>
                    </span>
                  </li>
                  <li className={"\x74p-lineup__seat"} style={{ "--x": "22.5%", "--w": "10.4rem", "--peek": "0.8", "--tilt": "3deg", "--i": "1" } as unknown as CSSProperties}>
                    <span className={"\x74p-lineup__ghost"} data-state="pop" data-tag="show">
                      <span className={"\x74p-lineup__name \x66ont-scrawl"}>Korean Teacup Poodle</span>
                    </span>
                  </li>
                  <li className={"\x74p-lineup__seat"} style={{ "--x": "35%", "--w": "9.2rem", "--peek": "0.7", "--tilt": "-2deg", "--i": "2" } as unknown as CSSProperties}>
                    <span className={"\x74p-lineup__ghost"}>
                      <span className={"\x74p-lineup__name \x66ont-scrawl"}>Maltipoo</span>
                    </span>
                  </li>
                  <li className={"\x74p-lineup__seat"} style={{ "--x": "65%", "--w": "9.4rem", "--peek": "0.74", "--tilt": "3deg", "--i": "3" } as unknown as CSSProperties}>
                    <span className={"\x74p-lineup__ghost"}>
                      <span className={"\x74p-lineup__name \x66ont-scrawl"}>Maltipoo</span>
                    </span>
                  </li>
                  <li className={"\x74p-lineup__seat"} style={{ "--x": "77.5%", "--w": "10.6rem", "--peek": "0.82", "--tilt": "-3deg", "--i": "4" } as unknown as CSSProperties}>
                    <span className={"\x74p-lineup__ghost"}>
                      <span className={"\x74p-lineup__name \x66ont-scrawl"}>Copper</span>
                    </span>
                  </li>
                  <li className={"\x74p-lineup__seat"} style={{ "--x": "91%", "--w": "8.4rem", "--peek": "0.6", "--tilt": "4deg", "--i": "5" } as unknown as CSSProperties}>
                    <span className={"\x74p-lineup__ghost"}>
                      <span className={"\x74p-lineup__name \x66ont-scrawl"}>Shih Tzu</span>
                    </span>
                  </li>
                </ul>
                <span aria-hidden="true" className={"\x74p-lineup__wings"}>
                  <img alt="" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "44.7% 29.5%", color: "transparent", backgroundColor: "rgb(184, 168, 168)" } as unknown as CSSProperties} sizes="11rem" srcSet="/site-assets/3d9845081d042f99.webp 256w, /site-assets/1b810a3e73e1d72d.webp 384w, /site-assets/2022a8b5d775a2eb.webp 640w, /site-assets/51f59928224a4b68.webp 750w, /site-assets/1c519396c59ec81e.webp 828w, /site-assets/84d3163c59ce7ee8.webp 1080w, /site-assets/84d3163c59ce7ee8.webp 1200w, /site-assets/84d3163c59ce7ee8.webp 1920w, /site-assets/84d3163c59ce7ee8.webp 2048w, /site-assets/84d3163c59ce7ee8.webp 3840w" src="/site-assets/84d3163c59ce7ee8.webp" {...({ loading: "eager", decoding: "async" } as any)} />
                </span>
                <div data-facing="right" data-act="peekaboo" data-lane="true" className={"\x70up-stop \x74p-hero__teddy"}>
                  <div className={"\x70up-buddy "} data-facing="right" data-live="">
                    <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, the TeddyPups puppy, peeking over the quilt" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
                      <g data-p="root">
                        <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                        <g data-p="body" transform="translate(0 0) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)" opacity="0">
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
                          <g data-p="tail" transform="rotate(-20 84 150)">
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
                        <g data-p="head" transform="translate(0 4) rotate(0 212 100)">
                          <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                          <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
                          <path data-p="earL" d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(-6 174 82)" />
                          <path data-p="earR" d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" transform="rotate(6 250 82)" />
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
                        <g data-p="ledge" opacity="1">
                          <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                          <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                        </g>
                      </g>
                    </svg>
                    <span aria-hidden="true" className={"\x70up-bubble"} data-show="false" />
                  </div>
                </div>
                <div aria-hidden="true" className={"\x74p-quilt"}>
                  <svg className={"\x74p-quilt__edge"} preserveAspectRatio="none" {...({ width: "100%", height: "40" } as any)}>
                    <defs>
                      <pattern id="tp-scallop" patternUnits="userSpaceOnUse" {...({ width: "76", height: "40" } as any)}>
                        <path d="M0 40V27A38 25 0 0 1 76 27V40Z" style={{ fill: "var(--quilt)" } as unknown as CSSProperties} />
                        <path d="M0 27A38 25 0 0 1 76 27" fill="none" stroke="#2a170e" strokeWidth="3" />
                        <path d="M11 33A27 19 0 0 1 65 33" fill="none" stroke="#2a170e" strokeWidth="1.6" strokeDasharray="3.5 5.5" strokeLinecap="round" opacity=".42" />
                      </pattern>
                    </defs>
                    <rect fill="url(#tp-scallop)" {...({ width: "100%", height: "40" } as any)} />
                  </svg>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section data-tone="light" className={"\x74p-scene \x74p-meet"} style={{ "--sky-top": "#fff1d8", "--sky-bottom": "#fbe3b4" } as unknown as CSSProperties} aria-labelledby="meet-title" data-here="false" data-visited="false" data-pinned="true">
              <div style={{ "--pinned": "1", height: "calc(3418px + 100vh)" } as unknown as CSSProperties} data-site-import-responsive="101">
                <div className={"\x74p-meet__stage"}>
                  <header className={"\x74p-meet__head \x67utter"}>
                    <div>
                      <h2 id="meet-title" className={"\x66ont-plush \x74ext-huge"}>Meet the pups</h2>
                      <p className={"\x74ext-lede \x6dt-3 \x6dax-w-[\x344ch] \x74ext-[\x76ar(\x2d-ink-soft)]"}>Real puppies, real photos, looking for their families right now.</p>
                    </div>
                    <a className={"\x62tn \x62tn-primary \x73hrink-0"} href="/puppies">See all available puppies</a>
                  </header>
                  <div className={"\x74p-meet__hall"} style={{ "--door-w": "230px", "--floor-x": "0.0px" } as unknown as CSSProperties}>
                    <ol className={"\x74p-meet__track"} aria-label="Puppies looking for a family" style={{ transform: "none" } as unknown as CSSProperties}>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/maltipoo-max-male" style={{ "--door": "#a24a1a" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Max</span>
                            <span className={"\x74p-door__meta"}>Maltipoo, {/*  */}boy{/*  */}, 3 months{/*  */}, with video</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt="Max, male Maltipoo puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "53.8% 44.3%", color: "transparent", backgroundColor: "rgb(120, 88, 56)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/ed24319fc2d6d47b.webp 384w, /site-assets/cea209d15304b1ea.webp 640w, /site-assets/cea209d15304b1ea.webp 750w, /site-assets/cea209d15304b1ea.webp 828w, /site-assets/cea209d15304b1ea.webp 1080w, /site-assets/cea209d15304b1ea.webp 1200w, /site-assets/cea209d15304b1ea.webp 1920w, /site-assets/cea209d15304b1ea.webp 2048w, /site-assets/cea209d15304b1ea.webp 3840w" src="/site-assets/cea209d15304b1ea.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/korean-teacup-maltipoo-female" style={{ "--door": "#5a3a28" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Korean Teacup Maltipoo</span>
                            <span className={"\x74p-door__meta"}>girl{/*  */}, 2 months{/*  */}, with video</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt="Female Korean Teacup Maltipoo puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "52.5% 42.6%", color: "transparent", backgroundColor: "rgb(232, 232, 232)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/9cbcd5c396b5d8e5.webp 384w, /site-assets/4c1c14f37ec40255.webp 640w, /site-assets/45d43dc9c750cc74.webp 750w, /site-assets/ec6e5a1c74a070d0.webp 828w, /site-assets/508a08adf912cdfc.webp 1080w, /site-assets/e6da117c97c06713.webp 1200w, /site-assets/e6da117c97c06713.webp 1920w, /site-assets/e6da117c97c06713.webp 2048w, /site-assets/e6da117c97c06713.webp 3840w" src="/site-assets/e6da117c97c06713.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/korean-teacup-poodle-female" style={{ "--door": "#d4893f" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Korean Teacup Poodle</span>
                            <span className={"\x74p-door__meta"}>girl{/*  */}, 2 months</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt="Female Korean Teacup Poodle puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "54.5% 45.7%", color: "transparent", backgroundColor: "rgb(248, 216, 184)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/e9fc263e5c689b5a.webp 384w, /site-assets/016dca00d313da5d.webp 640w, /site-assets/ff7947bb8824cb72.webp 750w, /site-assets/e66466ac81fd2204.webp 828w, /site-assets/8cedd9b3f8809baa.webp 1080w, /site-assets/8cedd9b3f8809baa.webp 1200w, /site-assets/8cedd9b3f8809baa.webp 1920w, /site-assets/8cedd9b3f8809baa.webp 2048w, /site-assets/8cedd9b3f8809baa.webp 3840w" src="/site-assets/8cedd9b3f8809baa.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/maltipoo-cavapoo-male" style={{ "--door": "#b8644a" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Maltipoo &amp; Cavapoo</span>
                            <span className={"\x74p-door__meta"}>boy{/*  */}, 3 months Maltipoo &amp; 2 months Cavapoo{/*  */}, with video</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt={"Male Maltipoo & Cavapoo puppy"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "44.7% 29.5%", color: "transparent", backgroundColor: "rgb(184, 168, 168)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/1b810a3e73e1d72d.webp 384w, /site-assets/2022a8b5d775a2eb.webp 640w, /site-assets/51f59928224a4b68.webp 750w, /site-assets/1c519396c59ec81e.webp 828w, /site-assets/84d3163c59ce7ee8.webp 1080w, /site-assets/84d3163c59ce7ee8.webp 1200w, /site-assets/84d3163c59ce7ee8.webp 1920w, /site-assets/84d3163c59ce7ee8.webp 2048w, /site-assets/84d3163c59ce7ee8.webp 3840w" src="/site-assets/84d3163c59ce7ee8.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/toy-poodle-male-female" style={{ "--door": "#7a4a2e" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Toy Poodle</span>
                            <span className={"\x74p-door__meta"}>boy &amp; girl{/*  */}, 2 months</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt="Toy Poodle puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "65.4% 44.7%", color: "transparent", backgroundColor: "rgb(200, 200, 200)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/e044a70a3a004eb1.webp 384w, /site-assets/f63b0bba34ac4783.webp 640w, /site-assets/8aed8cd0f310b488.webp 750w, /site-assets/18aa6646585581f5.webp 828w, /site-assets/dc625c548157bb50.webp 1080w, /site-assets/dc625c548157bb50.webp 1200w, /site-assets/dc625c548157bb50.webp 1920w, /site-assets/dc625c548157bb50.webp 2048w, /site-assets/dc625c548157bb50.webp 3840w" src="/site-assets/dc625c548157bb50.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/maltipoo-female-2" style={{ "--door": "#a24a1a" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Maltipoo</span>
                            <span className={"\x74p-door__meta"}>girl{/*  */}, 3 months{/*  */}, with video</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt="Female Maltipoo puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "64.6% 42.3%", color: "transparent", backgroundColor: "rgb(8, 8, 8)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/2b84df3551e24d4a.webp 384w, /site-assets/74a0681f38a68e42.webp 640w, /site-assets/773cfd9406c9f0b9.webp 750w, /site-assets/69215bf60fe02f38.webp 828w, /site-assets/c585109ea25c2e99.webp 1080w, /site-assets/c585109ea25c2e99.webp 1200w, /site-assets/c585109ea25c2e99.webp 1920w, /site-assets/c585109ea25c2e99.webp 2048w, /site-assets/c585109ea25c2e99.webp 3840w" src="/site-assets/c585109ea25c2e99.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/pomeranian-female" style={{ "--door": "#5a3a28" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Pomeranian</span>
                            <span className={"\x74p-door__meta"}>girl{/*  */}, 3 months</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt="Female Pomeranian puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "40.3% 44.3%", color: "transparent", backgroundColor: "rgb(8, 8, 8)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/010fc746027c598a.webp 384w, /site-assets/c8b6168af0d0bce1.webp 640w, /site-assets/8e30a1b23199a315.webp 750w, /site-assets/8e30a1b23199a315.webp 828w, /site-assets/8e30a1b23199a315.webp 1080w, /site-assets/8e30a1b23199a315.webp 1200w, /site-assets/8e30a1b23199a315.webp 1920w, /site-assets/8e30a1b23199a315.webp 2048w, /site-assets/8e30a1b23199a315.webp 3840w" src="/site-assets/8e30a1b23199a315.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/copper-male" style={{ "--door": "#d4893f" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Copper</span>
                            <span className={"\x74p-door__meta"}>Cavapoo, {/*  */}boy{/*  */}, 2 months</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt="Copper, male Cavapoo puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "43% 50.5%", color: "transparent", backgroundColor: "rgb(232, 216, 200)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/a32e98561f2bac3c.webp 384w, /site-assets/8a427421c46f0cf3.webp 640w, /site-assets/e5a1adb891d2b6ed.webp 750w, /site-assets/3ef93f7b3503f203.webp 828w, /site-assets/f1970628bd47aa03.webp 1080w, /site-assets/f1970628bd47aa03.webp 1200w, /site-assets/f1970628bd47aa03.webp 1920w, /site-assets/f1970628bd47aa03.webp 2048w, /site-assets/f1970628bd47aa03.webp 3840w" src="/site-assets/f1970628bd47aa03.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/shitzu-female" style={{ "--door": "#b8644a" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Shih Tzu</span>
                            <span className={"\x74p-door__meta"}>girl{/*  */}, 2 months</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt="Female Shih Tzu puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "44.8% 42.5%", color: "transparent", backgroundColor: "rgb(56, 56, 72)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/e5589abca590ae0e.webp 384w, /site-assets/5b46b5598edb0445.webp 640w, /site-assets/99f953783afd4c0a.webp 750w, /site-assets/b4f9dc20910a5663.webp 828w, /site-assets/6502fa9273c179da.webp 1080w, /site-assets/bd0260d67616fa4d.webp 1200w, /site-assets/bd0260d67616fa4d.webp 1920w, /site-assets/bd0260d67616fa4d.webp 2048w, /site-assets/bd0260d67616fa4d.webp 3840w" src="/site-assets/bd0260d67616fa4d.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/shitzu-male" style={{ "--door": "#7a4a2e" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Shih Tzu</span>
                            <span className={"\x74p-door__meta"}>boy{/*  */}, 2 months</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt="Male Shih Tzu puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "40.3% 43.6%", color: "transparent", backgroundColor: "rgb(120, 120, 136)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/d832c4742ed50990.webp 384w, /site-assets/9736cd7538ac69e9.webp 640w, /site-assets/3da2896bfd87eb3e.webp 750w, /site-assets/9ecee67ccd036767.webp 828w, /site-assets/ae6c9735def77a56.webp 1080w, /site-assets/9b9a072342b8d292.webp 1200w, /site-assets/9b9a072342b8d292.webp 1920w, /site-assets/9b9a072342b8d292.webp 2048w, /site-assets/9b9a072342b8d292.webp 3840w" src="/site-assets/9b9a072342b8d292.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/maltipoo-female-1" style={{ "--door": "#a24a1a" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Maltipoo</span>
                            <span className={"\x74p-door__meta"}>girl{/*  */}, 2.5 months</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt="Female Maltipoo puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "47.5% 50.5%", color: "transparent", backgroundColor: "rgb(232, 216, 200)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/89a0347d12a0dfaf.webp 384w, /site-assets/0cae5ea7158b08ab.webp 640w, /site-assets/774d301bcc4f4455.webp 750w, /site-assets/fb050d6997b10afe.webp 828w, /site-assets/2b61e927b79e3ec0.webp 1080w, /site-assets/63dd07fed7cffb5b.webp 1200w, /site-assets/63dd07fed7cffb5b.webp 1920w, /site-assets/63dd07fed7cffb5b.webp 2048w, /site-assets/63dd07fed7cffb5b.webp 3840w" src="/site-assets/63dd07fed7cffb5b.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/maltipoo-female" style={{ "--door": "#5a3a28" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Maltipoo</span>
                            <span className={"\x74p-door__meta"}>girl{/*  */}, 2 months</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt="Female Maltipoo puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "56.9% 49.2%", color: "transparent", backgroundColor: "rgb(232, 216, 200)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/fd3aa479796ec906.webp 384w, /site-assets/d79b99b2bf818b01.webp 640w, /site-assets/b29d97f6fa7d128b.webp 750w, /site-assets/feef0e5a4832b232.webp 828w, /site-assets/2401d8614a263e40.webp 1080w, /site-assets/5f0ddf00c5c12f99.webp 1200w, /site-assets/5f0ddf00c5c12f99.webp 1920w, /site-assets/5f0ddf00c5c12f99.webp 2048w, /site-assets/5f0ddf00c5c12f99.webp 3840w" src="/site-assets/5f0ddf00c5c12f99.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/korean-teacup-pomeranian-1" style={{ "--door": "#d4893f" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Korean Teacup Pomeranian</span>
                            <span className={"\x74p-door__meta"}>girl{/*  */}, 2 months</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt="Female Korean Teacup Pomeranian puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "49.9% 51.3%", color: "transparent", backgroundColor: "rgb(216, 216, 216)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/cb12154f07f59420.webp 384w, /site-assets/e77abdd0f0fe886b.webp 640w, /site-assets/f6ff05a02066760f.webp 750w, /site-assets/38233d23ebfd8e64.webp 828w, /site-assets/ee08a190d5396295.webp 1080w, /site-assets/ee08a190d5396295.webp 1200w, /site-assets/ee08a190d5396295.webp 1920w, /site-assets/ee08a190d5396295.webp 2048w, /site-assets/ee08a190d5396295.webp 3840w" src="/site-assets/ee08a190d5396295.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/korean-teacup-pomeranian" style={{ "--door": "#b8644a" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Korean Teacup Pomeranian</span>
                            <span className={"\x74p-door__meta"}>girl{/*  */}, 2 months</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt="Female Korean Teacup Pomeranian puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "49.9% 48.6%", color: "transparent", backgroundColor: "rgb(72, 72, 72)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/b44e5054957c362a.webp 384w, /site-assets/0e623a5182a80bbb.webp 640w, /site-assets/a578504af6320a72.webp 3840w" src="/site-assets/a578504af6320a72.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies/korean-teacup-pomeranian-male" style={{ "--door": "#7a4a2e" } as unknown as CSSProperties}>
                          <span className={"\x74p-door__plate"}>
                            <span className={"\x66ont-plush \x74p-door__name"}>Korean Teacup Pomeranian</span>
                            <span className={"\x74p-door__meta"}>boy{/*  */}, 2 months</span>
                          </span>
                          <span className={"\x74p-door__frame"}>
                            <span className={"\x74p-door__room"}>
                              <img alt="Male Korean Teacup Pomeranian puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "48.9% 44.1%", color: "transparent", backgroundColor: "rgb(8, 8, 8)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 15rem, 44vw" srcSet="/site-assets/0951a4abeb13cfd4.webp 384w, /site-assets/aed90b4f03b25a5c.webp 3840w" src="/site-assets/aed90b4f03b25a5c.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span aria-hidden="true" className={"\x74p-door__way"}>
                              <span className={"\x74p-door__leaf"}>
                                <svg viewBox="0 0 64 64" className={"\x74p-door__peephole"} aria-hidden="true" fill="currentColor">
                                  <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                                </svg>
                                <span className={"\x74p-door__knob"} />
                              </span>
                            </span>
                            <span className={"\x74p-door__tag \x66ont-scrawl"}>Available</span>
                          </span>
                        </a>
                      </li>
                      <li className={"\x74p-door \x74p-door--all"} data-open="false">
                        <a className={"\x74p-door__link"} href="/puppies">
                          <span className={"\x74p-door__frame \x74p-door__frame--all"}>
                            <span className={"\x66ont-plush \x74p-door__all"}>Meet them all</span>
                          </span>
                        </a>
                      </li>
                    </ol>
                    <div aria-hidden="true" className={"\x74p-meet__floor"} />
                    <div data-facing="right" className={"\x70up-stop \x74p-meet__teddy"} data-act="treadmill">
                      <div className={"\x70up-buddy "} data-facing="right" data-live="">
                        <svg viewBox="0 0 300 240" aria-hidden="true" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
                          <g data-p="root">
                            <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -2) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 0) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="922">
                              <g data-p="bf" transform="translate(94 192) rotate(0)" opacity="1">
                                <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
                                <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                                <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                              </g>
                              <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(168 192) rotate(24)" : "translate(168 192) rotate(0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="ff" data-site-import-responsive="927">
                                <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
                                <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                                <path d="M-3.5 29 v5 M4.5 29 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                              </g>
                              <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(34 84 150)" : "rotate(-6 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="931">
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
                              <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(186 194) rotate(24)" : "translate(186 194) rotate(0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="fn" data-site-import-responsive="941">
                                <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
                                <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                                <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                              </g>
                            </g>
                            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 1.44)" : "translate(0 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="haunch" opacity="0" data-site-import-responsive="945">
                              <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                              <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                              <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                            </g>
                            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(-10 -6) rotate(0 212 100)" : "translate(0 0) rotate(0 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="949">
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
                        <span aria-hidden="true" className={"\x70up-bubble"} data-show="false" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section data-tone="light" className={"\x74p-scene \x74p-paths"} style={{ "--sky-top": "#fbe3b4", "--sky-bottom": "#f7d18d" } as unknown as CSSProperties} aria-labelledby="paths-title" data-here="false" data-visited="false">
              <div className={"\x67utter \x6dx-auto \x6dax-w-[\x3110rem]"}>
                <h2 id="paths-title" className={"\x74p-paths__title \x66ont-plush \x74ext-huge"}>Two ways to meet your puppy</h2>
                <div className={"\x74p-fork"}>
                  <div aria-hidden="true" className={"\x74p-fork__post"} />
                  <article className={"\x74p-way \x74p-way--left"} aria-labelledby="way-local">
                    <h3 id="way-local" className={"\x74p-sign \x74p-sign--left \x66ont-plush"}>Puppies in Dubai</h3>
                    <div className={"\x74p-way__scene"}>
                      <svg viewBox="0 0 300 120" className={"\x74p-way__skyline"} aria-hidden="true">
                        <path d="M4 116h292M20 116V78h16v38M44 116V60h18v56M70 116V84h12v32M150 116V36l4-6v-14l3-4 3 4v14l4 6v80M118 116V70l12-8v54M174 116V64l14 8v44M200 116V82h18v34M226 116V56h14v60M248 116V88h22v28" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <figure className={"\x74p-window"}>
                        <span className={"\x74p-window__glass"}>
                          <img alt="A tiny apricot teddy bear puppy held up in the TeddyPups showroom" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "54.3% 48.3%", color: "transparent", backgroundColor: "rgb(104, 88, 72)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 16rem, 60vw" srcSet="/site-assets/a28e859b4efaf4d9.webp 384w, /site-assets/f891fe1679b4a46d.webp 3840w" src="/site-assets/f891fe1679b4a46d.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                        </span>
                        <figcaption className={"\x66ont-scrawl"}>In our showroom</figcaption>
                      </figure>
                    </div>
                    <p className={"\x74p-way__text"}>See them, love them, take them home. Come meet our locally available puppies before you decide.</p>
                    <a className={"\x62tn \x62tn-primary"} href="/puppies?origin=local">Meet local puppies</a>
                  </article>
                  <article className={"\x74p-way \x74p-way--right"} aria-labelledby="way-imported">
                    <h3 id="way-imported" className={"\x74p-sign \x74p-sign--right \x66ont-plush"}>Imported for you</h3>
                    <div className={"\x74p-way__scene"}>
                      <div className={"\x74p-flight"}>
                        <svg viewBox="0 0 660 300" role="img" aria-label="A plane bringing a Korean Teacup Maltipoo puppy from Korea to Dubai">
                          <defs>
                            <clipPath id="_R_jieankivb_">
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
                            <g transform="translate(10 2)">
                              <image x="-25" y="-25" clipPath="url(#_R_jieankivb_)" preserveAspectRatio="xMidYMid slice" {...({ href: "/site-assets/078652e64ffdc577.webp", width: "50", height: "50" } as any)} />
                              <circle r="25" className={"\x74p-flight__porthole"} />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <p className={"\x74p-way__text"}>Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import.</p>
                    <a className={"\x62tn \x62tn-primary"} href="/puppies?origin=imported">See imported puppies</a>
                  </article>
                  <div data-facing="right" className={"\x70up-stop \x74p-fork__teddy"}>
                    <div className={"\x70up-buddy "} data-facing="right" data-live="">
                      <svg viewBox="0 0 300 240" aria-hidden="true" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
                        <g data-p="root">
                          <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                          <g data-p="body" transform="translate(0 -2) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" opacity="1">
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
                            <g data-p="tail" transform="rotate(34 84 150)">
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
                          <g data-p="head" transform="translate(-10 -6) rotate(0 212 100)">
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
                      <span aria-hidden="true" className={"\x70up-bubble"} data-show="false" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section data-tone="light" className={"\x74p-scene \x74p-chat"} style={{ "--sky-top": "#f7d18d", "--sky-bottom": "#f0b866" } as unknown as CSSProperties} aria-labelledby="journey-title" data-here="false" data-visited="false">
              <div className={"\x74p-chat__grid \x67utter"}>
                <div className={"\x74p-chat__story"}>
                  <h2 id="journey-title" className={"\x66ont-plush \x74ext-huge"}>Your puppy journey</h2>
                  <p className={"\x74ext-lede \x6dt-5 \x6dax-w-[\x342ch] \x74ext-[\x76ar(\x2d-ink-soft)]"}>A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.</p>
                  <ol className={"\x74p-chat__steps"}>
                    <li className={"\x74p-chat__step"} data-done="true">
                      <span className={"\x74p-chat__num \x66ont-plush"} aria-hidden="true">1</span>
                      <h3 className={"\x66ont-plush \x74p-chat__title"}>Choose your breed</h3>
                      <p className={"\x74p-chat__text"}>Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.</p>
                    </li>
                    <li className={"\x74p-chat__step"} data-active="true">
                      <span className={"\x74p-chat__num \x66ont-plush"} aria-hidden="true">2</span>
                      <h3 className={"\x66ont-plush \x74p-chat__title"}>Get photos &amp; details</h3>
                      <p className={"\x74p-chat__text"}>Our team will share real photos, health details, and all necessary information directly on WhatsApp.</p>
                    </li>
                    <li className={"\x74p-chat__step"}>
                      <span className={"\x74p-chat__num \x66ont-plush"} aria-hidden="true">3</span>
                      <h3 className={"\x66ont-plush \x74p-chat__title"}>Secure &amp; safe delivery</h3>
                      <p className={"\x74p-chat__text"}>Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.</p>
                    </li>
                  </ol>
                  <a className={"\x62tn \x62tn-ghost \x74p-chat__cta"} href="/how-it-works">How it works</a>
                </div>
                <div className={"\x74p-chat__side"}>
                  <div className={"\x74p-phone"} aria-label="A WhatsApp conversation with TeddyPups U.A.E." role="group">
                    <div className={"\x74p-phone__bar"}>
                      <img alt="" width="40" height="40" className={"\x74p-phone__avatar"} style={{ color: "transparent" } as unknown as CSSProperties} srcSet="/site-assets/4a769ca448ac39ad.webp 1x, /site-assets/7da4412f54d79d4e.webp 2x" src="/site-assets/7da4412f54d79d4e.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                      <span>
                        <span className={"\x74p-phone__name"}>TeddyPups U.A.E.</span>
                        <span className={"\x74p-phone__status"}>online</span>
                      </span>
                    </div>
                    <div className={"\x74p-phone__screen"}>
                      <p className={"\x74p-msg \x74p-msg--me"}>Hi TeddyPups! I'd love to know more about your puppies.</p>
                      <div className={"\x74p-msg-group"} data-show="true">
                        <div className={"\x74p-msg \x74p-msg--them"} style={{ translate: "0px", opacity: "1", scale: "1" } as unknown as CSSProperties}>
                          <p>Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.</p>
                          <ul className={"\x74p-chips"} aria-label="Breeds we have now">
                            <li>
                              <a href="/puppies?breed=maltipoo">Maltipoo</a>
                            </li>
                            <li>
                              <a href="/puppies?breed=pomeranian">Pomeranian</a>
                            </li>
                            <li>
                              <a href="/puppies?breed=poodle">Poodle</a>
                            </li>
                            <li>
                              <a href="/puppies?breed=cavapoo">Cavapoo</a>
                            </li>
                            <li>
                              <a href="/puppies?breed=shih-tzu">Shih Tzu</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className={"\x74p-msg-group"} data-show="true">
                        <div className={"\x74p-msg \x74p-msg--them \x74p-msg--media"} style={{ translate: "0px", opacity: "1", scale: "1" } as unknown as CSSProperties}>
                          <div className={"\x74p-snaps"}>
                            <span className={"\x74p-snaps__one"}>
                              <img alt="A tiny apricot teddy bear puppy held up in the TeddyPups showroom" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "54.3% 48.3%", color: "transparent", backgroundColor: "rgb(104, 88, 72)" } as unknown as CSSProperties} sizes="9rem" srcSet="/site-assets/6e8f6905d14de102.webp 256w, /site-assets/a28e859b4efaf4d9.webp 384w, /site-assets/f891fe1679b4a46d.webp 3840w" src="/site-assets/f891fe1679b4a46d.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span className={"\x74p-snaps__one"}>
                              <img alt="The apricot teddy bear puppy from our showroom, close up" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "46% 44.4%", color: "transparent", backgroundColor: "rgb(104, 88, 72)" } as unknown as CSSProperties} sizes="9rem" srcSet="/site-assets/c5e42d94bcaff0e0.webp 256w, /site-assets/440b00dd172c464b.webp 3840w" src="/site-assets/440b00dd172c464b.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span className={"\x74p-snaps__one"}>
                              <img alt="The apricot teddy bear puppy from our showroom, looking up" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "43.7% 40.2%", color: "transparent", backgroundColor: "rgb(8, 8, 24)" } as unknown as CSSProperties} sizes="9rem" srcSet="/site-assets/4765ff93716cb484.webp 256w, /site-assets/f16e5c86e65c38fe.webp 3840w" src="/site-assets/f16e5c86e65c38fe.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                            <span className={"\x74p-snaps__one"}>
                              <img alt="The apricot teddy bear puppy from our showroom, held up to say hello" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "45.3% 44.4%", color: "transparent", backgroundColor: "rgb(104, 88, 72)" } as unknown as CSSProperties} sizes="9rem" srcSet="/site-assets/887fe4ffab051ce8.webp 256w, /site-assets/ba3bc6469eced52b.webp 3840w" src="/site-assets/ba3bc6469eced52b.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                            </span>
                          </div>
                        </div>
                        <div className={"\x74p-msg \x74p-msg--them \x74p-msg--media"} style={{ translate: "0px 1.77636e-15px", opacity: "1", scale: "1" } as unknown as CSSProperties}>
                          <div className={"\x74p-clip"}>
                            <img aria-label="Video of a tiny apricot teddy bear puppy in the TeddyPups showroom" src="/site-assets/6cf450feccdd7f32.png" alt="Video of a tiny apricot teddy bear puppy in the TeddyPups showroom" />
                            <button type="button" className={"\x74p-clip__play"} aria-pressed="false" aria-label="Play video">
                              <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <p className={"\x74p-msg \x74p-msg--them"} style={{ translate: "0px", opacity: "1", scale: "1" } as unknown as CSSProperties}>Our team will share real photos, health details, and all necessary information directly on WhatsApp.</p>
                      </div>
                      <div className={"\x74p-msg-group"} data-show="false">
                        <div className={"\x74p-msg \x74p-msg--them"}>
                          <p>Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.</p>
                          <svg viewBox="0 0 220 70" className={"\x74p-route"} aria-hidden="true">
                            <path d="M14 52 C 60 6, 120 70, 170 28" className={"\x74p-route__line"} />
                            <circle cx="14" cy="52" r="5" className={"\x74p-route__dot"} />
                            <path d="M164 32 l12 -12 l12 12 v14 h-24 z" className={"\x74p-route__home"} />
                            <path d="M176 42 c-2-3-7-2-6 2c1 3 6 5 6 5s5-2 6-5c1-4-4-5-6-2z" className={"\x74p-route__heart"} />
                            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" transform="translate(70 22) scale(.3) rotate(70 32 32)" className={"\x74p-route__paw"} />
                            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" transform="translate(104 38) scale(.3) rotate(100 32 32)" className={"\x74p-route__paw"} />
                          </svg>
                        </div>
                      </div>
                      <p className={"\x74p-typing"} data-show="false" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                      </p>
                    </div>
                    <a className={"\x74p-phone__compose"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies." rel="noopener noreferrer" target="_blank">
                      <span>Say hello on WhatsApp</span>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 20l18-8L3 4v6l12 2-12 2z" />
                      </svg>
                    </a>
                  </div>
                  <div data-facing="right" className={"\x70up-stop \x74p-chat__teddy"}>
                    <div className={"\x70up-buddy "} data-facing="right" data-live="">
                      <svg viewBox="0 0 300 240" aria-hidden="true" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
                        <g data-p="root">
                          <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                          <g data-p="body" transform="translate(0 -2) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" opacity="1">
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
                            <g data-p="tail" transform="rotate(34 84 150)">
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
                          <g data-p="head" transform="translate(-10 -6) rotate(0 212 100)">
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
                      <span aria-hidden="true" className={"\x70up-bubble"} data-show="false" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section data-tone="light" className={"\x74p-scene \x74p-passport"} style={{ "--sky-top": "#f0b866", "--sky-bottom": "#a65a30" } as unknown as CSSProperties} aria-labelledby="trust-title" data-here="false" data-visited="false">
              <div className={"\x67utter \x6dx-auto \x6dax-w-[\x396rem]"}>
                <div className={"\x74p-book"}>
                  <div className={"\x74p-book__page \x74p-book__page--left"}>
                    <p aria-hidden="true" className={"\x74p-book__kicker \x66ont-scrawl"}>puppy passport</p>
                    <h2 id="trust-title" className={"\x66ont-plush \x74p-book__title"}>Why families trust TeddyPups</h2>
                    <div data-facing="right" className={"\x70up-stop \x74p-book__teddy"}>
                      <div className={"\x70up-buddy "} data-facing="right" data-live="">
                        <svg viewBox="0 0 300 240" aria-hidden="true" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
                          <g data-p="root">
                            <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                            <g data-p="body" transform="translate(0 -2) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" opacity="1">
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
                              <g data-p="tail" transform="rotate(34 84 150)">
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
                            <g data-p="head" transform="translate(-10 -6) rotate(0 212 100)">
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
                        <span aria-hidden="true" className={"\x70up-bubble"} data-show="false" />
                      </div>
                    </div>
                  </div>
                  <ul className={"\x74p-book__page \x74p-book__page--right"}>
                    <li className={"\x74p-entry"} style={{ "--ink-stamp": "#a24a1a", "--tilt": "-8deg", "--i": "0" } as unknown as CSSProperties}>
                      <span className={"\x74p-stamp \x74p-stamp--round"}>
                        <svg viewBox="0 0 64 64" className={"\x74p-stamp__icon"} aria-hidden="true">
                          <path d="M32 54C16 43 8 34 8 24c0-7 5.4-12 12-12 5 0 9 3 12 7 3-4 7-7 12-7 6.6 0 12 5 12 12 0 10-8 19-24 30z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M22 30h7l3-7 4 13 3-6h7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={"\x74p-stamp__title \x66ont-plush"}>Vet-checked &amp; healthy</span>
                      </span>
                      <p className={"\x74p-entry__text"}>Every puppy comes vaccinated, dewormed, and with a verified health certificate.</p>
                    </li>
                    <li className={"\x74p-entry"} style={{ "--ink-stamp": "#1f6b45", "--tilt": "5deg", "--i": "1" } as unknown as CSSProperties}>
                      <span className={"\x74p-stamp \x74p-stamp--ticket"}>
                        <svg viewBox="0 0 64 64" className={"\x74p-stamp__icon"} aria-hidden="true">
                          <path d="M6 36l22-3 12-17h6l-6 17 12-1 6-7h3l-2 10 2 10h-3l-6-7-12-1 6 17h-6L28 37 6 36z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 50c10 4 20 4 30 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 7" />
                        </svg>
                        <span className={"\x74p-stamp__title \x66ont-plush"}>Korea to Dubai, safely</span>
                      </span>
                      <p className={"\x74p-entry__text"}>Trusted breeders, safe travel, and premium care from start to finish.</p>
                    </li>
                    <li className={"\x74p-entry"} style={{ "--ink-stamp": "#5a3a28", "--tilt": "-4deg", "--i": "2" } as unknown as CSSProperties}>
                      <span className={"\x74p-stamp \x74p-stamp--oval"}>
                        <svg viewBox="0 0 64 64" className={"\x74p-stamp__icon"} aria-hidden="true">
                          <path d="M10 14h44v28H30l-12 10v-10h-8z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M22 28h0M32 28h0M42 28h0" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={"\x74p-stamp__title \x66ont-plush"}>Support 24/7</span>
                      </span>
                      <p className={"\x74p-entry__text"}>Always here to help, from choosing your puppy to post-delivery support.</p>
                    </li>
                    <li className={"\x74p-entry"} style={{ "--ink-stamp": "#c2622b", "--tilt": "7deg", "--i": "3" } as unknown as CSSProperties}>
                      <span className={"\x74p-stamp \x74p-stamp--scallop"}>
                        <svg viewBox="0 0 64 64" className={"\x74p-stamp__icon"} aria-hidden="true">
                          <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10 32h44M32 10c-8 8-8 36 0 44M32 10c8 8 8 36 0 44" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={"\x74p-stamp__title \x66ont-plush"}>Trusted by families worldwide</span>
                      </span>
                      <p className={"\x74p-entry__text"}>Puppies delivered to loving homes all around the world.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div aria-hidden="true" className={"\x74p-horizon"}>
                <span className={"\x74p-horizon__sun"} />
                <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className={"\x74p-horizon__city"}>
                  <path d="M0 160V118h34v-14h22v-22h30v34h18V96h26v30h22v-18h16v-30h34v40h20V70h28v56h24V98h18v-26h30v54h20v-38h26v-40l14-6 14 6v40h22v46h18V84h26v-30h22v50h24V76h36v50h20V96h18v-58h30v44h14V96h22v-30h16v22h26v-52l6-8v-24l4-6v-30l3-18 3 18v30l4 6v24l6 8v52h26v30h22V82h30v-20h24v48h20V90h28v-36h26v56h18V74h30v36h22V94h26v-24h30v62h20V102h26v20h34v38z" />
                </svg>
              </div>
            </section>
          </div>
          <div>
            <section data-tone="dark" className={"\x74p-scene \x74p-dusk"} style={{ "--sky-top": "#a65a30", "--sky-bottom": "#4d2b19" } as unknown as CSSProperties} aria-labelledby="dusk-title" data-here="false" data-visited="false">
              <div className={"\x74p-dusk__sky \x67utter"}>
                <div className={"\x74p-dusk__head"}>
                  <h2 id="dusk-title" className={"\x66ont-plush \x74ext-huge"}>Happy families &amp; puppies</h2>
                  <p className={"\x74ext-lede \x6dt-5 \x6dax-w-[\x350ch] \x74ext-[\x76ar(\x2d-ink-soft)]"}>We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts.</p>
                </div>
                <figure className={"\x74p-dusk__note"}>
                  <blockquote className={"\x66ont-plush-text"}>“{/*  */}TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.{/*  */}”</blockquote>
                  <figcaption className={"\x66ont-scrawl"}>Sarah M.{/*  */}, Dubai, UAE</figcaption>
                </figure>
              </div>
              <div className={"\x74p-photowall"}>
                <div className={"\x74p-photowall__wall"}>
                  <ul className={"\x74p-photowall__prints"} aria-label="Photos from TeddyPups families">
                    <li data-reveal="true" style={{ "--d": "330ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-photowall__print"} aria-label="Open photo 1 of 64: Lulu 🧸 with her new mummy ❤️">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.2deg", "--tape": "#f6d79a", "--i": "0" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(216, 184, 152)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw" srcSet="/site-assets/0b5ce9ff92f40b35.webp 384w, /site-assets/9532e6f5ca8d79fa.webp 3840w" src="/site-assets/9532e6f5ca8d79fa.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>Lulu 🧸 with her new mummy ❤️</span>
                        </span>
                      </button>
                    </li>
                    <li data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-photowall__print"} aria-label="Open photo 2 of 64: Adorable Maltipoo baby 🧸❤️">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.6deg", "--tape": "#f9cdbf", "--i": "1" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(216, 184, 136)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw" srcSet="/site-assets/d40e0b6402ab6a69.webp 384w, /site-assets/ae1e73889cc28c26.webp 3840w" src="/site-assets/ae1e73889cc28c26.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>Adorable Maltipoo baby 🧸❤️</span>
                        </span>
                      </button>
                    </li>
                    <li data-reveal="true" style={{ "--d": "550ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-photowall__print"} aria-label="Open photo 3 of 64: My new teddy puppy 🥰🧸">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-0.9deg", "--tape": "#cfe5f6", "--i": "2" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(200, 184, 152)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw" srcSet="/site-assets/5ee20f2a7dfa06b6.webp 384w, /site-assets/abde9993be84d1f6.webp 3840w" src="/site-assets/abde9993be84d1f6.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>My new teddy puppy 🥰🧸</span>
                        </span>
                      </button>
                    </li>
                    <li data-reveal="true" style={{ "--d": "110ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-photowall__print"} aria-label="Open photo 4 of 64: Our new puppies 🧸🥰🤗">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "2.4deg", "--tape": "#f6d79a", "--i": "3" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tl"} />
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tr"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(200, 168, 136)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw" srcSet="/site-assets/bee1e31c9f10e80b.webp 384w, /site-assets/21f0ff0f03e7b52c.webp 3840w" src="/site-assets/21f0ff0f03e7b52c.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>Our new puppies 🧸🥰🤗</span>
                        </span>
                      </button>
                    </li>
                    <li data-reveal="true" style={{ "--d": "660ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-photowall__print"} aria-label="Open photo 5 of 64: New puppy 🧸😍">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-1.5deg", "--tape": "#e9dcc4", "--i": "4" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(232, 216, 184)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw" srcSet="/site-assets/67d2bed8c9f5d358.webp 384w, /site-assets/62a6116b9785ba0e.webp 3840w" src="/site-assets/62a6116b9785ba0e.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>New puppy 🧸😍</span>
                        </span>
                      </button>
                    </li>
                    <li data-reveal="true" style={{ "--d": "220ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-photowall__print"} aria-label="Open photo 6 of 64: Gang of 3 😍🧸">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "0.8deg", "--tape": "#f6d79a", "--i": "5" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(184, 152, 120)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw" srcSet="/site-assets/878cdf4605940321.webp 384w, /site-assets/b4bdb261fd71d3a2.webp 3840w" src="/site-assets/b4bdb261fd71d3a2.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>Gang of 3 😍🧸</span>
                        </span>
                      </button>
                    </li>
                    <li data-reveal="true" style={{ "--d": "770ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-photowall__print"} aria-label="Open photo 7 of 64: So happy 😍😍">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.6deg", "--tape": "#f9cdbf", "--i": "6" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(88, 56, 56)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw" srcSet="/site-assets/b46a7bebc9ce3cf6.webp 384w, /site-assets/187e9356cea373bb.webp 3840w" src="/site-assets/187e9356cea373bb.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>So happy 😍😍</span>
                        </span>
                      </button>
                    </li>
                    <li data-reveal="true" style={{ "--d": "440ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-photowall__print"} aria-label="Open photo 8 of 64: New pup 🤗💫">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.2deg", "--tape": "#cfe5f6", "--i": "7" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(24, 40, 72)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 42vw" srcSet="/site-assets/6df1cb2e86cae531.webp 384w, /site-assets/9b347acabb6a1f9b.webp 3840w" src="/site-assets/9b347acabb6a1f9b.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>New pup 🤗💫</span>
                        </span>
                      </button>
                    </li>
                  </ul>
                  <div className={"\x74p-facade__ground"}>
                    <span aria-hidden="true" className={"\x74p-facade__door"} />
                    <span aria-hidden="true" className={"\x74p-lamp"}>
                      <span className={"\x74p-lamp__light"} />
                    </span>
                    <a className={"\x62tn \x62tn-primary \x74p-facade__cta"} href="/happy-families">See every happy family</a>
                    <div data-facing="right" className={"\x70up-stop \x74p-dusk__teddy"}>
                      <div className={"\x70up-buddy "} data-facing="right" data-live="">
                        <svg viewBox="0 0 300 240" aria-hidden="true" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
                          <g data-p="root">
                            <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                            <g data-p="body" transform="translate(0 -2) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" opacity="1">
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
                              <g data-p="tail" transform="rotate(34 84 150)">
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
                            <g data-p="head" transform="translate(-10 -6) rotate(0 212 100)">
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
                        <span aria-hidden="true" className={"\x70up-bubble"} data-show="false" />
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className={"\x74p-street__pavement"} />
              </div>
              <dialog aria-label="Photo viewer" className={"\x6d-0 \x68-dvh \x6dax-h-none \x77-screen \x6dax-w-none \x62g-cocoa/\x395 \x70-0 \x74ext-milk \x62ackdrop:\x62g-cocoa/\x370"} data-lenis-prevent="true" />
            </section>
          </div>
          <div>
            <section data-tone="dark" className={"\x74p-scene \x74p-night"} style={{ "--sky-top": "#4d2b19", "--sky-bottom": "#2f1a10" } as unknown as CSSProperties} aria-labelledby="questions-title" data-here="false" data-visited="false">
              <div aria-hidden="true" className={"\x70ointer-events-none \x74p-night__stars"}>
                <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "8%", top: "12%", width: "16.2px", animationDelay: "0s" } as unknown as CSSProperties} aria-hidden="true">
                  <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "22%", top: "30%", width: "9px", animationDelay: "0.4s" } as unknown as CSSProperties} aria-hidden="true">
                  <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "41%", top: "8%", width: "12.6px", animationDelay: "0.8s" } as unknown as CSSProperties} aria-hidden="true">
                  <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "57%", top: "22%", width: "8.1px", animationDelay: "1.2s" } as unknown as CSSProperties} aria-hidden="true">
                  <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "72%", top: "6%", width: "14.4px", animationDelay: "1.6s" } as unknown as CSSProperties} aria-hidden="true">
                  <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "88%", top: "18%", width: "10.8px", animationDelay: "2s" } as unknown as CSSProperties} aria-hidden="true">
                  <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "95%", top: "42%", width: "9px", animationDelay: "2.4s" } as unknown as CSSProperties} aria-hidden="true">
                  <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "4%", top: "58%", width: "10.8px", animationDelay: "2.8s" } as unknown as CSSProperties} aria-hidden="true">
                  <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "34%", top: "70%", width: "7.2px", animationDelay: "3.2s" } as unknown as CSSProperties} aria-hidden="true">
                  <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "63%", top: "84%", width: "9.9px", animationDelay: "3.6s" } as unknown as CSSProperties} aria-hidden="true">
                  <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 40 40" className={"\x74p-twinkle \x61bsolute \x74ext-honey"} style={{ left: "83%", top: "66%", width: "12.6px", animationDelay: "4s" } as unknown as CSSProperties} aria-hidden="true">
                  <path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" />
                </svg>
              </div>
              <div className={"\x74p-night__grid \x67utter"}>
                <div className={"\x74p-night__intro"}>
                  <h2 id="questions-title" className={"\x66ont-plush \x74ext-huge"}>Questions, answered</h2>
                  <a className={"\x62tn \x62tn-ghost \x74p-night__cta"} href="/faq">Read all questions</a>
                  <div className={"\x74p-night__pup"}>
                    <span aria-hidden="true" className={"\x74p-night__wonder \x66ont-plush"}>?</span>
                    <div data-facing="right" data-act="tilt" className={"\x70up-stop \x74p-night__teddy"}>
                      <div className={"\x70up-buddy "} data-facing="right" data-live="">
                        <svg viewBox="0 0 300 240" aria-hidden="true" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
                          <g data-p="root">
                            <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                            <g data-p="body" transform="translate(0 -2) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" opacity="1">
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
                              <g data-p="tail" transform="rotate(34 84 150)">
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
                            <g data-p="head" transform="translate(-10 -6) rotate(0 212 100)">
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
                        <span aria-hidden="true" className={"\x70up-bubble"} data-show="false" />
                      </div>
                    </div>
                  </div>
                </div>
                <dl className={"\x74p-night__list"}>
                  <div className={"\x74p-qa"}>
                    <dt className={"\x66ont-plush \x74p-qa__q"}><svg viewBox="0 0 40 40" className={"\x74p-qa__star"} aria-hidden="true"><path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" /></svg>Are your puppies vaccinated and health-checked?</dt>
                    <dd className={"\x74p-qa__a"}>Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.</dd>
                  </div>
                  <div className={"\x74p-qa"}>
                    <dt className={"\x66ont-plush \x74p-qa__q"}><svg viewBox="0 0 40 40" className={"\x74p-qa__star"} aria-hidden="true"><path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" /></svg>Can I meet a puppy before I decide?</dt>
                    <dd className={"\x74p-qa__a"}>Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.</dd>
                  </div>
                  <div className={"\x74p-qa"}>
                    <dt className={"\x66ont-plush \x74p-qa__q"}><svg viewBox="0 0 40 40" className={"\x74p-qa__star"} aria-hidden="true"><path d="M20 3c1.6 9.4 7.6 15.4 17 17-9.4 1.6-15.4 7.6-17 17-1.6-9.4-7.6-15.4-17-17 9.4-1.6 15.4-7.6 17-17z" fill="currentColor" /></svg>Can I take my puppy home the same day?</dt>
                    <dd className={"\x74p-qa__a"}>Local puppies are available immediately, so you can take your puppy home the same day.</dd>
                  </div>
                </dl>
              </div>
            </section>
          </div>
          <div>
            <section data-tone="dark" className={"\x74p-scene \x74p-home"} style={{ "--sky-top": "#2f1a10", "--sky-bottom": "#24130b" } as unknown as CSSProperties} aria-labelledby="cta-title" data-here="false" data-visited="false">
              <div className={"\x74p-home__copy \x67utter"}>
                <h2 id="cta-title" className={"\x66ont-plush \x74ext-huge"}>Ready to meet your new best friend?</h2>
                <p className={"\x74p-home__lede"}>Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.</p>
              </div>
              <div className={"\x74p-house"}>
                <span aria-hidden="true" className={"\x74p-house__plant \x74p-house__plant--left"} />
                <span aria-hidden="true" className={"\x74p-house__lamp"} />
                <div className={"\x74p-house__doorway"}>
                  <span className={"\x74p-house__inside"}>
                    <img alt="Max, waiting inside" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "53.8% 44.3%", color: "transparent", backgroundColor: "rgb(120, 88, 56)" } as unknown as CSSProperties} sizes="16rem" srcSet="/site-assets/d223420a882d0e19.webp 256w, /site-assets/ed24319fc2d6d47b.webp 384w, /site-assets/cea209d15304b1ea.webp 640w, /site-assets/cea209d15304b1ea.webp 750w, /site-assets/cea209d15304b1ea.webp 828w, /site-assets/cea209d15304b1ea.webp 1080w, /site-assets/cea209d15304b1ea.webp 1200w, /site-assets/cea209d15304b1ea.webp 1920w, /site-assets/cea209d15304b1ea.webp 2048w, /site-assets/cea209d15304b1ea.webp 3840w" src="/site-assets/cea209d15304b1ea.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                  </span>
                  <span aria-hidden="true" className={"\x74p-house__door"}>
                    <span className={"\x74p-house__peep"} />
                    <span className={"\x74p-house__knob"} />
                  </span>
                </div>
                <span aria-hidden="true" className={"\x74p-house__plant \x74p-house__plant--right"} />
                <span aria-hidden="true" className={"\x74p-house__mat \x66ont-scrawl"}>welcome home</span>
                <div data-facing="right" className={"\x70up-stop \x74p-house__teddy"}>
                  <div className={"\x70up-buddy "} data-facing="right" data-live="">
                    <svg viewBox="0 0 300 240" aria-hidden="true" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
                      <g data-p="root">
                        <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                        <g data-p="body" transform="translate(0 2) rotate(15 196 206) translate(196 0) scale(1 1) translate(-196 0)" opacity="1">
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
                          <g data-p="tail" transform="rotate(-32 84 150)">
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
                        <g data-p="head" transform="translate(14 30) rotate(0 212 100)">
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
                    <span aria-hidden="true" className={"\x70up-bubble"} data-show="false" />
                  </div>
                </div>
              </div>
              <div className={"\x74p-home__actions \x67utter"}>
                <a className={"\x62tn \x62tn-whatsapp"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies." rel="noopener noreferrer" target="_blank">Enquire on WhatsApp</a>
                <a className={"\x62tn \x62tn-ghost \x74p-home__ghost"} href="/contact">Visit &amp; contact</a>
              </div>
            </section>
          </div>
        </div>
        <div aria-hidden="true" className={"\x70up-probe"} />
        <div aria-hidden="true" className={"\x70up-prints"}>
          <svg viewBox="0 0 64 64" style={{ transform: "translate(774.8px, 6015.1px) rotate(2.698rad)", height: "15.5px", width: "15.5px" } as unknown as CSSProperties}>
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
          <svg viewBox="0 0 64 64">
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
        </div>
        <div aria-hidden="true" className={"\x70up-layer"} data-front="false" data-anchor="top">
          <div className={"\x70up-actor"} style={{ transform: "translate3d(455.78px, 495.74px, 0px)" } as unknown as CSSProperties}>
            <div className={"\x70up-actor__body"} style={{ transform: "scale(1.4838)" } as unknown as CSSProperties}>
              <svg viewBox="0 0 300 240" style={{ overflow: "visible" } as unknown as CSSProperties} aria-hidden="true" {...({ focusable: "false" } as any)}>
                <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
                  <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                  <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -0.5) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 0.21) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="0" data-site-import-responsive="1427">
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
                    <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(-25.96 84 150)" : "rotate(-36.88 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="1436">
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
                  <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 3.25) rotate(0 212 100)" : "translate(0 4.31) rotate(0 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="616">
                    <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d={isMobile ? "M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z" : "M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z"} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(-5.99 174 82)" : "rotate(-6 174 82)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="earL" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" data-site-import-responsive="619" />
                    <path d={isMobile ? "M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z" : "M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z"} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(5.99 250 82)" : "rotate(6 250 82)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="earR" fill="#e4a352" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" data-site-import-responsive="620" />
                    <path d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />
                    <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                    <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
                    <g data-p="eyes" transform="translate(0 0)">
                      <g data-p="open" opacity="1">
                        <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 31.6) scale(1 0.68)" : "translate(0 0) scale(1 1)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="blink" data-site-import-responsive="628">
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
                  <g data-p="ledge" opacity="1">
                    <path d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                    <path d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                  </g>
                </g>
              </svg>
            </div>
            <span className={"\x70up-bubble-at"}>
              <span className={"\x70up-bubble"} data-show="false">hm?</span>
            </span>
          </div>
        </div>
        {/* $ */}
        {/* /$ */}
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
                    <g data-p="root">
                      <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                      <g data-p="body" transform="translate(0 0) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)" opacity="0">
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
                        <g data-p="tail" transform="rotate(-20 84 150)">
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
                      <g data-p="head" transform="translate(0 9) rotate(4 212 100)">
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
                  <span aria-hidden="true" className={"\x70up-bubble"} data-show="false" />
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
