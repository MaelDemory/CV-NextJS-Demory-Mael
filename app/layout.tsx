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
  description: "Maël Demory — software engineer apprentice at Arjo France and engineering student at IMT Nord Europe, seeking a software engineering internship abroad from June to September 2027.",
  keywords: [
    "software engineering internship",
    "internship abroad",
    "international internship",
    "software engineer intern",
    "fullstack developer",
    "PHP developer",
    "portfolio",
    "IMT Nord Europe",
    "apprenticeship",
    "Maël Demory",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Maël Demory — Portfolio",
    description: "Two years shipping production software in a medical-device group. Seeking a software engineering internship abroad, June to September 2027.",
    url: "/",
    siteName: "Maël Demory",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maël Demory — Portfolio",
    description: "Two years shipping production software in a medical-device group. Seeking a software engineering internship abroad, June to September 2027.",
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
