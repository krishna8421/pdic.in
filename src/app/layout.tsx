import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className={`antialiased flex flex-col min-h-screen`}>
        <Header />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
