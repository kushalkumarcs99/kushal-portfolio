import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact,
    FaAws,
    FaGitAlt,
    FaDocker,
    FaNodeJs,
} from 'react-icons/fa';
import {
    SiTypescript,
    SiTailwindcss,
    SiNx,
    SiGraphql,
    SiJest,
    SiRedux,
    SiWebpack,
} from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React', icon: FaReact, level: 90 },
                { name: 'TypeScript', icon: SiTypescript, level: 85 },
                { name: 'TailwindCSS', icon: SiTailwindcss, level: 90 },
                { name: 'Redux', icon: SiRedux, level: 80 },
            ],
        },
        {
            title: 'Backend & Cloud',
            skills: [
                { name: 'Node.js', icon: FaNodeJs, level: 75 },
                { name: 'AWS', icon: FaAws, level: 70 },
                { name: 'GraphQL', icon: SiGraphql, level: 80 },
            ],
        },
        {
            title: 'Tools & Technologies',
            skills: [
                { name: 'NX', icon: SiNx, level: 85 },
                { name: 'Git', icon: FaGitAlt, level: 90 },
                { name: 'Jest', icon: SiJest, level: 85 },
                { name: 'Webpack', icon: SiWebpack, level: 75 },
                { name: 'Docker', icon: FaDocker, level: 70 },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                        Skills & Technologies
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={categoryIndex}
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
                            >
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                    {category.title}
                                </h3>

                                <div className="space-y-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            variants={itemVariants}
                                            className="space-y-2"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <skill.icon className="w-5 h-5 text-blue-500" />
                                                    <span className="text-gray-700 dark:text-gray-300">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    className="h-full bg-blue-500 rounded-full"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills; 