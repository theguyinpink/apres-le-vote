import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://apreslevote.maisonclm.fr"),

  title: {
    default: "Après le vote — Comprendre les projets politiques pour 2027",
    template: "%s",
  },

  description:
    "Comparez 26 projets politiques pour la présidentielle 2027 : mesures, calendrier 2027-2032, votes parlementaires, effets possibles, freins et sources.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Après le vote — Comprendre les projets politiques pour 2027",
    description:
      "26 projets politiques expliqués à travers leurs mesures, leur calendrier, leurs effets possibles, leurs freins et leurs sources.",
    url: "https://apreslevote.maisonclm.fr",
    siteName: "Après le vote",
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Après le vote — Comprendre les projets politiques pour 2027",
    description:
      "26 projets politiques, leurs mesures, effets possibles, freins et sources.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}

        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e09c3d49-5677-485b-84dc-eab6d6ca70b3"
          data-domains="apreslevote.maisonclm.fr"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}