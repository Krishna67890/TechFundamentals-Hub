import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useProgress } from '../contexts/ProgressContext';

// Computer Architecture Modules
import NumberSystems from './ca-modules/NumberSystems';
import ComputerTypes from './ca-modules/ComputerTypes';
import ArchitectureTypes from './ca-modules/ArchitectureTypes';
import BinaryArithmetic from './ca-modules/BinaryArithmetic';
import SignedNumbers from './ca-modules/SignedNumbers';
import DigitalLogic from './ca-modules/DigitalLogic';

const ComputerArchitecture = () => {
  const location = useLocation();
  const { getOverallProgress } = useProgress();
  const progress = getOverallProgress();

  const modules = [
    {
      id: 'number-systems',
      title: 'Number Systems & Conversions',
      description: 'Learn binary, decimal, octal, and hexadecimal number systems with conversion techniques',
      duration: '45 min',
      difficulty: 'Beginner',
      path: 'number-systems',
      icon: '🔢',
      color: 'bg-blue-500'
    },
    {
      id: 'computer-types',
      title: 'Computer Types',
      description: 'Explore different types of computers from microcomputers to supercomputers',
      duration: '30 min',
      difficulty: 'Beginner',
      path: 'computer-types',
      icon: '🖥️',
      color: 'bg-green-500'
    },
    {
      id: 'architecture-types',
      title: 'Architecture Types',
      description: 'Understand Von Neumann vs Harvard architectures and their differences',
      duration: '40 min',
      difficulty: 'Intermediate',
      path: 'architecture-types',
      icon: '🏗️',
      color: 'bg-purple-500'
    },
    {
      id: 'binary-arithmetic',
      title: 'Binary Arithmetic',
      description: 'Master addition, subtraction, multiplication, and division in binary',
      duration: '50 min',
      difficulty: 'Intermediate',
      path: 'binary-arithmetic',
      icon: '➕',
      color: 'bg-orange-500'
    },
    {
      id: 'signed-numbers',
      title: 'Signed Binary Numbers',
      description: 'Learn signed magnitude, 1\'s complement, and 2\'s complement representations',
      duration: '45 min',
      difficulty: 'Advanced',
      path: 'signed-numbers',
      icon: '±',
      color: 'bg-red-500'
    },
    {
      id: 'digital-logic',
      title: 'Digital Logic & Number Systems',
      description: 'Master logic gates, Boolean algebra, and number system conversions',
      duration: '60 min',
      difficulty: 'Intermediate',
      path: 'digital-logic',
      icon: '🔌',
      color: 'bg-indigo-500'
    }
  ];

  const Sidebar = () => (
    <div className="w-full lg:w-64 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl shadow-2xl p-6 h-fit border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-6">Modules</h3>
      <nav className="space-y-2">
        {modules.map((module) => (
          <Link
            key={module.id}
            to={module.path}
            className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
              location.pathname.includes(module.path)
                ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                : 'text-gray-200 hover:bg-gray-700/50'
            }`}
          >
            <span className="text-xl mr-3">{module.icon}</span>
            <div className="flex-1">
              <div className="font-medium text-white">{module.title}</div>
              <div className="text-xs opacity-75 text-gray-300">{module.duration}</div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );

  const ModuleCard = ({ module }) => {
    const { getTopicProgress } = useProgress();
    const progressData = getTopicProgress(module.id);
    
    return (
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl shadow-2xl p-6 border border-gray-700 hover:shadow-2xl transition-all duration-300 hover:border-gray-600">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className={`${module.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl mr-4`}>
              {module.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{module.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <span>⏱️ {module.duration}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  module.difficulty === 'Beginner' ? 'bg-green-600 text-white' :
                  module.difficulty === 'Intermediate' ? 'bg-yellow-600 text-white' :
                  'bg-red-600 text-white'
                }`}>
                  {module.difficulty}
                </span>
              </div>
            </div>
          </div>
          {progressData.completed && (
            <div className="text-green-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        <p className="text-gray-200 mb-6">{module.description}</p>
        
        <div className="flex justify-between items-center">
          <Link 
            to={module.path}
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {progressData.completed ? 'Review' : 'Start Learning'}
          </Link>
          
          {progressData.score > 0 && (
            <div className="text-sm font-bold text-gray-200">
              Score: {progressData.score}%
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Routes>
        {/* Module routes */}
        <Route path="number-systems" element={<NumberSystems />} />
        <Route path="computer-types" element={<ComputerTypes />} />
        <Route path="architecture-types" element={<ArchitectureTypes />} />
        <Route path="binary-arithmetic" element={<BinaryArithmetic />} />
        <Route path="signed-numbers" element={<SignedNumbers />} />
        <Route path="digital-logic" element={<DigitalLogic />} />
        
        {/* Default route - Enhanced Module overview */}
        <Route path="/" element={
          <div className="space-y-8">
            {/* Enhanced Header with Computer Types Overview */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue via-indigo-500 to-purple-500"></div>
              <div className="relative bg-black/20 backdrop-blur-sm p-8 md:p-12 text-white">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <span className="text-3xl">🖥️</span>
                      </div>
                      <h1 className="text-4xl md:text-5xl font-bold">Computer Architecture</h1>
                    </div>
                    <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-3xl">
                      Master computer systems, architectures, and digital logic from fundamentals to advanced concepts
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                        <div className="text-sm opacity-75">Total Modules</div>
                        <div className="text-3xl font-bold">{modules.length}</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                        <div className="text-sm opacity-75">Your Progress</div>
                        <div className="text-3xl font-bold">{progress.percentage}%</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                        <div className="text-sm opacity-75">Total Time</div>
                        <div className="text-3xl font-bold">4h</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-3">
                        <div className="text-sm opacity-75">Concepts</div>
                        <div className="text-3xl font-bold">50+</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">⚡</div>
                      <div className="text-sm">High Performance</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold">🔒</div>
                      <div className="text-sm">Secure Systems</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Computer Types Overview */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl shadow-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🖥️</span>
                Computer Types & Classification
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Microcomputer */}
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-xl p-6 border border-blue-600/50">
                  <div className="text-4xl mb-3">💻</div>
                  <h3 className="text-xl font-bold text-blue-300 mb-2">Microcomputer</h3>
                  <div className="text-sm text-blue-200 space-y-1">
                    <div><strong>Size:</strong> Small, personal</div>
                    <div><strong>Users:</strong> One at a time</div>
                    <div><strong>Uses:</strong> Personal, office work</div>
                    <div><strong>Cost:</strong> Low</div>
                    <div className="mt-2 text-xs"><strong>Examples:</strong> PC, Laptop, Tablet, Smartphone</div>
                  </div>
                </div>
                
                {/* Minicomputer */}
                <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-xl p-6 border border-green-600/50">
                  <div className="text-4xl mb-3">🖥️</div>
                  <h3 className="text-xl font-bold text-green-300 mb-2">Minicomputer</h3>
                  <div className="text-sm text-green-200 space-y-1">
                    <div><strong>Size:</strong> Medium sized</div>
                    <div><strong>Users:</strong> Multiple users</div>
                    <div><strong>Uses:</strong> Small organizations, labs</div>
                    <div><strong>Cost:</strong> Medium</div>
                    <div className="mt-2 text-xs"><strong>Examples:</strong> Servers, Lab systems</div>
                  </div>
                </div>
                
                {/* Mainframe */}
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl p-6 border border-purple-600/50">
                  <div className="text-4xl mb-3">MainFrame</div>
                  <h3 className="text-xl font-bold text-purple-300 mb-2">Mainframe</h3>
                  <div className="text-sm text-purple-200 space-y-1">
                    <div><strong>Size:</strong> Very large, powerful</div>
                    <div><strong>Users:</strong> Hundreds/thousands</div>
                    <div><strong>Uses:</strong> Banks, airlines, large DB</div>
                    <div><strong>Cost:</strong> Very high</div>
                    <div className="mt-2 text-xs"><strong>Features:</strong> High reliability, security</div>
                  </div>
                </div>
                
                {/* Supercomputer */}
                <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 rounded-xl p-6 border border-orange-600/50">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="text-xl font-bold text-orange-300 mb-2">Supercomputer</h3>
                  <div className="text-sm text-orange-200 space-y-1">
                    <div><strong>Size:</strong> Most powerful</div>
                    <div><strong>Speed:</strong> Measured in FLOPS</div>
                    <div><strong>Uses:</strong> Scientific research</div>
                    <div><strong>Cost:</strong> Extremely high</div>
                    <div className="mt-2 text-xs"><strong>Examples:</strong> PARAM, Fugaku</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Comparison */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl shadow-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🏗️</span>
                Architecture Comparison: Von Neumann vs Harvard
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-700">
                      <th className="p-4 text-left font-bold text-white">Feature</th>
                      <th className="p-4 text-left font-bold text-blue-300">Von Neumann</th>
                      <th className="p-4 text-left font-bold text-green-300">Harvard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="p-4 font-medium text-white">Memory</td>
                      <td className="p-4 text-gray-200">Single (data + instructions)</td>
                      <td className="p-4 text-gray-200">Separate memories</td>
                    </tr>
                    <tr className="bg-gray-800/30">
                      <td className="p-4 font-medium text-white">Bus</td>
                      <td className="p-4 text-gray-200">Single bus</td>
                      <td className="p-4 text-gray-200">Separate buses</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">Speed</td>
                      <td className="p-4 text-gray-200">Slower</td>
                      <td className="p-4 text-gray-200">Faster</td>
                    </tr>
                    <tr className="bg-gray-800/30">
                      <td className="p-4 font-medium text-white">Cost</td>
                      <td className="p-4 text-gray-200">Lower</td>
                      <td className="p-4 text-gray-200">Higher</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">Complexity</td>
                      <td className="p-4 text-gray-200">Simple</td>
                      <td className="p-4 text-gray-200">Complex</td>
                    </tr>
                    <tr className="bg-gray-800/30">
                      <td className="p-4 font-medium text-white">Examples</td>
                      <td className="p-4 text-gray-200">PCs, General computers</td>
                      <td className="p-4 text-gray-200">Microcontrollers, DSP systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-900/30 to-amber-900/30 rounded-lg border border-yellow-700/50">
                <h3 className="font-bold text-yellow-300 mb-2">💡 Key Limitation of Von Neumann:</h3>
                <p className="text-yellow-200 text-sm">
                  Memory bottleneck - instructions and data cannot be accessed simultaneously, causing performance limitations in high-speed applications.
                </p>
              </div>
            </div>

            {/* Enhanced Modules Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Learning Modules</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                    <span>Beginner</span>
                    <span className="w-3 h-3 bg-yellow-600 rounded-full"></span>
                    <span>Intermediate</span>
                    <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                    <span>Advanced</span>
                  </div>
                </div>
                <div className="space-y-6">
                  {modules.map((module) => (
                    <ModuleCard key={module.id} module={module} />
                  ))}
                </div>
              </div>
              
              {/* Enhanced Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <Sidebar />
                
                {/* Quick Facts */}
                <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-700/50">
                  <h3 className="text-lg font-bold text-white mb-4">📋 Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-200">Microcomputers</span>
                      <span className="font-bold text-blue-400">Most Common</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-200">Mainframes</span>
                      <span className="font-bold text-purple-400">Enterprise Scale</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-200">Supercomputers</span>
                      <span className="font-bold text-orange-400">FLOPS Speed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-200">Harvard Arch</span>
                      <span className="font-bold text-green-400">Faster Execution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-700 to-blue-700 rounded-2xl p-8 text-white text-center shadow-2xl">
              <h2 className="text-2xl font-bold mb-3">Ready to Master Computer Architecture?</h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Start your journey from basic number systems to advanced computer architectures and digital logic
              </p>
              <Link to="number-systems" className="inline-block bg-gradient-to-r from-white to-gray-100 text-cyan-700 px-8 py-4 rounded-xl font-bold text-lg hover:from-gray-100 hover:to-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                🚀 Start Learning Now
              </Link>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
};

export default ComputerArchitecture;