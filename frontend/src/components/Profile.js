import React from 'react';
import { useProgress } from '../contexts/ProgressContext';

const Profile = () => {
  const { getOverallProgress } = useProgress();
  const progress = getOverallProgress();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Your Profile</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Track your learning progress and achievements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg p-6 text-center">
          <div className="text-4xl font-bold text-primary-blue mb-2">
            {progress.percentage}%
          </div>
          <div className="text-gray-600 dark:text-gray-300">Overall Progress</div>
        </div>
        
        <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg p-6 text-center">
          <div className="text-4xl font-bold text-primary-green mb-2">
            {progress.completed}
          </div>
          <div className="text-gray-600 dark:text-gray-300">Topics Completed</div>
        </div>
        
        <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg p-6 text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">
            {progress.streak}
          </div>
          <div className="text-gray-600 dark:text-gray-300">Day Streak</div>
        </div>
      </div>

      <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Progress Overview</h2>
        <div className="space-y-4">
          <div>
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
    </div>
  );
};

export default Profile;