import type { Metadata } from "next";
import { Fira_Code, Rakkas } from "next/font/google";
import "./globals.css";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";

export const firaCode = Fira_Code({
  weight: ["600", "400", "300"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const rakkas = Rakkas({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-rakkas",
});

export const metadata: Metadata = {
  title: "george hum",
  description: "George Hum's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${firaCode.variable} ${rakkas.variable} fira-code min-h-screen min-w-screen flex justify-center bg-secondary`}
      >
        <div className="inline-flex w-auto mt-14">
          <Sidebar />
          <Content>{children}</Content>
        </div>
      </body>
    </html>
  );
}
