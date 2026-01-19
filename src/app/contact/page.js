"use client";

import emailjs from "emailjs-com";
import toast from "react-hot-toast";

import {
    HiOutlineMail,
    HiOutlineLocationMarker,
    HiOutlineArrowRight,
} from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaLaptopCode, FaHandshake } from "react-icons/fa";
import AnimatedSection from "../Component/AnimatedSection";

export default function Contact() {
    function handleSend(e) {
        e.preventDefault();
        toast.loading("Sending message...", { id: "send" });

        emailjs
            .sendForm(
                "service_wgl2h3d",
                "template_ki9sy8y",
                e.target,
                "tS7Gq_DmSZK-GkhYS",
            )
            .then(() => {
                toast.success("Message sent successfully", {
                    id: "send",
                });

                e.target.reset();
            })
            .catch((error) => {
                console.error(error);
                toast.error("Something went wrong", { id: "send" });
            });
    }

    return (
        <AnimatedSection>
            <section className="py-24 bg-gradient-to-b from-[#0b1220] to-[#070b14]">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Head */}
                    <div className="max-w-2xl mb-14">
                        <h2 className="text-4xl font-bold mb-4">
                            Get in <span className="text-[#256af4]">Touch</span>
                        </h2>
                        <p className="text-[#9aa4b2]">
                            Have a project in mind or just want to say hi?
                            I&apos;m always open to discussing new
                            opportunities, creative ideas, and collaborations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12">
                        {/* FORM */}
                        <form onSubmit={handleSend} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Input
                                    label="Your Name"
                                    name="name"
                                    placeholder="Ahmed"
                                />
                                <Input
                                    label="Your Email"
                                    name="email"
                                    type="email"
                                    placeholder="ahmed@example.com"
                                    icon={
                                        <HiOutlineMail className="text-[#256af4] w-5 h-5" />
                                    }
                                />
                            </div>

                            <Input
                                label="Subject (Optional)"
                                name="subject"
                                placeholder="Project Inquiry"
                            />

                            <Textarea
                                label="Message"
                                name="message"
                                placeholder="Tell me about your project..."
                            />

                            <button
                                type="submit"
                                className="cursor-pointer inline-flex items-center gap-2 bg-[#256af4]
              px-6 py-3 rounded-md text-white font-medium
              hover:opacity-90 transition"
                            >
                                Send Message
                                <HiOutlineArrowRight className="w-5 h-5" />
                            </button>
                        </form>

                        {/* RIGHT SIDE */}
                        <div className="space-y-6">
                            <InfoCard
                                icon={<HiOutlineMail className="w-5 h-5" />}
                                title="Email"
                                value="ahmedalawamy10px@gmail.com"
                                href="mailto:ahmedalawamy10px@gmail.com"
                            />

                            <InfoCard
                                icon={
                                    <HiOutlineLocationMarker className="w-5 h-5" />
                                }
                                title="Location"
                                value="Remote / Cairo, Egypt"
                            />

                            <div>
                                <h4 className="text-lg font-semibold mb-4">
                                    Find me on
                                </h4>

                                <div className="space-y-3">
                                    <SocialCard
                                        icon={<SiGithub className="w-5 h-5" />}
                                        title="GitHub"
                                        desc="Check my recent code"
                                        href="https://github.com/Ahmed-Elawamy"
                                    />
                                    <SocialCard
                                        icon={
                                            <SiLinkedin className="w-5 h-5" />
                                        }
                                        title="LinkedIn"
                                        desc="Connect professionally"
                                        href="https://www.linkedin.com/in/ahmed-elawamy-b45079248/"
                                    />
                                    <SocialCard
                                        icon={
                                            <FaLaptopCode className="w-5 h-5 text-[#256af4]" />
                                        }
                                        title="Mostaql"
                                        desc="Hire me for projects"
                                        href="https://mostaql.com/u/ahmed_elawamy/portfolio"
                                    />
                                    <SocialCard
                                        icon={
                                            <FaHandshake className="w-5 h-5 text-[#256af4]" />
                                        }
                                        title="Khamsat"
                                        desc="Micro-services"
                                        href="https://khamsat.com/user/ahmed_elawamy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
}

/* ================= COMPONENTS ================= */

function Input({ label, placeholder, icon, name, type = "text" }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm text-[#d6dadf]">{label}</label>
            <div className="relative">
                {icon && (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2">
                        {icon}
                    </span>
                )}
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    required
                    className={`w-full bg-[#111827] border border-[#1f2937]
          rounded-md px-4 py-3 text-[#d6dadf]
          focus:outline-none focus:border-[#256af4] transition
          ${icon ? "pl-10" : ""}`}
                />
            </div>
        </div>
    );
}

function Textarea({ label, placeholder, name }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm text-[#d6dadf]">{label}</label>
            <textarea
                name={name}
                rows={5}
                placeholder={placeholder}
                required
                className="bg-[#111827] border border-[#1f2937]
        rounded-md px-4 py-3 text-[#d6dadf]
        focus:outline-none focus:border-[#256af4] transition resize-none"
            />
        </div>
    );
}

function InfoCard({ icon, title, value, href }) {
    return (
        <a
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <div className="flex items-center gap-4 bg-[#0f172a] border border-[#1f2937] rounded-lg p-4 hover:border-[#256af4] transition">
                <div className="text-[#256af4]">{icon}</div>
                <div>
                    <p className="text-xs uppercase text-[#697183]">{title}</p>
                    <p className="text-sm text-[#d6dadf]">{value}</p>
                </div>
            </div>
        </a>
    );
}

function SocialCard({ icon, title, desc, href }) {
    return (
        <a
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <div className="flex items-center gap-4 bg-[#0f172a] border border-[#1f2937] rounded-lg p-4 hover:border-[#256af4] transition cursor-pointer">
                <div className="text-[#256af4]">{icon}</div>
                <div>
                    <p className="text-sm font-medium">{title}</p>
                    {desc && <p className="text-xs text-[#697183]">{desc}</p>}
                </div>
            </div>
        </a>
    );
}
