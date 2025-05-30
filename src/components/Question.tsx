import React from 'react';

interface QuestionProps {
  question: {
    id: number;
    text: string;
    topic: 'open_source' | 'closed_source';
    veracity: boolean;
  };
  onAnswer: (answer: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
}

const Question: React.FC<QuestionProps> = ({ 
  question, 
  onAnswer, 
  questionNumber, 
  totalQuestions 
}) => {
  return (
    <div className="bg-slate-900 p-8 rounded-lg mb-6 shadow-lg border border-slate-700">
      
      <p className="text-white text-6xl md:text-7xl lg:text-10xl mb-16 md:mb-20 text-center font-bold drop-shadow-md leading-relaxed">
        "{question.text}"
      </p>
      
      <div className="flex justify-center space-x-16">
        <button
          onClick={() => onAnswer(true)}
          className="px-28 py-12 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition font-bold shadow-lg text-5xl md:text-6xl transform hover:scale-105"
          aria-label="True"
        >
          TRUE
        </button>
        <button
          onClick={() => onAnswer(false)}
          className="px-28 py-12 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition font-bold shadow-lg text-5xl md:text-6xl transform hover:scale-105"
          aria-label="False"
        >
          FALSE
        </button>
      </div>
    </div>
  );
};

export default Question;