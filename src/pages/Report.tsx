import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { QuizResult } from '../types';

export default function Report() {
  const navigate = useNavigate();
  const results: QuizResult[] = JSON.parse(localStorage.getItem('quizResults') || '[]');
  const latestResult = results[results.length - 1];

  const chartData = results.map(result => ({
    name: new Date(result.date).toLocaleDateString(),
    score: (result.score / result.totalQuestions) * 100
  }));

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Quiz Results
        </h2>

        {latestResult && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Latest Quiz Performance
            </h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Subject</p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">
                    {latestResult.subject}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Score</p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">
                    {((latestResult.score / latestResult.totalQuestions) * 100).toFixed(1)}%
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Questions</p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">
                    {latestResult.score} / {latestResult.totalQuestions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Performance Trend
          </h3>
          <div className="h-80 w-full">
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#3B82F6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate('/select-quiz')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Take Another Quiz
          </button>
          <button
            onClick={() => navigate('/profile')}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}