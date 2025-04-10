import type { Metadata, Viewport } from "next";
import { Fira_Code, Rakkas } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Content from "../../components/Content";
import { Providers } from "./providers";

const firaCode = Fira_Code({
  weight: ["600", "400", "300"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fira-code",
  preload: false,
});

const rakkas = Rakkas({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-rakkas",
  preload: false,
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
      date-theme="forest"
    >
      <body
        className={`${firaCode.variable} ${rakkas.variable} fira-code min-h-screen min-w-screen flex justify-center bg-bg-light dark:bg-neutral-900`}
      >
        <Providers>
          <div className="flex-col md:flex-row inline-flex max-w-90 w-full md:w-auto my-8 md:my-14 gap-5 md:gap-11 p-5">
            <Header />
            <Content>{children}</Content>
          </div>
        </Providers>
      </body>
    </html>
  );
}
