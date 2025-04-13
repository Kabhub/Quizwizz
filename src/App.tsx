import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Login from './pages/Login';
import QuizSelection from './pages/QuizSelection';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';
import Report from './pages/Report';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/select-quiz" element={<QuizSelection />} />
              <Route path="/quiz/:subject" element={<Quiz />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/report" element={<Report />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;