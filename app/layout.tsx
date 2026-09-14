import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://peek.nevermore-easley.workers.dev";
const title = "Peek — Your screen. Your way.";
const description =
  "Peek is a local-first, open-source accessibility assistant for Windows. Follow your keyboard and mouse, explore what's behind every control, and ask an AI of your choice when you need more context. GPL-3.0, under active early development.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Peek",
  keywords: [
    "Peek",
    "screen reader",
    "accessibility",
    "Windows accessibility",
    "open source",
    "assistive technology",
    "text to speech",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Peek",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Peek logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo.png"],
  },
};

export const viewport = {
  themeColor: "#082619",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
