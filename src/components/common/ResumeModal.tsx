import React from 'react';
import Modal from './Modal';
import { FaDownload } from 'react-icons/fa';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// SectionTitle component for section headers
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="text-blue-700 font-bold uppercase tracking-wide text-sm mt-4 mb-2">{children}</div>
);

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'resume/KushalKumar_KA_FrontEnd_UI.pdf'; // because it's now in public/
        link.download = 'KushalKumar_KA_Software_Engineer_FrontEnd.pdf'; // name you want when user downloads
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Resume"
        >
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm"
                >
                    <FaDownload size={14} />
                    Download PDF
                </button>
            </div>
            <div className="w-full max-h-[80vh] overflow-y-auto bg-white p-8 rounded-lg font-sans text-gray-900 text-[13px]">
                {/* Header */}
                <div className="text-center mb-2">
                    <h1 className="text-2xl font-bold tracking-wide">KUSHAL KUMAR K A</h1>
                    <div className="text-xs tracking-wide">SOFTWARE ENGINEER</div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-xs mt-1 text-gray-700">
                        <span>📞 +91-968-636-2266</span>
                        <span className="hidden sm:inline">|</span>
                        <span>✉️ kushalkumarka54@gmail.com</span>
                        <span className="hidden sm:inline">|</span>
                        <span className="text-blue-700 underline"><a href="https://www.linkedin.com/in/kushal-kumar-k-a-7a0101151/" target="_blank" rel="noopener noreferrer">/KushalLinkedIn</a></span>
                        <span className="hidden sm:inline">|</span>
                        <span className="text-blue-700 underline"><a href="https://github.com/KushalGuths" target="_blank" rel="noopener noreferrer">/KushalGuths</a></span>
                    </div>
                </div>
                {/* Section: Professional Experience */}
                <SectionTitle>Professional Experience</SectionTitle>
                <div className="mb-2">
                    <div className="flex justify-between items-center font-semibold">
                        <span>Software Engineer | Motorola Solutions India | Bengaluru</span>
                        <span className="text-xs font-normal">Aug 2021 - Present</span>
                    </div>
                    <ul className="list-disc ml-6 mt-1 space-y-1">
                        <li>Led & Architected a scalable, modular React.js (TypeScript) component library using Vite, improving reusability by 35% and cutting development time by 20% across multiple Motorola applications; enforced UI consistency via JS docs and design guidelines.</li>
                        <li>Designed and deployed analytics within Motorola's KMS, measured device/network, orchestrated CICD pipelines for Sonar, test, build, deploy and create service observ., streamlining development processes for 30+ devs.</li>
                        <li>Designed and implemented a micro-service, globally distributed content delivery system for UI assets using AWS Lambda, S3, and CloudFront, achieving 40% reduction in asset load times and high-availability architecture.</li>
                        <li>Built Resilience Monkey tool, initially library for Motorola's platform's global asset base.</li>
                    </ul>
                </div>
                <div className="mb-2">
                    <div className="flex justify-between items-center font-semibold">
                        <span>Analyst | Deloitte US India | Bengaluru</span>
                        <span className="text-xs font-normal">Nov 2021 - June 2022</span>
                    </div>
                    <ul className="list-disc ml-6 mt-1 space-y-1">
                        <li>Served as a key developer of a Western Union Bank (WU) project to build a web and mobile banking dashboard, integrating RESTful APIs and chatbot GraphQL endpoints to increase data connectivity by 60% and improve customer experience, using React Query, React Hook Form, and AG Grid in a consumer-friendly UI.</li>
                        <li>Engineered SEO and performance optimizations (Lighthouse 98 & React SSG) and site-analytics for reporting, reducing bundle size 23%, raising 21%+ in organic Lighthouse SEO score. Led data-visualization for admin, implemented modular charts using Recharts, and integrated Highcharts for interactive dashboards via hooks.</li>
                        <li>Guided 2 analyst Deloitte US India, improving team's Agile SLAM & client functionality, producing quality, timely project deliverables and building strong client relationships.</li>
                    </ul>
                </div>
                {/* Section: Technical Skills */}
                <SectionTitle>Technical Skills</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                    <div>
                        <span className="font-semibold">Frontend:</span> React.js, TypeScript, JavaScript (ES6+), Redux, Context API, React Query, TailwindCSS
                    </div>
                    <div>
                        <span className="font-semibold">Testing & DevOps:</span> GitHub Actions, SonarQube, Webpack, Vite, AG Grid, Recharts
                    </div>
                    <div>
                        <span className="font-semibold">Backend & Data:</span> Node.js (Express), AG Grid, Axios, MySQL
                    </div>
                    <div>
                        <span className="font-semibold">Cloud & Infra:</span> AWS Lambda, S3, CloudFront
                    </div>
                    <div>
                        <span className="font-semibold">Other:</span> Jira, Agile, Figma (UI alignment), Code Reviews, Mentorship
                    </div>
                </div>
                {/* Section: Projects */}
                <SectionTitle>Projects</SectionTitle>
                <div className="mb-2">
                    <div className="font-semibold">React Resilience Monkey v1 | Motorola Solutions | Self-motivated</div>
                    <div className="text-xs mb-1">Apr 2023 - Present</div>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Architected, built, and maintained a microservice solution for React apps that automatically triggers effectiveness reports, API failures, and anomalies.</li>
                        <li>Developed custom monitoring plugins to validate app releases and boost error handling effectiveness by 40%.</li>
                        <li>Reduced incident response time and risks by driving 88% of critical failure scenarios across modules, reducing downtime and improving platform reliability, ensuring greater continuity and stakeholder trust.</li>
                    </ul>
                </div>
                {/* Section: Achievements */}
                <SectionTitle>Achievements</SectionTitle>
                <ul className="list-disc ml-6 mb-2 space-y-1">
                    <li>2023: Attained global client's top performance within 5-star rating at <span className="font-semibold">Motorola Solutions India</span>.</li>
                    <li>2022: Twice as recognized as a top performer within the WU Project in Deloitte US India.</li>
                    <li>2021: Best overall student award (not cash) & new exceptional work with HITACHI in Deloitte US India.</li>
                </ul>
                {/* Section: Education */}
                <SectionTitle>Education</SectionTitle>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div>
                        <span className="font-semibold">Visvesvaraya Technological University</span>
                        <div className="text-xs">Bachelor of Engineering in Computer Science</div>
                    </div>
                    <div className="text-xs text-right">
                        Graduation: Aug. 2020<br />CGPA: 7.53/10
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ResumeModal; 