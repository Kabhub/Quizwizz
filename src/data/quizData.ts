import { Quiz } from '../types';

export const quizzes: Quiz[] = {
  gk: {
    id: 'gk',
    name: 'General Knowledge',
    questions: [
      {
        id: 1,
        question: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'Who painted the Mona Lisa?',
        options: ['Van Gogh', 'Leonardo da Vinci', 'Picasso', 'Michelangelo'],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'Which is the largest ocean in the world?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        correctAnswer: 3
      },
      {
        id: 4,
        question: 'Who wrote "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'South Korea', 'Japan', 'Thailand'],
        correctAnswer: 2
      },
      {
        id: 6,
        question: 'What currency is used in the United Kingdom?',
        options: ['Euro', 'Dollar', 'Pound Sterling', 'Yen'],
        correctAnswer: 2
      }
    ]
  },
  science: {
    id: 'science',
    name: 'Science',
    questions: [
      {
        id: 1,
        question: 'What is the chemical symbol for Gold?',
        options: ['Ag', 'Au', 'Fe', 'Cu'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'What is the nearest planet to the Sun?',
        options: ['Venus', 'Earth', 'Mars', 'Mercury'],
        correctAnswer: 3
      },
      {
        id: 3,
        question: 'What is the hardest natural substance on Earth?',
        options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'Which gas do plants absorb from the atmosphere?',
        options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 0
      },
      {
        id: 5,
        question: 'What is the largest organ in the human body?',
        options: ['Heart', 'Brain', 'Liver', 'Skin'],
        correctAnswer: 3
      },
      {
        id: 6,
        question: 'How many bones are in the adult human body?',
        options: ['206', '201', '210', '215'],
        correctAnswer: 0
      }
    ]
  },
  math: {
    id: 'math',
    name: 'Basic Mathematics',
    questions: [
      {
        id: 1,
        question: 'What is 7 x 8?',
        options: ['54', '56', '58', '60'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'What is the square root of 144?',
        options: ['10', '12', '14', '16'],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'What is 15% of 200?',
        options: ['20', '25', '30', '35'],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'If x + 5 = 12, what is x?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'What is the area of a rectangle with length 8 and width 5?',
        options: ['35', '40', '45', '50'],
        correctAnswer: 1
      },
      {
        id: 6,
        question: 'What is 100 divided by 4?',
        options: ['20', '25', '30', '35'],
        correctAnswer: 1
      }
    ]
  },
  history: {
    id: 'history',
    name: 'World History',
    questions: [
      {
        id: 1,
        question: 'Who was the first President of the United States?',
        options: ['Abraham Lincoln', 'Thomas Jefferson', 'George Washington', 'John Adams'],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'In what year did World War II end?',
        options: ['1942', '1945', '1948', '1950'],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'Which empire built the Colosseum?',
        options: ['Greek', 'Egyptian', 'Roman', 'Ottoman'],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'Who was the famous queen of ancient Egypt?',
        options: ['Cleopatra', 'Isis', 'Nefertiti', 'Hatshepsut'],
        correctAnswer: 0
      },
      {
        id: 5,
        question: 'What wall divided Berlin from 1961 to 1989?',
        options: ['Berlin Wall', 'Iron Curtain', 'Western Wall', 'Great Wall'],
        correctAnswer: 0
      }
    ]
  },
  technology: {
    id: 'technology',
    name: 'Technology',
    questions: [
      {
        id: 1,
        question: 'What does HTML stand for?',
        options: ['HyperText Markup Language', 'HighText Machine Language', 'HyperText and Links Markup Language', 'None of the above'],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'Who founded Microsoft?',
        options: ['Steve Jobs', 'Larry Page', 'Bill Gates', 'Mark Zuckerberg'],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'What does "CPU" stand for?',
        options: ['Central Process Unit', 'Central Processing Unit', 'Computer Personal Unit', 'Control Processing Unit'],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Which company developed the Android operating system?',
        options: ['Apple', 'Microsoft', 'Google', 'IBM'],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'What year was the iPhone first released?',
        options: ['2005', '2007', '2008', '2010'],
        correctAnswer: 1
      }
    ]
  }
};
