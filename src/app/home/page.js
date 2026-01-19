"use client";

import Link from "next/link";
import AnimatedSection from "../Component/AnimatedSection";

export default function HomePage() {
    return (
        <section className="container mx-auto px-4 md:px-6 lg:px-8 pb-9">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
                {/* ===== Left Content ===== */}
                <AnimatedSection>
                    <div className="flex flex-col gap-6 pt-24 lg:pt-0">
                        {/* Availability */}
                        <div
                            className="flex items-center gap-2 text-sm md:mt-2
                        text-[#276df8] bg-[#13203c] rounded-[41px] w-fit py-1.75 px-4.5"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
                            </span>
                            Available for hire
                        </div>

                        {/* Heading */}
                        <div>
                            <span className="block text-lg text-slate-400">
                                Hello, I am
                            </span>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
                                Ahmed
                                <span className="block bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                                    Elawamy
                                </span>
                            </h1>

                            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-blue-500">
                                Front-End Developer
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
                            I specialize in building accessible, pixel-perfect,
                            and performant web applications using Next.js and
                            modern UI technologies. Crafting clean UI and smooth
                            UX is what I love most.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Link href="/projects">
                                <button className="cursor-pointer h-12 px-6 rounded-lg bg-blue-600 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg">
                                    View Projects
                                </button>
                            </Link>

                            <button className="cursor-pointer h-12 px-6 rounded-lg border border-slate-700 font-bold text-white transition hover:bg-slate-800">
                                Contact Me
                            </button>
                        </div>
                    </div>
                </AnimatedSection>

                {/* ===== Right Visual ===== */}
                <div className="relative flex justify-center lg:justify-end">
                    {/* Glow */}
                    <div className="absolute -inset-6 rounded-full bg-blue-500/20 blur-3xl"></div>

                    {/* Card */}
                    <div className="relative w-full max-w-[420px] overflow-visible aspect-square rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">
                        {/* ===== Status Card ===== */}
                        <div className="absolute bottom-0 left-0 z-10">
                            <div
                                className="relative -bottom-6 -left-6 flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/90 p-4 backdrop-blur-sm shadow-xl animate-bounce"
                                style={{ animationDuration: "3s" }}
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                                    <span className="material-symbols-outlined">
                                        check_circle
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400">
                                        Current Status
                                    </p>
                                    <p className="text-sm font-bold text-white">
                                        Open to Work
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 p-6 flex flex-col gap-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                            {/* Fake Header */}
                            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                                <div className="flex gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-500"></span>
                                    <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                                </div>
                                <span className="h-2 w-20 rounded-full bg-slate-700"></span>
                            </div>

                            {/* Fake Code */}
                            <div className="flex-1 space-y-3 font-mono text-sm opacity-80">
                                <div className="flex gap-4">
                                    <span className="text-slate-600">01</span>
                                    <span className="text-purple-400">
                                        const
                                    </span>
                                    <span className="text-blue-400">Ahmed</span>
                                    <span>=</span>
                                    <span className="text-purple-400">
                                        {"{"}
                                    </span>
                                </div>

                                <div className="flex gap-4 pl-6">
                                    <span className="text-slate-600">02</span>
                                    <span className="text-slate-400">
                                        role:
                                    </span>
                                    <span className="text-green-400">
                                        'Frontend Developer'
                                    </span>
                                    ,
                                </div>

                                <div className="flex gap-4 pl-6">
                                    <span className="text-slate-600">03</span>
                                    <span className="text-slate-400">
                                        skills:
                                    </span>
                                    <span className="text-yellow-400">
                                        {"['React', 'Next.js', 'Tailwind']"}
                                    </span>
                                    ,
                                </div>

                                <div className="flex gap-4 pl-6">
                                    <span className="text-slate-600">04</span>
                                    <span className="text-slate-400">
                                        hardWorker:
                                    </span>
                                    <span className="text-red-400">true</span>,
                                </div>

                                <div className="flex gap-4 pl-6">
                                    <span className="text-slate-600">05</span>
                                    <span className="text-slate-400">
                                        hireable:
                                    </span>
                                    <span className="text-blue-400">
                                        () =&gt;
                                    </span>
                                    <span className="text-green-400">
                                        "Let's build something great!"
                                    </span>
                                </div>

                                <div className="flex gap-4">
                                    <span className="text-slate-600">06</span>
                                    <span className="text-purple-400">
                                        {"}"}
                                    </span>
                                    ;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
