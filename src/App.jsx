import React from 'react';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './components/LoginPage';

export default function App() {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
}