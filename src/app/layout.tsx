
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MK45 PRONOSTICS",
  description:
    "MK45 PRONOSTICS : rencontres, résultats, statistiques et analyses sportives.",
  applicationName: "MK45 PRONOSTICS"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090a0c"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
      }
