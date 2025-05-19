import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SaintsmenSystems from './../../assets/Saintsmen-Systems.svg';
import SyntaxSpace from './../../assets/SyntaxSpace-IDE.svg';
import StayTuned from './../../assets/stay-stuned.svg';

const Projects = () => {
    const projects = [
        {
            title: 'Component Library',
            description: 'Developed a modern, responsive company website using ReactJS, focusing on performance, accessibility, and intuitive user experience. Implemented clean component architecture, intuitive iconography, and fully responsive design to ensure seamless usability across devices. The website includes all essential pages such as Home, About Us, Services, Careers, Contact, and more, with smooth navigation and optimized loading. Prioritized maintainability and scalability for future enhancements.',
            image: SaintsmenSystems,
            tags: ['React', 'TypeScript', 'Storybook', 'TailwindCSS'],
            demo: 'https://www.saintsmen.com/',
        },
        {
            title: 'SyntaxSpace IDE',
            description: 'SyntaxSpace is a modern, web-based IDE for writing, running, and testing code in languages like C++, Java, JavaScript, Python, and C#. Built with ReactJS and Monaco Editor, it offers a sleek, customizable UI with theme and font size options. It supports real-time code execution, custom test cases, and displays output and errors clearly. With its responsive, VS Code-like design, SyntaxSpace provides a smooth coding experience across devices. Making a great tool for developers looking for a clean and efficient coding environment.',
            image: SyntaxSpace,
            tags: ['React', 'Node.js', 'GraphQL', 'PostgreSQL'],
            github: 'https://github.com/kushalkumarcs99/Syntax-Space',
            demo: 'https://syntax-space.vercel.app/',
        },
        {
            title: 'More Projects Coming Soon',
            description: 'I am currently working on several exciting experimental projects. Stay tuned for updates as I continue to push the boundaries of web development and create innovative solutions.',
            image: StayTuned, // Reusing the SyntaxSpace image as a placeholder
            tags: ['Coming Soon', 'Experimental', 'Innovation'],
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
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                        Featured Projects
                    </h2>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center mx-auto max-w-5xl"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg w-full max-w-md"
                            >
                                <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 text-sm rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        {project.github && <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <FaGithub className="w-5 h-5" />
                                            <span>Code</span>
                                        </a>}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                            >
                                                <FaExternalLinkAlt className="w-4 h-4" />
                                                <span>Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects; 