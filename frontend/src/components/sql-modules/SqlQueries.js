import React, { useState } from 'react';
import { useProgress } from '../../contexts/ProgressContext';

const SqlQueries = () => {
  const { markTopicComplete } = useProgress();
  const [completed, setCompleted] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">SQL Queries & Joins</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Master SQL queries, JOIN operations, and complex database operations
        </p>
      </div>

      <div className="space-y-6">
        <div className="module-card">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Basic SQL Queries</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
            SELECT * FROM students WHERE age {'>'} 18;
          </div>
        </div>

        <div className="module-card">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">JOIN Operations</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
            SELECT s.name, c.course_name 
            <br />
            FROM students s
            <br />
            JOIN enrollments e ON s.student_id = e.student_id
            <br />
            JOIN courses c ON e.course_id = c.course_id;
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => {
            markTopicComplete('sql-queries');
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

export default SqlQueries;