import React from 'react';
import Link from 'next/link';
import { Clock, ChevronDown } from 'lucide-react';

const Hero = () => {
	return (
		<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-green-900/20 relative overflow-hidden">
			{/* GitHub-style background pattern */}
			<div className="absolute inset-0 opacity-10">
				<svg
					width="100%"
					height="100%"
					xmlns="http://www.w3.org/2000/svg">
					<defs>
						<pattern
							id="grid"
							width="32"
							height="32"
							patternUnits="userSpaceOnUse">
							<path
								d="M 32 0 L 0 0 0 32"
								fill="none"
								stroke="currentColor"
								strokeWidth="1"
							/>
						</pattern>
					</defs>
					<rect
						width="100%"
						height="100%"
						fill="url(#grid)"
					/>
				</svg>
			</div>

			<div className="container mx-auto px-6 text-center relative z-10">
				<div className="animate-fade-in-up">
					{/* GitHub SRM Logo */}
					<div className="flex items-center justify-center mb-8">
						<div className="w-72 mr-4">
							<img
								src="https://githubsrmist.tech/logo.png"
								alt="GitHub Community SRM"
								className="w-full h-full object-contain"
							/>
						</div>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
						Git<span className="text-green-400">Fest</span>
					</h1>

					<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
						A four-day product-building workshop designed to
						introduce students to
						<span className="font-semibold text-green-400">
							{' '}
							real-world development
						</span>{' '}
						through hands-on learning
					</p>

					<div className="mb-8">
						<div className="inline-flex items-center bg-green-900/30 border border-green-800 text-green-300 px-6 py-3 rounded-full text-sm font-medium mb-6">
							<Clock className="w-4 h-4 mr-2" />
							Limited seats available - Register now
						</div>

						<div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-green-700 max-w-2xl mx-auto">
							<div className="text-3xl md:text-4xl font-bold text-white mb-2">
								August 25th – 28th, 2025
							</div>
							<div className="text-gray-300 text-lg">
								4 Days • Complete Product Development Cycle
							</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="#register"
							className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
							Register Now
						</a>
						<a
							href="#features"
							className="border-2 border-green-600 text-green-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-900/30 transition-all duration-200">
							Learn More
						</a>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<ChevronDown className="w-6 h-6 text-gray-400" />
			</div>
		</section>
	);
};
export default Hero;
