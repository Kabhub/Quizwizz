import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizzes } from '../data/quizData';

export default function Quiz() {
  const { subject } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const quiz = quizzes[subject as keyof typeof quizzes];
  const question = quiz.questions[currentQuestion];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const score = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
      }, 0);

      // Save result
      const results = JSON.parse(localStorage.getItem('quizResults') || '[]');
      results.push({
        subject: quiz.name,
        score,
        totalQuestions: quiz.questions.length,
        date: new Date().toISOString()
      });
      localStorage.setItem('quizResults', JSON.stringify(results));

      navigate('/report');
    }
  };

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {quiz.name}
            </h2>
            <span className="text-gray-600 dark:text-gray-300">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{
                width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
            {question.question}
          </h3>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-left p-4 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-gray-800 dark:text-white">{option}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}