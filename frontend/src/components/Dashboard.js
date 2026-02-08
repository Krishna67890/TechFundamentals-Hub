import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';
import { useTheme } from '../contexts/ThemeContext';

const Dashboard = () => {
  const { getOverallProgress, userProgress } = useProgress();
  const { isDark } = useTheme();
  const [stats, setStats] = useState({
    totalModules: 0,
    completedModules: 0,
    totalHours: 0,
    streak: 0
  });

  const progress = getOverallProgress();

  useEffect(() => {
    // Calculate dashboard stats
    const completedCount = userProgress.topicsCompleted.length;
    
    setStats({
      totalModules: 20, // Assuming 20 total modules
      completedModules: completedCount,
      totalHours: Math.floor(Math.random() * 50) + 10, // Simulated hours
      streak: userProgress.streak || 0
    });
  }, [userProgress]);

  const achievements = [
    { id: 1, title: 'First Steps', description: 'Complete your first module', earned: true, icon: '🎯' },
    { id: 2, title: 'Database Master', description: 'Complete all DBMS modules', earned: false, icon: '🗄️' },
    { id: 3, title: 'Architecture Expert', description: 'Complete all CA modules', earned: false, icon: '🏗️' },
    { id: 4, title: 'Quiz Champion', description: 'Score 90%+ on a quiz', earned: true, icon: '🏆' },
    { id: 5, title: 'Speed Learner', description: 'Complete 5 modules in a week', earned: false, icon: '⚡' },
    { id: 6, title: 'Perfectionist', description: 'Get 100% on all quizzes', earned: false, icon: '⭐' }
  ];

  const recentActivity = [
    { id: 1, action: 'Completed', module: 'Number Systems', time: '2 hours ago', score: '95%' },
    { id: 2, action: 'Started', module: 'Binary Arithmetic', time: '1 day ago', score: 'N/A' },
    { id: 3, action: 'Completed', module: 'Computer Types', time: '2 days ago', score: '88%' },
    { id: 4, action: 'Reviewed', module: 'Relational Model', time: '3 days ago', score: '92%' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary-blue to-primary-green rounded-2xl p-8 text-white mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-xl opacity-90 mb-6">
              Continue your journey in Computer Architecture and Database Systems
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                <div className="text-sm opacity-75">Overall Progress</div>
                <div className="text-3xl font-bold">{progress.percentage}%</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                <div className="text-sm opacity-75">Learning Streak</div>
                <div className="text-3xl font-bold">{stats.streak} days</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                <div className="text-sm opacity-75">Modules Completed</div>
                <div className="text-3xl font-bold">{stats.completedModules}/{stats.totalModules}</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <Link to="/computer-architecture" className="bg-white text-primary-blue px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              🖥️ Continue Learning
            </Link>
            <Link to="/quiz" className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors">
              🧠 Take a Quiz
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Stats and Quick Actions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stats.completedModules}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Modules Done</div>
            </div>
            <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">{stats.totalHours}h</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Learning Time</div>
            </div>
            <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">{Math.round(Object.values(userProgress.quizScores).reduce((sum, score) => sum + score, 0) / Math.max(Object.keys(userProgress.quizScores).length, 1))}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Score</div>
            </div>
            <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">{stats.streak}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Day Streak</div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.action === 'Completed' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                      activity.action === 'Started' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                      'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                    }`}>
                      {activity.action === 'Completed' ? '✅' : activity.action === 'Started' ? '🚀' : '🔄'}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {activity.action} {activity.module}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{activity.time}</div>
                    </div>
                  </div>
                  {activity.score !== 'N/A' && (
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      {activity.score}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Goals */}
          <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Goals</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div>
                  <div className="font-medium text-blue-900 dark:text-blue-200">Complete DBMS Fundamentals</div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">Next module in sequence</div>
                </div>
                <div className="w-16 bg-blue-200 dark:bg-blue-800 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div>
                  <div className="font-medium text-green-900 dark:text-green-200">Take Advanced Quiz</div>
                  <div className="text-sm text-green-700 dark:text-green-300">Test your knowledge</div>
                </div>
                <div className="w-16 bg-green-200 dark:bg-green-800 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div>
                  <div className="font-medium text-purple-900 dark:text-purple-200">Review Architecture</div>
                  <div className="text-sm text-purple-700 dark:text-purple-300">Strengthen fundamentals</div>
                </div>
                <div className="w-16 bg-purple-200 dark:bg-purple-800 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Achievements and Quick Links */}
        <div className="space-y-6">
          {/* Achievements */}
          <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id} 
                  className={`p-4 rounded-lg border ${
                    achievement.earned 
                      ? 'bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800' 
                      : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className={`font-medium ${
                        achievement.earned ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {achievement.title}
                      </div>
                      <div className={`text-sm ${
                        achievement.earned ? 'text-gray-600 dark:text-gray-400' : 'text-gray-400 dark:text-gray-500'
                      }`}>
                        {achievement.description}
                      </div>
                    </div>
                    {achievement.earned && (
                      <div className="text-yellow-500">✅</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/computer-architecture" className="block p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <div className="font-medium text-blue-800 dark:text-blue-200">Computer Architecture</div>
                <div className="text-sm text-blue-600 dark:text-blue-300">6 modules available</div>
              </Link>
              <Link to="/sql-dbms" className="block p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                <div className="font-medium text-green-800 dark:text-green-200">SQL/DBMS</div>
                <div className="text-sm text-green-600 dark:text-green-300">6 modules available</div>
              </Link>
              <Link to="/software-engineering" className="block p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                <div className="font-medium text-purple-800 dark:text-purple-200">Software Engineering</div>
                <div className="text-sm text-purple-600 dark:text-purple-300">Comprehensive course</div>
              </Link>
              <Link to="/tools" className="block p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                <div className="font-medium text-indigo-800 dark:text-indigo-200">Learning Tools</div>
                <div className="text-sm text-indigo-600 dark:text-indigo-300">Calculators & converters</div>
              </Link>
            </div>
          </div>

          {/* Learning Insights */}
          <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Learning Insights</h3>
            <div className="space-y-4">
              <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
                <div className="text-sm font-medium text-blue-800 dark:text-blue-200">Strongest Area</div>
                <div className="text-xs text-blue-600 dark:text-blue-300">Number Systems</div>
                <div className="text-lg font-bold text-blue-700 dark:text-blue-300">94%</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg">
                <div className="text-sm font-medium text-red-800 dark:text-red-200">Needs Attention</div>
                <div className="text-xs text-red-600 dark:text-red-300">Binary Arithmetic</div>
                <div className="text-lg font-bold text-red-700 dark:text-red-300">78%</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg">
                <div className="text-sm font-medium text-green-800 dark:text-green-200">Best Performance</div>
                <div className="text-xs text-green-600 dark:text-green-300">Relational Model</div>
                <div className="text-lg font-bold text-green-700 dark:text-green-300">96%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;