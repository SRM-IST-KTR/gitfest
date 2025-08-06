import { getDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	try {
		const { fullName, email, phone, yearOfStudy } = req.body;

		// Validate required fields
		if (!fullName || !email || !phone || !yearOfStudy) {
			return res.status(400).json({
				error: 'All fields (Full Name, Email, Phone, Year of Study) are required',
			});
		}

		// Basic email validation
		const emailRegex = /^[a-zA-Z]{2}\d{4}@srmist\.edu\.in$/;
		if (!emailRegex.test(email)) {
			return res
				.status(400)
				.json({
					error: 'Invalid email format. Email must be in the format: xx0000@srmist.edu.in',
				});
		}

		// Connect to database
		const db = await getDatabase();
		const participantsCollection = db.collection('participants');

		// Check if email already exists
		const existingParticipant = await participantsCollection.findOne({
			email,
		});
		if (existingParticipant) {
			return res.status(409).json({
				error: 'Email already registered. ',
			});
		}

		// Create participant document
		const participantData = {
			fullName: fullName.trim(),
			email: email.toLowerCase().trim(),
			phone: phone.trim(),
			yearOfStudy: yearOfStudy.trim(),
			createdAt: new Date(),
		};

		// Insert into database
		const result = await participantsCollection.insertOne(participantData);

		if (result.insertedId) {
			return res.status(201).json({
				success: true,
				message:
					'Registration successful! We will contact you soon with further details.',
				registrationId: result.insertedId,
			});
		} else {
			throw new Error('Failed to insert participant data');
		}
	} catch (error) {
		console.error('Registration error:', error);

		// Handle specific MongoDB errors
		if (error.code === 11000) {
			return res.status(409).json({
				error: 'Email already registered. Please use a different email address.',
			});
		}

		return res.status(500).json({
			error: 'Registration failed. Please try again later.',
		});
	}
}
