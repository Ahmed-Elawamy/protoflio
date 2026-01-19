"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "../Component/AnimatedSection";

import {
    FaBookOpen,
    FaDownload,
    FaTerminal,
    FaMapMarkerAlt,
    FaBolt,
} from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

const technicalSkills = [
    { title: "Core", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"] },
    {
        title: "Frameworks",
        skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Axios", "MUI"],
    },
    { title: "Tools", skills: ["Git", "Github", "VS Code", "Vercel"] },
];

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

export default function About() {
    return (
        <>
            {/* About Section */}
            <AnimatedSection>
                <section className="py-16 bg-gradient-to-b from-[#0b1220] to-[#0a0f1c]">
                    <div className="container mx-auto px-4">
                        {/* Head */}
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold mb-3 text-white">
                                About Me
                            </h2>
                            <p className="text-[#697183] max-w-xl">
                                Front-end developer & UI enthusiast. I craft
                                digital experiences that are pixel-perfect and
                                accessible.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-[32px]">
                            {/* Left Column */}
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex flex-col gap-[24px]"
                            >
                                {/* Profile Card */}
                                <motion.div
                                    variants={item}
                                    className="bg-gradient-to-b from-[#1a2332] to-[#121a29] p-[14px] rounded-2xl border border-[#1f2a44] shadow-lg"
                                >
                                    <div className="w-[70%] h-[300px] m-auto">
                                        <Image
                                            priority
                                            quality={100}
                                            src="/myPhoto.jpg"
                                            alt="Ahmed Elawamy"
                                            width={600}
                                            height={600}
                                            className="w-full h-[260px] object-cover rounded-xl"
                                        />
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h3 className="text-lg font-bold text-white">
                                            Ahmed Elawamy
                                        </h3>
                                        <div className="mt-3 flex justify-center gap-2 text-[#256af4] text-sm">
                                            <FaTerminal /> Front-end Developer
                                        </div>
                                        <div className="mt-2 flex justify-center gap-2 text-[#9aa4b2] text-sm">
                                            <FaMapMarkerAlt className="text-[#256af4]" />{" "}
                                            Sohag, Egypt
                                        </div>
                                        <div className="mt-5">
                                            <a
                                                download
                                                href="/Ahmed_Elawamy_Frontend_CV.pdf"
                                                className="flex justify-center items-center gap-3 bg-gradient-to-r from-[#256af4] to-[#3b82f6] py-3 rounded-xl text-white font-semibold hover:scale-[1.02] transition"
                                            >
                                                <FaDownload /> Download CV
                                            </a>
                                        </div>
                                        <div className="mt-5 flex justify-center gap-5 text-white">
                                            <a
                                                href="https://github.com/Ahmed-Elawamy"
                                                target="_blank"
                                                className="opacity-70 hover:opacity-100 transition"
                                            >
                                                <FiGithub size={22} />
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/in/ahmed-elawamy-b45079248/"
                                                target="_blank"
                                                className="opacity-70 hover:opacity-100 transition"
                                            >
                                                <FiLinkedin size={22} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Open to Work */}
                                <motion.div
                                    variants={item}
                                    className="bg-gradient-to-br from-[#121e37] to-[#0e1628] p-[24px] rounded-2xl border border-[#152c5d]"
                                >
                                    <h4 className="font-bold text-white mb-2">
                                        Open to Work
                                    </h4>
                                    <p className="text-[#3b82f6] text-sm mb-4">
                                        Currently available for freelance
                                        projects and full-time opportunities.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="flex items-center gap-2 text-[#256af4] font-semibold hover:gap-3 transition-all"
                                    >
                                        Contact Me <BsArrowRight />
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* Right Column */}
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                {/* My Story */}
                                <motion.div
                                    variants={item}
                                    className="mb-10px w-full mb-10"
                                >
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                        <div className="bg-[#13264c] border border-[#1f3b7a] rounded-[9px] p-2">
                                            <FaBookOpen
                                                size={22}
                                                className="text-[#256af4]"
                                            />
                                        </div>
                                        My Story
                                    </h2>
                                    <div className="bg-gradient-to-br from-[#1a2332] to-[#121a29] text-[#7d879a] p-6 rounded-2xl border border-[#1f2a44] leading-relaxed">
                                        My journey into web development started
                                        with curiosity… and evolved into a
                                        passion for building accessible,
                                        pixel-perfect, performant web
                                        experiences.
                                    </div>
                                </motion.div>

                                {/* Technical Skills */}
                                <motion.div variants={item} className="w-full">
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                                        <div className="bg-[#13264c] border border-[#1f3b7a] rounded-[9px] p-2">
                                            <FaBolt
                                                size={22}
                                                className="text-[#256af4]"
                                            />
                                        </div>
                                        Technical Skills
                                    </h2>

                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        className="flex flex-wrap flex-col gap-4"
                                    >
                                        {technicalSkills.map((c, i) => (
                                            <motion.div
                                                key={i}
                                                variants={item}
                                                className="mb-5 bg-gradient-to-br from-[#1a2332] to-[#121a29] text-[#7d879a] p-6 rounded-2xl border border-[#1f2a44] leading-relaxed"
                                            >
                                                <p className="text-[white] font-bold mb-3">
                                                    {c.title}
                                                </p>
                                                <div className="flex flex-wrap flex-row gap-4">
                                                    {c.skills.map(
                                                        (skill, j) => (
                                                            <motion.div
                                                                key={j}
                                                                variants={item}
                                                                className="hover:bg-[#1389ce] cursor-default transition-all rounded-[5px] border-1 border-[#292f3a] bg-[#111318] text-[#ccd6e2] py-2.5 px-4"
                                                            >
                                                                {skill}
                                                            </motion.div>
                                                        ),
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </>
    );
}
