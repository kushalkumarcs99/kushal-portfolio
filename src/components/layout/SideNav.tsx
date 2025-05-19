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
        link.href = 'resume/KushalKumar_KA_FrontEnd_UI.pdf';
        link.download = 'KushalKumar_KA_Software_Engineer_FrontEnd.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Mobile bottom navigation
    const MobileNav = () => (
        <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-around items-center p-2">
                <button
                    onClick={() => scrollToSection('about')}
                    className={`p-2 flex flex-col items-center ${activeSection === 'about' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'}`}
                >
                    <FaUser size={20} />
                    <span className="text-xs mt-1">About</span>
                </button>
                <button
                    onClick={() => scrollToSection('experience')}
                    className={`p-2 flex flex-col items-center ${activeSection === 'experience' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'}`}
                >
                    <FaBriefcase size={20} />
                    <span className="text-xs mt-1">Experience</span>
                </button>
                <button
                    onClick={() => scrollToSection('projects')}
                    className={`p-2 flex flex-col items-center ${activeSection === 'projects' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'}`}
                >
                    <FaCode size={20} />
                    <span className="text-xs mt-1">Projects</span>
                </button>
                <button
                    onClick={() => scrollToSection('skills')}
                    className={`p-2 flex flex-col items-center ${activeSection === 'skills' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'}`}
                >
                    <FaCogs size={20} />
                    <span className="text-xs mt-1">Skills</span>
                </button>
                <button
                    onClick={() => scrollToSection('activity')}
                    className={`p-2 flex flex-col items-center ${activeSection === 'activity' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'}`}
                >
                    <FaChartLine size={20} />
                    <span className="text-xs mt-1">Activity</span>
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