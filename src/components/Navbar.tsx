import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/select-quiz" className="text-xl font-bold text-gray-800 dark:text-white">
            QuizMaster
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-white" />}
            </button>
            <Link
              to="/profile"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <User className="w-5 h-5 dark:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}