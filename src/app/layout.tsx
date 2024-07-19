import type { Metadata } from "next";
import { Fira_Code, Rakkas } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`bg-background ${firaCode.variable} ${rakkas.variable} fira-code`}
      >
        {children}
      </body>
    </html>
  );
}
