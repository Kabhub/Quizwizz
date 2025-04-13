import React from 'react';
import { User, Award, Clock } from 'lucide-react';
import { QuizResult } from '../types';

export default function Profile() {
  const results: QuizResult[] = JSON.parse(localStorage.getItem('quizResults') || '[]');
  
  const calculateStats = () => {
    if (results.length === 0) return { totalQuizzes: 0, avgScore: 0, bestScore: 0 };
    
    const totalQuizzes = results.length;
    const avgScore = results.reduce((acc, result) => 
      acc + (result.score / result.totalQuestions) * 100, 0) / totalQuizzes;
    const bestScore = Math.max(...results.map(result => 
      (result.score / result.totalQuestions) * 100));
    
    return { totalQuizzes, avgScore, bestScore };
  };

  const stats = calculateStats();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
            <User className="w-8 h-8 text-blue-500 dark:text-blue-300" />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Your Profile</h2>
            <p className="text-gray-600 dark:text-gray-300">View your quiz statistics and history</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center">
              <Award className="w-6 h-6 text-blue-500" />
              <span className="ml-2 text-gray-600 dark:text-gray-300">Total Quizzes</span>
            </div>
            <p className="text-2xl font-bold text-gray-800 dark:text-white mt-2">
              {stats.totalQuizzes}
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center">
              <Award className="w-6 h-6 text-green-500" />
              <span className="ml-2 text-gray-600 dark:text-gray-300">Average Score</span>
            </div>
            <p className="text-2xl font-bold text-gray-800 dark:text-white mt-2">
              {stats.avgScore.toFixed(1)}%
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center">
              <Award className="w-6 h-6 text-yellow-500" />
              <span className="ml-2 text-gray-600 dark:text-gray-300">Best Score</span>
            </div>
            <p className="text-2xl font-bold text-gray-800 dark:text-white mt-2">
              {stats.bestScore.toFixed(1)}%
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Recent Quizzes
          </h3>
          <div className="space-y-4">
            {results.slice().reverse().map((result, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex items-center justify-between"
              >
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    {result.subject}
                  </h4>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4 mr-1" />
                    {new Date(result.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">
                    {((result.score / result.totalQuestions) * 100).toFixed(1)}%
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {result.score} / {result.totalQuestions} correct
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}