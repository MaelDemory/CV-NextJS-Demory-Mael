import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL } from "./site";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Maël Demory — Portfolio",
  description: "Portfolio of Maël Demory — Software Engineer Apprentice at Arjo France and computer science engineering student at IMT Nord Europe.",
  keywords: ["software engineer", "fullstack developer", "portfolio", "IMT Nord Europe", "apprenticeship"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Maël Demory — Portfolio",
    description: "Software Engineer Apprentice at Arjo France & computer science engineering student at IMT Nord Europe.",
    url: "/",
    siteName: "Maël Demory",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maël Demory — Portfolio",
    description: "Software Engineer Apprentice at Arjo France & computer science engineering student at IMT Nord Europe.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Applique thème + langue avant le premier paint pour éviter tout flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);if(localStorage.getItem("locale")==="fr"){document.documentElement.lang="fr"}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
