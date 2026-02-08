import React, { useState } from 'react';
import { useProgress } from '../../contexts/ProgressContext';

const ArchitectureTypes = () => {
  const { markTopicComplete } = useProgress();
  const [completed, setCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState('comparison');

  const tabs = [
    { id: 'comparison', name: 'Architecture Comparison' },
    { id: 'von-neumann', name: 'Von Neumann' },
    { id: 'harvard', name: 'Harvard' },
    { id: 'bottleneck', name: 'The Bottleneck' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Architecture Types</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Deep dive into Von Neumann and Harvard Architectures
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
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {activeTab === 'comparison' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="p-4 font-bold border-b border-gray-200 dark:border-gray-700">Feature</th>
                    <th className="p-4 font-bold text-blue-600 border-b border-gray-200 dark:border-gray-700">Von Neumann</th>
                    <th className="p-4 font-bold text-green-600 border-b border-gray-200 dark:border-gray-700">Harvard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4 font-medium">Memory Structure</td>
                    <td className="p-4">Shared memory for instructions and data</td>
                    <td className="p-4">Physically separate memory for instructions and data</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Bus System</td>
                    <td className="p-4">Single bus for both fetching instructions and data</td>
                    <td className="p-4">Separate buses (Instruction Bus & Data Bus)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Execution Speed</td>
                    <td className="p-4">Slower (cannot fetch both at once)</td>
                    <td className="p-4">Faster (parallel access possible)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Complexity & Cost</td>
                    <td className="p-4">Simpler and Cheaper</td>
                    <td className="p-4">More Complex and Expensive</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Usage</td>
                    <td className="p-4">General purpose computers (PCs, Laptops)</td>
                    <td className="p-4">Microcontrollers, DSPs, Embedded Systems</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'von-neumann' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="module-card">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Von Neumann Model</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Proposed in 1945, this architecture is based on the <strong>stored-program computer</strong> concept, where instruction data and program data are stored in the same memory.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800">
                  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Key Components:</h4>
                  <ul className="text-sm space-y-2 text-blue-700 dark:text-blue-300">
                    <li>• Processing Unit (ALU and registers)</li>
                    <li>• Control Unit (Instruction register and program counter)</li>
                    <li>• Memory to store data and instructions</li>
                    <li>• External mass storage</li>
                    <li>• Input and Output mechanisms</li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center text-gray-500 italic">
                [Diagram: Unified Memory Bus]
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'harvard' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="module-card">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Harvard Architecture</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Named after the Harvard Mark I relay-based computer, this design uses <strong>separate storage and signal pathways</strong> for instructions and data.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-100 dark:border-green-800">
                  <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Advantages:</h4>
                  <ul className="text-sm space-y-2 text-green-700 dark:text-green-300">
                    <li>• Instruction pre-fetch and data access can happen simultaneously.</li>
                    <li>• Instruction memory can be read-only (for security/stability).</li>
                    <li>• Different bit widths for instructions and data.</li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center text-gray-500 italic">
                [Diagram: Separate Memory Paths]
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'bottleneck' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6">The Von Neumann Bottleneck</h2>
            <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-200 dark:border-red-900/30">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The <strong>Von Neumann Bottleneck</strong> is a limitation on throughput caused by the shared bus between the CPU and memory.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white">The Problem:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    The CPU is significantly faster than the memory. Because there is only one bus, the CPU spends most of its time waiting for data to arrive from or be sent to memory.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white">Modern Solutions:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                    <li>Caching (L1, L2, L3 caches)</li>
                    <li>Branch Prediction</li>
                    <li>Pipelining</li>
                    <li>Multi-channel memory</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-12 pb-12">
        <button
          onClick={() => {
            markTopicComplete('architecture-types');
            setCompleted(true);
          }}
          className={`px-10 py-4 rounded-xl font-bold text-white transition-all transform hover:scale-105 shadow-lg ${
            completed ? 'bg-green-500 cursor-default' : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-purple-500/25'
          }`}
        >
          {completed ? '✓ Module Completed' : 'Mark as Complete'}
        </button>
      </div>
    </div>
  );
};

export default ArchitectureTypes;