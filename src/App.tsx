import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<null | { email: string }>(null);

  const handleLogin = (email: string, password: string) => {
    // Dummy login - in production, this would be a real authentication system
    if (password === 'password123') {
      setIsLoggedIn(true);
      setUser({ email });
    } else {
      alert('Invalid credentials. Try password: password123');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;