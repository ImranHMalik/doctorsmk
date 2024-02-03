import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DoctorsMK",
  description: "Best GP service in Manchester",
  keywords: [
    "Private GP UK",
    "Private GP Manchester",
    "GP service Manchester",
    "Visa Medical",
    "Occupational Health Assessment",
    "Medicals",
    "Cruise ship medical",
    "Fitness to fly",
    "Pre-employment medical",
    "Periodic Medical",
    "Pre-placement medical",
    "Private Medical Services",
    "Private GP Cheadle",
    "Private GP Stockport",
    "Travel Clinic",
    "Private Cervical Smear",
  ],
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
