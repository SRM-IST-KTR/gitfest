import React from 'react';

const PartnersSection = () => {
    const partners = {
        title: [
            {
                id: 1,
                name: "GitHub",
                logo: "/partners/github.svg",
                website: "https://github.com",
                description: "The world's leading software development platform"
            },
            {
                id: 2,
                name: "Microsoft",
                logo: "/partners/microsoft.svg",
                website: "https://microsoft.com",
                description: "Empowering every person and organization on the planet"
            }
        ],
        platinum: [
            {
                id: 3,
                name: "Google Cloud",
                logo: "/partners/google-cloud.svg",
                website: "https://cloud.google.com",
                description: "Build and scale with Google Cloud"
            },
            {
                id: 4,
                name: "AWS",
                logo: "/partners/aws.svg",
                website: "https://aws.amazon.com",
                description: "Amazon Web Services"
            },
            {
                id: 5,
                name: "Vercel",
                logo: "/partners/vercel.svg",
                website: "https://vercel.com",
                description: "The frontend cloud"
            }
        ],
        gold: [
            {
                id: 6,
                name: "MongoDB",
                logo: "/partners/mongodb.svg",
                website: "https://mongodb.com",
                description: "The developer data platform"
            },
            {
                id: 7,
                name: "Docker",
                logo: "/partners/docker.svg",
                website: "https://docker.com",
                description: "Accelerate containerized applications"
            },
            {
                id: 8,
                name: "Stripe",
                logo: "/partners/stripe.svg",
                website: "https://stripe.com",
                description: "Online payment processing"
            },
            {
                id: 9,
                name: "Firebase",
                logo: "/partners/firebase.svg",
                website: "https://firebase.google.com",
                description: "Google's mobile development platform"
            }
        ],
        silver: [
            {
                id: 10,
                name: "Postman",
                logo: "/partners/postman.svg",
                website: "https://postman.com",
                description: "API development platform"
            },
            {
                id: 11,
                name: "Figma",
                logo: "/partners/figma.svg",
                website: "https://figma.com",
                description: "Collaborative design tool"
            },
            {
                id: 12,
                name: "Notion",
                logo: "/partners/notion.svg",
                website: "https://notion.so",
                description: "All-in-one workspace"
            },
            {
                id: 13,
                name: "Linear",
                logo: "/partners/linear.svg",
                website: "https://linear.app",
                description: "Issue tracking for modern teams"
            },
            {
                id: 14,
                name: "Supabase",
                logo: "/partners/supabase.svg",
                website: "https://supabase.com",
                description: "The open source Firebase alternative"
            }
        ]
    };

    const PartnerLogo = ({ partner, size = "medium" }) => {
        const sizeClasses = {
            large: "h-16 md:h-20",
            medium: "h-12 md:h-14",
            small: "h-10 md:h-12"
        };

        return (
            <div className="group bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-700">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className={`${sizeClasses[size]} mb-4 flex items-center justify-center`}>
                        {/* Placeholder logo - replace with actual logos */}
                        <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm md:text-base">
                                {partner.name.charAt(0)}
                            </span>
                        </div>
                    </div>
                    <h3 className="font-bold text-white mb-2 text-sm md:text-base">
                        {partner.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 text-center leading-relaxed">
                        {partner.description}
                    </p>
                    <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 text-green-400 hover:text-green-300 text-xs font-medium transition-colors"
                    >
                        Learn More →
                    </a>
                </div>
            </div>
        );
    };

    return (
        <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-green-200/20 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-green-900/30 border border-green-800 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        </svg>
                        🤝 OUR AWESOME PARTNERS 🤝
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Powered by
                        <span className="text-green-400 block">Industry Leaders! 💚</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We're incredibly grateful to work with these amazing companies who make
                        GitFest 2025 possible and help us create an unforgettable learning experience!
                    </p>
                </div>

                {/* Title Partners */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Title Partners 🏆
                        </h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {partners.title.map((partner) => (
                            <PartnerLogo key={partner.id} partner={partner} size="large" />
                        ))}
                    </div>
                </div>

                {/* Platinum Partners */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-xl font-bold text-white mb-2">
                            Platinum Partners 🥇
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {partners.platinum.map((partner) => (
                            <PartnerLogo key={partner.id} partner={partner} size="medium" />
                        ))}
                    </div>
                </div>

                {/* Gold Partners */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-lg font-bold text-white mb-2">
                            Gold Partners 🥈
                        </h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                        {partners.gold.map((partner) => (
                            <PartnerLogo key={partner.id} partner={partner} size="medium" />
                        ))}
                    </div>
                </div>

                {/* Silver Partners */}
                {/* <div className="mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                            Silver Partners 🥉
                        </h3>
                        <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4">
                        {partners.silver.map((partner) => (
                            <PartnerLogo key={partner.id} partner={partner} size="small" />
                        ))}
                    </div>
                </div> */}

            </div>
        </section>
    );
};

export default PartnersSection;
