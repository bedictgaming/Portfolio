import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Benedict Mequiabas | Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-mono min-h-screen flex flex-col">
        <div className="max-w-7xl mx-auto w-full p-4 md:p-8 flex-grow">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}