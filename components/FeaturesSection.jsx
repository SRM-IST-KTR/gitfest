import React from 'react';

const FeaturesSection = () => {
    const features = [
        {
            title: 'Hands-on Learning',
            description: 'Learn by building real projects with industry-standard tools and technologies',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
            ),
        },
        {
            title: 'Expert Mentorship',
            description: 'Get guidance from experienced developers and industry professionals',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            title: 'Complete Portfolio Project',
            description: 'Walk away with a fully functional application for your portfolio',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
        },
        {
            title: 'Networking Opportunities',
            description: 'Connect with like-minded peers and build lasting professional relationships',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            title: 'Industry Tools',
            description: 'Work with the same tools used by top tech companies worldwide',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            title: 'Certificate of Completion',
            description: 'Receive recognition for your participation and achievements',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
        }
    ]; return (
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-green-900/30 border border-green-800 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        ✨ WHY GITFEST ROCKS! ✨
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Why Choose <span className="text-green-400">GitFest</span>? 🚀
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        More than just a workshop - it's your gateway to professional development
                        and an amazing tech adventure! 💻✨
                    </p>
                </div>                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
                        >
                            <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats section */}
                <div className="mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="group">
                            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-200">
                                4
                            </div>
                            <div className="text-gray-300 font-medium">Days of Intensive Learning 📚</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-200">
                                100%
                            </div>
                            <div className="text-gray-300 font-medium">Practical & Hands-on 💪</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-200">
                                1
                            </div>
                            <div className="text-gray-300 font-medium">Complete Product Built 🚀</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
