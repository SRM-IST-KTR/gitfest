import React from 'react';
import SponsorCard from './SponsorCard';

const PartnersSection = () => {
	// Sponsors data with cleaner structure matching SponsorCard props
	const sponsors = {
		title: [
			{
				name: 'GitHub',
				logoUrl: '/partners/github.svg',
				websiteUrl: 'https://github.com',
				tier: 'title',
			},
			{
				name: 'Microsoft',
				logoUrl: '/partners/microsoft.svg',
				websiteUrl: 'https://microsoft.com',
				tier: 'title',
			},
		],
		platinum: [
			{
				name: 'Google Cloud',
				logoUrl: '/partners/google-cloud.svg',
				websiteUrl: 'https://cloud.google.com',
				tier: 'platinum',
			},
			{
				name: 'AWS',
				logoUrl: '/partners/aws.svg',
				websiteUrl: 'https://aws.amazon.com',
				tier: 'platinum',
			},
			{
				name: 'Vercel',
				logoUrl: '/partners/vercel.svg',
				websiteUrl: 'https://vercel.com',
				tier: 'platinum',
			},
		],
		gold: [
			{
				name: 'MongoDB',
				logoUrl: '/partners/mongodb.svg',
				websiteUrl: 'https://mongodb.com',
				tier: 'gold',
			},
			{
				name: 'Docker',
				logoUrl: '/partners/docker.svg',
				websiteUrl: 'https://docker.com',
				tier: 'gold',
			},
			{
				name: 'Stripe',
				logoUrl: '/partners/stripe.svg',
				websiteUrl: 'https://stripe.com',
				tier: 'gold',
			},
			{
				name: 'Firebase',
				logoUrl: '/partners/firebase.svg',
				websiteUrl: 'https://firebase.google.com',
				tier: 'gold',
			},
			{
				name: 'Postman',
				logoUrl: '/partners/postman.svg',
				websiteUrl: 'https://postman.com',
				tier: 'gold',
			},
			{
				name: 'Figma',
				logoUrl: '/partners/figma.svg',
				websiteUrl: 'https://figma.com',
				tier: 'gold',
			},
		],
	};

	return (
		<section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
			{/* Enhanced background elements */}
			<div className="absolute inset-0 overflow-hidden">
				{/* Animated gradient orbs */}
				<div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
				<div
					className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-l from-emerald-500/10 to-green-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
					style={{ animationDelay: '2s' }}
				/>

				{/* Subtle grid pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

				{/* Radial gradient overlay */}
				<div className="absolute inset-0 bg-radial-gradient from-transparent via-gray-950/50 to-gray-950" />
			</div>

			<div className="container mx-auto px-6 lg:px-8 relative z-10">
				{/* Modern section header */}
				<div className="text-center mb-16 lg:mb-20">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-900/40 to-emerald-900/40 backdrop-blur-sm border border-green-800/30 text-green-300 px-5 py-2.5 rounded-full text-sm font-medium mb-8 shadow-lg">
						<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
						<span>Our Partners</span>
						<div
							className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
							style={{ animationDelay: '1s' }}
						/>
					</div>

					{/* Main heading */}
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
						Powered by
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mt-2">
							Innovation Leaders
						</span>
					</h2>

					{/* Description */}
					<p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
						We&apos;re proud to collaborate with industry-leading
						companies who share our vision of empowering the next
						generation of developers and innovators.
					</p>
				</div>

				{/* Title Sponsors - Maximum prominence */}
				<div className="mb-20 lg:mb-24">
					<div className="text-center mb-12">
						<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
							Title Sponsors
						</h3>
						<div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full shadow-lg shadow-green-500/30" />
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
						{sponsors.title.map((sponsor, index) => (
							<SponsorCard
								key={index}
								name={sponsor.name}
								logoUrl={sponsor.logoUrl}
								websiteUrl={sponsor.websiteUrl}
								tier={sponsor.tier}
							/>
						))}
					</div>
				</div>

				{/* Platinum Partners - High prominence */}
				<div className="mb-20">
					<div className="text-center mb-12">
						<h3 className="text-xl md:text-2xl font-bold text-white mb-4">
							Platinum Partners
						</h3>
						<div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full shadow-md shadow-green-500/25" />
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
						{sponsors.platinum.map((sponsor, index) => (
							<SponsorCard
								key={index}
								name={sponsor.name}
								logoUrl={sponsor.logoUrl}
								websiteUrl={sponsor.websiteUrl}
								tier={sponsor.tier}
							/>
						))}
					</div>
				</div>

				{/* Gold Partners - Standard prominence */}
				<div className="mb-16">
					<div className="text-center mb-10">
						<h3 className="text-lg md:text-xl font-bold text-white mb-4">
							Gold Partners
						</h3>
						<div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full shadow-sm shadow-green-500/20" />
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
						{sponsors.gold.map((sponsor, index) => (
							<SponsorCard
								key={index}
								name={sponsor.name}
								logoUrl={sponsor.logoUrl}
								websiteUrl={sponsor.websiteUrl}
								tier={sponsor.tier}
							/>
						))}
					</div>
				</div>

				{/* Call to action for potential sponsors */}
				<div className="text-center mt-16">
					<div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 lg:p-8 shadow-xl">
						<div className="text-center sm:text-left">
							<h4 className="text-lg font-semibold text-white mb-1">
								Interested in partnering with us?
							</h4>
							<p className="text-gray-300 text-sm">
								Join these amazing companies and help shape the
								future of tech education
							</p>
						</div>
						<button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 whitespace-nowrap">
							Become a Partner
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PartnersSection;
