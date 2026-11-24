import type { Metadata, Viewport } from "next";
import "@fontsource-variable/ibm-plex-sans/wght.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "./globals.css";

const description =
  "Mark Fullbrook is a principal engineer building generative AI products in financial services, and the developer of Robin, an AI phone agent for small businesses.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mark.fullbrook.me"),
  title: "Mark Fullbrook",
  description,
  openGraph: {
    title: "Mark Fullbrook",
    description,
    url: "/",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfc" },
    { media: "(prefers-color-scheme: dark)", color: "#161e2e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
