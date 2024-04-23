import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { ThemeProvider } from "next-themes";
import ContextProvider from "@/context/ContextProvider";

const TechnoRacer = localFont({ src: "../public/fonts/TechnoRaceItalic.otf" });

export const metadata: Metadata = {
    title: "Wordly - Learn a new language with ease",
    description: "Learn a new language with ease",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${TechnoRacer.className} min-h-screen w-full flex flex-col justify-normal items-center bg-gradient-to-bl from-white to-gray-400 dark:from-black dark:to-gray-800 text-black dark:text-white transition-all delay-75 duration-100`}
            >
                <ContextProvider>
                    <ThemeProvider>
                        <NavBar />
                        {children}
                        <div></div>
                    </ThemeProvider>
                </ContextProvider>
            </body>
        </html>
    );
}
