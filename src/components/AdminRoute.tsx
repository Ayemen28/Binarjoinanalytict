import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function AdminRoute() {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if user is admin (you can modify this check based on your admin criteria)
  const isAdmin = user?.email === 'admin@example.com';

  return user && isAdmin ? <Outlet /> : <Navigate to="/dashboard" />;
}