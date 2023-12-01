import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h2>Welcome, {user.email}!</h2>
      <p>Your data goes here...</p>
    </div>
  );
};

export default Dashboard;
