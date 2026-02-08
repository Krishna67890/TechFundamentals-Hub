import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import AdvancedQuiz from './AdvancedQuiz';
import { fullComputerArchitectureQuiz } from '../data/computerArchitectureQuiz';
import { fullSqlDbmsQuiz } from '../data/sqlDbmsQuiz';
import { separateComputerArchitectureQuiz } from '../data/separateComputerArchitectureQuiz';
import { pureSqlDbmsQuiz } from '../data/pureSqlDbmsQuiz';
import { softwareEngineeringQuiz } from '../data/softwareEngineeringQuiz';

const QuizCenter = () => {
  const quizzes = [
    {
      title: "Computer Architecture Mastery Quiz",
      description: "Comprehensive 100-question assessment covering all aspects of Computer Architecture including number systems, computer types, architecture types, digital logic, and CPU design",
      subject: "Computer Architecture",
      questions: 100,
      timeLimit: "120 minutes",
      difficulty: "Comprehensive",
      path: "/quiz/computer-architecture",
      color: "bg-blue-500",
      quizData: separateComputerArchitectureQuiz
    },
    {
      title: "SQL & Database Systems Mastery Quiz",
      description: "Complete 100-question examination of SQL queries, database design, normalization, transactions, and advanced DBMS concepts",
      subject: "SQL/DBMS",
      questions: 100,
      timeLimit: "120 minutes",
      difficulty: "Comprehensive",
      path: "/quiz/sql-dbms",
      color: "bg-green-500",
      quizData: pureSqlDbmsQuiz
    },
    {
      title: "Software Engineering Mastery Quiz",
      description: "Complete 100-question examination of software engineering principles, processes, architecture, and quality assurance",
      subject: "Software Engineering",
      questions: 100,
      timeLimit: "120 minutes",
      difficulty: "Comprehensive",
      path: "/quiz/software-engineering",
      color: "bg-purple-500",
      quizData: softwareEngineeringQuiz
    },
    {
      title: "Number Systems & Conversions Quiz",
      description: "Focused assessment on binary, decimal, octal, and hexadecimal number systems with conversion techniques",
      subject: "Computer Architecture",
      questions: 25,
      timeLimit: "30 minutes",
      difficulty: "Beginner",
      path: "/quiz/number-systems",
      color: "bg-purple-500"
    },
    {
      title: "Database Fundamentals Quiz",
      description: "Essential concepts of databases, architecture, and basic SQL operations",
      subject: "SQL/DBMS",
      questions: 30,
      timeLimit: "45 minutes",
      difficulty: "Beginner",
      path: "/quiz/database-fundamentals",
      color: "bg-orange-500"
    },
    {
      title: "Keys & Normalization Advanced Quiz",
      description: "Deep dive into database keys, functional dependencies, and all normal forms with practical examples",
      subject: "SQL/DBMS",
      questions: 40,
      timeLimit: "60 minutes",
      difficulty: "Advanced",
      path: "/quiz/keys-normalization",
      color: "bg-red-500"
    }
  ];

  const QuizRoute = ({ quizData }) => {
    // Check if quizData is available
    if (!quizData) {
      return (
        <div className="max-w-4xl mx-auto p-8 text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Quiz Not Found</h3>
            <p>The requested quiz could not be loaded.</p>
          </div>
        </div>
      );
    }
    
    const handleQuizComplete = (results) => {
      
      // Save results to localStorage
      if (quizData && quizData.topicId) {
        const quizResults = {
          ...results,
          timestamp: new Date().toISOString(),
          quizTitle: quizData.title,
          topicId: quizData.topicId
        };
        localStorage.setItem(`quiz-${quizData.topicId}-results`, JSON.stringify(quizResults));
        
        // Also save to a general quiz history
        const quizHistory = JSON.parse(localStorage.getItem('quiz-history') || '[]');
        quizHistory.push(quizResults);
        localStorage.setItem('quiz-history', JSON.stringify(quizHistory));
      }
      
      // Show success notification
      alert(`Quiz completed! You scored ${results.score}% (${results.correctAnswers}/${results.totalQuestions} correct)`);
    };

    return <AdvancedQuiz quizData={quizData} onComplete={handleQuizComplete} />;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Routes>
        <Route path="/computer-architecture" element={<QuizRoute quizData={separateComputerArchitectureQuiz} />} />
        <Route path="/sql-dbms" element={<QuizRoute quizData={pureSqlDbmsQuiz} />} />
        <Route path="/software-engineering" element={<QuizRoute quizData={softwareEngineeringQuiz} />} />
        <Route path="*" element={
          <div className="max-w-4xl mx-auto p-8 text-center">
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Quiz Not Found</h3>
              <p>The requested quiz type does not exist.</p>
            </div>
          </div>
        } />
        <Route path="" element={
          <>
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue via-purple-500 to-primary-green"></div>
              <div className="relative bg-black/20 backdrop-blur-sm p-12 text-white text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Advanced Quiz Center</h1>
                <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-3xl mx-auto">
                  Challenge your knowledge with comprehensive assessments featuring 100+ questions, timed sessions, and detailed analytics
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-center">
                  <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-4">
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-sm opacity-75">Questions</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-4">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm opacity-75">Topics Covered</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-4">
                    <div className="text-3xl font-bold">∞</div>
                    <div className="text-sm opacity-75">Learning Potential</div>
                  </div>
                </div>
                <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
                  Select a quiz from the categories below to test your knowledge and track your progress.
                </p>
              </div>
            </div>

            {/* Quiz Categories */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                Available Assessments
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Link
                  to="/quiz/computer-architecture"
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:shadow-2xl transition-all duration-300 hover:border-gray-600 group bg-blue-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">💻</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">Computer Architecture Quiz</h3>
                      <p className="text-gray-300">100 questions on computer architecture, number systems, and digital logic</p>
                    </div>
                  </div>
                </Link>
                
                <Link
                  to="/quiz/sql-dbms"
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:shadow-2xl transition-all duration-300 hover:border-gray-600 group bg-green-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📊</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">SQL & Database Systems Quiz</h3>
                      <p className="text-gray-300">100 questions on SQL, databases, and DBMS concepts</p>
                    </div>
                  </div>
                </Link>
                
                <Link
                  to="/quiz/software-engineering"
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:shadow-2xl transition-all duration-300 hover:border-gray-600 group bg-purple-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">⚙️</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">Software Engineering Quiz</h3>
                      <p className="text-gray-300">100 questions on software engineering principles and practices</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Advanced Features */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Advanced Assessment Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                    ⏱️
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Timed Sessions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Real exam conditions with countdown timers</p>
                </div>
                
                <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                    📊
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Detailed Analytics</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive performance metrics</p>
                </div>
                
                <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                    🔍
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Answer Review</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Detailed explanations for all questions</p>
                </div>
                
                <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                    🎯
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Adaptive Difficulty</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Questions adjust to your skill level</p>
                </div>
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Your Quiz Progress</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">24</div>
                  <div className="text-gray-600 dark:text-gray-400">Quizzes Attempted</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">87%</div>
                  <div className="text-gray-600 dark:text-gray-400">Average Score</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">42</div>
                  <div className="text-gray-600 dark:text-gray-400">Questions Answered</div>
                </div>
              </div>
            </div>
          </>
        } />
      </Routes>
    </div>
  );
};

export default QuizCenter;