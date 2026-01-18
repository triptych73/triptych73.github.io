import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { AuthGuard } from "@/components/AuthGuard";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const cinzel = Cinzel({ subsets: ["latin"], variable: '--font-cinzel' });

export const metadata: Metadata = {
  title: "St Mary Somerset | Mood Board",
  description: "Interior design tool for SMS Tower",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} font-sans antialiased bg-midnight text-portland h-screen overflow-hidden`}>
        <AuthGuard>
          {children}
        </AuthGuard>
      </body>
    </html>
  );
}
