import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

export const firaCode = Fira_Code({
  weight: ["600", "400", "300"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fira-code",
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
      <body className={`bg-background ${firaCode.variable} fira-code`}>
        {children}
      </body>
    </html>
  );
}
