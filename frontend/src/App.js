import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { AppProviders } from './contexts';
import { useTheme } from './contexts/ThemeContext';
import { useProgress } from './contexts/ProgressContext';

// Import new components
import HomePage from './components/HomePage';
import ComputerArchitecture from './components/ComputerArchitecture';
import SqlDbms from './components/SqlDbms';
import SoftwareEngineering from './components/SoftwareEngineering';
import Tools from './components/Tools';
import Profile from './components/Profile';
import QuizCenter from './components/QuizCenter';
import Dashboard from './components/Dashboard';

// Import existing components for backward compatibility
import Home from './components/Home';
import SqlBasics from './components/SqlBasics';
import MySqlSection from './components/MySqlSection';
import MsSqlSection from './components/MsSqlSection';
import PostgreSqlSection from './components/PostgreSqlSection';
import AdvancedSql from './components/AdvancedSql';

const NavigationBar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const { getOverallProgress } = useProgress();
  const progress = getOverallProgress();

  return (
    <nav className="bg-white dark:bg-dark-bg shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-blue to-primary-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TF</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">TechFundamentals Hub</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Master Computer Architecture & Database Systems</p>
              </div>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/' || location.pathname === '/dashboard'
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/computer-architecture" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname.startsWith('/computer-architecture') 
                  ? 'text-primary-blue bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-blue'
              }`}
            >
              Computer Architecture
            </Link>
            <Link 
              to="/sql-dbms" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname.startsWith('/sql-dbms') 
                  ? 'text-primary-green bg-green-50 dark:bg-green-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-green'
              }`}
            >
              SQL/DBMS
            </Link>
            <Link 
              to="/software-engineering" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname.startsWith('/software-engineering') 
                  ? 'text-purple-600 bg-purple-50 dark:bg-purple-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-purple-600'
              }`}
            >
              Software Engineering
            </Link>
            <Link 
              to="/tools" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/tools' 
                  ? 'text-purple-600 bg-purple-50 dark:bg-purple-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-purple-600'
              }`}
            >
              Tools
            </Link>
            <Link 
              to="/quiz" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/quiz' 
                  ? 'text-orange-600 bg-orange-50 dark:bg-orange-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-orange-600'
              }`}
            >
              Quiz
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Progress indicator */}
            <div className="hidden sm:block">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Progress: {progress.percentage}%
              </div>
              <div className="w-20 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-primary-blue to-primary-green rounded-full transition-all duration-500"
                  style={{ width: `${progress.percentage}%` }}
                ></div>
              </div>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                isDark ? 'transform translate-x-6' : ''
              }`}></div>
            </button>

            {/* Profile link */}
            <Link to="/profile" className="text-gray-700 dark:text-gray-300 hover:text-primary-blue">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden text-gray-700 dark:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-gray-700">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            to="/" 
            className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Dashboard
          </Link>
          <Link 
            to="/computer-architecture" 
            className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-blue"
          >
            Computer Architecture
          </Link>
          <Link 
            to="/sql-dbms" 
            className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-green"
          >
            SQL/DBMS
          </Link>
          <Link 
            to="/software-engineering" 
            className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600"
          >
            Software Engineering
          </Link>
          <Link 
            to="/tools" 
            className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600"
          >
            Tools
          </Link>
          <Link 
            to="/quiz" 
            className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600"
          >
            Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <AppProviders>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
          <NavigationBar />
          <main>
            <Routes>
              {/* New TechFundamentals Hub routes */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/computer-architecture/*" element={<ComputerArchitecture />} />
              <Route path="/sql-dbms/*" element={<SqlDbms />} />
              <Route path="/software-engineering/*" element={<SoftwareEngineering />} />
              <Route path="/tools/*" element={<Tools />} />
              <Route path="/profile/*" element={<Profile />} />
              <Route path="/quiz/*" element={<QuizCenter />} />
              
              {/* Legacy routes for backward compatibility */}
              <Route path="/old-home" element={<Home />} />
              <Route path="/basics" element={<SqlBasics />} />
              <Route path="/mysql" element={<MySqlSection />} />
              <Route path="/mssql" element={<MsSqlSection />} />
              <Route path="/postgresql" element={<PostgreSqlSection />} />
              <Route path="/advanced" element={<AdvancedSql />} />
              
              {/* Redirect old paths to new structure */}
              <Route path="/old-home" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProviders>
  );
}

export default App;