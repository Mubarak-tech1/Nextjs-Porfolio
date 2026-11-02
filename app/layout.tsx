import type { Metadata } from "next";
import PersonSchema from "@/components/seo/PersonSchema";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Background from "@/components/layout/Background";

export const metadata: Metadata = {
  metadataBase: new URL("https://adiomubarakadebukola.netlify.app"),

  verification: {
    google: "yh-p0P4eyZcrPHvIhgugS_rFrdPtlVdhXd0pHDm9kLc",
  },

  title: {
    default: "Adio Mubarak Adebukola | Frontend Developer",
    template: "%s | Adio Mubarak Adebukola",
  },

  description:
    "Adio Mubarak Adebukola is a frontend developer building responsive web experiences with React, Next.js, and TypeScript, with a focus on usability and thoughtful design.",

  applicationName: "Adio Mubarak Adebukola Portfolio",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Adio Mubarak Adebukola",
    title: "Adio Mubarak Adebukola | Frontend Developer",
    description:
      "Thoughtful, responsive web experiences built with React and Next.js, combining frontend engineering, UX thinking, and purposeful design.",
    locale: "en_NG",
    images: [
      {
        url: "/images/Portfolio_Banner.png",
        width: 1200,
        height: 630,
        alt: "Adio Mubarak Adebukola, Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Adio Mubarak Adebukola | Frontend Developer",
    description:
      "Thoughtful, responsive web experiences built with React and Next.js.",
    images: [
      {
        url: "/images/Portfolio_Banner.png",
        alt: "Adio Mubarak Adebukola, Frontend Developer",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PersonSchema />
        <Background />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
