import type { CSSProperties } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { importedSiteHead } from "../lib/imported-site-head";
import { useSuspenseQuery } from "@tanstack/react-query";
import { catalogQuery } from "../lib/catalog-query";
import { ManagedPuppies, ManagedFaqs, ManagedStories } from "../components/managed-content";
import capturedCSS from "../styles/pages/happy-families.css?raw";

export const Route = createFileRoute("/happy-families")({
  head: () => importedSiteHead("Happy families | TeddyPups U.A.E.", "See the puppies and happy families who found each other through TeddyPups U.A.E."),
  staticData: { importedDocument: { html: { "className": "\x56eu4Sq_variable \x68pvSLW_variable \x5f91XIoq_variable \x6cenis", "lang": "en" }, body: {  } } },
  loader: ({ context }) => context.queryClient.ensureQueryData(catalogQuery),
  component: Index,
});

function Index() {
  const { data: catalogData } = useSuspenseQuery(catalogQuery);

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
                <a aria-current="page" className={"\x74p-nav-link"} data-active="true" href="#">
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
                      <a className={"\x74p-menu-link \x66ont-plush \x62lock \x70y-2 \x74ext-[\x63lamp(\x32.\x34rem,\x311vw,\x33.\x34rem)]"} data-active="false" href="/puppies">
                        <span>Puppies</span>
                        <svg viewBox="0 0 64 64" className={"\x74p-nav-link__paw"} aria-hidden="true" fill="currentColor">
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a aria-current="page" className={"\x74p-menu-link \x66ont-plush \x62lock \x70y-2 \x74ext-[\x63lamp(\x32.\x34rem,\x311vw,\x33.\x34rem)]"} data-active="true" href="#">
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
        <div className={"\x74p-page"}>
          <section aria-labelledby="families-title" className={"\x74p-memories"}>
            <div className={"\x67utter \x6dx-auto \x6dax-w-[\x3110rem] \x70b-24 \x70t-10 \x6dd:\x70t-16"}>
              <div className={"\x74p-memories__head"}>
                <div>
                  <p className={"\x66ont-scrawl \x74ext-lg \x74ext-toffee-ink"} data-reveal="true" data-revealed="true">our wall of happy endings</p>
                  <h1 id="families-title" className={"\x66ont-plush \x74ext-giant \x74p-memories__title"} data-reveal="true" data-revealed="true">Happy families<svg viewBox="0 0 48 44" className={"\x74p-memories__heart"} aria-hidden="true"><path d="M24 40C10 30 4 22 4 14.5 4 8.7 8.6 4 14.3 4c4.1 0 7.6 2.4 9.7 6 2.1-3.6 5.6-6 9.7-6C39.4 4 44 8.7 44 14.5 44 22 38 30 24 40z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg></h1>
                  <p className={"\x74ext-lede \x6dt-6 \x6dax-w-[\x350ch] \x74ext-cocoa-soft"} data-reveal="true" data-revealed="true">Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends.</p>
                  <p className={"\x66ont-scrawl \x6dt-5 \x74ext-lg \x74ext-toffee-ink"} data-reveal="true" data-revealed="true">64{/*  */} moments and counting</p>
                </div>
                <figure className={"\x74p-memories__note"} data-reveal="true" data-revealed="true">
                  <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} style={{ "--tape": "#cfe5f6" } as unknown as CSSProperties} />
                  <blockquote className={"\x66ont-plush-text"}>“{/*  */}TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.{/*  */}”</blockquote>
                  <figcaption className={"\x66ont-scrawl"}>Sarah M.{/*  */}, Dubai, UAE</figcaption>
                </figure>
              </div>
              <div className={"\x6dt-16 \x6dd:\x6dt-20"}>
                <div>
                  {catalogData.connected ? <ManagedStories stories={catalogData.catalog.stories} /> : (<ul className={"\x74p-wall"} aria-label="Photos from TeddyPups families">
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 1 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.2deg", "--tape": "#f6d79a", "--i": "0" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" fetchPriority="high" width="960" height="1280" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(232, 200, 168)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/6a0a2c7f4c543e5e.webp 256w, /site-assets/b0fcfe29274de137.webp 384w, /site-assets/a2ccf944d1e730cf.webp 640w, /site-assets/1820cb5bad6eb3b3.webp 750w, /site-assets/c55e0c0a2dfdedae.webp 828w, /site-assets/6f266526d1270c23.webp 1080w, /site-assets/6f266526d1270c23.webp 1200w, /site-assets/6f266526d1270c23.webp 1920w, /site-assets/6f266526d1270c23.webp 2048w, /site-assets/6f266526d1270c23.webp 3840w" src="/site-assets/6f266526d1270c23.webp" {...({ loading: "eager", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor">
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 2 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.6deg", "--tape": "#f9cdbf", "--i": "1" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" fetchPriority="high" width="1320" height="1254" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(184, 200, 216)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/72d276c5e288dea3.webp 256w, /site-assets/f8053426da61d2f8.webp 384w, /site-assets/a6c7b0292f42c9a8.webp 640w, /site-assets/89d9f6b6fdbf8237.webp 750w, /site-assets/f053c432f2d903b5.webp 828w, /site-assets/451d4e80351a8cac.webp 1080w, /site-assets/29279a195a3f9829.webp 1200w, /site-assets/071ab76056e2136a.webp 1920w, /site-assets/071ab76056e2136a.webp 2048w, /site-assets/071ab76056e2136a.webp 3840w" src="/site-assets/071ab76056e2136a.webp" {...({ loading: "eager", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 3 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-0.9deg", "--tape": "#cfe5f6", "--i": "2" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="960" height="1280" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(200, 152, 104)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/09aa885e114030ec.webp 256w, /site-assets/43c436ab40e92101.webp 384w, /site-assets/f10f2e7c8054bc03.webp 640w, /site-assets/60b3a0c64d4b8d86.webp 750w, /site-assets/ff4dc5feebeb9534.webp 828w, /site-assets/3378ff13a86b184e.webp 1080w, /site-assets/3378ff13a86b184e.webp 1200w, /site-assets/3378ff13a86b184e.webp 1920w, /site-assets/3378ff13a86b184e.webp 2048w, /site-assets/3378ff13a86b184e.webp 3840w" src="/site-assets/3378ff13a86b184e.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 4 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "2.4deg", "--tape": "#f6d79a", "--i": "3" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tl"} />
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tr"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="1320" height="1254" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(232, 232, 232)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/66c7b88e414d02ec.webp 256w, /site-assets/9103d1fa535b72a5.webp 384w, /site-assets/57581d5e1a632d3f.webp 640w, /site-assets/846352cdca738ff3.webp 750w, /site-assets/6c9987b97a814164.webp 828w, /site-assets/8564a14d894eea13.webp 1080w, /site-assets/d26d0045851ac89e.webp 1200w, /site-assets/be3d28a2dd03a866.webp 1920w, /site-assets/be3d28a2dd03a866.webp 2048w, /site-assets/be3d28a2dd03a866.webp 3840w" src="/site-assets/be3d28a2dd03a866.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 5 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-1.5deg", "--tape": "#e9dcc4", "--i": "4" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="960" height="1280" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(168, 136, 120)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/eb14aa5416e5667d.webp 256w, /site-assets/0623cf3c62810364.webp 384w, /site-assets/fe7c1a1e6cc08050.webp 640w, /site-assets/7108d95ccd230c35.webp 750w, /site-assets/870f6d5b002e9028.webp 828w, /site-assets/68d42fcff54f4333.webp 1080w, /site-assets/68d42fcff54f4333.webp 1200w, /site-assets/68d42fcff54f4333.webp 1920w, /site-assets/68d42fcff54f4333.webp 2048w, /site-assets/68d42fcff54f4333.webp 3840w" src="/site-assets/68d42fcff54f4333.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 6 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "0.8deg", "--tape": "#f6d79a", "--i": "5" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="1320" height="1587" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(232, 232, 232)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/c69544579879ffc9.webp 256w, /site-assets/9b72fbc65f41205f.webp 384w, /site-assets/e46783adefc0a10c.webp 640w, /site-assets/5161fc0c5d82dd86.webp 750w, /site-assets/f50277fe6c879b66.webp 828w, /site-assets/eb21b25615496ebf.webp 1080w, /site-assets/e6d5230c62e5f060.webp 1200w, /site-assets/03a55ee2f7befb0a.webp 1920w, /site-assets/03a55ee2f7befb0a.webp 2048w, /site-assets/03a55ee2f7befb0a.webp 3840w" src="/site-assets/03a55ee2f7befb0a.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 7 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.6deg", "--tape": "#f9cdbf", "--i": "6" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="960" height="1280" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(248, 200, 168)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/d777a6503332f315.webp 256w, /site-assets/3989041b2a1618a7.webp 384w, /site-assets/d946b93ab9ca3a41.webp 640w, /site-assets/bd21e74f2bac0b61.webp 750w, /site-assets/944c96a6d4cc0aaf.webp 828w, /site-assets/3bbf9025db3545ab.webp 1080w, /site-assets/3bbf9025db3545ab.webp 1200w, /site-assets/3bbf9025db3545ab.webp 1920w, /site-assets/3bbf9025db3545ab.webp 2048w, /site-assets/3bbf9025db3545ab.webp 3840w" src="/site-assets/3bbf9025db3545ab.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 8 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.2deg", "--tape": "#cfe5f6", "--i": "7" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="1200" height="1600" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(8, 8, 8)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/c87ff31b1bbeebd5.webp 256w, /site-assets/ea65a2ef00be4d75.webp 384w, /site-assets/c8d771369f8180b9.webp 640w, /site-assets/b996a5c1c04dae6f.webp 750w, /site-assets/24293c809d7921e5.webp 828w, /site-assets/9fb9ee6d46202c09.webp 1080w, /site-assets/a9f18c9fdb48c131.webp 1200w, /site-assets/a9f18c9fdb48c131.webp 1920w, /site-assets/a9f18c9fdb48c131.webp 2048w, /site-assets/a9f18c9fdb48c131.webp 3840w" src="/site-assets/a9f18c9fdb48c131.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 9 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.2deg", "--tape": "#f6d79a", "--i": "8" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="1289" height="1481" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(248, 248, 248)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/aebcee06a8d3278a.webp 256w, /site-assets/c8a9d4539bb6a06f.webp 384w, /site-assets/ad1a22f98811a6d1.webp 640w, /site-assets/11aa0c6e011bfeab.webp 750w, /site-assets/65967ec3b41c36b5.webp 828w, /site-assets/779cac74be51f01b.webp 1080w, /site-assets/bc947aabc800e570.webp 1200w, /site-assets/d4d5b706897c67d4.webp 1920w, /site-assets/d4d5b706897c67d4.webp 2048w, /site-assets/d4d5b706897c67d4.webp 3840w" src="/site-assets/d4d5b706897c67d4.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 10 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.6deg", "--tape": "#e9dcc4", "--i": "9" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="1289" height="1330" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(56, 24, 8)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/989e08a0e063e712.webp 256w, /site-assets/2193adba0b8c769f.webp 384w, /site-assets/1cb1fca997e29812.webp 3840w" src="/site-assets/1cb1fca997e29812.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 11 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-0.9deg", "--tape": "#f6d79a", "--i": "10" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(216, 200, 168)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/b15d63156c173fdb.webp 384w, /site-assets/ae37b5f1c77731bd.webp 3840w" src="/site-assets/ae37b5f1c77731bd.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 12 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "2.4deg", "--tape": "#f9cdbf", "--i": "11" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tl"} />
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tr"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="960" height="1280" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(248, 216, 200)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/718ae5896476ee03.webp 384w, /site-assets/7f1b01105e625ad9.webp 3840w" src="/site-assets/7f1b01105e625ad9.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 13 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-1.5deg", "--tape": "#cfe5f6", "--i": "12" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="1306" height="1600" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(216, 232, 248)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/ed85fe18d185c3ee.webp 384w, /site-assets/5c4d74f4ae1e2787.webp 3840w" src="/site-assets/5c4d74f4ae1e2787.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 14 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "0.8deg", "--tape": "#f6d79a", "--i": "13" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(200, 184, 152)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/cd8a513dc9551f95.webp 384w, /site-assets/7e407974c4e09f02.webp 3840w" src="/site-assets/7e407974c4e09f02.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 15 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.6deg", "--tape": "#e9dcc4", "--i": "14" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(248, 248, 248)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/f5d6ef3d60a923cf.webp 384w, /site-assets/abbd85c72da022cd.webp 3840w" src="/site-assets/abbd85c72da022cd.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 16 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.2deg", "--tape": "#f6d79a", "--i": "15" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2150" height="2686" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(40, 24, 24)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/c742942b7810c77b.webp 384w, /site-assets/e7a4a169c962a0cf.webp 3840w" src="/site-assets/e7a4a169c962a0cf.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 17 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.2deg", "--tape": "#f9cdbf", "--i": "16" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="1200" height="1600" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(200, 200, 200)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/8264f0db644b9f12.webp 384w, /site-assets/9a7ef487d10c739c.webp 3840w" src="/site-assets/9a7ef487d10c739c.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor">
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 18 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.6deg", "--tape": "#cfe5f6", "--i": "17" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="844" height="1327" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(40, 40, 24)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/71fccc53ed292d34.webp 384w, /site-assets/af511207e1645f17.webp 3840w" src="/site-assets/af511207e1645f17.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 19 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-0.9deg", "--tape": "#f6d79a", "--i": "18" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="787" height="1339" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(72, 40, 24)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/7e0800ccd21ec4de.webp 384w, /site-assets/d5bd142be17bc55c.webp 3840w" src="/site-assets/d5bd142be17bc55c.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 20 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "2.4deg", "--tape": "#e9dcc4", "--i": "19" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tl"} />
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tr"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="959" height="1280" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(136, 184, 232)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/02b6d5d7b2a3ca66.webp 384w, /site-assets/237ba5b805243cdb.webp 3840w" src="/site-assets/237ba5b805243cdb.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 21 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-1.5deg", "--tape": "#f6d79a", "--i": "20" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="3120" height="4160" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(8, 8, 8)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/6d9eeca5d9b901d9.webp 384w, /site-assets/cafe759e0d93833b.webp 3840w" src="/site-assets/cafe759e0d93833b.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 22 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "0.8deg", "--tape": "#f9cdbf", "--i": "21" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2142" height="2856" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(8, 8, 8)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/ff40c6f09370f7da.webp 384w, /site-assets/882f26821576d06b.webp 3840w" src="/site-assets/882f26821576d06b.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 23 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.6deg", "--tape": "#cfe5f6", "--i": "22" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2142" height="2856" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(184, 168, 136)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAABQAgCdASoMABAAA4BaJZgCdAYwnnkw6ttD2AAA+Foa/i5+1YB0DZDUOeoFoRXySjde7HlcwtUwbwbwaLzbOfI+GvH4SXVNsWB0T48HtFLnBIV1B/ZQAP86qzkT7djl4vSe2CnA0wfX2AAA\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/a1898dba262cf101.webp 384w, /site-assets/dfdef0a5c9f647b9.webp 3840w" src="/site-assets/dfdef0a5c9f647b9.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 24 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.2deg", "--tape": "#f6d79a", "--i": "23" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2142" height="2856" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(200, 184, 168)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAQAgCdASoMABAAA4BaJQBOgBo1viibzJNAAP6bu6ODLi2MmVyEuZ8AMRv5hwCfbJ6fkiBo4evTi7tYBq5X0fBNGOhrhe5TCAgRP+9M1c+1Q67c3Wj7mGDBHyfbU2k7QpnQYfStZyweAAAA\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/2dbf2adc62710c58.webp 384w, /site-assets/e7fba3883e5e3bd3.webp 3840w" src="/site-assets/e7fba3883e5e3bd3.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 25 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.2deg", "--tape": "#e9dcc4", "--i": "24" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="960" height="1280" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(24, 24, 24)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQAgCdASoMABAAA4BaJQBOgMXDq1uZV94AAP7UzBLB6kQWQYcI35m+fm5LkMEerkFnYOU8ZsNfwF8CX1BM69FS7UKXI7xRFdaLYIm9djXlPydsPGCFWNTn29pujorL1G6AawBgAAA=\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/0ef46d808668ad29.webp 384w, /site-assets/d7365f222537079d.webp 3840w" src="/site-assets/d7365f222537079d.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 26 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.6deg", "--tape": "#f6d79a", "--i": "25" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2142" height="2856" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(168, 136, 120)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAABwAgCdASoMABAAA4BaJYgCdAEf3WQX+hSjMdgAAP64MQQtU9IfKaA0Pe2fAqulvui81ZkvJtVcIuETA/1+jUUqO+mqwx+FVqHY+cZUhVG4Bj6i53pB2VN3aa3Qic9AAAA=\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/267b990195191bdb.webp 384w, /site-assets/f8194a24833d9e5f.webp 3840w" src="/site-assets/f8194a24833d9e5f.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 27 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-0.9deg", "--tape": "#f9cdbf", "--i": "26" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2142" height="2856" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(8, 8, 8)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/948cdf6428baa86d.webp 384w, /site-assets/fe9ea0fe2845e4fb.webp 3840w" src="/site-assets/fe9ea0fe2845e4fb.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 28 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "2.4deg", "--tape": "#cfe5f6", "--i": "27" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tl"} />
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tr"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2142" height="2856" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(216, 200, 184)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/a4e2427f150db27e.webp 384w, /site-assets/7a04c7294fee3f35.webp 3840w" src="/site-assets/7a04c7294fee3f35.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 29 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-1.5deg", "--tape": "#f6d79a", "--i": "28" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2142" height="2856" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(216, 200, 184)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/47f5f5c89b1edba9.webp 384w, /site-assets/84f93a268236bf64.webp 3840w" src="/site-assets/84f93a268236bf64.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 30 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "0.8deg", "--tape": "#e9dcc4", "--i": "29" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2142" height="2856" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(216, 200, 168)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAwAgCdASoMABAAA4BaJagCdAYt9a9+RSmgmAD+6CdN+UCCcI5YcijVh+3TMUGzdnXRCDUeKSty/3cEEkF5Dsisj6pgBa7OEdICUAbRElnh1aHeEOV9gp5AubsS9aLQAAA=\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/62e7330765467b39.webp 384w, /site-assets/8a0c086d7f9378f2.webp 3840w" src="/site-assets/8a0c086d7f9378f2.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 31 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.6deg", "--tape": "#f6d79a", "--i": "30" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="960" height="1280" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(248, 248, 248)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAADwAQCdASoMABAAA4BaJZgCdADc+6C9ICAA/uiRagrgT7bdpz+sVcNmuxtDC56op12lR8euVGoRVcp55cKc3n0ykic7aCqOWvWVLlP+74ywWJAZdVdbzRTmoo6SPwCNUp0+zWK8hp1wMxOeKGeAeYAA\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/e84ca62a96aac8d9.webp 384w, /site-assets/247dc43d95a14c06.webp 3840w" src="/site-assets/247dc43d95a14c06.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 32 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.2deg", "--tape": "#f9cdbf", "--i": "31" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="960" height="1280" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(8, 8, 8)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/9f65014fd936c8df.webp 384w, /site-assets/d8098bac8ec4f839.webp 3840w" src="/site-assets/d8098bac8ec4f839.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor">
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 33 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.2deg", "--tape": "#cfe5f6", "--i": "32" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="960" height="1280" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(216, 216, 200)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/4e5aa04aab2fb6c7.webp 384w, /site-assets/1915fb2be70444bd.webp 3840w" src="/site-assets/1915fb2be70444bd.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 34 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.6deg", "--tape": "#f6d79a", "--i": "33" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="1200" height="1600" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(152, 136, 104)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/336ff454b47dc80c.webp 384w, /site-assets/acaab1415ecb3a80.webp 3840w" src="/site-assets/acaab1415ecb3a80.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 35 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-0.9deg", "--tape": "#e9dcc4", "--i": "34" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="720" height="1280" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(8, 8, 8)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAQAgCdASoJABAAA4BaJZACdAELZPFLfLAAAP5hargVLeGOjxYFMrFICGC2c76ZhGOLTt4thNKmvzGtO0oQCBg/j66WbZD4fn9SxOFI/CvM8WKgTWbJN9m0Or1gbMyxSkagAA==\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/e1ad09a47e5e20ce.webp 384w, /site-assets/259b4a644a3af7b4.webp 3840w" src="/site-assets/259b4a644a3af7b4.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 36 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "2.4deg", "--tape": "#f6d79a", "--i": "35" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tl"} />
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tr"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2142" height="2856" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(200, 184, 152)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAQAgCdASoMABAAA4BaJbACdAEXZ2tQc1FYAP7KhGlp3Ud/Wd5WzqLGnbLAN21JjIr21Yeq7n/FD3OmEll9zg1bNpprxDa/SHyvAc4YDzbi+Lwmj7FdrvjGbLaipzB4Acl7hsm2TAAAAA==\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/c2e6a7d2d1e025c9.webp 384w, /site-assets/59b3fd478925c784.webp 3840w" src="/site-assets/59b3fd478925c784.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 37 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-1.5deg", "--tape": "#f9cdbf", "--i": "36" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="720" height="1280" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(72, 56, 56)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAABQAgCdASoJABAAA4BaJYgCdH8AFjin4b6KDwAA+yB92ZnCKuQCBs5iklOiaf+qfIub5ywu7apZU1BCm5TUq+bWiowkGdEwGxAZtf/Dv5KvwcvhKtT2KWAmkAAAAA==\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/fe6d4536e7307cdf.webp 384w, /site-assets/c4b28c315e12a98e.webp 3840w" src="/site-assets/c4b28c315e12a98e.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 38 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "0.8deg", "--tape": "#cfe5f6", "--i": "37" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2142" height="2856" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(216, 200, 184)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAwAgCdASoMABAAA4BaJQBOgCB0mo1KVh0RAAD+6zNpBOGegtmnnT6vX3Yjm5cwTzoCUH698qkqSFsGcBr+LDxgP7v5uDrFlbMPZydo4vsfFpBbPXyIq33MSdVCio/3vy4Q6YAo4AA=\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/14be6103733a0c52.webp 384w, /site-assets/29b31e9546f314e5.webp 3840w" src="/site-assets/29b31e9546f314e5.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 39 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.6deg", "--tape": "#f6d79a", "--i": "38" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2142" height="2856" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(24, 24, 24)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADwAQCdASoMABAAA4BaJQBOgBn5giS5vQAA/t7yHXwI2tIEblpjfUpfJIL+c1T0T0iLbFgLor/hW3JqqCco51qgvm4ROZaYFutED7yuoF83k/TSfJQ3QOFPgpAgAA==\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/8867af0c22c2c55a.webp 384w, /site-assets/4f24755fa2a12d23.webp 3840w" src="/site-assets/4f24755fa2a12d23.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 40 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.2deg", "--tape": "#e9dcc4", "--i": "39" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2142" height="2856" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(216, 200, 184)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADQAQCdASoMABAAA4BaJQBOgBujKDtbIAD+4VBMuzezOD31wvHxEF0NMBnF92baX4kq/XYOHywTGyJODk4o6n94nL1/33bK7G5xXnta2j6At1mh3+0DC8DbziOVGVyXxAA=\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/5013ead776275d46.webp 384w, /site-assets/914447b7d0e4a28c.webp 3840w" src="/site-assets/914447b7d0e4a28c.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 41 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.2deg", "--tape": "#f6d79a", "--i": "40" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2142" height="2856" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(216, 200, 168)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAABwAgCdASoMABAAA4BaJYgCdAYs3bL7Gnx+6/2AAP7hW15NgWujzvmq49/HjkXrdcgMVD0UA+wzrLhrhSKEvsXlIVIKexV49vl/wYW9TJhVBq/EpQv/twEIGQ0XqgTdgYAAAA==\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/4df60630a2972e2e.webp 384w, /site-assets/85fd1051adfcd21e.webp 3840w" src="/site-assets/85fd1051adfcd21e.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 42 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.6deg", "--tape": "#f9cdbf", "--i": "41" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="2142" height="2856" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(184, 152, 136)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADwAQCdASoMABAAA4BaJZACdADNEp5ESnAA/uhU0C+lKXkk3eaitgvirAwQg02KQ9kUumgpXq8/dUxIyyUiyrFCgRnnL8XKUaslwrkpNEp5e4zah5ve5aLr5tX980AA\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/54c2a12a6382f783.webp 384w, /site-assets/7d92aeb7cb884745.webp 3840w" src="/site-assets/7d92aeb7cb884745.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 43 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-0.9deg", "--tape": "#cfe5f6", "--i": "42" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="784" height="1280" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(136, 120, 104)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAABQAgCdASoKABAAA4BaJYgCdAYxjqyMmLEyTQAA9Y8Zedq55lmRyk8kdUMQbxh318HmWnsouoE36uA89tB+1bqFo8lHaB6AqFA3QG6Mn0UWk3kkL2zLpq1Ra2utVcfF20AzSrXRwAA=\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/4acd9e510be11a26.webp 384w, /site-assets/1b06d5434e3a3791.webp 3840w" src="/site-assets/1b06d5434e3a3791.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 44 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "2.4deg", "--tape": "#f6d79a", "--i": "43" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tl"} />
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tr"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="958" height="1280" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(24, 24, 24)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAABQAgCdASoMABAAA4BaJYwAD5PwfQ+Yy1jwPiAA/vWLdLOPMdjCko4dWXjbLvZLHV56XLFQNHstACmiORE7ZGeFsOvo56+vr4cCxtjugtlAU1ThwZQzZR2o7680fq2bX3sIxARoAAA=\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/8e795d38255763e9.webp 384w, /site-assets/5278968c71627579.webp 3840w" src="/site-assets/5278968c71627579.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 45 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-1.5deg", "--tape": "#e9dcc4", "--i": "44" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="480" height="640" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(216, 184, 168)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAABQAgCdASoMABAAA4BaJZACdAYtBvvMxkINH9wA/uEo2s2gs6OOOKSV7DoUBY1vRt76/4tQPAd/e44Y/lEO5/rBUlYZkcR5/dq40ED1Q0kXpe9DqKhYmSwqbZD2AAAA\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/13f5935f67a01e51.webp 384w, /site-assets/211b7aebbb9e287d.webp 3840w" src="/site-assets/211b7aebbb9e287d.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 46 of 64: Lulu 🧸 with her new mummy ❤️">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "0.8deg", "--tape": "#f6d79a", "--i": "45" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(216, 184, 152)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/0b5ce9ff92f40b35.webp 384w, /site-assets/9532e6f5ca8d79fa.webp 3840w" src="/site-assets/9532e6f5ca8d79fa.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>Lulu 🧸 with her new mummy ❤️</span>
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor">
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 47 of 64: Adorable Maltipoo baby 🧸❤️">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.6deg", "--tape": "#f9cdbf", "--i": "46" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(216, 184, 136)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/d40e0b6402ab6a69.webp 384w, /site-assets/ae1e73889cc28c26.webp 3840w" src="/site-assets/ae1e73889cc28c26.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>Adorable Maltipoo baby 🧸❤️</span>
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 48 of 64: My new teddy puppy 🥰🧸">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.2deg", "--tape": "#cfe5f6", "--i": "47" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(200, 184, 152)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/5ee20f2a7dfa06b6.webp 384w, /site-assets/abde9993be84d1f6.webp 3840w" src="/site-assets/abde9993be84d1f6.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>My new teddy puppy 🥰🧸</span>
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 49 of 64: Our new puppies 🧸🥰🤗">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.2deg", "--tape": "#f6d79a", "--i": "48" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(200, 168, 136)" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/bee1e31c9f10e80b.webp 384w, /site-assets/21f0ff0f03e7b52c.webp 3840w" src="/site-assets/21f0ff0f03e7b52c.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>Our new puppies 🧸🥰🤗</span>
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 50 of 64: New puppy 🧸😍">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.6deg", "--tape": "#e9dcc4", "--i": "49" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(232, 216, 184)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAACQAgCdASoQABAAA4BaJbACdH8AgpiUEkMQZTCRwAD+1rG/irOq90Wn2ivqTZRoNp0/tg6nogNU88MAf4pmYMYPt1BA5HZp5fKFP5gdmPLLn7i+2ox4+IJjI8pRatDLRjnVluciNvP8cAGS77QO2umJZv9hcFPk3szIBWhNoAA=\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/67d2bed8c9f5d358.webp 384w, /site-assets/62a6116b9785ba0e.webp 3840w" src="/site-assets/62a6116b9785ba0e.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>New puppy 🧸😍</span>
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 51 of 64: Gang of 3 😍🧸">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-0.9deg", "--tape": "#f6d79a", "--i": "50" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(184, 152, 120)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAQAgCdASoQABAAA4BaJaACdACZc5pmT0IAANyS3MgT5zcRh2SMASk+vuZnX8EA+Aa3aKJwZJFVGQLZC8t2HT/uFV2Ptwl8OFM9Mim55QUu2v5D6wkBxg2bzMHVVPNX6DLVIoAA\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/878cdf4605940321.webp 384w, /site-assets/b4bdb261fd71d3a2.webp 3840w" src="/site-assets/b4bdb261fd71d3a2.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>Gang of 3 😍🧸</span>
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 52 of 64: So happy 😍😍">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "2.4deg", "--tape": "#f9cdbf", "--i": "51" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tl"} />
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tr"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(88, 56, 56)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAABwAgCdASoQABAAA4BaJbACdAYu5gKOX9jgIJLAAP7CKBWCtkFxFg44sVZb9sz1IhjPDJeDDZDbGLdQFMGxnGC7VthDIa+n7vaDjHrqThtj8kPCnMBHsqPPQAUvHkTmaxqIvRTYrhPJY8pXPpMvBC7O7pQZVOzMFpgAAA==\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/b46a7bebc9ce3cf6.webp 384w, /site-assets/187e9356cea373bb.webp 3840w" src="/site-assets/187e9356cea373bb.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>So happy 😍😍</span>
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 53 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-1.5deg", "--tape": "#cfe5f6", "--i": "52" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(232, 200, 168)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABQAgCdASoQABAAA4BaJaACdAYvrlHXCFHN3fAA/uqZCrNKx1a0p5Ac0g+awfdeZriYCCvFMiDYnK/mSlj3+X5NZUXGHwBCUH5HZGcOkipLuKibYxm/jCFjMEE7LoakLF6Ww4G8z3GKP9netObUCrSbSqsAAA==\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/e5a7126249bb0a08.webp 384w, /site-assets/e738d626a5a07271.webp 3840w" src="/site-assets/e738d626a5a07271.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 54 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "0.8deg", "--tape": "#f6d79a", "--i": "53" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(200, 184, 152)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAABQAgCdASoQABAAA4BaJagCdAYubywrxhyCVhIA/sEsa1FPBH32zKzT40HcW/tXWNnxhpdOHv2LQKA9XjXn1r+NUkdgMub7cP5nu6e1Zx/tXeCuRnu0bSEUToFNOLcN0miSNg6w3q2ec88xNLh1w+AmVq2Q3SgAAAA=\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/e06610245ab6f1e2.webp 384w, /site-assets/86f6357ed68482b9.webp 3840w" src="/site-assets/86f6357ed68482b9.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 55 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.6deg", "--tape": "#e9dcc4", "--i": "54" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(56, 56, 56)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAwAgCdASoQABAAA4BaJQBOgMYiunCheTOvAADiILsz2gkzyl/faHwREGdZ6iBq8AMQ96Mi0Rn3SWpTyytPl9G8BjEQFK6dcu4Ljt+w5krufvsyHgG6JkpwT9WpR55RqxT6rlgRR/cuo5BAvSgAAA==\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/8d56b3894977eb11.webp 384w, /site-assets/f1e63b22f0736981.webp 3840w" src="/site-assets/f1e63b22f0736981.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 56 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.2deg", "--tape": "#f6d79a", "--i": "55" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(200, 184, 152)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAAAwAgCdASoQABAAA4BaJYgCdAYrxR8yMQ7kAAD82Q64Z++bOcZM2f14y87MWHQ5Wg591hC1srxZ4JlrMxeeIfh7gNAmsflPgtsGcj1yhz9iwN0z5bBRLP05EoKdEg7SflekK7JzbY1E/N1kB5Yu9dy7L4QnwjgAAAA=\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/7f437670a095e54d.webp 384w, /site-assets/d6f2f9740a1a421f.webp 3840w" src="/site-assets/d6f2f9740a1a421f.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 57 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.2deg", "--tape": "#f9cdbf", "--i": "56" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(56, 72, 88)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAABQAgCdASoQABAAA4BaJbACdAYvXdZTak/O6QAA+xmX1k7qM7V+caoIMSfqFeNAOaH53s7PWNKHvsagzOo9lkJFaxGWFt4QGRuXXU5U8sLkou07Arjba88bbVcOt2vVKhHYAUHNYm8OxBWqs9mKQUp6fEy4nDavNAisKsAA\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/6aa2133a8a9b3b50.webp 384w, /site-assets/3da5f2af30ece39e.webp 3840w" src="/site-assets/3da5f2af30ece39e.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 58 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.6deg", "--tape": "#cfe5f6", "--i": "57" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(200, 168, 136)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADwAQCdASoQABAAA4BaJbACdAEKDwZ5MAAA/sOSdfeND/k70bwnm35Hw5cAD3V/uFI09nSFk+QpOUnDelr0oUh2lw5jVANko6YvAqsoFcTs+jmceEgNutlRBXtykxG0U2+jZlIoAAA=\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/720654534ec6fc48.webp 384w, /site-assets/1948fa679fc47be6.webp 3840w" src="/site-assets/1948fa679fc47be6.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 59 of 64: New pup 🤗💫">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-0.9deg", "--tape": "#f6d79a", "--i": "58" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="433" height="433" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(24, 40, 72)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAABQAgCdASoQABAAA4BaJQBOj+ADEzVnFAhaavQA/u9OoVPZtGNMSP4OqARzAF2Ho1qwjxyh07MB7+Ua7l9K0/IgyZFr/9DtbqW+fEDJWMLOPdJmDqo45f8MrloEaAAA\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/6df1cb2e86cae531.webp 384w, /site-assets/9b347acabb6a1f9b.webp 3840w" src="/site-assets/9b347acabb6a1f9b.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"}>New pup 🤗💫</span>
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 60 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "2.4deg", "--tape": "#e9dcc4", "--i": "59" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tl"} />
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--tr"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="340" height="403" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(248, 248, 248)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQAgCdASoNABAAA4BaJYgCdH8AEWIPFbQQAP74uh/fuEHYKvG/E9q9hCmtf8S0nrEbEM+vuxmIjhI1OruOxTn2+x234PjlorhAd58N0vSIQuCvL5PeQe6KyOBXlkF5chALcAoAAAA=\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/4ce10b186a68ef6b.webp 384w, /site-assets/4ce10b186a68ef6b.webp 3840w" src="/site-assets/4ce10b186a68ef6b.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "0ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 61 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-1.5deg", "--tape": "#f6d79a", "--i": "60" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="535" height="467" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(8, 8, 8)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAQAgCdASoQAA4AA4BaJbACdAYvXi3yX7AAAP7smKIgcjMr9c3VJHCHet5QLcuDjiWNUQJiU/9TaZ9w+0K9+eDy9xovZtL1QtLlRsB81SloFl/IEegA3/h3oH7wb/+aqmudG/p/GIqWAAAA\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/00680bf3e20d6b92.webp 384w, /site-assets/2461308eb9b972ec.webp 3840w" src="/site-assets/2461308eb9b972ec.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "60ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 62 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "0.8deg", "--tape": "#f9cdbf", "--i": "61" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--right"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="1618" height="809" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(8, 8, 8)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSCsAAAABP6CmbSOoW6GUP7Z7t9CIiBBQH0MtJElQuPEnsihrcP4qJxDR/7iI7PAHAFZQOCBUAAAA0AEAnQEqEAAIAAOAWiWgAnQAxoRHaYAA/tasxBjQmLN7V7dYx5eYpzvyyBvMKlUsW6rst9KOiUD5KbS+TeaXSHwUmeBdPg2durYk/qp3MUSqnEAA\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/b03cd566b6fbd926.webp 384w, /site-assets/8f922a05df532c7f.webp 3840w" src="/site-assets/8f922a05df532c7f.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "120ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 63 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "-2.6deg", "--tape": "#cfe5f6", "--i": "62" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--left"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="1512" height="1321" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(232, 232, 232)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAAAQAgCdASoQAA4AA4BaJZQC7AYs3UentN+AAP7MaXxhpef7iHkvolxrU5JpovK+sGrif+lM42K/B9yS6wk6htQO3F9pqvjewnJNs1pZ+N1izi4jiEMa2+cxZT9mBb+Z9Fv1X+P73Qrc8iRlLTlDSIAA\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/258b505429f206c1.webp 384w, /site-assets/b823ad089066d3a3.webp 3840w" src="/site-assets/b823ad089066d3a3.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                    <li className={"\x74p-wall__item"} data-reveal="true" style={{ "--d": "180ms" } as unknown as CSSProperties} data-armed="true" data-revealed="true">
                      <button type="button" className={"\x74p-wall__print"} aria-label="Open photo 64 of 64">
                        <span className={"\x74p-polaroid"} style={{ "--tilt": "1.2deg", "--tape": "#f6d79a", "--i": "63" } as unknown as CSSProperties}>
                          <span aria-hidden="true" className={"\x74p-tape \x74p-tape--center"} />
                          <span className={"\x74p-polaroid__photo"}>
                            <img alt="A happy TeddyPups family with their new puppy" width="720" height="405" style={{ color: "transparent", width: "100%", height: "auto", backgroundColor: "rgb(24, 24, 24)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: "url(\"data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADwAQCdASoQAAkAA4BaJbACdAYte/ab1oAA/tYQNegkoMhAZASbVfwKa8zQ0/1YvpDETfS7UidVfTE51pjvLIppKkqRyc5l+5gOVpnPjXAaLDPQwMtqVsLuPKos0gRnfMWCqFJaAAA=\")" } as unknown as CSSProperties} sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 45vw" srcSet="/site-assets/b2be02d031532c0f.webp 384w, /site-assets/35d0d1c9558be435.webp 3840w" src="/site-assets/35d0d1c9558be435.webp" {...({ loading: "lazy", decoding: "async" } as any)} />
                          </span>
                          <span className={"\x74p-polaroid__caption \x66ont-scrawl"} />
                        </span>
                        <svg viewBox="0 0 64 64" className={"\x74p-wall__paw"} aria-hidden="true" fill="currentColor" style={{ transform: "translateY(-16px) rotate(6deg) scale(1.04)", opacity: "0" } as unknown as CSSProperties}>
                          <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
                        </svg>
                      </button>
                    </li>
                  </ul>)}
                </div>
                <dialog aria-label="Photo viewer" className={"\x6d-0 \x68-dvh \x6dax-h-none \x77-screen \x6dax-w-none \x62g-cocoa/\x395 \x70-0 \x74ext-milk \x62ackdrop:\x62g-cocoa/\x370"} data-lenis-prevent="true" />
              </div>
              <div className={"\x74p-memories__foot"}>
                <div className={"\x70up-buddy \x77-36 \x6dd:\x77-44"} data-facing="left" data-live="">
                  <svg viewBox="0 0 300 240" role="img" aria-label="Teddy, admiring the wall" style={{ overflow: "visible" } as unknown as CSSProperties} {...({ focusable: "false" } as any)}>
                    <g data-p="root" transform="translate(0.0 0) translate(150 0) scale(-1.000 1) translate(-150 0)">
                      <ellipse data-p="shadow" cx="150" cy="230" rx="92" ry="7" fill="#2a170e" opacity="0.12" transform="translate(0 0) scale(1 1)" style={{ transformBox: "fill-box", transformOrigin: "center center" } as unknown as CSSProperties} />
                      <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 -1.51) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -2.16) rotate(-24 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="1" data-site-import-responsive="518">
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
                        <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(46.97 84 150)" : "rotate(40.06 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="523">
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
                      <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(-10 -5.27) rotate(11.08 212 100)" : "translate(-10 -6.25) rotate(0 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="537">
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
                  <span aria-hidden="true" className={"\x70up-bubble"} data-show="true">hm?</span>
                </div>
                <p className={"\x66ont-scrawl \x74ext-lg \x74ext-cocoa-soft"}>every one of them was a Teddy Pup once</p>
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
                      <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 0.07) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)" : "translate(0 -0.16) rotate(0 196 206) translate(196 0) scale(1 1) translate(-196 0)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="body" opacity="0" data-site-import-responsive="936">
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
                        <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "rotate(-7.34 84 150)" : "rotate(-17.53 84 150)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="tail" data-site-import-responsive="945">
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
                      <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 9.1) rotate(-3.55 212 100)" : "translate(0 8.75) rotate(4 212 100)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="head" data-site-import-responsive="598">
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
                            <g d={isMobile ? undefined : undefined} dx={isMobile ? undefined : undefined} dy={isMobile ? undefined : undefined} height={isMobile ? undefined : undefined} textLength={isMobile ? undefined : undefined} transform={isMobile ? "translate(0 0) scale(1 1)" : "translate(0 30.36) scale(1 0.69)"} viewBox={isMobile ? undefined : undefined} width={isMobile ? undefined : undefined} x={isMobile ? undefined : undefined} y={isMobile ? undefined : undefined} data-p="blink" data-site-import-responsive="610">
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
                <a className={"\x66ont-semibold \x74ext-milk/\x390 \x75nderline-offset-4 \x68over:\x74ext-honey \x68over:\x75nderline"} href="#">Happy families</a>
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
