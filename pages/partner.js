import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Mail, ArrowLeft, Users, Target, Award, Globe } from 'lucide-react';

export default function PartnerPage() {
	const sponsorshipBenefits = [
		{
			icon: <Users className="w-6 h-6" />,
			title: 'Direct Access to Talent',
			description:
				'Connect with passionate, skilled developers ready to contribute to your projects',
		},
		{
			icon: <Target className="w-6 h-6" />,
			title: 'Brand Visibility',
			description:
				'Showcase your company to hundreds of engaged participants and industry professionals',
		},
		{
			icon: <Award className="w-6 h-6" />,
			title: 'Industry Leadership',
			description:
				'Position your brand as a leader in developer education and community building',
		},
		{
			icon: <Globe className="w-6 h-6" />,
			title: 'Extended Reach',
			description:
				'Gain exposure through our digital channels and professional networks',
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
			<Head>
				<title>
					Partner with GitFest 2025 - Sponsorship Opportunities
				</title>
				<meta
					name="description"
					content="Partner with GitFest 2025 and connect with the next generation of developers. Explore sponsorship opportunities and industry leadership benefits."
				/>
				<meta
					name="keywords"
					content="GitFest, sponsorship, partnership, developer events, tech education"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>

				{/* Open Graph */}
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:title"
					content="Partner with GitFest 2025 - Sponsorship Opportunities"
				/>
				<meta
					property="og:description"
					content="Partner with GitFest 2025 and connect with the next generation of developers."
				/>

				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>

			{/* Navigation Header */}
			<nav className="relative z-10 p-6">
				<div className="container mx-auto">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200">
						<ArrowLeft className="w-5 h-5" />
						Back to GitFest
					</Link>
				</div>
			</nav>

			{/* Main Content */}
			<main className="relative z-10 container mx-auto px-6 py-12">
				{/* Hero Section */}
				<div className="text-center mb-16">
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
						Partner with
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mt-2">
							GitFest 2025
						</span>
					</h1>

					<p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
						Join industry leaders in shaping the future of developer
						education. Connect with passionate talent and showcase
						your commitment to innovation.
					</p>

					{/* Primary CTA */}
					<a
						href="mailto:community@githubsrmist.tech?subject=Sponsorship Inquiry for GitFest 2025&body=Hello GitFest Team,%0D%0A%0D%0AI am interested in learning more about sponsorship opportunities for GitFest 2025. Please provide details about available partnership packages and benefits.%0D%0A%0D%0AThank you."
						className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 text-lg">
						<Mail className="w-6 h-6" />
						Contact Us for Partnership
					</a>
				</div>

				{/* Value Proposition */}
				<div className="mb-20">
					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
							Why Partner with GitFest?
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{sponsorshipBenefits.map((benefit, index) => (
								<div
									key={index}
									className="flex items-start gap-4 p-6 bg-gray-800/40 rounded-xl border border-gray-700/30 hover:border-green-500/30 transition-all duration-300">
									<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white">
										{benefit.icon}
									</div>
									<div>
										<h3 className="text-xl font-semibold text-white mb-2">
											{benefit.title}
										</h3>
										<p className="text-gray-300 leading-relaxed">
											{benefit.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Event Overview */}
				<div className="mb-20">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Event Overview
						</h2>
						<p className="text-lg text-gray-300 max-w-3xl mx-auto">
							GitFest 2025 is a comprehensive four-day
							product-building workshop designed to bridge the gap
							between academic learning and real-world
							development.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center p-8 bg-gray-800/30 rounded-xl border border-gray-700/30">
							<div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
								4 Days
							</div>
							<div className="text-gray-300">
								Intensive Workshop
							</div>
						</div>

						<div className="text-center p-8 bg-gray-800/30 rounded-xl border border-gray-700/30">
							<div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
								500+
							</div>
							<div className="text-gray-300">
								Expected Participants
							</div>
						</div>

						<div className="text-center p-8 bg-gray-800/30 rounded-xl border border-gray-700/30">
							<div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
								Aug 25-28
							</div>
							<div className="text-gray-300">2025</div>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center">
					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Ready to Make an Impact?
						</h2>
						<p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
							Join us in creating the premier developer education
							experience. Let&apos;s discuss how your organization
							can be part of this transformative event.
						</p>

						<a
							href="mailto:community@githubsrmist.tech?subject=Sponsorship Inquiry for GitFest 2025&body=Hello GitFest Team,%0D%0A%0D%0AI am interested in learning more about sponsorship opportunities for GitFest 2025. Please provide details about available partnership packages and benefits.%0D%0A%0D%0ACompany: [Your Company Name]%0D%0AContact Person: [Your Name]%0D%0APhone: [Your Phone Number]%0D%0A%0D%0AThank you."
							className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 text-lg">
							<Mail className="w-6 h-6" />
							Start the Conversation
						</a>
					</div>
				</div>
			</main>

			{/* Background Effects */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
				<div
					className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-l from-emerald-500/10 to-green-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
					style={{ animationDelay: '2s' }}
				/>
				<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
			</div>
		</div>
	);
}
