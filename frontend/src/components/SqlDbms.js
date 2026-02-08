import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';

// SQL/DBMS Modules
import DatabaseFundamentals from './sql-modules/DatabaseFundamentals';
import ErDiagrams from './sql-modules/ErDiagrams';
import KeysNormalization from './sql-modules/KeysNormalization';
import SqlQueries from './sql-modules/SqlQueries';
import AdvancedDbms from './sql-modules/AdvancedDbms';
import RelationalModel from './sql-modules/RelationalModel';

const SqlDbms = () => {
  const location = useLocation();
  const { getOverallProgress } = useProgress();
  const progress = getOverallProgress();

  const modules = [
    {
      id: 'database-fundamentals',
      title: 'Database Fundamentals & Architecture',
      description: 'Learn the basics of databases, their architecture, and key concepts',
      duration: '45 min',
      difficulty: 'Beginner',
      path: 'database-fundamentals',
      icon: '💾',
      color: 'bg-blue-500'
    },
    {
      id: 'relational-model',
      title: 'Relational Model',
      description: 'Master the relational model, keys, constraints, and Codd\'s rules',
      duration: '55 min',
      difficulty: 'Intermediate',
      path: 'relational-model',
      icon: '📊',
      color: 'bg-indigo-500'
    },
    {
      id: 'er-diagrams',
      title: 'ER Diagrams & Data Modeling',
      description: 'Master Entity-Relationship diagrams and data modeling techniques',
      duration: '50 min',
      difficulty: 'Intermediate',
      path: 'er-diagrams',
      icon: '🔄',
      color: 'bg-green-500'
    },
    {
      id: 'keys-normalization',
      title: 'Keys & Normalization',
      description: 'Understand different types of keys and normalization concepts in detail',
      duration: '60 min',
      difficulty: 'Advanced',
      path: 'keys-normalization',
      icon: '🔑',
      color: 'bg-purple-500'
    },
    {
      id: 'sql-queries',
      title: 'SQL Queries & Joins',
      description: 'Master SQL queries, JOIN operations, and complex database operations',
      duration: '55 min',
      difficulty: 'Intermediate',
      path: 'sql-queries',
      icon: '🔍',
      color: 'bg-orange-500'
    },
    {
      id: 'advanced-dbms',
      title: 'Advanced DBMS Concepts',
      description: 'Explore transactions, concurrency, indexing, and database design patterns',
      duration: '65 min',
      difficulty: 'Advanced',
      path: 'advanced-dbms',
      icon: '⚙️',
      color: 'bg-red-500'
    }
  ];

  const Sidebar = () => (
    <div className="w-full lg:w-64 bg-gradient-to-b from-white to-gray-50 dark:from-card-dark dark:to-gray-800 rounded-2xl shadow-xl p-6 h-fit border border-gray-100 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-primary-green to-emerald-500 rounded-xl flex items-center justify-center text-white">
          <span className="text-xl">🗄️</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Course Modules</h3>
      </div>
      
      <nav className="space-y-3">
        {modules.map((module, index) => (
          <Link
            key={module.id}
            to={module.path}
            className={`group flex items-center p-4 rounded-xl transition-all duration-300 border ${
              location.pathname.includes(module.path)
                ? 'bg-gradient-to-r from-primary-green to-emerald-500 text-white shadow-lg border-transparent transform scale-[1.02]'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-md'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg mr-3 transition-transform duration-300 group-hover:scale-110 ${
              location.pathname.includes(module.path)
                ? 'bg-white/20 text-white'
                : `${module.color} text-white shadow-md`
            }`}>
              {module.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate group-hover:scale-105 transition-transform duration-300">
                {module.title.split(' & ')[0]}
              </div>
              <div className="text-xs opacity-75 mt-1 flex items-center gap-2">
                <span>{module.duration}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  module.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                  module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                  'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                }`}>
                  {module.difficulty.slice(0, 1)}
                </span>
              </div>
              {location.pathname.includes(module.path) && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </nav>
      
      {/* Progress Summary */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Progress</span>
            <span className="text-sm font-bold text-primary-green">{progress.percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary-green to-emerald-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress.percentage}%` }}
            ></div>
          </div>
          <div className="mt-3 text-xs text-gray-600 dark:text-gray-400">
            {Math.floor(progress.percentage / (100 / modules.length))} of {modules.length} modules completed
          </div>
        </div>
      </div>
    </div>
  );

  const ModuleCard = ({ module }) => {
    const { getTopicProgress } = useProgress();
    const progressData = getTopicProgress(module.id);
    
    const getDifficultyColor = (difficulty) => {
      switch(difficulty) {
        case 'Beginner': return 'from-green-500 to-emerald-500';
        case 'Intermediate': return 'from-yellow-500 to-orange-500';
        case 'Advanced': return 'from-red-500 to-pink-500';
        default: return 'from-gray-500 to-gray-600';
      }
    };
    
    return (
      <div className="group relative bg-white dark:bg-card-dark rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-transparent">
        {/* Gradient Border Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${getDifficultyColor(module.difficulty)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
        
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <div className={`${module.color} w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {module.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-green transition-colors duration-300">
                  {module.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <span className="flex items-center gap-1">
                    <span>⏱️</span>
                    {module.duration}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getDifficultyColor(module.difficulty)} text-white shadow-sm`}>
                    {module.difficulty}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Progress Badge */}
            {progressData.completed && (
              <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-green-800 dark:text-green-300 font-medium text-sm">Complete</span>
              </div>
            )}
            
            {progressData.score > 0 && !progressData.completed && (
              <div className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                <span className="text-blue-800 dark:text-blue-300 font-medium text-sm">
                  {progressData.score}%
                </span>
              </div>
            )}
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {module.description}
          </p>
          
          {/* Progress Bar */}
          {progressData.score > 0 && (
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                <span>Progress</span>
                <span>{progressData.score}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary-green to-emerald-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressData.score}%` }}
                ></div>
              </div>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <Link 
              to={module.path}
              className="bg-gradient-to-r from-primary-green to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              {progressData.completed ? (
                <>
                  <span>🔄</span>
                  Review Module
                </>
              ) : (
                <>
                  <span>🚀</span>
                  Start Learning
                </>
              )}
            </Link>
            
            {/* Quick Stats */}
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <span>📖</span>
                <span>Interactive</span>
              </div>
              <div className="flex items-center gap-1">
                <span>🎯</span>
                <span>Quiz</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Routes>
        {/* Module routes */}
        <Route path="database-fundamentals" element={<DatabaseFundamentals />} />
        <Route path="relational-model" element={<RelationalModel />} />
        <Route path="er-diagrams" element={<ErDiagrams />} />
        <Route path="keys-normalization" element={<KeysNormalization />} />
        <Route path="sql-queries" element={<SqlQueries />} />
        <Route path="advanced-dbms" element={<AdvancedDbms />} />
        
        {/* Default route - Enhanced Module overview */}
        <Route path="/" element={
          <div className="space-y-8">
            {/* Enhanced Header with Stats */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-green via-emerald-500 to-teal-500"></div>
              <div className="relative bg-black/20 backdrop-blur-sm p-8 md:p-12 text-white">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <span className="text-3xl">🗄️</span>
                      </div>
                      <h1 className="text-4xl md:text-5xl font-bold">SQL & Database Systems</h1>
                    </div>
                    <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-3xl">
                      Master database design, SQL queries, and advanced DBMS concepts with interactive learning
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                        <div className="text-sm opacity-75">Total Modules</div>
                        <div className="text-3xl font-bold">{modules.length}</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                        <div className="text-sm opacity-75">Your Progress</div>
                        <div className="text-3xl font-bold">{progress.percentage}%</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                        <div className="text-sm opacity-75">Total Time</div>
                        <div className="text-3xl font-bold">4.5h</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                        <div className="text-sm opacity-75">Questions</div>
                        <div className="text-3xl font-bold">100+</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">🏆</div>
                      <div className="text-sm">Master All Modules</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">📊</div>
                      <div className="text-sm">Track Progress</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Path Visualization */}
            <div className="bg-white dark:bg-card-dark rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                Your Learning Journey
              </h2>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                  {modules.map((module, index) => (
                    <div key={module.id} className="flex-1 text-center relative">
                      <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3 transition-all duration-300 hover:scale-110 ${module.color} shadow-lg`}
                           style={{
                             boxShadow: `0 10px 25px ${module.color.replace('bg-', 'rgba(').replace('-500', ', 0.3)')}`
                           }}>
                        {module.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{module.title.split(' & ')[0]}</h3>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        module.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {module.difficulty}
                      </div>
                      
                      {/* Progress connector */}
                      {index < modules.length - 1 && (
                        <div className="hidden md:block absolute top-10 left-full w-full h-1">
                          <div className="h-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded-full"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Modules Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Learning Modules</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span>Beginner</span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span>Intermediate</span>
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span>Advanced</span>
                  </div>
                </div>
                <div className="space-y-6">
                  {modules.map((module) => (
                    <ModuleCard key={module.id} module={module} />
                  ))}
                </div>
              </div>
              
              {/* Enhanced Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <Sidebar />
                
                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">📊 Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">Modules Completed</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">{Math.floor(progress.percentage / (100 / modules.length))}/{modules.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">Learning Streak</span>
                      <span className="font-bold text-green-600 dark:text-green-400">7 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">Avg. Score</span>
                      <span className="font-bold text-purple-600 dark:text-purple-400">85%</span>
                    </div>
                  </div>
                </div>
                
                {/* Achievement Badges */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🏆 Achievements</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-3 text-center shadow-sm">
                      <div className="text-2xl mb-1">🎓</div>
                      <div className="text-xs font-medium">Beginner</div>
                    </div>
                    <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-3 text-center shadow-sm opacity-50">
                      <div className="text-2xl mb-1">🏆</div>
                      <div className="text-xs font-medium">Expert</div>
                    </div>
                    <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-3 text-center shadow-sm opacity-50">
                      <div className="text-2xl mb-1">⚡</div>
                      <div className="text-xs font-medium">Speed</div>
                    </div>
                    <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-3 text-center shadow-sm opacity-50">
                      <div className="text-2xl mb-1">🎯</div>
                      <div className="text-xs font-medium">Perfect</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-3">Ready to Master Databases?</h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Start your journey today and become a database expert with our comprehensive learning modules
              </p>
              <Link to="database-fundamentals" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
                🚀 Start Learning Now
              </Link>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
};

export default SqlDbms;