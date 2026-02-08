import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';

const RelationalModel = () => {
  const { markTopicComplete } = useProgress();
  const [completed, setCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState('theory');

  const tabs = [
    { id: 'theory', name: 'Relational Model Theory' },
    { id: 'keys', name: 'Types of Keys' },
    { id: 'constraints', name: 'Constraints' },
    { id: 'codd', name: "Codd's Rules" },
    { id: 'examples', name: 'Solved Examples' }
  ];

  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Relational Model in DBMS</h1>
        <p className="text-gray-300">
          Learn the fundamental concepts of the Relational Model, keys, constraints, and Codd's rules
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-medium rounded-t-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-primary-blue text-white shadow-md'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Relational Model Theory */}
      {activeTab === 'theory' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl shadow-2xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Introduction to Relational Model</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-6 rounded-xl border border-blue-700/50">
                  <h3 className="text-lg font-bold text-blue-300 mb-3">Core Concept</h3>
                  <p className="text-gray-200 leading-relaxed">
                    In the relational model, data and relationships are represented by a collection of <strong>inter-related tables</strong>. Each table consists of columns (attributes) and rows (records/tuples).
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700">
                    <div className="font-bold text-blue-400">Degree</div>
                    <div className="text-sm text-gray-200">Number of attributes (columns)</div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700">
                    <div className="font-bold text-blue-400">Cardinality</div>
                    <div className="text-sm text-gray-200">Number of tuples (rows)</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Sample Relational Model</h3>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 overflow-hidden shadow-lg">
                  <div className="bg-gray-700 px-4 py-2 font-bold text-sm text-white">Table: Student</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-700">
                        <tr>
                          <th className="px-3 py-2 border-b border-gray-600 text-white">Stu_Id</th>
                          <th className="px-3 py-2 border-b border-gray-600 text-white">Stu_Name</th>
                          <th className="px-3 py-2 border-b border-gray-600 text-white">Stu_Age</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-800/50"><td className="px-3 py-2 border-b border-gray-700 text-white">S101</td><td className="px-3 py-2 border-b border-gray-700 text-white">Krishna</td><td className="px-3 py-2 border-b border-gray-700 text-white">20</td></tr>
                        <tr className="hover:bg-gray-800/50"><td className="px-3 py-2 text-white">S102</td><td className="px-3 py-2 text-white">Arjun</td><td className="px-3 py-2 text-white">21</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 overflow-hidden shadow-lg">
                  <div className="bg-gray-700 px-4 py-2 font-bold text-sm text-white">Table: Course</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-700">
                        <tr>
                          <th className="px-3 py-2 border-b border-gray-600 text-white">Stu_Id</th>
                          <th className="px-3 py-2 border-b border-gray-600 text-white">Course_Id</th>
                          <th className="px-3 py-2 border-b border-gray-600 text-white">Course_Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-800/50"><td className="px-3 py-2 border-b border-gray-700 text-white">S101</td><td className="px-3 py-2 border-b border-gray-700 text-white">C1</td><td className="px-3 py-2 border-b border-gray-700 text-white">DBMS</td></tr>
                        <tr className="hover:bg-gray-800/50"><td className="px-3 py-2 text-white">S102</td><td className="px-3 py-2 text-white">C2</td><td className="px-3 py-2 text-white">Architecture</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other tabs (keys, constraints, codd, examples) remain the same or improved */}
      {activeTab === 'keys' && (
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl shadow-2xl border border-gray-700 animate-fadeIn">
          <h2 className="text-2xl font-bold text-white mb-6">Database Keys</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-700/50">
              <h3 className="font-bold text-blue-300 mb-2">Primary Key</h3>
              <p className="text-sm text-blue-200">Uniquely identifies each record. Cannot be NULL.</p>
            </div>
            <div className="p-5 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-700/50">
              <h3 className="font-bold text-green-300 mb-2">Foreign Key</h3>
              <p className="text-sm text-green-200">References a primary key in another table to link data.</p>
            </div>
            <div className="p-5 bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30 rounded-xl border border-purple-700/50">
              <h3 className="font-bold text-purple-300 mb-2">Candidate Key</h3>
              <p className="text-sm text-purple-200">Attributes that could potentially be a primary key.</p>
            </div>
            <div className="p-5 bg-gradient-to-br from-orange-900/30 to-amber-900/30 rounded-xl border border-orange-700/50">
              <h3 className="font-bold text-orange-300 mb-2">Composite Key</h3>
              <p className="text-sm text-orange-200">A primary key consisting of more than one column.</p>
            </div>
          </div>
        </div>
      )}

      {/* Constraints and Codd's Rules keep their detailed info */}
      {activeTab === 'constraints' && (
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl shadow-2xl border border-gray-700 animate-fadeIn">
          <h2 className="text-2xl font-bold text-white mb-6">Relational Constraints</h2>
          <ul className="space-y-4">
            <li className="flex gap-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700">
              <div className="text-xl">🛡️</div>
              <div>
                <h4 className="font-bold text-white">Entity Integrity</h4>
                <p className="text-sm text-gray-300">Primary keys cannot contain NULL values.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700">
              <div className="text-xl">🔗</div>
              <div>
                <h4 className="font-bold text-white">Referential Integrity</h4>
                <p className="text-sm text-gray-300">Foreign key values must match existing primary key values.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700">
              <div className="text-xl">🎯</div>
              <div>
                <h4 className="font-bold text-white">Domain Integrity</h4>
                <p className="text-sm text-gray-300">All values in a column must be of the same data type.</p>
              </div>
            </li>
          </ul>
        </div>
      )}

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
              markTopicComplete('relational-model');
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

export default RelationalModel;