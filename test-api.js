// Quick test script to verify registration API
// Run this in browser console on localhost:3001

async function testRegistrationAPI() {
	const testData = {
		fullName: 'Test User',
		email: 'test@example.com',
		phone: '1234567890',
		yearOfStudy: '2nd Year',
	};

	try {
		const response = await fetch('/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(testData),
		});

		const result = await response.json();

		if (response.ok) {
			console.log('✅ Registration successful:', result);
		} else {
			console.log('❌ Registration failed:', result);
		}
	} catch (error) {
		console.error('🔥 API Error:', error);
	}
}

// To test, run: testRegistrationAPI()
console.log(
	'Registration API test function loaded. Run: testRegistrationAPI()'
);
