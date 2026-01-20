import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const cinzel = Cinzel({
    variable: "--font-cinzel",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "St Mary Somerset | Mood Board V2",
    description: "Interior design tool for SMS Tower",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${cinzel.variable} antialiased bg-midnight text-portland h-screen overflow-hidden`}
            >
                {children}
            </body>
        </html>
    );
}
