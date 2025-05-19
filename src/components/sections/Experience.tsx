import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: 'Frontend Engineer',
            company: 'Motorola Solutions',
            period: 'Aug 2024 – Present',
            description: [
                'Lead development of reusable React component libraries using NX monorepo architecture',
                'Implement and maintain design system components with TypeScript and TailwindCSS',
                'Collaborate with UX team to ensure component accessibility and usability',
                'Mentor junior developers and conduct code reviews',
            ],
        },
        {
            title: 'Analyst',
            company: 'Deloitte USI',
            period: 'Nov 2021 – Jun 2024',
            description: [
                'Developed enterprise web applications using React, GraphQL, and AWS',
                'Implemented responsive layouts and animations using modern CSS techniques',
                'Optimized application performance and reduced bundle size by 40%',
                'Contributed to migration from REST to GraphQL architecture',
            ],
        },
        {
            title: 'Trainee Analyst',
            company: 'Deloitte USI',
            period: 'Jan 2021 – Nov 2021',
            description: [
                'Assisted in frontend development using React and TypeScript',
                'Created reusable UI components and implemented responsive designs',
                'Participated in code reviews and team discussions',
                'Learned and implemented best practices in web development',
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                        Experience
                    </h2>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative pl-8 md:pl-32"
                            >
                                <div className="absolute left-0 top-0 mt-1 md:mt-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                                <div className="absolute left-[0.4375rem] top-5 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                                <div className="text-sm text-gray-700 dark:text-gray-200 font-medium mb-12 md:absolute md:left-12 md:top-0 md:-translate-y-1">
                                    {exp.period}
                                </div>

                                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md md:mt-10">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                        {exp.title}
                                    </h3>
                                    <div className="text-blue-500 font-medium mb-4">{exp.company}</div>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-600 dark:text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience; 