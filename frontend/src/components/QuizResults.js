import React from 'react';

const QuizResults = ({ results, onRestart }) => {
  if (!results) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading results...</p>
        </div>
      </div>
    );
  }

  const { 
    score, 
    correctAnswers, 
    totalQuestions, 
    timeTaken, 
    grade, 
    answers, 
    questions, 
    passed 
  } = results;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getAnswerLetter = (index) => String.fromCharCode(65 + index);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Results Header */}
        <div className={`rounded-2xl shadow-2xl p-10 mb-10 text-center transform transition-all duration-700 hover:scale-[1.02] ${
          passed 
            ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white animate-pulse' 
            : 'bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white'
        }`}>
          <div className="text-8xl font-bold mb-6 animate-bounce">
            {score}%
          </div>
          <div className="text-3xl font-bold mb-4">{grade}</div>
          <div className={`text-2xl font-semibold ${passed ? 'text-green-100' : 'text-red-100'}`}>
            {passed ? '🎉 Congratulations! You Passed! 🎊' : '📚 Keep studying and try again! 💪'}
          </div>
          <div className="mt-6 text-lg opacity-90">
            {passed ? "You've demonstrated excellent knowledge!" : 'Review the explanations and try again.'}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl shadow-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-3">✓</div>
            <div className="text-4xl font-bold text-green-700 dark:text-green-300 mb-2">{correctAnswers}</div>
            <div className="text-lg font-semibold text-green-600 dark:text-green-400">Correct Answers</div>
          </div>
          
          <div className="bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 rounded-2xl shadow-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-5xl font-bold text-red-600 dark:text-red-400 mb-3">✗</div>
            <div className="text-4xl font-bold text-red-700 dark:text-red-300 mb-2">{totalQuestions - correctAnswers}</div>
            <div className="text-lg font-semibold text-red-600 dark:text-red-400">Incorrect Answers</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl shadow-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-3">⏱️</div>
            <div className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-2">{formatTime(timeTaken)}</div>
            <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">Time Taken</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-2xl shadow-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-3">📊</div>
            <div className="text-4xl font-bold text-purple-700 dark:text-purple-300 mb-2">{totalQuestions}</div>
            <div className="text-lg font-semibold text-purple-600 dark:text-purple-400">Total Questions</div>
          </div>
        </div>

        {/* Detailed Review */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-card-dark dark:to-gray-800 rounded-2xl shadow-2xl p-10 mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            📚 Detailed Review
          </h2>
          
          <div className="space-y-8">
            {questions.map((question, index) => {
              const userAnswer = answers[question.id];
              const isCorrect = userAnswer?.isCorrect;
              const userAnswerIndex = userAnswer?.answer;
              
              return (
                <div key={question.id} className={`p-8 rounded-2xl border-l-8 transition-all duration-500 transform hover:scale-[1.01] ${
                  isCorrect 
                    ? 'bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 border-green-500' 
                    : 'bg-gradient-to-r from-red-50 via-rose-50 to-pink-50 dark:from-red-900/20 dark:via-rose-900/20 dark:to-pink-900/20 border-red-500'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        isCorrect 
                          ? 'bg-green-500 text-white' 
                          : 'bg-red-500 text-white'
                      }`}>
                        {index + 1}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        question.difficulty === 'Easy' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                          : question.difficulty === 'Medium' 
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {question.difficulty}
                      </div>
                    </div>
                    
                    <div className={`px-4 py-2 rounded-full font-bold ${
                      isCorrect 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {question.question}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {question.options.map((option, optionIndex) => {
                      const isUserAnswer = userAnswerIndex === optionIndex;
                      const isCorrectAnswer = optionIndex === question.correctAnswer;
                      
                      return (
                        <div 
                          key={optionIndex}
                          className={`p-4 rounded-xl border-2 ${
                            isCorrectAnswer 
                              ? 'bg-green-100 dark:bg-green-900/30 border-green-500' 
                              : isUserAnswer 
                              ? 'bg-red-100 dark:bg-red-900/30 border-red-500' 
                              : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold ${
                              isCorrectAnswer 
                                ? 'bg-green-500 text-white' 
                                : isUserAnswer 
                                ? 'bg-red-500 text-white' 
                                : 'bg-gray-500 text-white'
                            }`}>
                              {getAnswerLetter(optionIndex)}
                            </div>
                            <span className={`font-medium ${
                              isCorrectAnswer 
                                ? 'text-green-800 dark:text-green-300' 
                                : isUserAnswer 
                                ? 'text-red-800 dark:text-red-300' 
                                : 'text-gray-700 dark:text-gray-300'
                            }`}>
                              {option}
                            </span>
                            {isCorrectAnswer && (
                              <span className="ml-auto text-green-600 font-bold">✓</span>
                            )}
                            {isUserAnswer && !isCorrectAnswer && (
                              <span className="ml-auto text-red-600 font-bold">✗</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {question.explanation && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-xl">
                      <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">💡 Explanation:</h4>
                      <p className="text-blue-700 dark:text-blue-400">{question.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={onRestart}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse"
          >
            🔄 Retake Quiz
          </button>
          
          <button
            onClick={() => window.print()}
            className="px-10 py-4 bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 dark:from-gray-600 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            🖨️ Print Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;