import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rotimi Paul Idowu | Trial Lawyer & Litigation Expert",
  description:
    "Distinguished trial lawyer with 18+ years of experience managing 400+ litigation cases, specializing in complex corporate litigation, intellectual property, and strategic negotiations.",
  generator: "Teatoe",
  icons: {
    icon: "/RP.png",
    apple: "/RP.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1419" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.className} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
