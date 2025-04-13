export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  name: string;
  questions: Question[];
}

export interface QuizResult {
  subject: string;
  score: number;
  totalQuestions: number;
  date: string;
}

export interface User {
  name: string;
  email: string;
  results: QuizResult[];
}