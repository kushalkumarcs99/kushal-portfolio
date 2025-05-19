import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                I'm a frontend-focused software engineer with 3+ years of experience. Currently at Motorola Solutions building reusable React component libraries using NX monorepo architecture.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Previously at Deloitte USI, I worked on enterprise-grade web apps using React, GraphQL, and AWS. I enjoy crafting accessible, performant UIs with modern frontend tools.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                My passion lies in creating intuitive user experiences and maintaining clean, scalable codebases. I'm always eager to learn new technologies and best practices in the ever-evolving frontend landscape.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Quick Facts
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        3+ years of professional experience
                                    </li>
                                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Specialized in React ecosystem
                                    </li>
                                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Strong focus on component architecture
                                    </li>
                                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Experience with enterprise applications
                                    </li>
                                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Advocate for web accessibility
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About; 