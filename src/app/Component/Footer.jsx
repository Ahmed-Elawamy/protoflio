"use client";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-[#111318] text-gray-300 py-6 mt-0">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
                <p className="text-sm">
                    Ahmed Elawamy &copy; {new Date().getFullYear()}
                </p>

                <div className="flex gap-4 mt-3 sm:mt-0">
                    <a
                        href="https://github.com/Ahmed-Elawamy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        <FiGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ahmed-elawamy-b45079248/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        <FiLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
