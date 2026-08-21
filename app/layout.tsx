import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://loopasam.github.io/pixel-nest/";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pixel Nest — Tiny worlds. Big adventures.",
  description:
    "A playful home for small browser games. Pick an adventure and press play.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Pixel Nest",
    description: "Tiny worlds. Big adventures.",
    images: [{ url: "og.png", width: 1728, height: 904, alt: "Pixel Nest" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Nest",
    description: "Tiny worlds. Big adventures.",
    images: ["og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
