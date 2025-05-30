import React, { useState, useRef, useEffect } from 'react';
import Question from './Question';
import { OpenSourceLogo, ClosedSourceLogo, InnerSourceLogo } from './LogoIcons';
import questionsData from '../data/questions.json';

interface QuestionType {
  id: number;
  text: string;
  topic: 'open_source' | 'closed_source';
  veracity: boolean;
}

const InnerSourceGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [position, setPosition] = useState(0); // 0 is center, negative is left, positive is right
  const [gameCompleted, setGameCompleted] = useState(false);
  const [movingUp, setMovingUp] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [wiggle, setWiggle] = useState(false);
  const [isBumping, setIsBumping] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  
  // Load and shuffle questions on component mount
  useEffect(() => {
    const loadedQuestions = [...questionsData] as QuestionType[];
    // Shuffle questions
    for (let i = loadedQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [loadedQuestions[i], loadedQuestions[j]] = [loadedQuestions[j], loadedQuestions[i]];
    }
    // Use 10 random questions (or all if less than 10)
    setQuestions(loadedQuestions.slice(0, Math.min(10, loadedQuestions.length)));
  }, []);
  
  const logoRef = useRef<HTMLDivElement>(null);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleAnswer = (answer: boolean) => {
    if (gameCompleted || !currentQuestion) return;
    
    const isOpenSourceRelated = currentQuestion.topic === 'open_source';
    const userAnswerMatchesVeracity = answer === currentQuestion.veracity;
    
    // Define target positions for left and right
    // These should be roughly the center points of the left and right logos
    const LEFT_TARGET = -150;  // Position of Open Source logo center
    const RIGHT_TARGET = 150;  // Position of Closed Source logo center
    
    if (userAnswerMatchesVeracity) {
      // For correct answers, move halfway from current position toward the target side
      if (isOpenSourceRelated) {
        // Move left for open source - halfway from current position to left target
        setPosition(prev => {
          const halfwayDistance = (LEFT_TARGET - prev) / 2;
          return prev + halfwayDistance;
        });
      } else {
        // Move right for closed source - halfway from current position to right target
        setPosition(prev => {
          const halfwayDistance = (RIGHT_TARGET - prev) / 2;
          return prev + halfwayDistance;
        });
      }
      
      setIsMoving(true);
      setTimeout(() => setIsMoving(false), 800);
    } else {
      // For incorrect answers, bounce and return to center
      setIsBumping(true);
      setTimeout(() => {
        setIsBumping(false);
        // Return to center
        setPosition(0);
      }, 500);
    }
    
    // Move to next question or complete the game
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameCompleted(true);
      
      // If not at center, gradually move to center before moving up
      if (position !== 0) {
        // First center horizontally
        setPosition(0);
        
        // Then move up and show fireworks after centering
        setTimeout(() => {
          setMovingUp(true);
          setTimeout(() => {
            setShowFireworks(true);
          }, 1000);
        }, 800);
      } else {
        // Already centered, just move up and show fireworks
        setMovingUp(true);
        setTimeout(() => {
          setShowFireworks(true);
        }, 1000);
      }
    }
  };
  
  const resetGame = () => {
    // Shuffle questions again
    const loadedQuestions = [...questionsData] as QuestionType[];
    for (let i = loadedQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [loadedQuestions[i], loadedQuestions[j]] = [loadedQuestions[j], loadedQuestions[i]];
    }
    setQuestions(loadedQuestions.slice(0, Math.min(10, loadedQuestions.length)));
    setCurrentQuestionIndex(0);
    setPosition(0);
    setGameCompleted(false);
    setMovingUp(false);
    setShowFireworks(false);
  };
  
  // If questions are still loading or empty, show loading state
  if (questions.length === 0) {
    return (
      <div className="w-full max-w-4xl p-6 bg-gray-800 rounded-lg shadow-lg flex justify-center items-center" style={{ minHeight: "400px" }}>
        <p className="text-white text-xl">Loading questions...</p>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-4xl bg-transparent rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-center text-blue-300 mb-6 italic">
        "The Knights Who Say... InnerSource!"
      </h1>
      
      <div 
        className="relative h-72 mb-8 flex items-stretch overflow-hidden rounded-lg"
        style={{ 
          background: 'linear-gradient(to right, #fecaca 0%, #fecaca 50%, #1e3a8a 50%, #1e3a8a 100%)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
        }}
      >
        {/* Open Source Logo (left) */}
        <div className="z-10 w-40 h-40 flex flex-col items-center justify-center relative ml-10">
          <div className="w-36 h-36 bg-white rounded-full p-2 shadow-lg">
            <OpenSourceLogo />
          </div>
        </div>
        
        {/* InnerSource Logo (middle, movable) - smaller */}
        <div 
          ref={logoRef}
          className={`absolute flex flex-col items-center logo-move ${isMoving ? 'animate-bounce' : ''} ${wiggle ? 'logo-wiggle' : ''} ${isBumping ? 'bump-animation' : ''}`} 
          style={{ 
            left: `calc(50% + ${position}px)`,
            top: movingUp ? '20%' : '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 20
          }}
        >
          <div className="w-[50px] h-[50px] relative">
            <div className="absolute inset-0 flame-animation"></div>
            <div className="absolute inset-0 bg-white rounded-full p-1 shadow-lg z-10">
              <InnerSourceLogo />
            </div>
            
            {/* Fireworks effect */}
            {showFireworks && (
              <>
                <div className="firework firework-1" style={{top: '-30px', left: '-30px'}}></div>
                <div className="firework firework-2" style={{top: '-20px', left: '40px'}}></div>
                <div className="firework firework-3" style={{top: '40px', left: '10px'}}></div>
                <div className="firework firework-1" style={{top: '30px', left: '-20px'}}></div>
                <div className="firework firework-2" style={{top: '-40px', left: '10px'}}></div>
              </>
            )}
          </div>
          {showFireworks && <span className="mt-2 text-white font-bold text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">InnerSource</span>}
        </div>
        
        {/* Closed Source Logo (right) */}
        <div className="z-10 w-40 h-40 flex flex-col items-center justify-center ml-auto relative mr-10">
          <div className="w-36 h-36 bg-white rounded-full p-2 shadow-lg">
            <ClosedSourceLogo />
          </div>
        </div>
      </div>
      
      {gameCompleted ? (
        <div className="text-center relative z-30">
          <p className="text-xl text-green-300 mb-4 font-bold">
            InnerSource is a middle ground between Open Source and Closed Source
          </p>
          <button
            onClick={resetGame}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-bold text-lg"
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          {currentQuestion && (
            <Question 
              question={currentQuestion} 
              onAnswer={handleAnswer}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
            />
          )}
        </>
      )}
    </div>
  );
};

export default InnerSourceGame;