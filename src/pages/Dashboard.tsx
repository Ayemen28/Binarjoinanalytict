import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p className="text-gray-600">
        Hello, {user?.email}! This is your personal dashboard.
      </p>
    </div>
  );
}