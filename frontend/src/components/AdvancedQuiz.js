import React, { useState, useEffect, useCallback } from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { useProgress } from '../contexts/ProgressContext';

const AdvancedQuiz = ({ quizData }) => {
  const { currentQuestionIndex, selectedAnswers, setSelectedAnswers, setCurrentQuestionIndex, submitQuiz, startQuiz } = useQuiz();
  const { markTopicComplete } = useProgress();
  const [timeRemaining, setTimeRemaining] = useState(quizData.timeLimit || 3600); // Default 1 hour
  const [showReview, setShowReview] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState(new Set());
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

  // Memoized helper functions
  const calculateScore = useCallback(() => {
    let correct = 0;
    if (!quizData || !quizData.questions) return 0;
    
    quizData.questions.forEach(question => {
      const questionIdKey = typeof question.id === 'string' ? question.id : question.id.toString();
      if (selectedAnswers[questionIdKey] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quizData.questions.length) * 100);
  }, [quizData, selectedAnswers]);

  const calculateDetailedStats = useCallback(() => {
    if (!quizData || !quizData.questions) return { totalQuestions: 0, correctAnswers: 0, incorrectAnswers: 0 };
    
    const totalQuestions = quizData.questions.length;
    const correctAnswers = quizData.questions.reduce((acc, q) => {
      const questionIdKey = typeof q.id === 'string' ? q.id : q.id.toString();
      return acc + (selectedAnswers[questionIdKey] === q.correctAnswer ? 1 : 0);
    }, 0);
    const incorrectAnswers = totalQuestions - correctAnswers;
    
    return { totalQuestions, correctAnswers, incorrectAnswers };
  }, [quizData, selectedAnswers]);

  const calculatePerformanceCategory = useCallback((score) => {
    if (score >= 90) return { category: 'Excellent', color: 'from-green-500 to-emerald-600' };
    if (score >= 75) return { category: 'Good', color: 'from-blue-500 to-indigo-600' };
    if (score >= 60) return { category: 'Average', color: 'from-yellow-500 to-orange-500' };
    return { category: 'Needs Improvement', color: 'from-red-500 to-rose-600' };
  }, []);

  const calculatePerformanceMessage = useCallback((score) => {
    if (score >= 90) return 'Excellent Work!';
    if (score >= 70) return 'Good Job!';
    if (score >= 50) return 'Keep Practicing!';
    return 'Review the material and try again!';
  }, []);

  // Initialize quiz when component mounts
  useEffect(() => {
    if (quizData) {
      startQuiz(quizData);
    }
  }, [quizData]); // Remove startQuiz from dependencies since it's now memoized

  // Timer effect
  const handleTimeUp = useCallback(() => {
    submitQuiz(quizData.onComplete);
    setQuizCompleted(true);
  }, [quizData, submitQuiz]);
  
  useEffect(() => {
    if (!quizCompleted && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !quizCompleted) {
      handleTimeUp();
    }
  }, [timeRemaining, quizCompleted, handleTimeUp]);

  const handleAnswerSelect = useCallback((questionId, optionIndex) => {
    // Ensure we're working with the correct question ID type
    const questionIdKey = typeof questionId === 'string' ? questionId : questionId.toString();
    
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIdKey]: optionIndex
    }));
    
    // Provide immediate visual feedback
  }, [setSelectedAnswers]);

  const toggleBookmark = useCallback((questionId) => {
    setBookmarkedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  }, []);

  const getFilteredQuestions = useCallback(() => {
    if (!quizData || !quizData.questions) return [];
    
    if (showBookmarksOnly) {
      return quizData.questions.filter(q => bookmarkedQuestions.has(q.id));
    }
    return quizData.questions;
  }, [quizData, showBookmarksOnly, bookmarkedQuestions]);

  const handleNextQuestion = useCallback(() => {
    const filteredQuestions = getFilteredQuestions();
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }, [currentQuestionIndex, getFilteredQuestions, setCurrentQuestionIndex]);

  const handlePreviousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }, [currentQuestionIndex, setCurrentQuestionIndex]);

  const handleSubmitQuiz = useCallback(() => {
    submitQuiz(quizData.onComplete);
    setQuizCompleted(true);
  }, [quizData, submitQuiz]);

  const handleShowReview = useCallback(() => {
    setShowReview(true);
  }, []);

  const formatTime = useCallback((seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  if (quizCompleted && showReview) {
    // Show detailed review
    const score = calculateScore();
    const { totalQuestions, correctAnswers, incorrectAnswers } = calculateDetailedStats();
    const timeTaken = formatTime(quizData.timeLimit - timeRemaining);
    const { category: performanceCategory, color: categoryColor } = calculatePerformanceCategory(score);
    
    return (
      <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
        <div className={`bg-gradient-to-r ${categoryColor} rounded-2xl p-8 text-white mb-8 shadow-2xl`}>
          <h1 className="text-3xl font-bold mb-4">Quiz Results - {performanceCategory}</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold">{score}%</div>
              <div className="text-sm opacity-90">Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">{correctAnswers}</div>
              <div className="text-sm opacity-90">Correct Answers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">{totalQuestions}</div>
              <div className="text-sm opacity-90">Total Questions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">{timeTaken}</div>
              <div className="text-sm opacity-90">Time Taken</div>
            </div>
          </div>
        </div>

        {/* Performance Analytics */}
        <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-2xl p-6 mb-8 border border-blue-700/50">
          <h2 className="text-xl font-bold text-white mb-4">Performance Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-800/30 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-300">
                {Math.round((quizData.questions.filter(q => bookmarkedQuestions.has(q.id) && selectedAnswers[q.id] === q.correctAnswer).length / bookmarkedQuestions.size) * 100 || 0)}%
              </div>
              <div className="text-blue-200 text-sm">Bookmarked Questions Accuracy</div>
            </div>
            <div className="bg-purple-800/30 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-300">
                {bookmarkedQuestions.size}
              </div>
              <div className="text-purple-200 text-sm">Questions Bookmarked</div>
            </div>
            <div className="bg-teal-800/30 p-4 rounded-lg">
              <div className="text-2xl font-bold text-teal-300">
                {Math.round((timeRemaining / quizData.timeLimit) * 100)}%
              </div>
              <div className="text-teal-200 text-sm">Time Remaining</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {quizData.questions.map((question, index) => {
            const questionIdKey = typeof question.id === 'string' ? question.id : question.id.toString();
            const userAnswer = selectedAnswers[questionIdKey];
            const isCorrect = userAnswer === question.correctAnswer;
            const wasAnswered = userAnswer !== undefined;
                    
            return (
              <div key={question.id} className={`p-6 rounded-xl border-2 ${
                isCorrect ? 'border-green-400 bg-gradient-to-r from-green-900/30 to-emerald-900/30' : 
                wasAnswered ? 'border-red-400 bg-gradient-to-r from-red-900/30 to-rose-900/30' : 
                'border-gray-600 bg-gradient-to-r from-gray-800/30 to-gray-900/30'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">
                    Question {index + 1}: {question.question}
                  </h3>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      isCorrect ? 'bg-green-800 text-green-100' : 
                      wasAnswered ? 'bg-red-800 text-red-100' : 
                      'bg-gray-800 text-gray-300'
                    }`}>
                      {isCorrect ? 'Correct' : wasAnswered ? 'Incorrect' : 'Not Answered'}
                    </span>
                    {bookmarkedQuestions.has(question.id) && (
                      <span className="px-3 py-1 rounded-full text-sm font-bold bg-yellow-600 text-yellow-100">
                        Bookmarked
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {question.options && Array.isArray(question.options) ? question.options.map((option, optionIndex) => {
                    const isSelected = userAnswer === optionIndex;
                    const isCorrectOption = optionIndex === question.correctAnswer;
                    
                    let optionStyle = 'border-gray-600 bg-gray-800/50 text-gray-200';
                    let indicatorStyle = 'bg-gray-700 text-gray-200';
                    
                    if (isCorrectOption) {
                      optionStyle = 'border-green-500 bg-gradient-to-r from-green-900/40 to-emerald-900/40 text-green-100';
                      indicatorStyle = 'bg-green-600 text-white';
                    } else if (isSelected && !isCorrect) {
                      optionStyle = 'border-red-500 bg-gradient-to-r from-red-900/40 to-rose-900/40 text-red-100';
                      indicatorStyle = 'bg-red-600 text-white';
                    }
                    
                    return (
                      <div
                        key={optionIndex}
                        className={`p-3 rounded-lg border ${optionStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${indicatorStyle}`}>
                            {String.fromCharCode(65 + optionIndex)}
                          </span>
                          <span className="flex-1">{option}</span>
                          {isCorrectOption && (
                            <span className="text-green-400 font-bold flex items-center gap-1">
                              <span className="text-lg">✓</span>
                              Correct Answer
                            </span>
                          )}
                          {isSelected && !isCorrectOption && (
                            <span className="text-red-400 font-bold flex items-center gap-1">
                              <span className="text-lg">✗</span>
                              Your Answer
                            </span>
                          )}
                          {isSelected && isCorrectOption && (
                            <span className="text-green-400 font-bold flex items-center gap-1">
                              <span className="text-lg">✓</span>
                              Your Answer (Correct)
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  }) : <div className="p-3 rounded-lg border border-red-500 bg-red-900/30 text-red-200">No options available for this question</div>}
                </div>

                <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 p-4 rounded-lg border border-blue-700/50">
                  <h4 className="font-bold text-blue-300 mb-2">Explanation:</h4>
                  <p className="text-blue-200">{question.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowReview(false)}
            className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Back to Quiz Summary
          </button>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    // Show quiz completion summary
    const score = calculateScore();
    const { totalQuestions, correctAnswers, incorrectAnswers } = calculateDetailedStats();
    const timeTaken = formatTime(quizData.timeLimit - timeRemaining);
    const performanceMessage = calculatePerformanceMessage(score);

    return (
      <div className="max-w-4xl mx-auto p-8 text-center bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-12 text-white mb-8 shadow-2xl">
          <h1 className="text-4xl font-bold mb-4">Quiz Completed!</h1>
          <div className="text-6xl font-bold mb-4">{score}%</div>
          <p className="text-xl opacity-90 mb-8">
            {performanceMessage}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 p-6 rounded-xl border border-blue-700/50">
            <div className="text-3xl font-bold text-blue-300 mb-2">
              {correctAnswers}
            </div>
            <div className="text-blue-200">Correct Answers</div>
          </div>
          <div className="bg-gradient-to-br from-red-900/40 to-rose-900/40 p-6 rounded-xl border border-red-700/50">
            <div className="text-3xl font-bold text-red-300 mb-2">
              {incorrectAnswers}
            </div>
            <div className="text-red-200">Incorrect Answers</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 p-6 rounded-xl border border-purple-700/50">
            <div className="text-3xl font-bold text-purple-300 mb-2">
              {timeTaken}
            </div>
            <div className="text-purple-200">Time Taken</div>
          </div>
        </div>

        <div className="space-x-4">
          <button
            onClick={handleShowReview}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Review All Answers
          </button>
          <button
            onClick={() => {
              markTopicComplete(quizData.topicId || 'advanced-quiz', score);
              window.location.href = '/';
            }}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // Check if quiz data is properly structured
  if (!quizData || !quizData.questions || !Array.isArray(quizData.questions) || quizData.questions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
        <div className="bg-gradient-to-r from-red-900/50 to-rose-900/50 border border-red-700 text-red-200 px-8 py-6 rounded-2xl shadow-2xl max-w-2xl">
          <h3 className="font-bold text-2xl mb-4">Quiz Data Error</h3>
          <p className="text-lg">No questions available for this quiz.</p>
        </div>
      </div>
    );
  }

  // Main quiz interface
  const filteredQuestions = getFilteredQuestions();
  const currentQuestion = filteredQuestions[currentQuestionIndex];
  
  // Ensure current question is valid
  if (!currentQuestion) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
        <div className="bg-gradient-to-r from-red-900/50 to-rose-900/50 border border-red-700 text-red-200 px-8 py-6 rounded-2xl shadow-2xl max-w-2xl">
          <h3 className="font-bold text-2xl mb-4">Question Error</h3>
          <p className="text-lg">Invalid question at index {currentQuestionIndex}.</p>
        </div>
      </div>
    );
  }
  
  const userAnswer = selectedAnswers[currentQuestion.id];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl shadow-2xl p-8 mb-6 border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-bold text-white">
            Question {currentQuestionIndex + 1} of {filteredQuestions.length}
            {showBookmarksOnly && (
              <span className="ml-2 px-2 py-1 bg-yellow-600 text-yellow-100 text-sm rounded-full">
                Bookmarks Only
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="text-lg font-bold text-red-400">
              ⏱️ {formatTime(timeRemaining)}
            </div>
            <div className="w-32 bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / filteredQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-white mb-6">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3 mb-8">
          {currentQuestion.options && Array.isArray(currentQuestion.options) ? currentQuestion.options.map((option, index) => {
            const questionIdKey = typeof currentQuestion.id === 'string' ? currentQuestion.id : currentQuestion.id.toString();
            const isSelected = selectedAnswers[questionIdKey] === index;
            
            return (
              <div
                key={index}
                onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'border-blue-500 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 shadow-lg'
                    : 'border-gray-600 hover:border-gray-500 bg-gray-800/30 hover:bg-gray-700/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-700 text-gray-200'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-white flex-1">{option}</span>
                  {isSelected && (
                    <span className="text-blue-400 font-bold text-sm">
                      ✓ Selected
                    </span>
                  )}
                </div>
              </div>
            );
          }) : <div className="p-4 rounded-lg border border-red-500 bg-red-900/30 text-red-200">No options available for this question</div>}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button
              onClick={() => toggleBookmark(currentQuestion.id)}
              className={`px-4 py-3 rounded-lg font-medium flex items-center gap-2 ${
                bookmarkedQuestions.has(currentQuestion.id)
                  ? 'bg-yellow-600 text-yellow-100 hover:bg-yellow-500'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              {bookmarkedQuestions.has(currentQuestion.id) ? '🔖 Saved' : '🔖 Bookmark' }
            </button>
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className={`px-6 py-3 rounded-lg font-medium ${
                currentQuestionIndex === 0
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              Previous
            </button>
          </div>

          {currentQuestionIndex === filteredQuestions.length - 1 ? (
            <button
              onClick={handleSubmitQuiz}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Next Question
            </button>
          )}
        </div>
      </div>

      {/* Question Navigator */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl shadow-2xl p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4">Question Navigator</h3>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">Question Navigator</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
              className={`px-3 py-1 rounded text-sm font-medium ${
                showBookmarksOnly
                  ? 'bg-yellow-600 text-yellow-100'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {showBookmarksOnly ? 'Show All' : 'Bookmarked' }
            </button>
            <div className="text-sm text-gray-400">
              {bookmarkedQuestions.size} saved
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2">
          {filteredQuestions.map((question, idx) => {
            const questionIdKey = typeof question.id === 'string' ? question.id : question.id.toString();
            const isAnswered = selectedAnswers[questionIdKey] !== undefined;
            const isCurrent = idx === currentQuestionIndex;
            
            let buttonStyle = 'bg-gray-700 text-gray-300 hover:bg-gray-600';
            
            if (isCurrent) {
              buttonStyle = 'bg-blue-600 text-white shadow-md';
            } else if (isAnswered) {
              buttonStyle = 'bg-green-800/50 text-green-200 border border-green-600/50';
            }
            
            return (
              <button
                key={idx}
                onClick={() => setCurrentQuestionIndex(showBookmarksOnly ? idx : quizData.questions.findIndex(q => q.id === question.id))}
                className={`p-2 rounded-lg text-sm font-medium ${buttonStyle}`}
                title={isAnswered ? `Answered: ${String.fromCharCode(65 + selectedAnswers[questionIdKey])}` : 'Not answered yet'}
              >
                {idx + 1}
                {isAnswered && (
                  <span className="block text-xs mt-1">
                    {String.fromCharCode(65 + selectedAnswers[questionIdKey])}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdvancedQuiz;