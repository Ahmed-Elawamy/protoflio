import Image from "next/image";
import { FiCode } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import AnimatedSection from "../Component/AnimatedSection";

const techStyles = {
    React: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    "Next.JS": "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    MUI: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
    JavaScript: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
    HTML: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
    CSS: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
    "Tailwend CSS":
        "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
};

const projects = [
    {
        id: 1,
        title: "Dashboard School Mangment System",
        description:
            "Student Management Dashboard built with React using MUI and Toast Notifications for managing students, courses, attendance, grades, and settings.",
        image: "/dashboard.png",
        tech: ["MUI", "React"],
        codeLink: "https://github.com/Ahmed-Elawamy/Dashboard",
        demoLink: "https://dashboard-react-puce-alpha.vercel.app/dashboard",
    },
    {
        id: 2,
        title: "SkyNow | Weather App",
        description:
            "Weather app built with HTML, CSS, and JavaScript, using a Weather API to show real-time forecasts and conditions.",
        image: "/skyNow.jpg",
        tech: ["JavaScript", "CSS", "HTML"],
        demoLink: "https://ahmed-elawamy.github.io/skyNow/",
        codeLink: "https://github.com/Ahmed-Elawamy/skyNow/",
    },
    {
        id: 3,
        title: "MyUniversty",
        description:
            "Student Management Web App built with React, displaying students data, GPA, attendance, subjects, and skills in a clean UI.",
        image: "/Zuniversity.png",
        tech: ["React", "MUI"],
        demoLink: "https://new-university.vercel.app/",
        codeLink: "https://github.com/Ahmed-Elawamy/newUniversity",
    },
    {
        id: 4,
        title: "My Protoflio",
        description:
            "My Protoflio, It Contain MY Projects And Information OF Me, This Protoflio Clean UI  ",
        image: "/pro.png",
        tech: ["Next.JS", "Tailwend CSS"],
        demoLink: "https://protoflio-alpha.vercel.app/contact",
        codeLink: "https://github.com/Ahmed-Elawamy/protoflio",
    },
    {
        id: 5,
        title: "ZKing - Landing Page",
        description:
            "Landing Page project finished in 2022, fully responsive with clean design and smooth navigation.",
        image: "/LandingPage.png",
        tech: ["HTML", "CSS"],
        demoLink: "https://app.netlify.com/projects/king-template/",
        codeLink: "https://app.netlify.com/projects/king-template/",
    },
    {
        id: 6,
        title: "Landing Page with Multiple Sections",
        description:
            "A responsive personal website showcasing articles, gallery, services, testimonials, team members, skills, pricing plans, and events. Built to practice modern UI layouts, sections organization, and interactive components using HTML, CSS, and JavaScript..",
        image: "/last.png",
        tech: ["HTML", "CSS"],
        demoLink: "https://elawamy.netlify.app/",
        codeLink: "https://elawamy.netlify.app/",
    },
];

export default function Work() {
    return (
        <AnimatedSection>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {/* Head */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold mb-3">
                            Selected Works
                        </h2>
                        <p className="text-[#697183] max-w-xl">
                            A curated selection of web applications,
                            experiments, and open-source contributions built
                            with modern technologies.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((card) => (
                            <div
                                key={card.id}
                                className="bg-[#161b22] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col
                            hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 dark:hover:ring-primary/50 "
                            >
                                {/* Image */}
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-48 object-cover"
                                    width={600}
                                    height={400}
                                />

                                {/* Content */}
                                <div className="p-4 flex flex-col flex-1">
                                    {/* Tech */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {card.tech.map((t, index) => (
                                            <span
                                                key={index}
                                                className={`
                                                px-3 py-1 rounded-full
                                                text-xs font-medium
                                                ${
                                                    techStyles[t] ||
                                                    "bg-gray-500/10 text-gray-400 border border-gray-500/20"
                                                }
                                            `}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-2">
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {card.description}
                                    </p>

                                    <hr className="my-4 text-[#202a39]" />

                                    {/* Buttons */}
                                    <div className="mt-auto">
                                        <div className="flex flex-col md:flex-row gap-4">
                                            <a
                                                href={card.demoLink}
                                                className="
                                                w-full md:w-1/2
                                                bg-[#256af4]
                                                px-6 md:px-[55px] py-2 rounded-[15px]
                                                flex items-center gap-2 justify-center
                                            "
                                            >
                                                <FiEye size={20} />
                                                Demo
                                            </a>

                                            <a
                                                href={card.codeLink}
                                                className="
                                                w-full md:w-1/2
                                                bg-[#282e39]
                                                px-6 md:px-[55px] py-2 rounded-[15px]
                                                flex items-center gap-2 justify-center
                                            "
                                            >
                                                <FiCode size={20} />
                                                Github
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
}
