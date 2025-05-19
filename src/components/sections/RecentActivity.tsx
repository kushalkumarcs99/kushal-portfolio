import { motion } from 'framer-motion';
// import { FaCode, FaStar, FaCodeBranch } from 'react-icons/fa';

const RecentActivity = () => {
    // Mock data - In a real application, this would come from GitHub API and your blog
    // const githubActivities = [
    //     {
    //         type: 'commit',
    //         repo: 'portfolio',
    //         description: 'Updated portfolio with new projects and skills',
    //         date: '2 days ago',
    //         icon: FaCode,
    //     },
    //     {
    //         type: 'star',
    //         repo: 'react-component-library',
    //         description: 'Starred a new component library project',
    //         date: '4 days ago',
    //         icon: FaStar,
    //     },
    //     {
    //         type: 'fork',
    //         repo: 'awesome-project',
    //         description: 'Forked an interesting open source project',
    //         date: '1 week ago',
    //         icon: FaCodeBranch,
    //     },
    // ];

    // const blogPosts = [
    //     {
    //         title: 'Building Scalable React Applications',
    //         excerpt: 'Learn how to structure large React applications for scalability and maintainability.',
    //         date: '1 week ago',
    //         readTime: '5 min read',
    //     },
    //     {
    //         title: 'Modern CSS Techniques',
    //         excerpt: 'Exploring the latest CSS features and how to use them effectively.',
    //         date: '2 weeks ago',
    //         readTime: '4 min read',
    //     },
    // ];

    return (
        <section id="recent-activity" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                        Recent Activity
                    </h2>

                    <div className="space-y-12">
                        <div className="space-y-8">
                            {/* December 2024 */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}
                                className="relative pl-8"
                            >
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    December 12th 2024
                                </h3>
                                <div className="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Collaborated with peers to explore monorepo structures using NX, integrating Angular and React libraries effectively.
                                </p>
                            </motion.div>

                            {/* November 2024 */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-8"
                            >
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    March 4th 2025
                                </h3>
                                <div className="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Learning and building backend services in GoLang, aiming for full stack proficiency alongside React.
                                </p>
                            </motion.div>

                            {/* October 2023 */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="relative pl-8"
                            >
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    April 11th 2025
                                </h3>
                                <div className="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Experimenting with serverless architectures using AWS Lambda, S3, and CloudFront.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RecentActivity; 