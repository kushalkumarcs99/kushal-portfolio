import { useState, useEffect } from 'react';
import { FaUser, FaBriefcase, FaCode, FaCogs, FaChartLine, FaFileDownload } from 'react-icons/fa';

const SideNav = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            // Show nav after hero section
            const heroHeight = window.innerHeight;
            setIsVisible(window.scrollY > heroHeight * 0.7);

            // Update active section based on scroll position
            const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'activity'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = 'resume/KushalKumar_KA_Software_Engineer--FrontEnd.pdf';
        link.download = 'KushalKumar_KA_Software_Engineer-FrontEnd.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Mobile bottom navigation
    const MobileNav = () => (
        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
            <div className="flex gap-2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <button
                    onClick={() => scrollToSection('about')}
                    className={`p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${activeSection === 'about' ? 'text-blue-500 bg-gray-100 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300'}`}
                >
                    <FaUser size={20} />
                </button>
                <button
                    onClick={() => scrollToSection('experience')}
                    className={`p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${activeSection === 'experience' ? 'text-blue-500 bg-gray-100 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300'}`}
                >
                    <FaBriefcase size={20} />
                </button>
                <button
                    onClick={() => scrollToSection('projects')}
                    className={`p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${activeSection === 'projects' ? 'text-blue-500 bg-gray-100 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300'}`}
                >
                    <FaCode size={20} />
                </button>
                <button
                    onClick={() => scrollToSection('skills')}
                    className={`p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${activeSection === 'skills' ? 'text-blue-500 bg-gray-100 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300'}`}
                >
                    <FaCogs size={20} />
                </button>
                <button
                    onClick={() => scrollToSection('activity')}
                    className={`p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${activeSection === 'activity' ? 'text-blue-500 bg-gray-100 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300'}`}
                >
                    <FaChartLine size={20} />
                </button>
                <button
                    onClick={downloadResume}
                    className="p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                    <FaFileDownload size={20} />
                </button>
            </div>
        </nav>
    );

    // Desktop side navigation
    const DesktopNav = () => {
        if (!isVisible) return null;

        return (
            <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block ml-4">
                <div className="flex flex-col gap-6 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg backdrop-blur-sm">
                    <div className="relative group">
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${activeSection === 'about' ? 'text-blue-500 bg-gray-100 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300'}`}
                        >
                            <FaUser size={20} />
                        </button>
                        <div className="absolute left-full ml-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transform -translate-y-1/2 top-1/2">
                            About
                            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
                        </div>
                    </div>

                    <div className="relative group">
                        <button
                            onClick={() => scrollToSection('experience')}
                            className={`p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${activeSection === 'experience' ? 'text-blue-500 bg-gray-100 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300'}`}
                        >
                            <FaBriefcase size={20} />
                        </button>
                        <div className="absolute left-full ml-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transform -translate-y-1/2 top-1/2">
                            Experience
                            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
                        </div>
                    </div>

                    <div className="relative group">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className={`p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${activeSection === 'projects' ? 'text-blue-500 bg-gray-100 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300'}`}
                        >
                            <FaCode size={20} />
                        </button>
                        <div className="absolute left-full ml-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transform -translate-y-1/2 top-1/2">
                            Projects
                            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
                        </div>
                    </div>

                    <div className="relative group">
                        <button
                            onClick={() => scrollToSection('skills')}
                            className={`p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${activeSection === 'skills' ? 'text-blue-500 bg-gray-100 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300'}`}
                        >
                            <FaCogs size={20} />
                        </button>
                        <div className="absolute left-full ml-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transform -translate-y-1/2 top-1/2">
                            Skills
                            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
                        </div>
                    </div>

                    <div className="relative group">
                        <button
                            onClick={() => scrollToSection('activity')}
                            className={`p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${activeSection === 'activity' ? 'text-blue-500 bg-gray-100 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300'}`}
                        >
                            <FaChartLine size={20} />
                        </button>
                        <div className="absolute left-full ml-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transform -translate-y-1/2 top-1/2">
                            Recent Activity
                            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
                        </div>
                    </div>

                    <div className="relative group">
                        <button
                            onClick={downloadResume}
                            className="p-2 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                        >
                            <FaFileDownload size={20} />
                        </button>
                        <div className="absolute left-full ml-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transform -translate-y-1/2 top-1/2">
                            Download Resume
                            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    };

    return (
        <>
            <MobileNav />
            <DesktopNav />
        </>
    );
};

export default SideNav; 