import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Après le vote",
  description:
    "Explorez ce que les programmes politiques pourraient changer en France entre 2027 et 2032.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
