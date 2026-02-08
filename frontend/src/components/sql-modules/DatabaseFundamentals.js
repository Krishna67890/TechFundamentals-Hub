import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';

const DatabaseFundamentals = () => {
  const { markTopicComplete } = useProgress();
  const [completed, setCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    { id: 'intro', name: 'Introduction' },
    { id: 'types', name: 'DBMS Types' },
    { id: 'architecture', name: 'Architecture' },
    { id: 'models', name: 'Data Models' },
    { id: 'oodbms', name: 'Object-Based' },
    { id: 'applications', name: 'Applications' }
  ];

  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Database Fundamentals & Architecture</h1>
        <p className="text-gray-300">
          Learn the basics of databases, their architecture, types, and logical models
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-medium rounded-t-lg transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-primary-blue text-white shadow-md'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Introduction Tab */}
      {activeTab === 'intro' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl shadow-2xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Database Management System (DBMS)</h2>
            <div class="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-6 rounded-xl border border-blue-700/50">
              <h3 class="text-lg font-bold text-white mb-3">📊 What is DBMS?</h3>
              <p class="text-gray-200 mb-4 leading-relaxed">
                <strong>DBMS stands for Database Management System.</strong> It is a collection of inter-related data and a set of programs to store & access those data in an easy and effective manner.
              </p>
              <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-blue-700/50">
                <p className="text-white italic">
                  "A logical structure of a database describes the design to reflect entities, attributes, relationships, and constraints."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-xl">✅</span> Key Features
                </h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex gap-2"><span>•</span> Persistent storage and reliability</li>
                  <li className="flex gap-2"><span>•</span> Data Integrity and consistency</li>
                  <li className="flex gap-2"><span>•</span> Concurrent access by multiple users</li>
                  <li className="flex gap-2"><span>•</span> Robust Security and Backup</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 p-5 rounded-xl border border-yellow-700/50">
                <h3 className="text-lg font-bold text-yellow-300 mb-2">⚠️ Challenges</h3>
                <p className="text-sm text-yellow-200">
                  High implementation costs, complexity in management, and specific resource/personnel requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Data Models Tab */}
      {activeTab === 'models' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl shadow-2xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Logical Data Models</h2>
            <div className="grid grid-cols-1 gap-6">
              
              <div className="p-6 border-l-4 border-indigo-500 bg-gradient-to-r from-gray-800 to-gray-900 rounded-r-xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-2">1. Relational Model</h3>
                <p className="text-gray-200">
                  Data and relationships are represented by a collection of inter-related tables. Columns represent attributes and rows represent records (tuples).
                </p>
              </div>

              <div className="p-6 border-l-4 border-green-500 bg-gradient-to-r from-gray-800 to-gray-900 rounded-r-xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-2">2. Hierarchical Model</h3>
                <p className="text-gray-200 mb-4">
                  Data is organized into a tree-like structure. Each record has one parent and potentially many children (One-to-Many).
                </p>
                <div className="text-sm bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-3 rounded border border-green-700/50">
                  <strong className="text-green-300">Note:</strong> <span className="text-green-200">Rarely used in modern systems but fundamental in early DB history.</span>
                </div>
              </div>

              <div className="p-6 border-l-4 border-orange-500 bg-gradient-to-r from-gray-800 to-gray-900 rounded-r-xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-2">3. Network Model</h3>
                <p className="text-gray-200 mb-2">
                  Similar to the hierarchical model but with a <strong>graph-like structure</strong> rather than a tree.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  <li>Allows a record to have more than one parent.</li>
                  <li>Complex to implement and maintain.</li>
                  <li>Used when other options are restricted.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Object-Based Tab */}
      {activeTab === 'oodbms' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl shadow-2xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Object-Based Logical Models</h2>
            <p className="text-gray-200 mb-6">
              These models describe data at the conceptual and view levels, treating every entity as an object.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30 rounded-xl border border-purple-700/50">
                <h3 className="font-bold text-purple-300 mb-3">Core Features</h3>
                <ul className="space-y-3 text-sm text-purple-200">
                  <li><strong>Inheritance:</strong> Creating new objects from existing ones.</li>
                  <li><strong>Encapsulation:</strong> Data hiding by binding data and functions.</li>
                  <li><strong>Persistency:</strong> Objects remain in memory even after execution.</li>
                  <li><strong>Complexity:</strong> Ability to represent multi-level internal structures.</li>
                </ul>
              </div>
              <div className="p-5 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-700/50">
                <h3 className="font-bold text-blue-300 mb-3">Implementation</h3>
                <p className="text-sm text-blue-200">
                  Information is represented as objects, just like in OOP languages. Combining relational features (transactions, recovery) with object orientation creates the Object-Oriented Database Model.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Existing tabs like types, architecture, applications can remain or be further styled */}
      {activeTab === 'types' && (
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl shadow-2xl border border-gray-700 animate-fadeIn">
          <h2 className="text-2xl font-bold text-white mb-6">Types of DBMS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-gray-700 rounded-lg bg-gradient-to-br from-blue-900/20 to-indigo-900/20">
              <h3 className="font-bold text-blue-400 mb-2">Relational (RDBMS)</h3>
              <p className="text-sm text-gray-300">Uses tables and SQL. (MySQL, Oracle, PostgreSQL)</p>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg bg-gradient-to-br from-green-900/20 to-emerald-900/20">
              <h3 className="font-bold text-green-400 mb-2">NoSQL</h3>
              <p className="text-sm text-gray-300">Non-relational, for unstructured data. (MongoDB, Redis)</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'architecture' && (
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl shadow-2xl border border-gray-700 animate-fadeIn">
          <h2 className="text-2xl font-bold text-white mb-6">Three-Level Architecture</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white">1. External Level (View Level)</h4>
              <p className="text-sm text-gray-300">Highest level, describes how users see the data.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white">2. Conceptual Level (Logical Level)</h4>
              <p className="text-sm text-gray-300">Middle level, describes what data is stored and relationships.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white">3. Internal Level (Physical Level)</h4>
              <p className="text-sm text-gray-300">Lowest level, describes how data is actually stored.</p>
            </div>
          </div>
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
              markTopicComplete('database-fundamentals');
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

export default DatabaseFundamentals;