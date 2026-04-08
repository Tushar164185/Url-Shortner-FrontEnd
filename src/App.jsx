import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import UrlShortenerPage from './pages/UrlShortenerPage.jsx';

function App() {
  const [view, setView] = useState('home');

  if (view === 'signup') {
    return <SignupPage onBack={() => setView('home')} onSwitch={() => setView('login')} onSuccess={() => setView('shortener')} />;
  }

  if (view === 'login') {
    return <LoginPage onBack={() => setView('home')} onSwitch={() => setView('signup')} onSuccess={() => setView('shortener')} />;
  }

  if (view === 'shortener') {
    return <UrlShortenerPage onLogout={() => setView('home')} />;
  }

  return <HomePage onLogin={() => setView('login')} onSignup={() => setView('signup')} />;
}

export default App;

