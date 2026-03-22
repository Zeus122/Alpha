import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alpha-agency.netlify.app"),
  title: "ALPHA — Digital Growth Partner",
  description:
    "First in Mind, First in Results. Bold, measurable, and unforgettable marketing powered by strategy and precision.",
  keywords: [
    "marketing agency",
    "digital growth",
    "branding",
    "creative agency",
    "digital marketing",
    "alpha agency",
  ],
  openGraph: {
    title: "ALPHA — Digital Growth Partner",
    description: "Bold, measurable, and unforgettable marketing powered by strategy and precision.",
    type: "website",
    locale: "en_US",
    siteName: "Alpha Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALPHA — Digital Growth Partner",
    description: "Bold, measurable, and unforgettable marketing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        suppressHydrationWarning
        className={`${montserrat.variable} ${inter.variable} font-[family-name:var(--font-inter)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
