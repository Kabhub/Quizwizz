import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Book,
  FlaskRound as Flask,
  Calculator,
  Landmark,
  Laptop
} from 'lucide-react';
import { quizzes } from '../data/quizData';

export default function QuizSelection() {
  const navigate = useNavigate();

  const quizIcons = {
    gk: Book,
    science: Flask,
    math: Calculator,
    history: Landmark,
    technology: Laptop
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white tracking-tight">
        🌟 Choose Your Quiz Adventure
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Object.values(quizzes).map((quiz) => {
          const Icon = quizIcons[quiz.id as keyof typeof quizIcons] || Book;
          return (
            <div
              key={quiz.id}
              onClick={() => navigate(`/quiz/${quiz.id}`)}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300 cursor-pointer p-6 group"
            >
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                  {quiz.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  Test your knowledge in <span className="font-medium">{quiz.name}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
