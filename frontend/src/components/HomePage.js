import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useProgress } from '../contexts/ProgressContext';

const HomePage = () => {
  const { isDark } = useTheme();
  const { getOverallProgress } = useProgress();
  const progress = getOverallProgress();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Interactive Learning",
      description: "Hands-on exercises and real-time feedback to reinforce your learning",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "text-primary-blue"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed progress analytics",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "text-primary-green"
    },
    {
      title: "Expert Content",
      description: "Comprehensive materials curated by industry professionals",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "text-purple-600"
    }
  ];

  const subjects = [
    {
      title: "Computer Architecture",
      description: "Master the fundamentals of computer systems, from number systems to processor design",
      color: "bg-primary-blue",
      textColor: "text-primary-blue",
      path: "/computer-architecture",
      modules: 12,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "SQL & Database Systems",
      description: "Learn database design, SQL queries, and advanced DBMS concepts",
      color: "bg-primary-green",
      textColor: "text-primary-green",
      path: "/sql-dbms",
      modules: 15,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      )
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-blue to-primary-green">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 hero-text">
              TechFundamentals Hub
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Master Computer Architecture & Database Systems with Interactive Learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/computer-architecture" 
                className="btn-primary px-8 py-3 text-lg"
              >
                Start Computer Architecture
              </Link>
              <Link 
                to="/sql-dbms" 
                className="btn-secondary px-8 py-3 text-lg"
              >
                Start SQL/DBMS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-card-dark rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your Learning Progress
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Keep up the great work! You're making excellent progress.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-blue mb-2">
                {progress.percentage}%
              </div>
              <div className="text-gray-600 dark:text-gray-300">Overall Progress</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-green mb-2">
                {progress.completed}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Topics Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {progress.streak}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Day Streak</div>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
              <span>Learning Progress</span>
              <span>{progress.completed}/{progress.total} topics</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${progress.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dive deep into either Computer Architecture or Database Systems with comprehensive modules
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {subjects.map((subject, index) => (
            <div 
              key={index}
              className="module-card transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`${subject.color} p-3 rounded-xl text-white mr-4`}>
                  {subject.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {subject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {subject.modules} modules available
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                {subject.description}
              </p>
              
              <Link 
                to={subject.path}
                className={`inline-block ${subject.textColor} hover:underline font-semibold text-lg`}
              >
                Explore {subject.title} →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose TechFundamentals Hub?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide everything you need to master computer science fundamentals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-card-dark rounded-xl shadow-lg p-8 text-center card-hover"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.color} bg-opacity-10 mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary-blue to-primary-green py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of learners mastering computer science fundamentals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/computer-architecture" 
              className="bg-white text-primary-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Computer Architecture
            </Link>
            <Link 
              to="/sql-dbms" 
              className="bg-white text-primary-green hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              SQL & Database Systems
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;