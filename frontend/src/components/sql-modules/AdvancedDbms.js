import React, { useState } from 'react';
import { useProgress } from '../../contexts/ProgressContext';

const AdvancedDbms = () => {
  const { markTopicComplete } = useProgress();
  const [completed, setCompleted] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Advanced DBMS Concepts</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explore transactions, concurrency, indexing, and database design patterns
        </p>
      </div>

      <div className="space-y-6">
        <div className="module-card">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">ACID Properties</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Atomicity: All operations succeed or all fail</li>
            <li>• Consistency: Database remains in valid state</li>
            <li>• Isolation: Concurrent transactions don't interfere</li>
            <li>• Durability: Committed changes are permanent</li>
          </ul>
        </div>

        <div className="module-card">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Indexing</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Indexes improve query performance by creating pointers to data locations. 
            Common types include B-tree, Hash, and Bitmap indexes.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => {
            markTopicComplete('advanced-dbms');
            setCompleted(true);
          }}
          className={`btn-secondary px-8 py-3 text-lg ${completed ? 'bg-green-500 hover:bg-green-600' : ''}`}
        >
          {completed ? '✓ Completed' : 'Mark as Complete'}
        </button>
      </div>
    </div>
  );
};

export default AdvancedDbms;