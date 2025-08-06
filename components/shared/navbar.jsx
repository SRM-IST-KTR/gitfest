import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-gray-900/90 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-40 h-12 mr-3">
                            <img
                                src="https://githubsrmist.tech/logo.png"
                                alt="GitHub Community SRM"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('agenda')}
                            className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
                        >
                            Agenda
                        </button>
                        <button
                            onClick={() => scrollToSection('speakers')}
                            className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
                        >
                            Speakers
                        </button>
                        <button
                            onClick={() => scrollToSection('partners')}
                            className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
                        >
                            Partners
                        </button>
                        <button
                            onClick={() => scrollToSection('register')}
                            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 rounded-lg font-medium transform hover:scale-105 transition-all duration-200 animate-pulse-green"
                        >
                            Register Now!
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 shadow-lg border-t border-gray-700">
                        <div className="px-6 py-4 space-y-4">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="block text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('agenda')}
                                className="block text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
                            >
                                Agenda
                            </button>
                            <button
                                onClick={() => scrollToSection('speakers')}
                                className="block text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
                            >
                                Speakers
                            </button>
                            <button
                                onClick={() => scrollToSection('partners')}
                                className="block text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium"
                            >
                                Partners
                            </button>
                            <button
                                onClick={() => scrollToSection('register')}
                                className="block w-full text-left bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
                            >
                                Register Now!
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;