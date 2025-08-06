import React from 'react';

const AgendaSection = () => {
    const agendaItems = [
        {
            day: '1',
            title: 'Capture the Flag (CTF) Challenge',
            description: 'Co-organized with Hack the Box SRM. Kickstart your journey with exciting cybersecurity challenges and problem-solving activities',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            color: 'from-red-500 to-pink-500'
        },
        {
            day: '2',
            title: 'UI/UX Design (Figma)',
            description: 'Learn design principles and create stunning user interfaces using industry-standard tools',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v3a2 2 0 01-2 2h-2v-5h2a2 2 0 012 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7v3a2 2 0 01-2 2h-2V5h2a2 2 0 012 2z" />
                    <circle cx="17" cy="10" r="2" />
                </svg>
            ),
            color: 'from-purple-500 to-indigo-500'
        },
        {
            day: '3',
            title: 'Frontend Development',
            description: 'Build responsive and interactive user interfaces with modern frameworks and libraries',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            color: 'from-blue-500 to-cyan-500'
        },
        {
            day: '4',
            title: 'Backend Development & Deployment',
            description: 'Create robust APIs and deploy your complete application to the cloud',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            color: 'from-green-500 to-emerald-500'
        }
    ]; return (
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-64 h-64 bg-green-200/20 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div className="absolute bottom-20 left-20 w-64 h-64 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-green-900/30 border border-green-800 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        YOUR 4-DAY ADVENTURE
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Four Days of <span className="text-green-400 animate-glow-green">Innovation</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Experience a complete product development cycle from design to deployment -
                        and have tons of fun doing it! 🎯✨
                    </p>
                </div>                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {agendaItems.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
                        >
                            {/* Day number */}
                            <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                {item.day}
                            </div>

                            {/* Icon */}
                            <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-200 animate-bounce-gentle">
                                {item.icon}
                            </div>                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {item.description}
                            </p>

                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center bg-gradient-to-r from-green-900/20 to-emerald-900/20 px-6 py-3 rounded-full border border-green-800 mb-6">
                        <span className="text-sm font-medium text-green-300">
                            🎊 Complete Product Development Journey 🎊
                        </span>
                    </div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        By the end of GitFest 2025, you'll have a <span className="font-semibold text-green-400">fully functional product</span> designed, developed, and deployed by you!
                        Plus lifelong memories and amazing new friends! 🤝💚
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AgendaSection;
