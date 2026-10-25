import type { Metadata } from "next";
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
    default: "Adio Mubarak Adebukola | Website Developer",
    template: "%s | Adio Mubarak Adebukola",
  },

  description:
    "I'm Adio Mubarak , a website developer building thoughtful, responsive web experiences with React, Next.js, TypeScript, and a focus on user experience.",

  applicationName: "SpecialSpace",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "SpecialSpace",
    title: "Adio Mubarak Adebukola | Website Developer",
    description:
      "Thoughtful digital experiences built around real problems, combining frontend engineering, UX thinking, and conversion-focused strategy.",
    locale: "en_NG",
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
