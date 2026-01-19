import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Ahmed Elawamy | Frontend Developer",
    description:
        "Frontend Developer Portfolio built with Next.js & Tailwind CSS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/*  Material Icons */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                    rel="stylesheet"
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
            >
                <Navbar />
                {children}
                <Toaster position="top-right" />

                <Footer />
            </body>
        </html>
    );
}
