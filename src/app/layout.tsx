import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from '../components/Header'
import ExternalLinks from '../components/ExternalLinks'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicholas Wilson - Software Engineer",
  description: "This is my personal website (github.com/nwilson5/nuuson) and served with Cloudflare Pages.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
      <Header />
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 py-8 my-4 bg-amber-50/75 backdrop-blur-sm rounded-lg">
        {children}
      </main>
      <div className="mb-8"><ExternalLinks /></div>
      <Footer />
      </body>
    </html>
  );
}
