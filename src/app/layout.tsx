import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Content from "../../components/Content";
import { Providers } from "./providers";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-outfit",
  preload: true,
});

export const metadata: Metadata = {
  title: "george hum",
  description: "George Hum's personal website",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full w-full !scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`min-h-screen min-w-screen flex justify-center bg-white ${outfit.className} text-slate-900`}
      >
        <div className="flex-col md:flex-row inline-flex max-w-90 w-full md:w-auto my-8 md:my-14 gap-5 md:gap-11 p-5">
          <Header />
          <Content>{children}</Content>
        </div>
      </body>
    </html>
  );
}
