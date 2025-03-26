import { Geist } from "next/font/google";
import RegisterSW from "./RegisterSW";
import { Providers } from "@/context/ContextProvider";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "freecreate",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.className} bg-white h-full  font-light`}
      suppressHydrationWarning
    >
      <body className=" text-foreground h-[calc(100%-55px)]">
        <RegisterSW />
        <Providers>
          <Header />
          <Sidebar />
          <main className="mt-[55px] sm:ml-48 h-[calc(100%-55px)] ">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
