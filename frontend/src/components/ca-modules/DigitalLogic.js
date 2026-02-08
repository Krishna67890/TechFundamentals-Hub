import React, { useState } from 'react';
import { useProgress } from '../../contexts/ProgressContext';

const DigitalLogic = () => {
  const { markTopicComplete } = useProgress();
  const [completed, setCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState('gates');

  const tabs = [
    { id: 'gates', name: 'Logic Gates' },
    { id: 'boolean', name: 'Boolean Algebra' },
    { id: 'number-systems', name: 'Number Systems Review' },
    { id: 'conversion', name: 'Number Conversion' },
    { id: 'examples', name: 'Solved Examples' },
    { id: 'practice', name: 'Practice Problems' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Digital Logic & Number Systems</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Master logic gates, Boolean algebra, and number system conversions with practical examples
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

      {/* Logic Gates Section */}
      {activeTab === 'gates' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Logic Gates Fundamentals</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Basic Gates</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">AND Gate</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">Output is HIGH only when ALL inputs are HIGH</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded font-mono text-sm">
                      A • B = Y<br/>
                      1 • 1 = 1<br/>
                      1 • 0 = 0<br/>
                      0 • 1 = 0<br/>
                      0 • 0 = 0
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">OR Gate</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">Output is HIGH when ANY input is HIGH</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded font-mono text-sm">
                      A + B = Y<br/>
                      1 + 1 = 1<br/>
                      1 + 0 = 1<br/>
                      0 + 1 = 1<br/>
                      0 + 0 = 0
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">NOT Gate</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">Inverts the input (Complement)</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded font-mono text-sm">
                      A̅ = Y<br/>
                      1̅ = 0<br/>
                      0̅ = 1
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Universal Gates</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">NAND Gate</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">NOT + AND (Universal Gate - can implement any logic)</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded font-mono text-sm">
                      (A • B)̅ = Y<br/>
                      1 ↑ 1 = 0<br/>
                      1 ↑ 0 = 1<br/>
                      0 ↑ 1 = 1<br/>
                      0 ↑ 0 = 1
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">NOR Gate</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">NOT + OR (Universal Gate - can implement any logic)</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded font-mono text-sm">
                      (A + B)̅ = Y<br/>
                      1 ↓ 1 = 0<br/>
                      1 ↓ 0 = 0<br/>
                      0 ↓ 1 = 0<br/>
                      0 ↓ 0 = 1
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Why Universal Gates?</h4>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                      <li>• Can implement any Boolean function</li>
                      <li>• Reduce circuit complexity</li>
                      <li>• More economical in IC manufacturing</li>
                      <li>• Standardized in digital design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Boolean Algebra Section */}
      {activeTab === 'boolean' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Boolean Algebra</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Basic Theorems</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Identity Laws</h4>
                    <div className="font-mono text-sm text-blue-700 dark:text-blue-300">
                      A + 0 = A<br/>
                      A • 1 = A<br/>
                      A + 1 = 1<br/>
                      A • 0 = 0
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Commutative Laws</h4>
                    <div className="font-mono text-sm text-green-700 dark:text-green-300">
                      A + B = B + A<br/>
                      A • B = B • A
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Associative Laws</h4>
                    <div className="font-mono text-sm text-purple-700 dark:text-purple-300">
                      (A + B) + C = A + (B + C)<br/>
                      (A • B) • C = A • (B • C)
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Advanced Theorems</h3>
                <div className="space-y-4">
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Distributive Laws</h4>
                    <div className="font-mono text-sm text-orange-700 dark:text-orange-300">
                      A • (B + C) = A • B + A • C<br/>
                      A + (B • C) = (A + B) • (A + C)
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">De Morgan's Theorems</h4>
                    <div className="font-mono text-sm text-red-700 dark:text-red-300">
                      (A + B)̅ = A̅ • B̅<br/>
                      (A • B)̅ = A̅ + B̅
                    </div>
                  </div>

                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">Complement Laws</h4>
                    <div className="font-mono text-sm text-indigo-700 dark:text-indigo-300">
                      A + A̅ = 1<br/>
                      A • A̅ = 0<br/>
                      A̅̅ = A
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Logic Circuit Representation</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Boolean algebra can express logic circuit operations mathematically:
                </p>
                <div className="font-mono text-sm bg-white dark:bg-gray-900 p-4 rounded">
                  F = (A + B) • C̅ + A • B̅<br/>
                  <span className="text-green-600">// This represents a logic circuit with OR, AND, and NOT gates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Number Systems Review */}
      {activeTab === 'number-systems' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Number Systems Classification</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Positional Number System</h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200 mb-3">
                    N = (dₙ₋₁ dₙ₋₂ ... d₁ d₀ . d₋₁ d₋₂ ... d₋ₘ)ᵦ
                  </p>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• N = Number</li>
                    <li>• b = Base of number system</li>
                    <li>• n = Number of digits in integer portion</li>
                    <li>• m = Number of digits in fractional portion</li>
                    <li>• dₙ₋₁ = Most significant digit</li>
                    <li>• d₋ₘ = Least significant digit</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Number System Types</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">10</div>
                    <div>
                      <h4 className="font-bold">Decimal (Base 10)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Digits: 0-9</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                    <div>
                      <h4 className="font-bold">Binary (Base 2)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Digits: 0,1</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">8</div>
                    <div>
                      <h4 className="font-bold">Octal (Base 8)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Digits: 0-7</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">16</div>
                    <div>
                      <h4 className="font-bold">Hexadecimal (Base 16)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Digits: 0-9, A-F</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Binary Number Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Nibble</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">4 binary bits</p>
                  <div className="font-mono text-xs mt-2 bg-white dark:bg-gray-900 p-2 rounded">1110 0000 1001 0101</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Byte</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">8 binary bits</p>
                  <div className="font-mono text-xs mt-2 bg-white dark:bg-gray-900 p-2 rounded">11110000 10101010</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Word</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">16 binary bits (2 bytes)</p>
                  <div className="font-mono text-xs mt-2 bg-white dark:bg-gray-900 p-2 rounded">1111000010101010 0000111111110000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Number Conversion Section */}
      {activeTab === 'conversion' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Number System Conversions</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Binary to Decimal Conversion</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Method: Multiply each bit by its positional weight and sum</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Example: Convert (11011101)₂ to Decimal</h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded font-mono text-sm">
                      1×2⁷ + 1×2⁶ + 0×2⁵ + 1×2⁴ + 1×2³ + 1×2² + 0×2¹ + 1×2⁰<br/>
                      = 128 + 64 + 0 + 16 + 8 + 4 + 0 + 1<br/>
                      = <span className="text-green-600 font-bold">221₁₀</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">General Formula:</h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded font-mono text-sm">
                      (B₄B₃B₂B₁B₀.B₋₁B₋₂B₋₃)₂<br/>
                      = B₄×2⁴ + B₃×2³ + B₂×2² + B₁×2¹ + B₀×2⁰ + B₋₁×2⁻¹ + B₋₂×2⁻² + B₋₃×2⁻³
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Decimal to Binary Conversion</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Method: Repeated division by 2 for integer part, repeated multiplication by 2 for fractional part</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Integer Part: Convert (83)₁₀</h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded font-mono text-sm">
                      83 ÷ 2 = 41 remainder <span className="text-green-600">1</span> (LSB)<br/>
                      41 ÷ 2 = 20 remainder <span className="text-green-600">1</span><br/>
                      20 ÷ 2 = 10 remainder <span className="text-green-600">0</span><br/>
                      10 ÷ 2 = 5 remainder <span className="text-green-600">0</span><br/>
                      5 ÷ 2 = 2 remainder <span className="text-green-600">1</span><br/>
                      2 ÷ 2 = 1 remainder <span className="text-green-600">0</span><br/>
                      1 ÷ 2 = 0 remainder <span className="text-green-600">1</span> (MSB)<br/>
                      ∴ (83)₁₀ = <span className="text-green-600 font-bold">(1010011)₂</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Fractional Part: Convert (0.125)₁₀</h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded font-mono text-sm">
                      0.125 × 2 = 0.250 → <span className="text-green-600">0</span> (MSB)<br/>
                      0.250 × 2 = 0.500 → <span className="text-green-600">0</span><br/>
                      0.500 × 2 = 1.000 → <span className="text-green-600">1</span> (LSB)<br/>
                      ∴ (0.125)₁₀ = <span className="text-green-600 font-bold">(0.001)₂</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Octal/Hexadecimal Conversions</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Octal to Binary</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">Convert each octal digit to 3-bit binary</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded font-mono text-sm">
                      (746.421)₈<br/>
                      7=111, 4=100, 6=110<br/>
                      4=100, 2=010, 1=001<br/>
                      = <span className="text-purple-600 font-bold">(111100110.100010001)₂</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Hexadecimal to Binary</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">Convert each hex digit to 4-bit binary</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded font-mono text-sm">
                      (A23.F1)₁₆<br/>
                      A=1010, 2=0010, 3=0011<br/>
                      F=1111, 1=0001<br/>
                      = <span className="text-purple-600 font-bold">(101000100011.11110001)₂</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Solved Examples */}
      {activeTab === 'examples' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Solved Examples</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Example 1: Logic Gate Implementation</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Implement F = (A + B) • C̅ using only NAND gates</p>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="space-y-3">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">Solution Steps:</p>
                    <div className="font-mono text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 p-3 rounded">
                      {/* eslint-disable-next-line */}
                      Step 1: F = (A + B) • C̅<br/>
                      {/* eslint-disable-next-line */}
                      Step 2: A + B = (A ↑ B)̅ (Using NAND for OR)<br/>
                      {/* eslint-disable-next-line */}
                      Step 3: C̅ = C ↑ C (Using NAND for NOT)<br/>
                      {/* eslint-disable-next-line */}
                      Step 4: F = ((A ↑ B)̅) ↑ (C ↑ C)̅<br/>
                      Final: F = (((A ↑ B) ↑ (A ↑ B)) ↑ ((C ↑ C) ↑ (C ↑ C)))
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Example 2: Boolean Algebra Simplification</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Simplify F = A•B + A•B̅ + A̅•B using Boolean theorems</p>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="space-y-3">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">Step-by-step Solution:</p>
                    <div className="font-mono text-sm bg-white dark:bg-gray-900 p-3 rounded">
                      F = A•B + A•B̅ + A̅•B<br/>
                      = A•(B + B̅) + A̅•B <span className="text-green-600">// Distributive Law</span><br/>
                      = A•(1) + A̅•B <span className="text-green-600">// Complement Law (B + B̅ = 1)</span><br/>
                      = A + A̅•B <span className="text-green-600">// Identity Law (A•1 = A)</span><br/>
                      = (A + A̅)•(A + B) <span className="text-green-600">// Distributive Law</span><br/>
                      = (1)•(A + B) <span className="text-green-600">// Complement Law (A + A̅ = 1)</span><br/>
                      = <span className="text-green-600 font-bold">A + B</span> <span className="text-green-600">// Identity Law</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Example 3: Number Conversion</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Convert (79.515)₁₀ to Binary</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Integer Part: (79)₁₀</h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded font-mono text-sm">
                      79 ÷ 2 = 39 remainder <span className="text-purple-600">1</span> (LSB)<br/>
                      39 ÷ 2 = 19 remainder <span className="text-purple-600">1</span><br/>
                      19 ÷ 2 = 9 remainder <span className="text-purple-600">1</span><br/>
                      9 ÷ 2 = 4 remainder <span className="text-purple-600">1</span><br/>
                      4 ÷ 2 = 2 remainder <span className="text-purple-600">0</span><br/>
                      2 ÷ 2 = 1 remainder <span className="text-purple-600">0</span><br/>
                      1 ÷ 2 = 0 remainder <span className="text-purple-600">1</span> (MSB)<br/>
                      ∴ (79)₁₀ = <span className="text-purple-600 font-bold">(1001111)₂</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Fractional Part: (0.515)₁₀</h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded font-mono text-sm">
                      0.515 × 2 = 1.030 → <span className="text-purple-600">1</span> (MSB)<br/>
                      0.030 × 2 = 0.060 → <span className="text-purple-600">0</span><br/>
                      0.060 × 2 = 0.120 → <span className="text-purple-600">0</span><br/>
                      0.120 × 2 = 0.240 → <span className="text-purple-600">0</span><br/>
                      0.240 × 2 = 0.480 → <span className="text-purple-600">0</span><br/>
                      0.480 × 2 = 0.960 → <span className="text-purple-600">0</span><br/>
                      0.960 × 2 = 1.920 → <span className="text-purple-600">1</span> (LSB)<br/>
                      ∴ (0.515)₁₀ ≈ <span className="text-purple-600 font-bold">(0.1000001)₂</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Final: (79.515)₁₀ = (1001111.1000001)₂</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Practice Problems */}
      {activeTab === 'practice' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Practice Problems</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Problem 1: Logic Gates</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Implement the function F = A̅ • B + A • B̅ using only NOR gates</p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium">Click to see solution</summary>
                  <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
                    <p className="font-bold mb-2">Solution:</p>
                    <p className="font-mono">F = A̅ • B + A • B̅</p>
                    <p className="font-mono">= (A ↓ A) • B + A • (B ↓ B)  // NOR for NOT</p>
                    <p className="font-mono">= ((A ↓ A) ↓ B) ↓ (A ↓ (B ↓ B))  // NOR implementation</p>
                  </div>
                </details>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Problem 2: Boolean Simplification</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">Simplify using Boolean algebra: F = (A + B) • (A + B̅) • (A̅ + B)</p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium">Click to see solution</summary>
                  <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
                    <p className="font-bold mb-2">Solution:</p>
                    <p className="font-mono">F = (A + B) • (A + B̅) • (A̅ + B)</p>
                    <p className="font-mono">= (A + B • B̅) • (A̅ + B)  // Distributive Law</p>
                    <p className="font-mono">= (A + 0) • (A̅ + B)  // Complement Law</p>
                    <p className="font-mono">= A • (A̅ + B)  // Identity Law</p>
                    <p className="font-mono">= A • A̅ + A • B  // Distributive Law</p>
                    <p className="font-mono">= 0 + A • B  // Complement Law</p>
                    <p className="font-mono">= <span className="text-green-600">A • B</span>  // Identity Law</p>
                  </div>
                </details>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Problem 3: Number Conversions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="font-medium">Convert to Decimal:</p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                      <li>(1101011)₂</li>
                      <li>(765)₈</li>
                      <li>(A3F)₁₆</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Convert to Binary:</p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                      <li>(187)₁₀</li>
                      <li>(0.625)₁₀</li>
                      <li>(247.375)₁₀</li>
                    </ul>
                  </div>
                </div>
                <details className="mt-4">
                  <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium">Click to see solutions</summary>
                  <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
                    <p className="font-bold mb-2">Decimal Conversions:</p>
                    <p>(1101011)₂ = 107₁₀</p>
                    <p>(765)₈ = 501₁₀</p>
                    <p>(A3F)₁₆ = 2623₁₀</p>
                    <p className="font-bold mt-2 mb-2">Binary Conversions:</p>
                    <p>(187)₁₀ = (10111011)₂</p>
                    <p>(0.625)₁₀ = (0.101)₂</p>
                    <p>(247.375)₁₀ = (11110111.011)₂</p>
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
            markTopicComplete('digital-logic');
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

export default DigitalLogic;