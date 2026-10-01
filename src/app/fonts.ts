import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// General Sans (Fontshare) is the primary body font, but its woff2 files
// need a license-accepted download from fontshare.com — not available in
// this environment. Drop the files in src/app/fonts/general-sans/ and
// swap in the next/font/local call below; until then --font-general-sans
// falls back to Inter via the stack in globals.css.
//
// import localFont from "next/font/local";
// export const generalSans = localFont({
//   variable: "--font-general-sans",
//   src: [
//     { path: "./fonts/general-sans/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
//     { path: "./fonts/general-sans/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
//     { path: "./fonts/general-sans/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
//   ],
//   display: "swap",
// });
