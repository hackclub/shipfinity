import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipfinity YSWS - Guide",
  description: "Hack Club YSWS where you ship a Gridfinity bin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
