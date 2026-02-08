import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';
import { useQuiz } from '../../contexts/QuizContext';

const NumberSystems = () => {
  const { markTopicComplete } = useProgress();
  const { startQuiz } = useQuiz();
  const [activeTab, setActiveTab] = useState('overview');
  const [decimalInput, setDecimalInput] = useState('125');
  const [conversions, setConversions] = useState({ bin: '', oct: '', hex: '' });
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const dec = parseFloat(decimalInput);
    if (!isNaN(dec)) {
      setConversions({
        bin: (dec >>> 0).toString(2),
        oct: (dec >>> 0).toString(8),
        hex: (dec >>> 0).toString(16).toUpperCase()
      });
    }
  }, [decimalInput]);

  const content = {
    overview: {
      title: "Overview",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-6 rounded-2xl border border-blue-700/50">
              <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Module Objectives
              </h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">●</span>
                  <span>Understand decimal, binary, octal, and hexadecimal number systems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">●</span>
                  <span>Learn methods for converting a number from one system to another.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">●</span>
                  <span>Explain the various number systems and their bases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">●</span>
                  <span>Master conversion techniques for both integer and fractional parts.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 rounded-2xl border border-green-700/50">
              <h3 className="text-xl font-bold text-green-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🚀</span> Learning Outcomes
              </h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span>Ability to differentiate between positional number systems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span>Competence in converting complex numbers (integer + fraction).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span>Understanding of binary terminology (Nibble, Byte, Word).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span>Proficiency in using shorthand notations like Hex and Octal.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    intro: {
      title: "Introduction",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-6 rounded-xl border border-blue-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">What is a Number System?</h3>
            <p className="text-gray-200 mb-4 leading-relaxed">
              A <strong>number system</strong> is an ordered set of symbols known as <strong>digits</strong> with rules defined for performing arithmetic operations like addition, subtraction, multiplication, and division.
            </p>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg border border-blue-700/50 font-mono text-center overflow-x-auto text-white">
              N = (d<sub>n-1</sub> d<sub>n-2</sub> ... d<sub>1</sub> d<sub>0</sub> . d<sub>-1</sub> d<sub>-2</sub> ... d<sub>-m</sub>)<sub>b</sub>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div className="p-2 bg-blue-900/30 rounded border border-blue-700/50"><strong className="text-blue-300">b:</strong> <span className="text-gray-200">Base/Radix</span></div>
              <div className="p-2 bg-blue-900/30 rounded border border-blue-700/50"><strong className="text-blue-300">n:</strong> <span className="text-gray-200">Integer digits</span></div>
              <div className="p-2 bg-blue-900/30 rounded border border-blue-700/50"><strong className="text-blue-300">m:</strong> <span className="text-gray-200">Fractional digits</span></div>
              <div className="p-2 bg-blue-900/30 rounded border border-blue-700/50"><strong className="text-blue-300">.:</strong> <span className="text-gray-200">Radix point</span></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl shadow-lg p-6 border-l-4 border-blue-500 border-t border-gray-700">
              <h4 className="font-bold text-lg text-white mb-2">Decimal (Base 10)</h4>
              <p className="text-sm text-gray-300 mb-3">10 symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9</p>
              <div className="text-xs bg-gray-700 p-2 rounded text-gray-200">
                Example: (3648.26)₁₀ = 3x10³ + 6x10² + 4x10¹ + 8x10⁰ + 2x10⁻¹ + 6x10⁻²
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl shadow-lg p-6 border-l-4 border-green-500 border-t border-gray-700">
              <h4 className="font-bold text-lg text-white mb-2">Binary (Base 2)</h4>
              <p className="text-sm text-gray-300 mb-3">2 symbols: 0, 1. A binary digit is called a <strong>bit</strong>.</p>
              <div className="text-xs bg-gray-700 p-2 rounded text-gray-200">
                Separates integer and fraction parts by a binary point.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30 p-6 rounded-xl border border-purple-700/50">
            <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
              <span>📏</span> Binary Terminology
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
                <div className="text-purple-400 font-bold">Nibble</div>
                <div className="text-sm text-gray-400">4 binary bits</div>
                <code className="text-xs mt-1 block text-gray-200">1110</code>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
                <div className="text-purple-400 font-bold">Byte</div>
                <div className="text-sm text-gray-400">8 binary bits</div>
                <code className="text-xs mt-1 block text-gray-200">1001 0101</code>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
                <div className="text-purple-400 font-bold">Word</div>
                <div className="text-sm text-gray-400">16 bits (2 bytes)</div>
                <code className="text-xs mt-1 block text-gray-200">2 Bytes</code>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
                <div className="text-purple-400 font-bold">Double Word</div>
                <div className="text-sm text-gray-400">32 bits (2 words)</div>
                <code className="text-xs mt-1 block text-gray-200">4 Bytes</code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    systems: {
      title: "System Details",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                <span>8️⃣</span> Octal Number System
              </h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Base is <strong>8</strong></li>
                <li>8 symbols: 0, 1, 2, 3, 4, 5, 6, 7</li>
                <li>Positional weight system based on powers of 8</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                <span>🔠</span> Hexadecimal Number System
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                <strong>Alphanumeric system</strong> used to represent binary numbers concisely for human handling.
              </p>
              <ul className="list-disc list-inside text-gray-200 space-y-1 mb-4">
                <li>Base is <strong>16</strong></li>
                <li>Symbols: 0-9 and A-F (10-15)</li>
              </ul>
              <div className="bg-gradient-to-r from-pink-900/30 to-rose-900/30 p-3 rounded text-sm text-pink-200 italic border border-pink-700/50">
                Example: Binary 1111 0010 1100 0111 = Hex F2C7
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
            <div className="bg-gray-700 px-6 py-3 font-bold text-white">Equivalents Table (0-15)</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-center">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="p-2 border-b border-gray-600 text-white">Decimal</th>
                    <th className="p-2 border-b border-gray-600 text-white">Binary (4-bit)</th>
                    <th className="p-2 border-b border-gray-600 text-white">Hex</th>
                    <th className="p-2 border-b border-gray-600 text-white">Octal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(i => (
                    <tr key={i} className="hover:bg-gray-700/50">
                      <td className="p-2 text-white">{i}</td>
                      <td className="p-2 font-mono text-white">{i.toString(2).padStart(4, '0')}</td>
                      <td className="p-2 font-bold text-white">{i.toString(16).toUpperCase()}</td>
                      <td className="p-2 text-white">{i.toString(8)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    conversions: {
      title: "Conversion Methods",
      content: (
        <div className="space-y-8 animate-fadeIn">
          {/* Decimal to Any */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl shadow-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">🔄</span> Decimal to Other Systems
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-5 rounded-xl border border-blue-700/50">
                <h4 className="font-bold text-blue-300 mb-3">1. Integer Part</h4>
                <p className="text-sm mb-3 font-semibold text-blue-200">Method: Repetitive Division</p>
                <ol className="text-xs space-y-2 text-blue-200">
                  <li>• Divide the decimal number by the target base (2, 8, or 16).</li>
                  <li>• Note down the remainder.</li>
                  <li>• Continue until quotient is zero.</li>
                  <li>• List remainders in <strong>reverse order</strong> (Bottom to Top).</li>
                </ol>
              </div>
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-5 rounded-xl border border-green-700/50">
                <h4 className="font-bold text-green-300 mb-3">2. Fractional Part</h4>
                <p className="text-sm mb-3 font-semibold text-green-200">Method: Repetitive Multiplication</p>
                <ol className="text-xs space-y-2 text-green-200">
                  <li>• Multiply the fractional part by the target base.</li>
                  <li>• Record the integer part of the result.</li>
                  <li>• Multiply only the new fractional part by the base.</li>
                  <li>• Repeat until zero or recurring. Read integer parts <strong>top to bottom</strong>.</li>
                </ol>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-gray-600">
              <h4 className="font-bold text-white mb-2">Example: (125.625)₁₀ to Hex</h4>
              <div className="text-sm space-y-2 text-gray-200">
                <div>Integer (125): 125 ÷ 16 = 7 Rem (13/D). 7 ÷ 16 = 0 Rem 7. → <strong>7D₁₆</strong></div>
                <div>Fraction (0.625): 0.625 x 16 = 10.000 (A). → <strong>.A₁₆</strong></div>
                <div className="font-bold text-blue-400 mt-2">Final: (7D.A)₁₆</div>
              </div>
            </div>
          </div>

          {/* Any to Binary */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl shadow-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6">Binary Shortcuts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 border-l-4 border-purple-500 bg-gradient-to-r from-gray-800 to-gray-900 rounded-r-xl border border-gray-700">
                <h4 className="font-bold text-white mb-2">Octal ↔ Binary (3-bit)</h4>
                <p className="text-sm text-gray-300 mb-2">Each octal digit maps to 3 binary bits.</p>
                <code className="text-xs block bg-gray-700 p-2 rounded text-gray-200">
                  (574)₈ = 101 111 100₂
                </code>
              </div>
              <div className="p-5 border-l-4 border-orange-500 bg-gradient-to-r from-gray-800 to-gray-900 rounded-r-xl border border-gray-700">
                <h4 className="font-bold text-white mb-2">Hex ↔ Binary (4-bit)</h4>
                <p className="text-sm text-gray-300 mb-2">Each hex digit maps to 4 binary bits.</p>
                <code className="text-xs block bg-gray-700 p-2 rounded text-gray-200">
                  (F23)₁₆ = 1111 0010 0011₂
                </code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    practice: {
      title: "Interactive Lab",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl shadow-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Number System Converter</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Enter Decimal Integer
                </label>
                <input
                  type="number"
                  value={decimalInput}
                  onChange={(e) => setDecimalInput(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="e.g. 125"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-xl border border-blue-700/50">
                  <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-1">Binary</div>
                  <div className="text-lg font-mono font-bold text-blue-200 break-all">{conversions.bin}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-xl border border-green-700/50">
                  <div className="text-xs font-bold text-green-300 uppercase tracking-wider mb-1">Octal</div>
                  <div className="text-lg font-mono font-bold text-green-200">{conversions.oct}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-900/30 to-orange-800/30 rounded-xl border border-orange-700/50">
                  <div className="text-xs font-bold text-orange-300 uppercase tracking-wider mb-1">Hexadecimal</div>
                  <div className="text-lg font-mono font-bold text-orange-200">{conversions.hex}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 p-6 rounded-xl border border-yellow-700/50">
            <h3 className="font-bold text-yellow-300 mb-3">🧠 Challenge Problem</h3>
            <p className="text-sm text-yellow-200 mb-4">
              Convert (181.92)₁₀ into its binary equivalent up to 5 fractional places.
            </p>
            <details className="text-sm text-yellow-100">
              <summary className="cursor-pointer font-bold hover:underline">View Solution</summary>
              <div className="mt-2 p-3 bg-gray-800/50 rounded border border-gray-700">
                181₁₀ = 10110101₂ <br/>
                0.92 x 2 = 1.84 (1) <br/>
                0.84 x 2 = 1.68 (1) <br/>
                0.68 x 2 = 1.36 (1) <br/>
                0.36 x 2 = 0.72 (0) <br/>
                0.72 x 2 = 1.44 (1) <br/>
                Result: 10110101.11101₂
              </div>
            </details>
          </div>
        </div>
      )
    }
  };

  const quizData = {
    title: "Number Systems Mastery Quiz",
    questions: [
      {
        id: 1,
        question: "What is a group of 4 bits called?",
        options: ["Byte", "Nibble", "Word", "Double Word"],
        correctAnswer: 1,
        explanation: "A group of four bits is known as a nibble. Eight bits make a byte."
      },
      {
        id: 2,
        question: "In hexadecimal, what decimal value does the letter 'C' represent?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2,
        explanation: "A=10, B=11, C=12, D=13, E=14, F=15."
      },
      {
        id: 3,
        question: "When converting a decimal integer to binary, remainders are listed in which order?",
        options: ["Reverse order (Last to first)", "Normal order (First to last)", "Ascending order", "Random order"],
        correctAnswer: 0,
        explanation: "In repetitive division, the first remainder is the LSB and the last is the MSB, so they are read bottom-to-top (reverse order)."
      },
      {
        id: 4,
        question: "Convert octal 574₈ to binary using the grouping method.",
        options: ["101111100", "111101100", "101111111", "111111111"],
        correctAnswer: 0,
        explanation: "5=101, 7=111, 4=100. Combining them gives 101111100."
      },
      {
        id: 5,
        question: "How many bytes are in a 'Double Word'?",
        options: ["1", "2", "4", "8"],
        correctAnswer: 2,
        explanation: "A word is 2 bytes (16 bits), and a double word is exactly what it implies: two words, or 4 bytes (32 bits)."
      }
    ],
    onComplete: (score) => {
      markTopicComplete('number-systems', score);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-white mb-2">Module 2: Number Systems</h1>
        <p className="text-lg text-gray-300">
          Understanding decimal, binary, octal, and hexadecimal systems and their inter-conversions.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-700">
        {Object.keys(content).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 font-bold rounded-t-xl transition-all duration-300 ${
              activeTab === key
                ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg -translate-y-1'
                : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            {content[key].title}
          </button>
        ))}
      </div>

      <div className="mb-12">
        {content[activeTab].content}
      </div>

      <div className="text-center mt-12 pb-12 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/quiz/computer-architecture" 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
          >
            <span>📝</span>
            Take 100-Question Quiz
          </Link>
          
          <button
            onClick={() => {
              markTopicComplete('number-systems');
              setCompleted(true);
            }}
            className={`px-8 py-4 rounded-xl font-bold text-white transition-all transform hover:scale-105 shadow-lg ${
              completed ? 'bg-gradient-to-r from-gray-600 to-gray-700 cursor-default' : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-green-500/25'
            }`}
          >
            {completed ? '✓ Module Completed' : 'Mark as Complete'}
          </button>
        </div>
        
        <div className="text-sm text-gray-400 mt-4">
          Test your knowledge with our comprehensive 100-question Computer Architecture mastery quiz
        </div>
      </div>
    </div>
  );
};

export default NumberSystems;