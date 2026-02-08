import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';
import { useQuiz } from '../../contexts/QuizContext';

const KeysNormalization = () => {
  const { markTopicComplete } = useProgress();
  const { startQuiz } = useQuiz();
  const [activeTab, setActiveTab] = useState('keys');
  const [completed, setCompleted] = useState(false);

  const content = {
    keys: {
      title: "Types of Keys in Database",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Keys are fundamental concepts in relational database design. They help establish relationships 
            between tables and ensure data integrity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-3">Primary Key</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Uniquely identifies each record in a table. Cannot be NULL.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-2 font-mono text-sm">
                student_id (in Students table)
              </div>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-3">Foreign Key</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                References the primary key of another table to establish relationships.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-2 font-mono text-sm">
                department_id (references Departments table)
              </div>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-3">Candidate Key</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Attributes that can uniquely identify records. One becomes primary key.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-2 font-mono text-sm">
                email, student_id (both unique)
              </div>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-3">Composite Key</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Combination of two or more attributes that uniquely identify records.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-2 font-mono text-sm">
                student_id + course_id (in Enrollment table)
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    anomalies: {
      title: "Types of Anomalies",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Database anomalies are problems that can occur when tables are not properly normalized, 
            leading to data inconsistencies and inefficiencies.
          </p>
          
          <div className="bg-white dark:bg-card-dark rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Insertion Anomaly</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Unable to insert valid data due to missing related information.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="font-semibold text-gray-900 dark:text-white mb-2">Example:</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Can't add a new student because the department doesn't exist yet.
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-card-dark rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">Deletion Anomaly</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Loss of valid data when deleting a record due to over-dependency.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="font-semibold text-gray-900 dark:text-white mb-2">Example:</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Deleting the last student of a department loses all department information.
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-card-dark rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">Update Anomaly</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Inconsistency arises when updating data that exists in multiple places.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="font-semibold text-gray-900 dark:text-white mb-2">Example:</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Updating department name in one student record but not others causes inconsistency.
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    normalforms: {
      title: "Normal Forms Explained",
      content: (
        <div className="space-y-8">
          <div className="bg-white dark:bg-card-dark rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">First Normal Form (1NF)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ensures each table cell contains only atomic (indivisible) values. Eliminates repeating groups.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <div className="font-semibold text-gray-900 dark:text-white">Example Transformation:</div>
              <div className="font-mono text-sm mt-2 text-gray-700 dark:text-gray-300">
                Unnormalized: student_id | name | hobbies[cooking,reading,painting]
                <br />
                1NF: Separate each hobby into its own row or make them atomic columns
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-card-dark rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Second Normal Form (2NF)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Must be in 1NF. No partial dependency - remove fields that depend on part of a composite key.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <div className="font-semibold text-gray-900 dark:text-white">Example:</div>
              <div className="font-mono text-sm mt-2 text-gray-700 dark:text-gray-300">
                If (student_id, course_id) is the key, but course_name depends only on course_id,
                <br />
                move course_name to a separate Courses table.
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-card-dark rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">Third Normal Form (3NF)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Must be in 2NF. No transitive dependency - remove fields that depend on non-key fields.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
              <div className="font-semibold text-gray-900 dark:text-white">Example:</div>
              <div className="font-mono text-sm mt-2 text-gray-700 dark:text-gray-300">
                If student_id → department_id → department_name,
                <br />
                move department_name to Departments table to avoid transitive dependency.
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    example: {
      title: "Step-by-Step Normalization Example",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Normalizing a Student Database</h3>
          
          <div className="bg-white dark:bg-card-dark rounded-lg p-6 shadow-md">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Step 1: Unnormalized Table</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-700">
                    <th className="px-4 py-2 text-left">student_id</th>
                    <th className="px-4 py-2 text-left">name</th>
                    <th className="px-4 py-2 text-left">department</th>
                    <th className="px-4 py-2 text-left">courses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">1</td>
                    <td className="px-4 py-2 border">John Doe</td>
                    <td className="px-4 py-2 border">Computer Science</td>
                    <td className="px-4 py-2 border">CS101, CS102</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white dark:bg-card-dark rounded-lg p-6 shadow-md">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Step 2: Convert to 1NF</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-700">
                    <th className="px-4 py-2 text-left">student_id</th>
                    <th className="px-4 py-2 text-left">name</th>
                    <th className="px-4 py-2 text-left">department</th>
                    <th className="px-4 py-2 text-left">course</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">1</td>
                    <td className="px-4 py-2 border">John Doe</td>
                    <td className="px-4 py-2 border">Computer Science</td>
                    <td className="px-4 py-2 border">CS101</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">1</td>
                    <td className="px-4 py-2 border">John Doe</td>
                    <td className="px-4 py-2 border">Computer Science</td>
                    <td className="px-4 py-2 border">CS102</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white dark:bg-card-dark rounded-lg p-6 shadow-md">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Step 3: Convert to 2NF</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Separate department into its own table to eliminate partial dependency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Students Table</h5>
                <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                      <th className="px-4 py-2 text-left">student_id</th>
                      <th className="px-4 py-2 text-left">name</th>
                      <th className="px-4 py-2 text-left">dept_id</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border">1</td>
                      <td className="px-4 py-2 border">John Doe</td>
                      <td className="px-4 py-2 border">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Departments Table</h5>
                <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                      <th className="px-4 py-2 text-left">dept_id</th>
                      <th className="px-4 py-2 text-left">department</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border">1</td>
                      <td className="px-4 py-2 border">Computer Science</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  const quizData = {
    title: "Keys & Normalization Quiz",
    questions: [
      {
        id: 1,
        question: "What is a primary key?",
        options: [
          "A key that can be NULL",
          "A key that uniquely identifies each record",
          "A key that references another table",
          "A key that can have duplicate values"
        ],
        correctAnswer: 1,
        explanation: "A primary key uniquely identifies each record in a table and cannot be NULL."
      },
      {
        id: 2,
        question: "Which normal form eliminates partial dependencies?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correctAnswer: 1,
        explanation: "Second Normal Form (2NF) eliminates partial dependencies by removing fields that depend on only part of a composite key."
      },
      {
        id: 3,
        question: "What is a foreign key?",
        options: [
          "A key that uniquely identifies records in the same table",
          "A key that references the primary key of another table",
          "A key that can contain NULL values",
          "A key that is automatically generated"
        ],
        correctAnswer: 1,
        explanation: "A foreign key references the primary key of another table to establish relationships between tables."
      }
    ],
    onComplete: (score) => {
      markTopicComplete('keys-normalization', score);
      alert(`Quiz completed! Your score: ${score}%`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Keys & Normalization</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Master the fundamental concepts of database keys and normalization techniques
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700">
        {Object.keys(content).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium rounded-t-lg transition-colors duration-200 ${
              activeTab === tab
                ? 'text-primary-green border-b-2 border-primary-green bg-green-50 dark:bg-green-900/20'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {content[tab].title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg p-8 mb-8">
        {content[activeTab].content}
      </div>

      {/* Quiz Button */}
      <div className="text-center mt-12 pb-12 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/quiz/sql-dbms" 
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
          >
            <span>📝</span>
            Take 100-Question Quiz
          </Link>
          
          <button
            onClick={() => {
              markTopicComplete('keys-normalization');
              setCompleted(true);
            }}
            className={`px-8 py-4 rounded-xl font-bold text-white transition-all transform hover:scale-105 shadow-lg ${
              completed ? 'bg-gradient-to-r from-gray-600 to-gray-700 cursor-default' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-blue-500/25'
            }`}
          >
            {completed ? '✓ Module Completed' : 'Mark as Complete'}
          </button>
        </div>
        
        <div className="text-sm text-gray-400 mt-4">
          Test your knowledge with our comprehensive 100-question SQL & Database Systems mastery quiz
        </div>
      </div>
    </div>
  );
};

export default KeysNormalization;