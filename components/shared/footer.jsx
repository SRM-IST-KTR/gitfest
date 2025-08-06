import React from 'react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{
			name: 'GitHub',
			href: 'https://github.com/SRM-IST-KTR',
			icon: (
				<svg
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 24 24">
					<path
						fillRule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: 'Twitter',
			href: 'https://twitter.com/GithubSrm',
			icon: (
				<svg
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 24 24">
					<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
				</svg>
			),
		},
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/company/githubsrm/mycompany/',
			icon: (
				<svg
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 24 24">
					<path
						fillRule="evenodd"
						d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/githubsrm/?hl=en',
			icon: (
				<svg
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 24 24">
					<path
						fillRule="evenodd"
						d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	];
	const quickLinks = [
		{ name: 'Home', href: '#home' },
		{ name: 'Agenda', href: '#agenda' },
		{ name: 'Features', href: '#features' },
		{ name: 'Register', href: '#register' },
	];

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className="bg-gray-900 text-white">
			<div className="container mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Brand Section */}
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center mb-6">
							<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
								<svg
									className="w-5 h-5 text-gray-900"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</div>
							<div className="text-3xl font-bold">
								<span className="text-white">Git</span>
								<span className="text-green-400">Fest</span>
								<span className="text-lg text-gray-400 ml-2">
									2025
								</span>
							</div>
						</div>
						<p className="text-gray-300 mb-6 max-w-md leading-relaxed">
							A four-day product-building workshop designed to
							introduce students to real-world development through
							hands-on learning. Build, learn, and deploy with
							industry experts.
						</p>
						<div className="flex space-x-4">
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.href}
									className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-110"
									aria-label={social.name}>
									{social.icon}
								</a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-white">
							Quick Links
						</h3>
						<ul className="space-y-3">
							{quickLinks.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="text-gray-300 hover:text-green-400 transition-colors duration-200 hover:underline">
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-white">
							Get in Touch
						</h3>
						<div className="space-y-3 text-gray-300">
							<div className="flex items-center">
								<svg
									className="w-5 h-5 mr-3 text-green-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<span>community@githubsrm.com</span>
							</div>
							{/* <div className="flex items-center">
								<svg
									className="w-5 h-5 mr-3 text-green-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<span>+1 (555) 123-4567</span>
							</div> */}
							<div className="flex items-start">
								<svg
									className="w-5 h-5 mr-3 mt-1 text-green-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<span>
									SRM Institute of Science and Technology
									<br />
									Kattankulathur, Tamil Nadu
									<br />
									Chennai, India
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
