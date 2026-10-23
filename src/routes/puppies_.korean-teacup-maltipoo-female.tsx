import type { CSSProperties } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { importedSiteHead } from "../lib/imported-site-head";
import capturedCSS from "../styles/pages/puppies.korean-teacup-maltipoo-female.css?raw";

export const Route = createFileRoute("/puppies_/korean-teacup-maltipoo-female")({
  head: () => importedSiteHead("Korean Teacup Maltipoo puppy (girl) | TeddyPups U.A.E.", "Meet this Korean Teacup Maltipoo girl and view her puppy profile at TeddyPups U.A.E."),
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
                <a aria-current="page" className={"\x74p-nav-link"} data-active="true" href="/puppies">
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
                      <a className={"\x74p-menu-link \x66ont-plush \x62lock \x70y-2 \x74ext-[\x63lamp(\x32.\x34rem,\x311vw,\x33.\x34rem)]"} data-active="false" href="/">
                        <span>Home</span>
                        <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a aria-current="page" className={"\x74p-menu-link \x66ont-plush \x62lock \x70y-2 \x74ext-[\x63lamp(\x32.\x34rem,\x311vw,\x33.\x34rem)]"} data-active="true" href="/puppies">
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
        {/* & */}
        {/* & */}
        <div className={"\x74p-page"}>
          {/* $ */}
          <article className={"\x74p-storybook"} style={{ background: "linear-gradient(180deg, color-mix(in oklab, #e8e8e8 24%, var(--color-milk)) 0, var(--color-milk) 85%)" } as unknown as CSSProperties}>
            <div aria-hidden="true" className={"\x74p-ribbon"}>
              <div className={"\x74p-ribbon__track"}>
                <span className={"\x74p-ribbon__band"} style={{ transform: "scaleY(0.0927501)" } as unknown as CSSProperties} data-site-import-responsive="43" />
              </div>
            </div>
            <div className={"\x67utter \x6dx-auto \x6dax-w-[\x3110rem] \x70b-20 \x70t-8 \x6dd:\x70t-12"}>
              <nav aria-label="Breadcrumb" className={"\x74ext-[\x30.\x395rem] \x66ont-semibold \x74ext-cocoa-soft"}>
                <a className={"\x6cink-ink"} href="/puppies">Available puppies</a>
                <span aria-hidden="true"> / </span>
                <span aria-current="page">Korean Teacup Maltipoo</span>
              </nav>
              <p className={"\x74p-chapter"}>
                <span aria-hidden="true" className={"\x74p-chapter__n \x66ont-plush"}>1</span>
                <span className={"\x66ont-scrawl"}>hello, it's me</span>
              </p>
              <div className={"\x6dt-4 \x67rid \x67ap-10 \x6cg:\x67rid-cols-12 \x6cg:\x67ap-14"}>
                <div className={"\x6din-w-0 \x6cg:\x63ol-span-7"}>
                  <div>
                    <div className={"\x74p-storypage \x72elative \x61spect-[\x34/\x35] \x6dd:\x61spect-[\x35/\x36]"}>
                      <button type="button" className={"\x61bsolute \x69nset-0 \x62lock \x73ize-full"} aria-label="Open Korean Teacup Maltipoo, photo 1 of 11 full screen" style={{ transformOrigin: "0% 50%", clipPath: "inset(0%)", transform: "none" } as unknown as CSSProperties}>
                        <img alt="Female Korean Teacup Maltipoo puppy" fetchPriority="high" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "52.5% 42.6%", color: "transparent", backgroundColor: "rgb(232, 232, 232)" } as unknown as CSSProperties} sizes="(min-width: 1024px) 55vw, 92vw" srcSet="/site-assets/e6c1024afa0bcbb3.webp 384w, /site-assets/10c6718448065127.webp 640w, /site-assets/f1ced4b2e67fc19b.webp 750w, /site-assets/3d183e5d6b20c64f.webp 828w, /site-assets/1b71b6bae074f07d.webp 1080w, /site-assets/f774cb61138320e4.webp 1200w, /site-assets/f774cb61138320e4.webp 1920w, /site-assets/f774cb61138320e4.webp 2048w, /site-assets/f774cb61138320e4.webp 3840w" src="/site-assets/f774cb61138320e4.webp" {...({ loading: "eager", decoding: "async" } as any)} />
                      </button>
                      <div className={"\x61bsolute \x69nset-x-4 \x62ottom-4 \x66lex \x6austify-between"}>
                        <button type="button" className={"\x67rid \x73ize-12 \x70lace-items-center \x72ounded-full \x62order-2 \x62order-cocoa \x62g-milk/\x395 \x74ext-xl \x66ont-bold"} aria-label="Previous photo">‹</button>
                        <span className={"\x73elf-center \x72ounded-full \x62g-cocoa/\x380 \x70x-3 \x70y-1 \x74ext-sm \x66ont-semibold \x74ext-milk"}>1{/*  */} / {/*  */}11</span>
                        <button type="button" className={"\x67rid \x73ize-12 \x70lace-items-center \x72ounded-full \x62order-2 \x62order-cocoa \x62g-milk/\x395 \x74ext-xl \x66ont-bold"} aria-label="Next photo">›</button>
                      </div>
                    </div>
                    <ul className={"\x6dt-3 \x66lex \x67ap-3 \x6fverflow-x-auto \x70x-1 \x70b-2 \x70t-2 [\x73crollbar-width:\x74hin]"} aria-label="All photos of Korean Teacup Maltipoo">
                      <li className={"\x73hrink-0"}>
                        <button type="button" aria-label="Korean Teacup Maltipoo, photo 1 of 11" aria-current="true" className={"\x72elative \x62lock \x68-24 \x77-20 \x6fverflow-hidden \x72ounded-[\x30.\x39rem] \x62order-[\x33px] \x74ransition-transform \x64uration-300 \x6dd:\x68-28 \x6dd:\x77-24 \x2drotate-3 \x2dtranslate-y-1 \x62order-toffee-deep"}>
                          <img alt="" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "52.5% 42.6%", color: "transparent", backgroundColor: "rgb(232, 232, 232)" } as unknown as CSSProperties} sizes="96px" srcSet="/site-assets/0d53c224a0587086.webp 32w, /site-assets/3be6495c75dcc424.webp 48w, /site-assets/7790697b4d959b25.webp 64w, /site-assets/7c403a100ffa42f4.webp 96w, /site-assets/078652e64ffdc577.webp 128w, /site-assets/ddfff7ce2e6736fd.webp 256w, /site-assets/9cbcd5c396b5d8e5.webp 384w, /site-assets/4c1c14f37ec40255.webp 640w, /site-assets/45d43dc9c750cc74.webp 750w, /site-assets/ec6e5a1c74a070d0.webp 828w, /site-assets/508a08adf912cdfc.webp 1080w, /site-assets/e6da117c97c06713.webp 1200w, /site-assets/e6da117c97c06713.webp 1920w, /site-assets/e6da117c97c06713.webp 2048w, /site-assets/e6da117c97c06713.webp 3840w" src="/site-assets/e6da117c97c06713.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                        </button>
                      </li>
                      <li className={"\x73hrink-0"}>
                        <button type="button" aria-label="Korean Teacup Maltipoo, photo 2 of 11" aria-current="false" className={"\x72elative \x62lock \x68-24 \x77-20 \x6fverflow-hidden \x72ounded-[\x30.\x39rem] \x62order-[\x33px] \x74ransition-transform \x64uration-300 \x6dd:\x68-28 \x6dd:\x77-24 \x62order-cocoa/\x330 \x68over:\x2drotate-2 \x68over:\x62order-cocoa"}>
                          <img alt="" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "58.3% 39.7%", color: "transparent", backgroundColor: "rgb(232, 232, 232)" } as unknown as CSSProperties} sizes="96px" srcSet="/site-assets/6da80e4a2fd5f1ce.webp 32w, /site-assets/e0c0879913b74961.webp 48w, /site-assets/29cf58564d3f9ad3.webp 64w, /site-assets/4da1346cdac5c589.webp 96w, /site-assets/770657d3d0cf9804.webp 128w, /site-assets/eef41046990104eb.webp 256w, /site-assets/7ec9bf90d07231c7.webp 384w, /site-assets/3d63a0897ed2896d.webp 640w, /site-assets/fe273cd5c6a92ce7.webp 750w, /site-assets/0b46032edadce2ef.webp 828w, /site-assets/c781d7e03c8a8c07.webp 1080w, /site-assets/1dc48d30191ce1be.webp 1200w, /site-assets/1dc48d30191ce1be.webp 1920w, /site-assets/1dc48d30191ce1be.webp 2048w, /site-assets/1dc48d30191ce1be.webp 3840w" src="/site-assets/1dc48d30191ce1be.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                        </button>
                      </li>
                      <li className={"\x73hrink-0"}>
                        <button type="button" aria-label="Korean Teacup Maltipoo, photo 3 of 11" aria-current="false" className={"\x72elative \x62lock \x68-24 \x77-20 \x6fverflow-hidden \x72ounded-[\x30.\x39rem] \x62order-[\x33px] \x74ransition-transform \x64uration-300 \x6dd:\x68-28 \x6dd:\x77-24 \x62order-cocoa/\x330 \x68over:\x2drotate-2 \x68over:\x62order-cocoa"}>
                          <img alt="" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "45.4% 43%", color: "transparent", backgroundColor: "rgb(232, 232, 232)" } as unknown as CSSProperties} sizes="96px" srcSet="/site-assets/3f5cef06f0538817.webp 32w, /site-assets/102dc814ee1e9b55.webp 48w, /site-assets/6b91a33175441bba.webp 64w, /site-assets/6b4807da0903ccf9.webp 96w, /site-assets/2245bb33cc0fae9a.webp 128w, /site-assets/5624d8306b6a6d74.webp 256w, /site-assets/7a22817f4abf239e.webp 384w, /site-assets/a5bcc806cdbc5522.webp 640w, /site-assets/cec79d666b9a5a54.webp 750w, /site-assets/2cda4754c81fba3c.webp 828w, /site-assets/d4e53331d4f5f6b4.webp 1080w, /site-assets/ce3f54c068d6e45b.webp 1200w, /site-assets/ce3f54c068d6e45b.webp 1920w, /site-assets/ce3f54c068d6e45b.webp 2048w, /site-assets/ce3f54c068d6e45b.webp 3840w" src="/site-assets/ce3f54c068d6e45b.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                        </button>
                      </li>
                      <li className={"\x73hrink-0"}>
                        <button type="button" aria-label="Korean Teacup Maltipoo, photo 4 of 11" aria-current="false" className={"\x72elative \x62lock \x68-24 \x77-20 \x6fverflow-hidden \x72ounded-[\x30.\x39rem] \x62order-[\x33px] \x74ransition-transform \x64uration-300 \x6dd:\x68-28 \x6dd:\x77-24 \x62order-cocoa/\x330 \x68over:\x2drotate-2 \x68over:\x62order-cocoa"}>
                          <img alt="" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "32.6% 55.4%", color: "transparent", backgroundColor: "rgb(232, 248, 248)" } as unknown as CSSProperties} sizes="96px" srcSet="/site-assets/03959baa7c2484e3.webp 32w, /site-assets/4201eed80bbdddb6.webp 48w, /site-assets/9937d61796216a06.webp 64w, /site-assets/4dfcd3df08ac06b2.webp 96w, /site-assets/34211ca84e17532f.webp 128w, /site-assets/51ddd788f9bcd56b.webp 256w, /site-assets/8df5e55bb19f00fc.webp 384w, /site-assets/a64fb4408282ba7d.webp 640w, /site-assets/babe049cde2c07fd.webp 750w, /site-assets/03263d547887eb48.webp 828w, /site-assets/6957f1f8f75ff8b7.webp 1080w, /site-assets/bdd9afe9d253cf87.webp 1200w, /site-assets/bdd9afe9d253cf87.webp 1920w, /site-assets/bdd9afe9d253cf87.webp 2048w, /site-assets/bdd9afe9d253cf87.webp 3840w" src="/site-assets/bdd9afe9d253cf87.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                        </button>
                      </li>
                      <li className={"\x73hrink-0"}>
                        <button type="button" aria-label="Korean Teacup Maltipoo, photo 5 of 11" aria-current="false" className={"\x72elative \x62lock \x68-24 \x77-20 \x6fverflow-hidden \x72ounded-[\x30.\x39rem] \x62order-[\x33px] \x74ransition-transform \x64uration-300 \x6dd:\x68-28 \x6dd:\x77-24 \x62order-cocoa/\x330 \x68over:\x2drotate-2 \x68over:\x62order-cocoa"}>
                          <img alt="" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "53.7% 45.7%", color: "transparent", backgroundColor: "rgb(104, 104, 104)" } as unknown as CSSProperties} sizes="96px" srcSet="/site-assets/109869247257b95b.webp 32w, /site-assets/aa032d8531610f1c.webp 48w, /site-assets/192e7a0adcccf96b.webp 64w, /site-assets/be5578399b52c3e4.webp 96w, /site-assets/501d84f0b949ef46.webp 128w, /site-assets/fe6e644b5f6d769b.webp 256w, /site-assets/cc96ce77c39ec5f5.webp 384w, /site-assets/074a7ed7db3b787f.webp 640w, /site-assets/3fe8312ddecba39f.webp 750w, /site-assets/656302f433450e61.webp 828w, /site-assets/7d837ee069cfcb63.webp 1080w, /site-assets/98b8f118d83f1a2a.webp 1200w, /site-assets/98b8f118d83f1a2a.webp 1920w, /site-assets/98b8f118d83f1a2a.webp 2048w, /site-assets/98b8f118d83f1a2a.webp 3840w" src="/site-assets/98b8f118d83f1a2a.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                        </button>
                      </li>
                      <li className={"\x73hrink-0"}>
                        <button type="button" aria-label="Korean Teacup Maltipoo, photo 6 of 11" aria-current="false" className={"\x72elative \x62lock \x68-24 \x77-20 \x6fverflow-hidden \x72ounded-[\x30.\x39rem] \x62order-[\x33px] \x74ransition-transform \x64uration-300 \x6dd:\x68-28 \x6dd:\x77-24 \x62order-cocoa/\x330 \x68over:\x2drotate-2 \x68over:\x62order-cocoa"}>
                          <img alt="" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "57.7% 53.1%", color: "transparent", backgroundColor: "rgb(232, 232, 232)" } as unknown as CSSProperties} sizes="96px" srcSet="/site-assets/f7f77e325eff52f8.webp 32w, /site-assets/7c90e20992b3c838.webp 48w, /site-assets/9292197fb5ebb937.webp 64w, /site-assets/238bd5a268d8a4f0.webp 96w, /site-assets/e557dd72e8e92911.webp 128w, /site-assets/80fcec15c40f5b66.webp 256w, /site-assets/010dfe0fc00572f4.webp 384w, /site-assets/f7a481f9a9e37e95.webp 640w, /site-assets/ab42ca42424db990.webp 750w, /site-assets/c67570685f41e71c.webp 828w, /site-assets/c41f769fab03323b.webp 1080w, /site-assets/c41f769fab03323b.webp 1200w, /site-assets/c41f769fab03323b.webp 1920w, /site-assets/c41f769fab03323b.webp 2048w, /site-assets/c41f769fab03323b.webp 3840w" src="/site-assets/c41f769fab03323b.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                        </button>
                      </li>
                      <li className={"\x73hrink-0"}>
                        <button type="button" aria-label="Korean Teacup Maltipoo, photo 7 of 11" aria-current="false" className={"\x72elative \x62lock \x68-24 \x77-20 \x6fverflow-hidden \x72ounded-[\x30.\x39rem] \x62order-[\x33px] \x74ransition-transform \x64uration-300 \x6dd:\x68-28 \x6dd:\x77-24 \x62order-cocoa/\x330 \x68over:\x2drotate-2 \x68over:\x62order-cocoa"}>
                          <img alt="" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "51.3% 44.9%", color: "transparent", backgroundColor: "rgb(232, 232, 232)" } as unknown as CSSProperties} sizes="96px" srcSet="/site-assets/e6dc163203186d57.webp 32w, /site-assets/7a05f08f2c7032e4.webp 48w, /site-assets/0e47b4ca301041a7.webp 64w, /site-assets/4be93082cd780b41.webp 96w, /site-assets/4a71ce455cc18f8a.webp 128w, /site-assets/ef5b54f6f17099ba.webp 256w, /site-assets/30c03bc046fd38d9.webp 384w, /site-assets/f94a352ac4a6d0c0.webp 640w, /site-assets/b1074d52b3da7671.webp 750w, /site-assets/60ed39ffb366a26e.webp 828w, /site-assets/def744aeabbcba3b.webp 1080w, /site-assets/def744aeabbcba3b.webp 1200w, /site-assets/def744aeabbcba3b.webp 1920w, /site-assets/def744aeabbcba3b.webp 2048w, /site-assets/def744aeabbcba3b.webp 3840w" src="/site-assets/def744aeabbcba3b.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                        </button>
                      </li>
                      <li className={"\x73hrink-0"}>
                        <button type="button" aria-label="Korean Teacup Maltipoo, photo 8 of 11" aria-current="false" className={"\x72elative \x62lock \x68-24 \x77-20 \x6fverflow-hidden \x72ounded-[\x30.\x39rem] \x62order-[\x33px] \x74ransition-transform \x64uration-300 \x6dd:\x68-28 \x6dd:\x77-24 \x62order-cocoa/\x330 \x68over:\x2drotate-2 \x68over:\x62order-cocoa"}>
                          <img alt="" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "51.3% 42.3%", color: "transparent", backgroundColor: "rgb(216, 216, 216)" } as unknown as CSSProperties} sizes="96px" srcSet="/site-assets/ebc61ae2890dfb24.webp 32w, /site-assets/5594d03a4435c50e.webp 48w, /site-assets/c066a967f60ae756.webp 64w, /site-assets/040d7178b6ca74d3.webp 96w, /site-assets/87f511ad3bf0fdef.webp 128w, /site-assets/d1e3a2bd9ec959c3.webp 256w, /site-assets/54035f94e99b5b1b.webp 384w, /site-assets/38e720d7f6adae21.webp 640w, /site-assets/9a34271cb92a9938.webp 750w, /site-assets/9887cfe168148ed8.webp 828w, /site-assets/8b84a8f097b1699e.webp 1080w, /site-assets/431d864e2a83f655.webp 1200w, /site-assets/431d864e2a83f655.webp 1920w, /site-assets/431d864e2a83f655.webp 2048w, /site-assets/431d864e2a83f655.webp 3840w" src="/site-assets/431d864e2a83f655.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                        </button>
                      </li>
                      <li className={"\x73hrink-0"}>
                        <button type="button" aria-label="Korean Teacup Maltipoo, photo 9 of 11" aria-current="false" className={"\x72elative \x62lock \x68-24 \x77-20 \x6fverflow-hidden \x72ounded-[\x30.\x39rem] \x62order-[\x33px] \x74ransition-transform \x64uration-300 \x6dd:\x68-28 \x6dd:\x77-24 \x62order-cocoa/\x330 \x68over:\x2drotate-2 \x68over:\x62order-cocoa"}>
                          <img alt="" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "53.7% 40.6%", color: "transparent", backgroundColor: "rgb(248, 248, 248)" } as unknown as CSSProperties} sizes="96px" srcSet="/site-assets/469bfa5285ce975a.webp 32w, /site-assets/97141b4a2ce27c83.webp 48w, /site-assets/de550831abf7231f.webp 64w, /site-assets/48995e77f75de52d.webp 96w, /site-assets/c6081579ace18713.webp 128w, /site-assets/dd2ca8b4d47e5fc9.webp 256w, /site-assets/65f3af06ebec0c66.webp 384w, /site-assets/86c7048b5c82f994.webp 640w, /site-assets/a86c425d048052e6.webp 750w, /site-assets/e2c05434e0bf90d2.webp 828w, /site-assets/6d413254593eae52.webp 1080w, /site-assets/6d413254593eae52.webp 1200w, /site-assets/6d413254593eae52.webp 1920w, /site-assets/6d413254593eae52.webp 2048w, /site-assets/6d413254593eae52.webp 3840w" src="/site-assets/6d413254593eae52.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                        </button>
                      </li>
                      <li className={"\x73hrink-0"}>
                        <button type="button" aria-label="Korean Teacup Maltipoo, photo 10 of 11" aria-current="false" className={"\x72elative \x62lock \x68-24 \x77-20 \x6fverflow-hidden \x72ounded-[\x30.\x39rem] \x62order-[\x33px] \x74ransition-transform \x64uration-300 \x6dd:\x68-28 \x6dd:\x77-24 \x62order-cocoa/\x330 \x68over:\x2drotate-2 \x68over:\x62order-cocoa"}>
                          <img alt="" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "50.8% 52.5%", color: "transparent", backgroundColor: "rgb(184, 184, 184)" } as unknown as CSSProperties} sizes="96px" srcSet="/site-assets/5aa795707f326611.webp 32w, /site-assets/1f3a852766718bcd.webp 48w, /site-assets/067ae436328ded60.webp 64w, /site-assets/4152048f8ac604d9.webp 96w, /site-assets/8773a7597baf19eb.webp 128w, /site-assets/6d16e89fca1040b1.webp 256w, /site-assets/2c0fab375e2efce9.webp 384w, /site-assets/dc4a74a41920e1ba.webp 640w, /site-assets/3d4b5f0f873ea26d.webp 750w, /site-assets/c5e6580cd80daef8.webp 828w, /site-assets/334257a377a51924.webp 1080w, /site-assets/5e027dd5fbca439c.webp 1200w, /site-assets/5e027dd5fbca439c.webp 1920w, /site-assets/5e027dd5fbca439c.webp 2048w, /site-assets/5e027dd5fbca439c.webp 3840w" src="/site-assets/5e027dd5fbca439c.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                        </button>
                      </li>
                      <li className={"\x73hrink-0"}>
                        <button type="button" aria-label="Korean Teacup Maltipoo, video 11 of 11" aria-current="false" className={"\x72elative \x62lock \x68-24 \x77-20 \x6fverflow-hidden \x72ounded-[\x30.\x39rem] \x62order-[\x33px] \x74ransition-transform \x64uration-300 \x6dd:\x68-28 \x6dd:\x77-24 \x62order-cocoa/\x330 \x68over:\x2drotate-2 \x68over:\x62order-cocoa"}>
                          <img alt="" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "60.6% 51.5%", color: "transparent", backgroundColor: "rgb(232, 232, 232)" } as unknown as CSSProperties} sizes="96px" srcSet="/site-assets/e70a289ec65cc276.webp 32w, /site-assets/e93f365c573a67a2.webp 48w, /site-assets/5d377aa50819b0a7.webp 64w, /site-assets/f6329f0909a12afc.webp 96w, /site-assets/d3abd5a1f087c681.webp 128w, /site-assets/58586ca5debbf459.webp 256w, /site-assets/d9ce6185a07d4b8a.webp 384w, /site-assets/d9ce6185a07d4b8a.webp 640w, /site-assets/d9ce6185a07d4b8a.webp 750w, /site-assets/d9ce6185a07d4b8a.webp 828w, /site-assets/d9ce6185a07d4b8a.webp 1080w, /site-assets/d9ce6185a07d4b8a.webp 3840w" src="/site-assets/d9ce6185a07d4b8a.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          <span className={"\x61bsolute \x69nset-0 \x67rid \x70lace-items-center \x62g-cocoa/\x330 \x74ext-lg \x74ext-milk"}>▶</span>
                        </button>
                      </li>
                    </ul>
                    <dialog aria-label="Korean Teacup Maltipoo photos" className={"\x6d-0 \x68-dvh \x6dax-h-none \x77-screen \x6dax-w-none \x62g-cocoa/\x395 \x70-0 \x74ext-milk \x62ackdrop:\x62g-cocoa/\x370"} data-lenis-prevent="true" />
                  </div>
                </div>
                <div className={"\x6din-w-0 \x6cg:\x63ol-span-5"}>
                  <div className={"\x6cg:\x73ticky \x6cg:\x74op-[\x63alc(\x76ar(\x2d-header-h)+\x35.\x35rem)]"}>
                    <div className={"\x74p-tag \x74p-board \x6dt-16 !\x72ounded-[\x32.\x32rem_2.\x32rem_2.\x32rem_0.\x36rem] !\x70-7 \x6dd:!\x70-9 \x6cg:\x6dt-20"} data-reveal="true" data-armed="true" data-revealed="true" style={{ rotate: "0deg", opacity: "1" } as unknown as CSSProperties}>
                      <span aria-hidden="true" className={"\x74p-tag__ring"} />
                      <div className={"\x70up-buddy \x61bsolute \x2dtop-[\x34.\x38rem] \x72ight-6 \x77-[\x39.\x35rem]"} data-facing="right" data-live="">
                        <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, peeking over Korean Teacup Maltipoo's tag" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
                          <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(1.000 1) translate(-150 0)">
                            <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -0.6) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -0.51) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="0" data-site-import-responsive="473">
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
                              <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(-8.92 84 150)" : "rotate(-9.02 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="482">
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
                            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 3.11) rotate(0 212 100)" : "translate(0 3.24) rotate(0.01 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="104">
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
                        <span aria-hidden="true" className={"\x70up-bubble"} data-show="false">hm?</span>
                      </div>
                      <span className={"\x63hip"}><svg viewBox="0 0 64 64" className={"\x73ize-4 \x74ext-toffee"} aria-hidden="true" fill="currentColor"><path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" /></svg>Available</span>
                      <h1 className={"\x66ont-plush \x6dt-4 \x74ext-[\x63lamp(\x32.\x36rem,\x35vw,\x34.\x36rem)]"}>Korean Teacup Maltipoo</h1>
                      <dl className={"\x6dt-7 \x67rid \x67rid-cols-2 \x67ap-x-6 \x67ap-y-4"}>
                        <div>
                          <dt className={"\x66ont-scrawl \x74ext-sm \x74ext-cocoa-soft"}>Breed</dt>
                          <dd className={"\x6dt-0.\x35 \x74ext-[\x31.\x305rem] \x66ont-semibold"}>Korean Teacup Maltipoo</dd>
                        </div>
                        <div>
                          <dt className={"\x66ont-scrawl \x74ext-sm \x74ext-cocoa-soft"}>Boy or girl</dt>
                          <dd className={"\x6dt-0.\x35 \x74ext-[\x31.\x305rem] \x66ont-semibold"}>Girl</dd>
                        </div>
                        <div>
                          <dt className={"\x66ont-scrawl \x74ext-sm \x74ext-cocoa-soft"}>Age</dt>
                          <dd className={"\x6dt-0.\x35 \x74ext-[\x31.\x305rem] \x66ont-semibold"}>2 months</dd>
                        </div>
                        <div>
                          <dt className={"\x66ont-scrawl \x74ext-sm \x74ext-cocoa-soft"}>Where</dt>
                          <dd className={"\x6dt-0.\x35 \x74ext-[\x31.\x305rem] \x66ont-semibold"}>Imported for you</dd>
                        </div>
                      </dl>
                      <div className={"\x6dt-8 \x66lex \x66lex-col \x67ap-3"}>
                        <a className={"\x62tn \x62tn-whatsapp"} href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'm%20interested%20in%20the%20Korean%20Teacup%20Maltipoo%20(girl)%3A%20https%3A%2F%2Fpuppy.instabizweb.com%2Fpuppies%2Fkorean-teacup-maltipoo-female" rel="noopener noreferrer" target="_blank">Ask about this puppy on WhatsApp</a>
                        <a className={"\x62tn \x62tn-ghost"} href="#enquire-korean-teacup-maltipoo-female">Send an enquiry</a>
                      </div>
                    </div>
                    <div className={"\x74p-paper \x6dt-8 \x2drotate-1"}>
                      <p className={"\x74p-chapter"}>
                        <span aria-hidden="true" className={"\x74p-chapter__n \x66ont-plush"}>2</span>
                        <span className={"\x66ont-scrawl"}>what comes with {/*  */}this Korean Teacup Maltipoo</span>
                      </p>
                      <h2 className={"\x66ont-plush \x6dt-1 \x74ext-[\x31.\x39rem]"}>Every Teddy Pup comes</h2>
                      <ul className={"\x6dt-4 \x73pace-y-2.\x35"}>
                        <li className={"\x66lex \x69tems-start \x67ap-3 \x66ont-semibold"}><svg viewBox="0 0 32 32" className={"\x6dt-0.\x35 \x73ize-6 \x73hrink-0 \x74ext-toffee-deep"} aria-hidden="true"><path d="M5 17l7 7L27 8" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Vaccinated</li>
                        <li className={"\x66lex \x69tems-start \x67ap-3 \x66ont-semibold"}><svg viewBox="0 0 32 32" className={"\x6dt-0.\x35 \x73ize-6 \x73hrink-0 \x74ext-toffee-deep"} aria-hidden="true"><path d="M5 17l7 7L27 8" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Dewormed</li>
                        <li className={"\x66lex \x69tems-start \x67ap-3 \x66ont-semibold"}><svg viewBox="0 0 32 32" className={"\x6dt-0.\x35 \x73ize-6 \x73hrink-0 \x74ext-toffee-deep"} aria-hidden="true"><path d="M5 17l7 7L27 8" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Verified health certificate from licensed vets</li>
                        <li className={"\x66lex \x69tems-start \x67ap-3 \x66ont-semibold"}><svg viewBox="0 0 32 32" className={"\x6dt-0.\x35 \x73ize-6 \x73hrink-0 \x74ext-toffee-deep"} aria-hidden="true"><path d="M5 17l7 7L27 8" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Thoroughly checked before joining your family</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <section aria-labelledby="home-steps-korean-teacup-maltipoo-female" className={"\x6dt-20"}>
                <p className={"\x74p-chapter"}>
                  <span aria-hidden="true" className={"\x74p-chapter__n \x66ont-plush"}>3</span>
                  <span className={"\x66ont-scrawl"}>the way home</span>
                </p>
                <h2 id="home-steps-korean-teacup-maltipoo-female" className={"\x66ont-plush \x74ext-big \x6dt-3"}>Coming home from abroad</h2>
                <ol className={"\x74p-trail \x74p-trail--row \x74p-trail--paws \x6dt-10"}>
                  <li>
                    <span aria-hidden="true" className={"\x74p-trail__num \x66ont-plush"}>1</span>
                    <h3 className={"\x66ont-plush-text \x74ext-xl \x66ont-bold \x6ceading-tight"}>Reserve your puppy</h3>
                    <p className={"\x6dt-2 \x6dax-w-[\x338ch] \x74ext-cocoa-soft"}>Tell us which puppy has captured your heart.</p>
                  </li>
                  <li>
                    <span aria-hidden="true" className={"\x74p-trail__num \x66ont-plush"}>2</span>
                    <h3 className={"\x66ont-plush-text \x74ext-xl \x66ont-bold \x6ceading-tight"}>Personalized consultation</h3>
                    <p className={"\x6dt-2 \x6dax-w-[\x338ch] \x74ext-cocoa-soft"}>We finalize details with you and share updates on your puppy's journey.</p>
                  </li>
                  <li>
                    <span aria-hidden="true" className={"\x74p-trail__num \x66ont-plush"}>3</span>
                    <h3 className={"\x66ont-plush-text \x74ext-xl \x66ont-bold \x6ceading-tight"}>Import and arrival</h3>
                    <p className={"\x6dt-2 \x6dax-w-[\x338ch] \x74ext-cocoa-soft"}>We manage health checks, travel arrangements, and documentation.</p>
                  </li>
                  <li>
                    <span aria-hidden="true" className={"\x74p-trail__num \x66ont-plush"}>4</span>
                    <h3 className={"\x66ont-plush-text \x74ext-xl \x66ont-bold \x6ceading-tight"}>Welcome home</h3>
                    <p className={"\x6dt-2 \x6dax-w-[\x338ch] \x74ext-cocoa-soft"}>We help your new puppy settle in and ensure a smooth transition into your home.</p>
                  </li>
                </ol>
              </section>
              <section id="enquire-korean-teacup-maltipoo-female" aria-labelledby="enquire-title-korean-teacup-maltipoo-female" className={"\x74p-letter \x6dt-20 \x67rid \x67ap-10 \x6cg:\x67rid-cols-12"}>
                <span aria-hidden="true" className={"\x74p-letter__stamp"}>
                  <svg viewBox="0 0 64 64" className={"\x73ize-9"} aria-hidden="true" fill="currentColor">
                    <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                  </svg>
                </span>
                <div className={"\x6cg:\x63ol-span-4"}>
                  <p className={"\x74p-chapter"}>
                    <span aria-hidden="true" className={"\x74p-chapter__n \x66ont-plush"}>4</span>
                    <span className={"\x66ont-scrawl"}>dear TeddyPups…</span>
                  </p>
                  <h2 id="enquire-title-korean-teacup-maltipoo-female" className={"\x66ont-plush \x74ext-big \x6dt-2"}>Ask about this puppy</h2>
                  <p className={"\x6dt-4 \x74ext-cocoa-soft"}>Leave your details and our team will get back to you promptly — or message us on WhatsApp for the quickest reply.</p>
                </div>
                <div className={"\x6cg:\x63ol-span-7 \x6cg:\x63ol-start-6"}>
                  <form noValidate className={"\x73pace-y-5"}>
                    <div className={"\x67rid \x67ap-5 \x73m:\x67rid-cols-2"}>
                      <div>
                        <label htmlFor="_R_5felubsnkivb_" className={"\x62lock \x74ext-[\x30.\x395rem] \x66ont-semibold"}>Your name<span className={"\x74ext-toffee-ink"}> *</span></label>
                        <input id="_R_5felubsnkivb_" aria-invalid="false" className={"\x6dt-1.\x35 \x68-12 \x77-full \x72ounded-2xl \x62order-2 \x62order-cocoa/\x360 \x62g-milk \x70x-4 \x74ext-base \x6futline-none \x74ransition-[\x62order-color,\x62ox-shadow] \x66ocus:\x62order-cocoa \x66ocus:\x73hadow-[\x30_0_0_4px_rgb(\x3242_190_107/\x30.\x36)] \x61ria-[\x69nvalid=\x74rue]:\x62order-[#\x623261e]"} autoComplete="name" required minLength={2} maxLength={80} name="name" />
                      </div>
                      <div>
                        <label htmlFor="_R_9felubsnkivb_" className={"\x62lock \x74ext-[\x30.\x395rem] \x66ont-semibold"}>Phone or WhatsApp<span className={"\x74ext-toffee-ink"}> *</span></label>
                        <input id="_R_9felubsnkivb_" aria-invalid="false" aria-describedby="_R_9felubsnkivb_-hint" className={"\x6dt-1.\x35 \x68-12 \x77-full \x72ounded-2xl \x62order-2 \x62order-cocoa/\x360 \x62g-milk \x70x-4 \x74ext-base \x6futline-none \x74ransition-[\x62order-color,\x62ox-shadow] \x66ocus:\x62order-cocoa \x66ocus:\x73hadow-[\x30_0_0_4px_rgb(\x3242_190_107/\x30.\x36)] \x61ria-[\x69nvalid=\x74rue]:\x62order-[#\x623261e]"} type="tel" inputMode="tel" autoComplete="tel" required name="phone" />
                        <p id="_R_9felubsnkivb_-hint" className={"\x6dt-1 \x74ext-sm \x74ext-cocoa-soft"}>With country code, e.g. +971 50 123 4567</p>
                      </div>
                      <div>
                        <label htmlFor="_R_dfelubsnkivb_" className={"\x62lock \x74ext-[\x30.\x395rem] \x66ont-semibold"}>Email<span className={"\x66ont-normal \x74ext-cocoa-soft"}> (optional)</span></label>
                        <input id="_R_dfelubsnkivb_" aria-invalid="false" className={"\x6dt-1.\x35 \x68-12 \x77-full \x72ounded-2xl \x62order-2 \x62order-cocoa/\x360 \x62g-milk \x70x-4 \x74ext-base \x6futline-none \x74ransition-[\x62order-color,\x62ox-shadow] \x66ocus:\x62order-cocoa \x66ocus:\x73hadow-[\x30_0_0_4px_rgb(\x3242_190_107/\x30.\x36)] \x61ria-[\x69nvalid=\x74rue]:\x62order-[#\x623261e]"} type="email" autoComplete="email" name="email" />
                      </div>
                      <div>
                        <label htmlFor="_R_hfelubsnkivb_" className={"\x62lock \x74ext-[\x30.\x395rem] \x66ont-semibold"}>Your area<span className={"\x66ont-normal \x74ext-cocoa-soft"}> (optional)</span></label>
                        <input id="_R_hfelubsnkivb_" aria-invalid="false" aria-describedby="_R_hfelubsnkivb_-hint" className={"\x6dt-1.\x35 \x68-12 \x77-full \x72ounded-2xl \x62order-2 \x62order-cocoa/\x360 \x62g-milk \x70x-4 \x74ext-base \x6futline-none \x74ransition-[\x62order-color,\x62ox-shadow] \x66ocus:\x62order-cocoa \x66ocus:\x73hadow-[\x30_0_0_4px_rgb(\x3242_190_107/\x30.\x36)] \x61ria-[\x69nvalid=\x74rue]:\x62order-[#\x623261e]"} autoComplete="address-level2" maxLength={80} name="area" />
                        <p id="_R_hfelubsnkivb_-hint" className={"\x6dt-1 \x74ext-sm \x74ext-cocoa-soft"}>e.g. Dubai Marina</p>
                      </div>
                    </div>
                    <input type="hidden" name="puppyId" defaultValue="0abcf3f5-0080-44c1-b1e1-2a2de24a3cf4" />
                    <div>
                      <label htmlFor="_R_7elubsnkivbH1_" className={"\x62lock \x74ext-[\x30.\x395rem] \x66ont-semibold"}>Message <span className={"\x66ont-normal \x74ext-cocoa-soft"}>(optional)</span></label>
                      <textarea id="_R_7elubsnkivbH1_" name="message" rows={4} maxLength={2000} className={"\x6dt-1.\x35 \x77-full \x72ounded-2xl \x62order-2 \x62order-cocoa/\x360 \x62g-milk \x70x-4 \x70y-3 \x74ext-base \x6futline-none \x66ocus:\x62order-cocoa \x66ocus:\x73hadow-[\x30_0_0_4px_rgb(\x3242_190_107/\x30.\x36)]"}>Hi! I'd love to know more about Korean Teacup Maltipoo.</textarea>
                    </div>
                    <div aria-hidden="true" className={"\x61bsolute \x2dleft-[\x39999px] \x68-0 \x77-0 \x6fverflow-hidden"}>
                      <label>Website<input tabIndex={-1} autoComplete="off" name="website" defaultValue="" /></label>
                    </div>
                    <button type="submit" className={"\x62tn \x62tn-primary \x77-full \x64isabled:\x6fpacity-70 \x73m:\x77-auto"}>Send enquiry</button>
                  </form>
                </div>
              </section>
              <nav aria-label="More puppies" className={"\x6dt-16 \x67rid \x67ap-4 \x73m:\x67rid-cols-2"}>
                <a className={"\x67roup \x66lex \x69tems-center \x67ap-5 \x72ounded-[\x32rem] \x62order-[\x33px] \x62order-cocoa \x62g-milk \x70-4 \x74ransition-transform \x64uration-500 \x68over:\x2drotate-1 \x73m:\x6cast:\x66lex-row-reverse \x73m:\x6cast:\x74ext-right"} href="/puppies/maltipoo-max-male">
                  <span className={"\x72elative \x68-24 \x77-20 \x73hrink-0 \x6fverflow-hidden \x72ounded-[\x3999px_999px_0.\x36rem_0.\x36rem] \x62order-[\x33px] \x62order-cocoa \x62g-honey-soft"}>
                    <img alt="Max, male Maltipoo puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "53.8% 44.3%", color: "transparent", backgroundColor: "rgb(120, 88, 56)" } as unknown as CSSProperties} sizes="80px" srcSet="/site-assets/5f75ae466b6eb48f.webp 96w, /site-assets/cea209d15304b1ea.webp 3840w" src="/site-assets/cea209d15304b1ea.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                  </span>
                  <span>
                    <span className={"\x66ont-scrawl \x62lock \x74ext-sm \x74ext-cocoa-soft"}>Previous pup</span>
                    <span className={"\x66ont-plush \x74ext-[\x31.\x36rem]"}>Max</span>
                  </span>
                </a>
                <a className={"\x67roup \x66lex \x69tems-center \x67ap-5 \x72ounded-[\x32rem] \x62order-[\x33px] \x62order-cocoa \x62g-milk \x70-4 \x74ransition-transform \x64uration-500 \x68over:\x2drotate-1 \x73m:\x6cast:\x66lex-row-reverse \x73m:\x6cast:\x74ext-right"} href="/puppies/korean-teacup-poodle-female">
                  <span className={"\x72elative \x68-24 \x77-20 \x73hrink-0 \x6fverflow-hidden \x72ounded-[\x3999px_999px_0.\x36rem_0.\x36rem] \x62order-[\x33px] \x62order-cocoa \x62g-honey-soft"}>
                    <img alt="Female Korean Teacup Poodle puppy" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", objectPosition: "54.5% 45.7%", color: "transparent", backgroundColor: "rgb(248, 216, 184)" } as unknown as CSSProperties} sizes="80px" srcSet="/site-assets/4e6dec907ef074b8.webp 96w, /site-assets/8cedd9b3f8809baa.webp 3840w" src="/site-assets/8cedd9b3f8809baa.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                  </span>
                  <span>
                    <span className={"\x66ont-scrawl \x62lock \x74ext-sm \x74ext-cocoa-soft"}>Next pup</span>
                    <span className={"\x66ont-plush \x74ext-[\x31.\x36rem]"}>Korean Teacup Poodle</span>
                  </span>
                </a>
              </nav>
            </div>
          </article>
          {/* /$ */}
        </div>
        {/* $ */}
        {/* /$ */}
        {/* /& */}
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
                      <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 0.54) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -0.18) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="0" data-site-import-responsive="508">
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
                        <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(0.94 84 150)" : "rotate(-27.26 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="517">
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
                      <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 9.8) rotate(4 212 100)" : "translate(0 8.72) rotate(4 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="279">
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
                            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 0) scale(1 1)" : "translate(0 30.36) scale(1 0.69)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="blink" data-site-import-responsive="291">
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
