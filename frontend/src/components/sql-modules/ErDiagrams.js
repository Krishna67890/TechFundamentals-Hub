import React, { useState } from 'react';
import { useProgress } from '../../contexts/ProgressContext';

const ErDiagrams = () => {
  const { markTopicComplete } = useProgress();
  const [completed, setCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    { id: 'intro', name: 'Introduction' },
    { id: 'components', name: 'ER Components' },
    { id: 'entities', name: 'Entities' },
    { id: 'attributes', name: 'Attributes' },
    { id: 'relationships', name: 'Relationships' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">ER Diagrams & Data Modeling</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Master Entity-Relationship diagrams and logical database design
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
                ? 'bg-primary-green text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {activeTab === 'intro' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What is an ER Diagram?</h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl mb-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                An <strong>Entity–relationship model (ER model)</strong> describes the structure of a database with the help of a diagram, known as an <strong>Entity Relationship Diagram (ER Diagram)</strong>. 
                It serves as a design or blueprint of a database that can later be implemented as a functional database.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Main Concepts:</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li><strong>Entity Set:</strong> A group of similar entities (e.g., all Students).</li>
                  <li><strong>Relationship Set:</strong> Associations among entity sets.</li>
                  <li><strong>Attributes:</strong> Properties that describe entities.</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-green-200 dark:border-green-800 shadow-sm">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Simple Example:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Student</strong> and <strong>College</strong> relationship: 
                  Many students can study in one college (Many-to-One).
                  Student has attributes: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">Stu_Id</code>, <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">Stu_Name</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'components' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">ER Diagram Geometric Shapes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { shape: 'Rectangle', meaning: 'Entity sets', icon: '▭' },
                { shape: 'Ellipses', meaning: 'Attributes', icon: '⬭' },
                { shape: 'Diamonds', meaning: 'Relationship Set', icon: '◇' },
                { shape: 'Lines', meaning: 'Links attributes to Entity Sets', icon: '―' },
                { shape: 'Double Ellipses', meaning: 'Multivalued Attributes', icon: '◎' },
                { shape: 'Dashed Ellipses', meaning: 'Derived Attributes', icon: '⬯' },
                { shape: 'Double Rectangles', meaning: 'Weak Entity Sets', icon: 'Rect;' },
                { shape: 'Double Lines', meaning: 'Total participation of an entity', icon: '═' },
              ].map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl mr-4 text-primary-green">{item.icon}</div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{item.shape}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{item.meaning}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'entities' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Entities in ER Model</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2">1. Entity</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  An object or component of data. Represented as a <strong>Rectangle</strong>.
                  Example: Student, College, Employee.
                </p>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-red-800 dark:text-red-200 mb-2">2. Weak Entity</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  An entity that cannot be uniquely identified by its own attributes and relies on the relationship with another entity. Represented by a <strong>Double Rectangle</strong>.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-red-200 dark:border-red-800 text-sm">
                  <strong>Example:</strong> A bank account cannot be uniquely identified without knowing the bank to which it belongs. Thus, Account is a weak entity.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'attributes' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Types of Attributes</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Attributes describe the properties of an entity, represented by Ovals.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 underline decoration-primary-green">Key Attribute</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Uniquely identifies an entity from an entity set. The text inside the oval is <strong>underlined</strong>.
                  <br/>Example: <span className="underline font-mono">Student_Roll_No</span>
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Composite Attribute</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  A combination of other attributes. 
                  <br/>Example: <strong>Address</strong> (composed of Pincode, State, Country).
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Multivalued Attribute</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Can hold multiple values. Represented by <strong>Double Ovals</strong>.
                  <br/>Example: <strong>Phone Number</strong> (a person can have many).
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Derived Attribute</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Value is dynamic and derived from another attribute. Represented by <strong>Dashed Ovals</strong>.
                  <br/>Example: <strong>Age</strong> (derived from Date of Birth).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'relationships' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Relationships in ER Model</h2>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                A relationship represents how entities are connected. Represented by a <strong>Diamond</strong>.
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800">
                <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Cardinality Ratios:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-orange-700 dark:text-orange-300">
                  <li className="flex items-center gap-2">🔹 1:1 (One to One)</li>
                  <li className="flex items-center gap-2">🔹 1:N (One to Many)</li>
                  <li className="flex items-center gap-2">🔹 M:1 (Many to One)</li>
                  <li className="flex items-center gap-2">🔹 M:N (Many to Many)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-12 pb-12">
        <button
          onClick={() => {
            markTopicComplete('er-diagrams');
            setCompleted(true);
          }}
          className={`px-10 py-4 rounded-xl font-bold text-white transition-all transform hover:scale-105 shadow-lg ${
            completed ? 'bg-green-500 cursor-default' : 'bg-gradient-to-r from-primary-green to-emerald-600 hover:shadow-green-500/25'
          }`}
        >
          {completed ? '✓ Module Completed' : 'Mark as Complete'}
        </button>
      </div>
    </div>
  );
};

export default ErDiagrams;