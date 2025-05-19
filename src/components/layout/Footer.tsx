import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-[#1f2937] text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-sm">© 2025 Kushal Kumar K A. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="mailto:kushalkumarka54@gmail.com" className="hover:text-gray-400 transition-colors">
                            <MdEmail size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/kushal-kumar-k-a-7a0101151/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                            <FaGithub size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 