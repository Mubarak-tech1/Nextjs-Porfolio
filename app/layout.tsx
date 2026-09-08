import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Inter, Sora } from "next/font/google";
import Background from "@/components/layout/Background";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
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
