import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                        className="text-2xl font-bold text-gray-800 dark:text-white cursor-pointer"
                    >
                        KK
                    </Link>

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <SunIcon className="h-5 w-5" />
                        ) : (
                            <MoonIcon className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header; 