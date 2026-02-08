import React from 'react';
import { Link } from 'react-router-dom';

const Tools = () => {
  const tools = [
    {
      title: "SQL Editor",
      description: "Practice SQL queries with real-time syntax highlighting and execution",
      icon: "🔍",
      path: "/tools/sql-editor",
      color: "bg-blue-500"
    },
    {
      title: "Number Converter",
      description: "Convert between different number systems instantly",
      icon: "🔢",
      path: "/tools/number-converter",
      color: "bg-green-500"
    },
    {
      title: "ER Diagram Builder",
      description: "Create and visualize Entity-Relationship diagrams",
      icon: "🔄",
      path: "/tools/er-diagram",
      color: "bg-purple-500"
    },
    {
      title: "Schema Visualizer",
      description: "Visualize database schemas and relationships",
      icon: "📊",
      path: "/tools/schema-visualizer",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Interactive Tools</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Hands-on tools to practice and reinforce your learning
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tools.map((tool, index) => (
          <div key={index} className="module-card">
            <div className="flex items-start mb-4">
              <div className={`${tool.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl mr-4`}>
                {tool.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{tool.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
              </div>
            </div>
            <Link 
              to={tool.path}
              className="btn-primary px-4 py-2 text-sm"
            >
              Launch Tool
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;