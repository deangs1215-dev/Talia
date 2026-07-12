import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talia Psychologist Services | Johannesburg & Online",
  description: "Warm, compassionate psychological services for individuals, couples and families in Johannesburg and online across South Africa.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico?v=2`, type: "image/x-icon" },
      { url: `${basePath}/favicon.png?v=2`, type: "image/png" },
    ],
    shortcut: `${basePath}/favicon.ico?v=2`,
    apple: `${basePath}/apple-icon.png?v=2`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
