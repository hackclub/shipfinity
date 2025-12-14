import type { Metadata } from "next";
import Link from "next/link";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shipfinity YSWS",
  description: "Hack Club YSWS where you ship a Gridfinity bin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur">
          <div className="section px-6 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold text-gray-100 hover:text-indigo-300 no-underline">
              Shipfinity
            </Link>
            <nav className="flex items-center gap-3 text-sm">
              <Link href="/guide" className="text-gray-300 hover:text-indigo-300 no-underline px-3 py-2 rounded-md hover:bg-gray-800/60">
                Guides
              </Link>
              <Link href="/#submit" className="btn btn-primary px-4 py-2">
                Submit
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
