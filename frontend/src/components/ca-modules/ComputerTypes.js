import React, { useState } from 'react';
import { useProgress } from '../../contexts/ProgressContext';
import { useQuiz } from '../../contexts/QuizContext';

const ComputerTypes = () => {
  const { markTopicComplete } = useProgress();
  const { startQuiz } = useQuiz();
  const [completed, setCompleted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const computerTypes = [
    {
      name: "Microcomputers",
      icon: "💻",
      description: "Small, relatively inexpensive computers designed for individual use. They are the most common type of computers today.",
      details: {
        users: "Single User",
        speed: "Moderate",
        cost: "Low",
        usage: "Personal, Office, Education"
      },
      characteristics: ["Microprocessor based", "Highly portable", "Versatile software support"],
      examples: ["Desktops", "Laptops", "Tablets", "Smartphones"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Minicomputers",
      icon: "🖥️",
      description: "Mid-sized computers that fall between microcomputers and mainframes in terms of power and size.",
      details: {
        users: "Multi-user (4-200)",
        speed: "High",
        cost: "Medium",
        usage: "Scientific labs, Small businesses"
      },
      characteristics: ["High processing speed", "Multiple OS support", "Multi-processing capability"],
      examples: ["AS/400", "VAX-11", "Scientific Workstations"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Mainframes",
      icon: "🏢",
      description: "Massive, powerful computers designed to handle huge amounts of data and thousands of users simultaneously.",
      details: {
        users: "Thousands",
        speed: "Very High (MIPS)",
        cost: "High",
        usage: "Banks, Airlines, Governments"
      },
      characteristics: ["Extremely reliable", "High-level security", "Large storage capacity"],
      examples: ["IBM zSeries", "Hitachi's Z800", "CDC 6600"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Supercomputers",
      icon: "🚀",
      description: "The most powerful, fastest, and most expensive computers in the world, built for specialized scientific tasks.",
      details: {
        users: "Specialized Research",
        speed: "Petaflops/Exaflops",
        cost: "Extremely High",
        usage: "Weather research, Nuclear science"
      },
      characteristics: ["Massively Parallel", "Water/Liquid cooled", "Custom architecture"],
      examples: ["PARAM (India)", "Summit (USA)", "Fugaku (Japan)"],
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Classification of Computers</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Computers are categorized based on their size, processing power, and intended application.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {computerTypes.map((type, index) => (
          <div 
            key={index}
            className={`relative overflow-hidden rounded-3xl bg-white dark:bg-card-dark shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-500 transform ${hoveredIndex === index ? 'scale-[1.02] -translate-y-2 shadow-2xl' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`h-2 w-full bg-gradient-to-r ${type.color}`}></div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center text-3xl text-white shadow-lg`}>
                    {type.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{type.name}</h2>
                </div>
                <span className="text-4xl font-black text-gray-100 dark:text-gray-800">0{index + 1}</span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {type.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(type.details).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                    <div className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">{key}</div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{value}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-primary-blue rounded-full"></span>
                    Key Characteristics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {type.characteristics.map((char, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full border border-blue-100 dark:border-blue-800">
                        {char}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-green-500 rounded-full"></span>
                    Notable Examples
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((ex, i) => (
                      <span key={i} className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-bold rounded-full border border-green-100 dark:border-green-800">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 pb-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-3xl shadow-xl border border-blue-100 dark:border-blue-800">
          <button
            onClick={() => {
              markTopicComplete('computer-types');
              setCompleted(true);
            }}
            className={`px-8 py-4 rounded-2xl font-bold text-lg text-white shadow-xl transition-all transform hover:scale-105 active:scale-95 ${
              completed ? 'bg-green-500 cursor-default' : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:shadow-blue-500/40'
            }`}
          >
            {completed ? '✓ Module Completed' : 'Mark as Complete'}
          </button>
          <button
            onClick={() => {
              const quizData = {
                title: "Computer Types Mastery Quiz",
                questions: [
                  {
                    id: 1,
                    question: "Which computer type is designed for individual use?",
                    options: ["Mainframe", "Microcomputer", "Supercomputer", "Minicomputer"],
                    correctAnswer: 1,
                    explanation: "Microcomputers are designed for individual use, like personal computers, laptops, tablets, and smartphones."
                  },
                  {
                    id: 2,
                    question: "Which computer type is known for handling thousands of users simultaneously?",
                    options: ["Minicomputer", "Microcomputer", "Mainframe", "Supercomputer"],
                    correctAnswer: 2,
                    explanation: "Mainframes are designed to handle thousands of users simultaneously and are used by large organizations like banks and airlines."
                  },
                  {
                    id: 3,
                    question: "What is the main characteristic of supercomputers?",
                    options: ["Cost-effective", "High processing speed", "Single-user focus", "Small size"],
                    correctAnswer: 1,
                    explanation: "Supercomputers are characterized by their extremely high processing speeds, measured in FLOPS."
                  },
                  {
                    id: 4,
                    question: "Which computer type falls between microcomputers and mainframes in terms of power?",
                    options: ["Supercomputer", "Workstation", "Minicomputer", "Embedded"],
                    correctAnswer: 2,
                    explanation: "Minicomputers are mid-sized computers that fall between microcomputers and mainframes in terms of power and size."
                  },
                  {
                    id: 5,
                    question: "What does FLOPS measure in supercomputers?",
                    options: ["Storage capacity", "Processing speed", "Memory size", "Power consumption"],
                    correctAnswer: 1,
                    explanation: "FLOPS (Floating Point Operations Per Second) measures the processing speed of supercomputers."
                  }
                ],
                onComplete: (result) => {
                  markTopicComplete('computer-types', result.score);
                }
              };
              startQuiz(quizData);
            }}
            className="px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-green hover:from-blue-600 hover:to-green-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            🚀 Start Module Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComputerTypes;