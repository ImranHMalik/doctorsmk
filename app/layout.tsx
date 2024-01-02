import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DoctorsMK",
  description: "Best GP service in Manchester",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="app">
          <section className="w-full  flex-center flex-col ">
            <Nav />
            <section className="h-[148px] xl:h-[100px] w-full flex-center flex-col"></section>
            {children}
            <Footer />
          </section>
        </main>
      </body>
    </html>
  );
}
