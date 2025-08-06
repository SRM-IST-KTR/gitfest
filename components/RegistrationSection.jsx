import React, { useState } from 'react';
import {
	Calendar,
	Clock,
	MapPin,
	CheckCircle,
	AlertCircle,
} from 'lucide-react';

const RegistrationSection = () => {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phone: '',
		yearOfStudy: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			const response = await fetch('/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				setSubmitStatus({ type: 'success', message: data.message });
				setFormData({
					fullName: '',
					email: '',
					phone: '',
					yearOfStudy: '',
				});
			} else {
				setSubmitStatus({ type: 'error', message: data.error });
			}
		} catch (error) {
			setSubmitStatus({
				type: 'error',
				message:
					'Registration failed. Please check your connection and try again.',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section
			id="register"
			className="py-20 bg-gradient-to-br from-gray-900 to-green-900/20 relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="text-center mb-16">
					<div className="inline-flex items-center bg-green-900/30 border border-green-800 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
						<CheckCircle className="w-4 h-4 mr-2" />
						Registration Now Open
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Secure Your <span className="text-green-400">Spot</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
						Join hundreds of passionate developers for a
						transformative learning experience. Build real-world
						projects and connect with industry professionals.
					</p>

					{/* Urgency indicator */}
					<div className="inline-flex items-center bg-green-900/30 border border-green-800 text-green-300 px-6 py-3 rounded-full mb-8">
						<Clock className="w-5 h-5 mr-2" />
						<span className="font-semibold">
							Limited spots available
						</span>
					</div>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Left side - Event details */}
						<div className="space-y-8">
							<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
								<h3 className="text-2xl font-bold text-white mb-6">
									Event Details
								</h3>

								<div className="space-y-4">
									<div className="flex items-center">
										<div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center mr-4">
											<Calendar className="w-5 h-5 text-green-400" />
										</div>
										<div>
											<div className="font-semibold text-white">
												Dates
											</div>
											<div className="text-gray-300">
												August 25th - 28th, 2025
											</div>
										</div>
									</div>

									<div className="flex items-center">
										<div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center mr-4">
											<Clock className="w-5 h-5 text-green-400" />
										</div>
										<div>
											<div className="font-semibold text-white">
												Duration
											</div>
											<div className="text-gray-300">
												4 Full Days
											</div>
										</div>
									</div>

									<div className="flex items-center">
										<div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center mr-4">
											<MapPin className="w-5 h-5 text-green-400" />
										</div>
										<div>
											<div className="font-semibold text-white">
												Format
											</div>
											<div className="text-gray-300">
												In-person Workshop
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<h4 className="text-lg font-semibold text-white">
									What you'll receive:
								</h4>
								<div className="space-y-3">
									{[
										'Complete hands-on training',
										'Working project portfolio',
										'Certificate of completion',
										'Networking opportunities',
										'Expert mentorship',
									].map((item, index) => (
										<div
											key={index}
											className="flex items-center">
											<CheckCircle className="w-5 h-5 text-green-400 mr-3" />
											<span className="text-gray-300">
												{item}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Right side - Registration form */}
						<div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
							<h3 className="text-2xl font-bold text-white mb-6">
								Register Now
							</h3>

							{submitStatus && (
								<div
									className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
										submitStatus.type === 'success'
											? 'bg-green-900/30 border border-green-800 text-green-300'
											: 'bg-red-900/30 border border-red-800 text-red-300'
									}`}>
									{submitStatus.type === 'success' ? (
										<CheckCircle className="w-5 h-5 flex-shrink-0" />
									) : (
										<AlertCircle className="w-5 h-5 flex-shrink-0" />
									)}
									<span>{submitStatus.message}</span>
								</div>
							)}

							<form
								onSubmit={handleSubmit}
								className="space-y-6">
								<div>
									<label
										htmlFor="fullName"
										className="block text-sm font-medium text-gray-300 mb-2">
										Full Name *
									</label>
									<input
										type="text"
										id="fullName"
										name="fullName"
										value={formData.fullName}
										onChange={handleInputChange}
										required
										disabled={isSubmitting}
										className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
										placeholder="Enter your full name"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-300 mb-2">
										Email Address *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										required
										disabled={isSubmitting}
										className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
										placeholder="Enter your email address"
									/>
								</div>

								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-300 mb-2">
										Phone Number *
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleInputChange}
										required
										disabled={isSubmitting}
										className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
										placeholder="Enter your phone number"
									/>
								</div>

								<div>
									<label
										htmlFor="yearOfStudy"
										className="block text-sm font-medium text-gray-300 mb-2">
										Year of Study *
									</label>
									<select
										id="yearOfStudy"
										name="yearOfStudy"
										value={formData.yearOfStudy}
										onChange={handleInputChange}
										required
										disabled={isSubmitting}
										className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:opacity-50">
										<option value="">Select Year</option>
										<option value="1st Year">
											1st Year
										</option>
										<option value="2nd Year">
											2nd Year
										</option>
									</select>
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold text-lg transform hover:scale-105 disabled:transform-none transition-all duration-200 shadow-lg">
									{isSubmitting
										? 'Registering...'
										: 'Register for GitFest 2025'}
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
