import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./components.css";

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
  title: "Verified — EU compliance documents for cross-border founders",
  description:
    "We scan the documents you have, fix what's missing, and verify every line against the actual law — before it ever reaches your buyer's lawyers. GDPR & EU AI Act compliance ops.",
  openGraph: {
    title: "Verified — EU compliance documents for cross-border founders",
    description:
      "Scan your docs, fix the gaps, and verify every line against the actual law. GDPR & EU AI Act.",
    type: "website",
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
