import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaReact,
    FaGitAlt,
    FaGithub,
    FaJira,
    FaFigma,
    FaJs,
    FaTable,
    FaChartBar
} from 'react-icons/fa';
import {
    SiTypescript,
    SiTailwindcss,
    SiNx,
    SiRedux,
    SiStyledcomponents,
    SiWebpack,
    SiVite,
    SiJest,
    SiGithubactions,
    SiGraphql,
    SiAxios,
    SiMysql,
    SiMongodb,
    SiAwslambda,
    SiAmazons3,
    SiCloudflare,
    SiBabel
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import ResumeModal from '../common/ResumeModal';

const Hero = () => {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const text = "I craft fast, accessible, and elegant web experiences—where clean code meets thoughtful design.";

    const techStack = [
        // Frontend Core
        { icon: FaReact, name: 'React.js' },
        { icon: SiTypescript, name: 'TypeScript' },
        { icon: FaJs, name: 'JavaScript (ES6+)' },
        { icon: SiRedux, name: 'Redux' },
        { icon: TbBrandReactNative, name: 'Context API' },

        // Styling & UI
        { icon: SiTailwindcss, name: 'Tailwind CSS' },
        { icon: SiStyledcomponents, name: 'Styled-Components' },
        { icon: FaTable, name: 'Ag-Grid' },
        { icon: FaChartBar, name: 'Highcharts' },
        { icon: FaFigma, name: 'Figma' },

        // Build Tools & Testing
        { icon: SiWebpack, name: 'Webpack' },
        { icon: SiVite, name: 'Vite' },
        { icon: SiJest, name: 'Jest' },
        { icon: SiBabel, name: 'Babel' },
        { icon: SiNx, name: 'NX Monorepo' },

        // Backend & APIs
        { icon: SiGraphql, name: 'GraphQL' },
        { icon: SiAxios, name: 'Axios' },
        { icon: SiMysql, name: 'MySQL' },
        { icon: SiMongodb, name: 'NoSQL' },

        // AWS & DevOps
        { icon: SiAwslambda, name: 'AWS Lambda' },
        { icon: SiAmazons3, name: 'S3' },
        { icon: SiCloudflare, name: 'CloudFront' },
        { icon: SiGithubactions, name: 'GitHub Actions' },

        // Version Control & Project Management
        { icon: FaGitAlt, name: 'Git' },
        { icon: FaGithub, name: 'GitHub' },
        { icon: FaJira, name: 'Jira' },
    ];

    return (
        <>
            <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-6 py-20">
                    <div className="text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                        >
                            Kushal Kumar K A
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8"
                        >
                            Software Engineer - Frontend
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
                        >
                            {text}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="flex flex-wrap justify-center gap-4 mb-12"
                        >
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.6 + index * 0.03,
                                        ease: "easeOut"
                                    }}
                                    className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <tech.icon className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm text-gray-800 dark:text-gray-200">{tech.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <a
                                href="https://www.linkedin.com/in/kushal-kumar-k-a-7a0101151/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
                            >
                                Connect on LinkedIn
                            </a>
                            <button
                                onClick={() => setIsResumeModalOpen(true)}
                                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-8 py-3 rounded-lg transition-colors"
                            >
                                View Resume
                            </button>
                            <a
                                href="#projects"
                                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-8 py-3 rounded-lg transition-colors"
                            >
                                View Projects
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ResumeModal
                isOpen={isResumeModalOpen}
                onClose={() => setIsResumeModalOpen(false)}
            />
        </>
    );
};

export default Hero; 