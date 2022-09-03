import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

export default function Layout() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return <div>Layout</div>;
}
