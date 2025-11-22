import React, { useState, useEffect } from 'react';
import { Play, Trophy, Clock, RefreshCw } from 'lucide-react';
import { wordDatabase } from '../data/words';

const WordGames = () => {
  const [currentGame, setCurrentGame] = useState<'scramble' | 'definition' | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [gameStats, setGameStats] = useState({ correct: 0, total: 0 });

  const scrambleWord = (word: string) => {
    const letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join('');
  };

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordDatabase.length);
    return wordDatabase[randomIndex];
  };

  const startGame = (gameType: 'scramble' | 'definition') => {
    setCurrentGame(gameType);
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(60);
    setGameStats({ correct: 0, total: 0 });
    setFeedback('');
    nextRound();
  };

  const nextRound = () => {
    const word = getRandomWord();
    setCurrentWord(word.word);
    setDefinition(word.definition);
    setScrambledWord(scrambleWord(word.word));
    setUserAnswer('');
    setFeedback('');
  };

  const checkAnswer = () => {
    const isCorrect = userAnswer.toLowerCase().trim() === currentWord.toLowerCase();
    setGameStats(prev => ({ 
      correct: prev.correct + (isCorrect ? 1 : 0), 
      total: prev.total + 1 
    }));
    
    if (isCorrect) {
      setScore(prev => prev + 10);
      setFeedback('Correct! 🎉');
    } else {
      setFeedback(`Incorrect. The answer was: ${currentWord}`);
    }
    
    setTimeout(() => {
      nextRound();
    }, 2000);
  };

  const endGame = () => {
    setIsPlaying(false);
    setCurrentGame(null);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      endGame();
    }
    return () => clearTimeout(timer);
  }, [isPlaying, timeLeft]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && userAnswer.trim()) {
      checkAnswer();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Word Games & Challenges
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Test your vocabulary skills with fun and educational word games. 
          Perfect for improving language skills and having fun with words.
        </p>
      </div>

      {!currentGame && (
        <>
          {/* Game Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Word Scramble
                </h3>
                <p className="text-gray-600 mb-6">
                  Unscramble the letters to form the correct word. Race against time 
                  to score as many points as possible!
                </p>
                <button
                  onClick={() => startGame('scramble')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 mx-auto"
                >
                  <Play className="h-5 w-5" />
                  <span>Play Word Scramble</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Definition Match
                </h3>
                <p className="text-gray-600 mb-6">
                  Read the definition and guess the word. Test your vocabulary 
                  knowledge and learn new words!
                </p>
                <button
                  onClick={() => startGame('definition')}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2 mx-auto"
                >
                  <Play className="h-5 w-5" />
                  <span>Play Definition Match</span>
                </button>
              </div>
            </div>
          </div>

          {/* Game Stats */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              How to Play
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Choose Your Game</h4>
                  <p className="text-gray-600">Select between Word Scramble or Definition Match</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Beat the Clock</h4>
                  <p className="text-gray-600">You have 60 seconds to answer as many questions as possible</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Earn Points</h4>
                  <p className="text-gray-600">Get 10 points for each correct answer and track your progress</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Game Interface */}
      {currentGame && isPlaying && (
        <div className="max-w-2xl mx-auto">
          {/* Game Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold">Score: {score}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-red-500" />
                  <span className="font-semibold">Time: {timeLeft}s</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Correct: {gameStats.correct}/{gameStats.total}
              </div>
            </div>
          </div>

          {/* Game Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {currentGame === 'scramble' ? 'Unscramble this word:' : 'What word matches this definition?'}
              </h2>
              
              {currentGame === 'scramble' ? (
                <div className="text-4xl font-bold text-blue-600 mb-4 tracking-wider">
                  {scrambledWord.toUpperCase()}
                </div>
              ) : (
                <div className="text-lg text-gray-700 mb-6 p-4 bg-gray-50 rounded-lg">
                  "{definition}"
                </div>
              )}
            </div>

            <div className="space-y-4">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your answer here..."
                className="w-full px-6 py-4 text-lg text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
              
              <button
                onClick={checkAnswer}
                disabled={!userAnswer.trim()}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            </div>

            {feedback && (
              <div className={`mt-6 p-4 rounded-lg text-center font-medium ${
                feedback.includes('Correct') 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {feedback}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Game Over */}
      {currentGame && !isPlaying && (
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="mb-6">
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Game Over!
              </h2>
              <p className="text-gray-600">
                Great job! Here are your results:
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{score}</div>
                <div className="text-gray-600">Final Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{gameStats.correct}</div>
                <div className="text-gray-600">Correct Answers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {gameStats.total > 0 ? Math.round((gameStats.correct / gameStats.total) * 100) : 0}%
                </div>
                <div className="text-gray-600">Accuracy</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => startGame(currentGame)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Play Again
              </button>
              <button
                onClick={() => setCurrentGame(null)}
                className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
              >
                Choose Different Game
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordGames;