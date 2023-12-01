// api.js
const BASE_URL = 'https://your-backend-api-url'; // Replace with your actual backend API URL

export const registerUser = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering user:', error.message);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error.message);
    throw error;
  }
};

export const fetchData = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/data/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Include any authentication headers if needed
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};
