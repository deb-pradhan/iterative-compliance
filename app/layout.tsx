import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./components.css";
import "./main.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

// Inter is used for both UI/body and the display headlines (its tight grotesque
// cut stands in faithfully for the Neue Haas / Inter Display lineage in design.md).
const interDisplay = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iterativeresearch.xyz"),
  title: "Iterative Research — Enterprise AI Infrastructure That Actually Works",
  description:
    "Iterative Research builds compliant, high-performance AI platforms for mission-critical sectors like healthcare, finance, and defense. Scalable AI Infrastructure. Expert Guidance. Real Business Impact.",
  icons: { icon: "/assets/logo-orb.png", apple: "/assets/logo-orb.png" },
  openGraph: {
    title: "Iterative Research — Enterprise AI Infrastructure That Actually Works",
    description:
      "Compliant, high-performance AI platforms for mission-critical sectors. Scalable infrastructure, expert guidance, real business impact.",
    type: "website",
    images: ["/assets/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interDisplay.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
