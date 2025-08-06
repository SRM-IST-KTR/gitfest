import React, { useState } from 'react';

const RegistrationSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        year: '',
        experience: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for registering! We will contact you soon with further details.');
    };

    return (
        <section id="register" className="py-20 bg-gradient-to-br from-gray-900 to-green-900/20 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-green-900/30 border border-green-800 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse-green">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        🎉 REGISTRATION NOW OPEN! 🎉
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Secure Your <span className="text-green-400 animate-glow-green">Spot</span> 🎯
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Don't miss out on this transformative learning experience! Join hundreds of passionate developers
                        for the event of the year! Limited seats available!
                    </p>

                    {/* Urgency indicator */}
                    <div className="inline-flex items-center bg-green-900/30 border border-green-800 text-green-300 px-6 py-3 rounded-full mb-8 animate-bounce-gentle">
                        <svg className="w-5 h-5 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold">Only a few spots remaining! Act fast!</span>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Event details */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
                                <h3 className="text-2xl font-bold text-white mb-6">Event Details</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center mr-4">
                                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">Dates</div>
                                            <div className="text-gray-300">August 25th - 28th, 2025</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center mr-4">
                                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">Duration</div>
                                            <div className="text-gray-300">4 Full Days</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center mr-4">
                                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">Format</div>
                                            <div className="text-gray-300">In-person Workshop</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-white">What you'll receive:</h4>
                                <div className="space-y-3">
                                    {[
                                        'Complete hands-on training',
                                        'Working project portfolio',
                                        'Certificate of completion',
                                        'Networking opportunities',
                                        'Expert mentorship'
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center">
                                            <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right side - Registration form */}
                        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-6">Register Now 📝</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-2">
                                            Year of Study
                                        </label>
                                        <select
                                            id="year"
                                            name="year"
                                            value={formData.year}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                        >
                                            <option value="">Select Year</option>
                                            <option value="1">1st Year</option>
                                            <option value="2">2nd Year</option>
                                            <option value="3">3rd Year</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
                                >
                                    Register for GitFest 2025!
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationSection;
