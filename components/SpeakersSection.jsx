import React from 'react';

const SpeakersSection = () => {
    const speakers = [
        {
            id: 1,
            name: 'Ramya Ramakrishnan',
            title: 'UI- UX Design Specialist',
            company: 'IOS Development Center',
            image: '/speakers/speaker1.jpg',
            bio: 'UI/UX Design Specialist with expertise in creating intuitive and user-centered digital experiences. Passionate about mobile interface design and iOS development.',
            expertise: ['UI/UX Design', 'iOS', 'Mobile Design'],
            social: {
                // twitter: 'https://twitter.com/sarahchen',
                linkedin: 'https://www.linkedin.com/in/ramya-ramakrishnan-55a4a1236/',
                // github: 'https://github.com/sarahchen',
            },
        },
        // {
        // 	id: 2,
        // 	name: 'Alex Rodriguez',
        // 	title: 'Tech Lead & Cloud Architect',
        // 	company: 'Microsoft',
        // 	image: '/speakers/speaker2.jpg',
        // 	bio: 'Cloud-native enthusiast with expertise in scaling distributed systems. Leads engineering teams building next-generation developer tools.',
        // 	expertise: ['Azure', 'Kubernetes', 'Microservices'],
        // 	social: {
        // 		twitter: 'https://twitter.com/alexrodriguez',
        // 		linkedin: 'https://linkedin.com/in/alexrodriguez',
        // 		github: 'https://github.com/alexrodriguez',
        // 	},
        // },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 to-green-900/20 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-green-900/30 border border-green-800 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Meet Our Speakers
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Learn from the
                        <span className="text-green-400 block">
                            Best in Tech
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Get ready to be inspired by industry experts who will
                        share their knowledge, experiences, and insider tips to
                        help you level up your tech journey!
                    </p>
                </div>

                {/* Speakers Grid - Centered */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                        {speakers.map((speaker, index) => (
                            <div
                                key={speaker.id}
                                className="group bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700"
                                style={{ animationDelay: `${index * 0.1}s` }}>
                                {/* Speaker Image */}
                                <div className="relative mb-6">
                                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                                        <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-10 h-10 text-gray-300"
                                                fill="currentColor"
                                                viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Speaker Info */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {speaker.name}
                                    </h3>
                                    <p className="text-green-400 font-medium mb-2">
                                        {speaker.title}
                                    </p>
                                    <p className="text-sm text-gray-400 mb-4">
                                        {speaker.company}
                                    </p>

                                    {/* Bio */}
                                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                        {speaker.bio}
                                    </p>

                                    {/* Expertise Tags */}
                                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                                        {speaker.expertise.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex justify-center space-x-3">
                                        {speaker.social.twitter && (
                                            <a
                                                href={speaker.social.twitter}
                                                className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <svg
                                                    className="w-4 h-4 text-gray-600 dark:text-gray-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                                </svg>
                                            </a>
                                        )}
                                        {speaker.social.linkedin && (
                                            <a
                                                href={speaker.social.linkedin}
                                                className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <svg
                                                    className="w-4 h-4 text-gray-600 dark:text-gray-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </a>
                                        )}
                                        {speaker.social.github && (
                                            <a
                                                href={speaker.social.github}
                                                className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <svg
                                                    className="w-4 h-4 text-gray-600 dark:text-gray-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeakersSection;
