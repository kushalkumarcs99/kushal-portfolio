import Header from './components/layout/Header';
import SideNav from './components/layout/SideNav';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import RecentActivity from './components/sections/RecentActivity';

const App = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                {/* Floating shapes */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                <div className="absolute top-3/4 right-1/3 w-96 h-96 bg-purple-200 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10">
                <Header />
                <SideNav />
                <main>
                    <div id="hero">
                        <Hero />
                    </div>
                    <div id="about">
                        <About />
                    </div>
                    <div id="experience">
                        <Experience />
                    </div>
                    <div id="projects">
                        <Projects />
                    </div>
                    <div id="skills">
                        <Skills />
                    </div>
                    <div id="activity">
                        <RecentActivity />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App; 