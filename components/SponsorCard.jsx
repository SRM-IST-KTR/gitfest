import React from 'react';
import Image from 'next/image';

const SponsorCard = ({ name, logoUrl, websiteUrl, tier }) => {
	// Define styling based on tier
	const tierConfig = {
		title: {
			containerClass:
				'group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-500 ease-out transform hover:scale-[1.02] hover:shadow-green-500/10 cursor-pointer',
			logoContainerClass:
				'h-20 md:h-24 lg:h-28 mb-6 flex items-center justify-center',
			logoClass:
				'max-h-full max-w-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500',
			nameClass:
				'text-xl md:text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300',
			hoverEffect: 'group-hover:shadow-[0_0_50px_rgba(16,185,129,0.15)]',
		},
		platinum: {
			containerClass:
				'group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 md:p-7 shadow-xl border border-gray-700/40 hover:border-green-500/25 transition-all duration-400 ease-out transform hover:scale-[1.03] hover:shadow-green-500/8 cursor-pointer',
			logoContainerClass:
				'h-14 md:h-16 lg:h-18 mb-4 flex items-center justify-center',
			logoClass:
				'max-h-full max-w-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-400',
			nameClass:
				'text-lg md:text-xl font-semibold text-white group-hover:text-green-400 transition-colors duration-300',
			hoverEffect: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]',
		},
		gold: {
			containerClass:
				'group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-lg border border-gray-700/30 hover:border-green-500/20 transition-all duration-300 ease-out transform hover:scale-[1.05] hover:shadow-green-500/6 cursor-pointer',
			logoContainerClass:
				'h-12 md:h-14 mb-3 flex items-center justify-center',
			logoClass:
				'max-h-full max-w-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300',
			nameClass:
				'text-base md:text-lg font-medium text-white group-hover:text-green-400 transition-colors duration-300',
			hoverEffect: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]',
		},
	};

	const config = tierConfig[tier] || tierConfig.gold;

	const handleClick = () => {
		if (websiteUrl) {
			window.open(websiteUrl, '_blank', 'noopener,noreferrer');
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			handleClick();
		}
	};

	return (
		<div
			className={`${config.containerClass} ${config.hoverEffect}`}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			tabIndex={0}
			role="button"
			aria-label={`Visit ${name} website`}>
			{/* Subtle gradient overlay for depth */}
			<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-inherit opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center text-center">
				{/* Logo Container */}
				<div className={config.logoContainerClass}>
					{logoUrl ? (
						<Image
							src={logoUrl}
							alt={`${name} logo`}
							width={200}
							height={200}
							className={config.logoClass}
							priority={tier === 'title'}
						/>
					) : (
						// Fallback for missing logos - elegant placeholder
						<div className="w-full h-full bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
							<span className="text-white font-bold text-lg md:text-xl lg:text-2xl">
								{name.charAt(0)}
							</span>
						</div>
					)}
				</div>

				{/* Company Name */}
				<h3 className={config.nameClass}>{name}</h3>

				{/* Subtle hover indicator */}
				<div className="mt-2 w-8 h-0.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
			</div>

			{/* Animated border effect */}
			<div className="absolute inset-0 rounded-inherit border border-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
		</div>
	);
};

export default SponsorCard;
