import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <p className="text-gray-600">
          Welcome to the admin dashboard. Here you can manage users and subscriptions.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">User Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-600 text-lg font-semibold">Total Users</p>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-600 text-lg font-semibold">Active Subscriptions</p>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-purple-600 text-lg font-semibold">Total Revenue</p>
            <p className="text-3xl font-bold">$0</p>
          </div>
        </div>
      </div>
    </div>
  );
}