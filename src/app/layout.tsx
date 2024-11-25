import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prateek Dental Care and Implant Centre",
  description: "Prateek Dental Care and Implant Centre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
