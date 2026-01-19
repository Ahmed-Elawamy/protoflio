import { FiCode } from "react-icons/fi";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiGithub,
} from "react-icons/si";

import { BsArrowRight } from "react-icons/bs"; // Bootstrap
import Link from "next/link";
import AnimatedSection from "../Component/AnimatedSection";

const skills = [
    { id: 1, title: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { id: 2, title: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { id: 3, title: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { id: 4, title: "React", icon: <SiReact />, color: "#61DAFB" },
    { id: 5, title: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
    { id: 6, title: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { id: 7, title: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
    { id: 8, title: "GitHub", icon: <SiGithub />, color: "#ffffff" },
];

export default function Skills() {
    return (
        <AnimatedSection>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {/* Tech Stack Badge */}
                    <div className="mb-7 flex items-center gap-2 text-sm text-[#276df8] bg-[#13203c] rounded-[41px] w-fit py-[7px] px-[18px]">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
                        </span>
                        Tech Stack
                    </div>

                    {/* Head */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold mb-3">
                            Technical Proficiency
                        </h2>
                        <p className="text-[#697183] max-w-xl">
                            A curated list of tools and technologies I use to
                            build robust, scalable, and beautiful digital
                            experiences.
                        </p>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                        <div className="bg-[#192c4d] rounded-2xl p-2">
                            <FiCode size={28} className="text-[#62a6fb]" />
                        </div>
                        Frontend Development
                    </h2>

                    {/* Cards */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {skills.map((skill) => (
                            <div
                                key={skill.id}
                                className="    group bg-[#161b22] rounded-2xl h-[200px]
    flex items-center justify-center
    transition-all duration-300
    border-2 border-transparent
    hover:-translate-y-1
    hover:border-[#276df8]
"
                            >
                                <div className="flex flex-col items-center text-center">
                                    {/* Icon Box */}
                                    <div
                                        className="mb-4 flex items-center justify-center
                    w-16 h-16 rounded-xl
                    bg-[#192c4d] shadow-md shadow-black/30
                    text-3xl
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                                        style={{ color: skill.color }}
                                    >
                                        {skill.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold">
                                        {skill.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 flex justify-center pb-20">
                        <Link
                            className="group flex items-center gap-2 text-slate-500 hover:text-[#155dfc] dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
                            href="/projects"
                        >
                            See how I apply these skills in my projects
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                                <BsArrowRight />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
}
