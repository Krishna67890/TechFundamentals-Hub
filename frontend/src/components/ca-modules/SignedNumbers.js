import React, { useState } from 'react';
import { useProgress } from '../../contexts/ProgressContext';

const SignedNumbers = () => {
  const { markTopicComplete } = useProgress();
  const [completed, setCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState('theory');

  const tabs = [
    { id: 'theory', name: 'Theory' },
    { id: 'examples', name: 'Solved Examples' },
    { id: 'practice', name: 'Practice Problems' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Signed Binary Numbers</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Learn different methods to represent signed numbers in binary: Sign Magnitude, 1's Complement, and 2's Complement
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
                ? 'bg-primary-blue text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Theory Section */}
      {activeTab === 'theory' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Introduction to Signed Binary Numbers</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In decimal number system, plus sign is used to denote positive numbers and minus sign to indicate negative numbers. 
              In binary systems, an additional bit, known as signed bit, is placed as the MSB (Most Significant Bit) in signed binary form.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-800 dark:text-blue-200 font-semibold">Key Concept:</p>
              <p className="text-blue-700 dark:text-blue-300">0 in MSB indicates positive number, 1 in MSB indicates negative number</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sign Magnitude */}
            <div className="module-card">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">SM</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sign Magnitude Representation</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A 0 in MSB indicates positive number and 1 in MSB indicates negative number. The remaining bits give its magnitude.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                <div className="mb-2"><span className="text-red-500 font-bold">0</span>0001000 = +8₁₀</div>
                <div className="mb-2"><span className="text-red-500 font-bold">1</span>0001000 = -8₁₀</div>
                <div className="mb-2"><span className="text-red-500 font-bold">0</span>0001100 = +12₁₀</div>
                <div><span className="text-red-500 font-bold">1</span>0001100 = -12₁₀</div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">Range: -(2ⁿ⁻¹-1) to +(2ⁿ⁻¹-1)</p>
              </div>
            </div>

            {/* 1's Complement */}
            <div className="module-card">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1C</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">1's Complement Representation</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The 1's complement is obtained by replacing all 0's with 1's and all 1's with 0's. 0 in MSB indicates positive, 1 indicates negative.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                <div className="mb-2">+8₁₀ = <span className="text-green-600">0</span>0001000</div>
                <div className="mb-2">-8₁₀ = <span className="text-red-500">1</span>1110111</div>
                <div className="mb-2">+15₁₀ = <span className="text-green-600">0</span>0001111</div>
                <div>-15₁₀ = <span className="text-red-500">1</span>1110000</div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">Range: -(2ⁿ⁻¹-1) to +(2ⁿ⁻¹-1)</p>
              </div>
            </div>

            {/* 2's Complement */}
            <div className="module-card">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2C</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">2's Complement Representation</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                2's complement = 1's complement + 1. This is the most commonly used representation in modern computers.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                <div className="mb-2">+8₁₀ = <span className="text-green-600">0</span>0001000</div>
                <div className="mb-2">-8₁₀ = <span className="text-red-500">1</span>1111000</div>
                <div className="mb-2">+15₁₀ = <span className="text-green-600">0</span>0001111</div>
                <div>-15₁₀ = <span className="text-red-500">1</span>1110001</div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">Range: -2ⁿ⁻¹ to +(2ⁿ⁻¹-1)</p>
              </div>
            </div>
          </div>

          <div className="module-card">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Differences</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Representation</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Zero Representation</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Range (8-bit)</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Sign Magnitude</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">+0: 00000000, -0: 10000000</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">-127 to +127</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Simple but inefficient</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">1's Complement</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">+0: 00000000, -0: 11111111</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">-127 to +127</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Has two zeros</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">2's Complement</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Only 00000000 (unique zero)</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">-128 to +127</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Most widely used</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Solved Examples Section */}
      {activeTab === 'examples' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Solved Examples</h2>
            
            <div className="space-y-8">
              {/* Example 1 */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Example 1: Sign Magnitude Representation</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Find the sign magnitude representation of (+27)₁₀ and (-27)₁₀ using 8 bits.</p>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-3">
                  <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Solution:</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">First, convert 27 to binary:</p>
                  <div className="font-mono text-sm bg-white dark:bg-gray-900 p-3 rounded mb-2">
                    27 ÷ 2 = 13 remainder 1 (LSB)<br/>
                    13 ÷ 2 = 6 remainder 1<br/>
                    6 ÷ 2 = 3 remainder 0<br/>
                    3 ÷ 2 = 1 remainder 1<br/>
                    1 ÷ 2 = 0 remainder 1 (MSB)<br/>
                    ∴ (27)₁₀ = (11011)₂
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">For 8-bit representation, pad with zeros: 00011011</p>
                  <div className="font-mono bg-white dark:bg-gray-900 p-3 rounded">
                    (+27)₁₀ = <span className="text-green-600">0</span>0011011<br/>
                    (-27)₁₀ = <span className="text-red-500">1</span>0011011
                  </div>
                </div>
              </div>

              {/* Example 2 */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Example 2: 1's and 2's Complement</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Represent (+15)₁₀ and (-15)₁₀ in 1's complement and 2's complement using 8 bits.</p>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-3">
                  <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Solution:</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">(15)₁₀ = (1111)₂ = 00001111 in 8-bit</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">1's Complement:</p>
                      <div className="font-mono text-sm bg-white dark:bg-gray-900 p-3 rounded">
                        +15 = <span className="text-green-600">0</span>0001111<br/>
                        -15 = <span className="text-red-500">1</span>1110000<br/>
                        (Invert all bits of +15)
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">2's Complement:</p>
                      <div className="font-mono text-sm bg-white dark:bg-gray-900 p-3 rounded">
                        +15 = <span className="text-green-600">0</span>0001111<br/>
                        -15 = <span className="text-red-500">1</span>1110001<br/>
                        (1's complement + 1)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 3 */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Example 3: Decimal from Binary (Sign Magnitude)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Find the decimal equivalent of the following binary numbers assuming sign magnitude representation:</p>
                <p className="font-mono text-gray-700 dark:text-gray-300 mb-3">(a) 101100 (b) 001000 (c) 0101 (d) 1101</p>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Solutions:</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">(a) 101100:</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">Sign bit is 1 → Negative number</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">Magnitude: 01100 = (12)₁₀</p>
                      <p className="font-mono text-sm ml-4">∴ (101100)₂ = (-12)₁₀</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">(b) 001000:</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">Sign bit is 0 → Positive number</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">Magnitude: 01000 = (8)₁₀</p>
                      <p className="font-mono text-sm ml-4">∴ (001000)₂ = (+8)₁₀</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">(c) 0101:</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">Sign bit is 0 → Positive number</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">Magnitude: 101 = (5)₁₀</p>
                      <p className="font-mono text-sm ml-4">∴ (0101)₂ = (+5)₁₀</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">(d) 1101:</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">Sign bit is 1 → Negative number</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">Magnitude: 101 = (5)₁₀</p>
                      <p className="font-mono text-sm ml-4">∴ (1101)₂ = (-5)₁₀</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Practice Problems Section */}
      {activeTab === 'practice' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Practice Problems</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Problem 1: Basic Conversions</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Convert the following decimal numbers to 8-bit signed binary representations:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-medium">Sign Magnitude:</p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                      <li>(+35)₁₀</li>
                      <li>(-35)₁₀</li>
                      <li>(+64)₁₀</li>
                      <li>(-64)₁₀</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">2's Complement:</p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                      <li>(+42)₁₀</li>
                      <li>(-42)₁₀</li>
                      <li>(+100)₁₀</li>
                      <li>(-100)₁₀</li>
                    </ul>
                  </div>
                </div>
                <details className="mt-4">
                  <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium">Click to see solutions</summary>
                  <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
                    <p><strong>Sign Magnitude Solutions:</strong></p>
                    <p>(+35)₁₀ = 00100011, (-35)₁₀ = 10100011</p>
                    <p>(+64)₁₀ = 01000000, (-64)₁₀ = 11000000</p>
                    <p className="mt-2"><strong>2's Complement Solutions:</strong></p>
                    <p>(+42)₁₀ = 00101010, (-42)₁₀ = 11010110</p>
                    <p>(+100)₁₀ = 01100100, (-100)₁₀ = 10011100</p>
                  </div>
                </details>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Problem 2: Decimal Conversion</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Find the decimal equivalents of these 8-bit binary numbers:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="font-medium">Sign Magnitude:</p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                      <li>10010110</li>
                      <li>01100101</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">1's Complement:</p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                      <li>11010011</li>
                      <li>00110110</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">2's Complement:</p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                      <li>11101001</li>
                      <li>01011001</li>
                    </ul>
                  </div>
                </div>
                <details className="mt-4">
                  <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium">Click to see solutions</summary>
                  <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
                    <p><strong>Sign Magnitude:</strong> -22, +101</p>
                    <p><strong>1's Complement:</strong> -44, +54</p>
                    <p><strong>2's Complement:</strong> -23, +89</p>
                  </div>
                </details>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Problem 3: Range Calculations</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Calculate the range of representable numbers for:</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                  <li>8-bit Sign Magnitude representation</li>
                  <li>8-bit 1's Complement representation</li>
                  <li>8-bit 2's Complement representation</li>
                  <li>16-bit 2's Complement representation</li>
                </ul>
                <details className="mt-4">
                  <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium">Click to see solutions</summary>
                  <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
                    <p>8-bit Sign Magnitude: -127 to +127</p>
                    <p>8-bit 1's Complement: -127 to +127</p>
                    <p>8-bit 2's Complement: -128 to +127</p>
                    <p>16-bit 2's Complement: -32,768 to +32,767</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-8">
        <button
          onClick={() => {
            markTopicComplete('signed-numbers');
            setCompleted(true);
          }}
          className={`btn-primary px-8 py-3 text-lg ${completed ? 'bg-green-500 hover:bg-green-600' : ''}`}
        >
          {completed ? '✓ Completed' : 'Mark as Complete'}
        </button>
      </div>
    </div>
  );
};

export default SignedNumbers;