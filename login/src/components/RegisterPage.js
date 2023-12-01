// RegisterPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../services/api';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegister = async () => {
    try {
      await registerUser(email, password);
      history.push('/login');
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
