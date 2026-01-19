"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/home" },
        { name: "About", href: "/about" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="bg-[#101319] text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
            {/* Logo */}
            <h2 className="text-lg font-bold">Elawamy</h2>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                    <li
                        key={link.name}
                        className={`hover:text-[#eee] ${
                            pathname === link.href
                                ? "text-blue-500"
                                : "text-gray-300"
                        } transition-colors`}
                    >
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}

                <li>
                    {/* <button className="ml-4 flex h-9 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-bold text-white shadow-[0_0_15px_rgba(37,106,244,0.4)] hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] transition-all"> */}
                    <a
                        download={true}
                        href="/Ahmed_Elawamy_Frontend_CV.pdf"
                        className="cursor-pointer flex h-9 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-bold text-white shadow-[0_0_15px_rgba(37,106,244,0.4)] hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] transition-all"
                    >
                        Resume
                    </a>
                    {/* </button> */}
                </li>
            </ul>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex flex-col justify-between h-6 w-8 focus:outline-none"
                >
                    <span
                        className={`block h-0.5 w-full bg-white transition-transform ${
                            menuOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    ></span>
                    <span
                        className={`block h-0.5 w-full bg-white transition-opacity ${
                            menuOpen ? "opacity-0" : ""
                        }`}
                    ></span>
                    <span
                        className={`block h-0.5 w-full bg-white transition-transform ${
                            menuOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    ></span>
                </button>

                {/* Mobile Menu */}
                {menuOpen && (
                    <ul className="absolute top-16 left-0 w-full bg-[#101319] flex flex-col items-center gap-6 py-6">
                        {navLinks.map((link) => (
                            <li
                                key={link.name}
                                className={`hover:text-[#eee] ${
                                    pathname === link.href
                                        ? "text-blue-500"
                                        : "text-gray-300"
                                } transition-colors`}
                                onClick={() => setMenuOpen(false)}
                            >
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                        <li>
                            {/* <button className="cursor-pointer flex h-9 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-bold text-white shadow-[0_0_15px_rgba(37,106,244,0.4)] hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] transition-all"> */}
                            <a
                                download={true}
                                href="/Ahmed_Elawamy_Frontend_CV.pdf"
                                className="cursor-pointer flex h-9 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-bold text-white shadow-[0_0_15px_rgba(37,106,244,0.4)] hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] transition-all"
                            >
                                Resume
                            </a>
                            {/* </button> */}
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
