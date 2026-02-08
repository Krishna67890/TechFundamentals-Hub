import React, { useState } from 'react';
import { useProgress } from '../../contexts/ProgressContext';

const BinaryArithmetic = () => {
  const { markTopicComplete } = useProgress();
  const [completed, setCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState('addition');

  const tabs = [
    { id: 'addition', name: 'Binary Addition' },
    { id: 'subtraction', name: 'Binary Subtraction' },
    { id: 'multiplication', name: 'Binary Multiplication' },
    { id: 'division', name: 'Binary Division' },
    { id: 'signed', name: 'Signed Binary Operations' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Binary Arithmetic Operations</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Master addition, subtraction, multiplication, and division in binary number system with signed number operations
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

      {/* Binary Addition */}
      {activeTab === 'addition' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Binary Addition</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Binary addition follows the same rules as decimal addition, but with only two digits (0 and 1).
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Basic Rules:</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono">
                  0 + 0 = 0<br/>
                  0 + 1 = 1<br/>
                  1 + 0 = 1<br/>
                  1 + 1 = 10 (0 with carry 1)<br/>
                  1 + 1 + 1 = 11 (1 with carry 1)
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Carry Rules:</h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• When sum = 2 (10₂), write 0 and carry 1</li>
                    <li>• When sum = 3 (11₂), write 1 and carry 1</li>
                    <li>• Carry propagates to the next higher bit position</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Solved Examples:</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Example 1: Simple Addition</h4>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono">
                    <div className="mb-2">  1011  (11 in decimal)</div>
                    <div className="mb-2">+ 0110  (6 in decimal)</div>
                    <div className="mb-2">------</div>
                    <div className="text-green-600 font-bold"> 10001  (17 in decimal)</div>
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      Step by step:<br/>
                      Rightmost column: 1 + 0 = 1<br/>
                      Next column: 1 + 1 = 10 (write 0, carry 1)<br/>
                      Next column: 0 + 1 + 1(carry) = 10 (write 0, carry 1)<br/>
                      Leftmost column: 1 + 0 + 1(carry) = 10 (write 0, carry 1)<br/>
                      Final carry: 1
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Example 2: With Multiple Carries</h4>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono">
                    <div className="mb-2">  1111  (15 in decimal)</div>
                    <div className="mb-2">+ 0001  (1 in decimal)</div>
                    <div className="mb-2">------</div>
                    <div className="text-blue-600 font-bold">10000  (16 in decimal)</div>
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      Chain carry: Each position produces a carry that propagates to the next position
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Binary Subtraction */}
      {activeTab === 'subtraction' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Binary Subtraction</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Binary subtraction can be performed using direct subtraction or borrowing method, similar to decimal subtraction.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Basic Rules:</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono">
                  0 - 0 = 0<br/>
                  1 - 0 = 1<br/>
                  1 - 1 = 0<br/>
                  0 - 1 = 1 (borrow 1 from next column)
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Borrowing Rules:</h3>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li>{'•'} When minuend {'<'} subtrahend, borrow 1 from left</li>
                    <li>{'•'} Borrowed 1 = 2 in current position</li>
                    <li>{'•'} Reduce the left digit by 1 after borrowing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Solved Examples:</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Example 1: Simple Subtraction</h4>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono">
                    <div className="mb-2">  1011  (11 in decimal)</div>
                    <div className="mb-2">- 0110  (6 in decimal)</div>
                    <div className="mb-2">------</div>
                    <div className="text-green-600 font-bold">  0101  (5 in decimal)</div>
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      Column by column:<br/>
                      Rightmost: 1 - 0 = 1<br/>
                      Next: 1 - 1 = 0<br/>
                      Next: 0 - 1 = ? (need to borrow)<br/>
                      Borrow 1 from leftmost position<br/>
                      Now: 10 - 1 = 1 (in borrowed position)<br/>
                      Leftmost: 0 - 0 = 0 (after borrowing)
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Example 2: With Borrowing</h4>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono">
                    <div className="mb-2">  1000  (8 in decimal)</div>
                    <div className="mb-2">- 0111  (7 in decimal)</div>
                    <div className="mb-2">------</div>
                    <div className="text-purple-600 font-bold">  0001  (1 in decimal)</div>
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      Multiple borrows required from leftmost position
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Binary Multiplication */}
      {activeTab === 'multiplication' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Binary Multiplication</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Binary multiplication is simpler than decimal multiplication since we only multiply by 0 or 1.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Basic Rules:</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono">
                  0 × 0 = 0<br/>
                  0 × 1 = 0<br/>
                  1 × 0 = 0<br/>
                  1 × 1 = 1
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Method:</h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Multiply each bit of multiplier with multiplicand</li>
                    <li>• Shift left for each position</li>
                    <li>• Add all partial products</li>
                    <li>• Same as decimal multiplication but simpler</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Solved Examples:</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Example 1: Basic Multiplication</h4>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono">
                    <div className="mb-2">    1011  (11 in decimal)</div>
                    <div className="mb-2">  × 0110  (6 in decimal)</div>
                    <div className="mb-2">  ------</div>
                    <div className="mb-2">    0000  (1011 × 0)</div>
                    <div className="mb-2">   1011   (1011 × 1, shifted left by 1)</div>
                    <div className="mb-2">  1011    (1011 × 1, shifted left by 2)</div>
                    <div className="mb-2"> 0000     (1011 × 0, shifted left by 3)</div>
                    <div className="mb-2">--------</div>
                    <div className="text-green-600 font-bold">1000010  (66 in decimal)</div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Example 2: Verification</h4>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Check: 11 × 6 = 66 ✓</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Binary: 1011 × 0110 = 1000010</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Binary Division */}
      {activeTab === 'division' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Binary Division</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Binary division follows the same long division method as decimal division, but simpler since we only deal with 0s and 1s.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Process:</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <ol className="text-gray-700 dark:text-gray-300 space-y-2 list-decimal list-inside">
                    <li>Compare divisor with dividend portion</li>
                    <li>If divisor {'≤'} dividend portion, quotient bit = 1</li>
                    <li>If divisor {'>'} dividend portion, quotient bit = 0</li>
                    <li>Subtract and bring down next bit</li>
                    <li>Repeat until all bits processed</li>
                  </ol>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Key Points:</h3>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Simpler than decimal division</li>
                    <li>• Only two possible quotient digits: 0 or 1</li>
                    <li>• Subtraction step is straightforward</li>
                    <li>• Process similar to long division</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Solved Examples:</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Example 1: Basic Division</h4>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                    <div className="mb-3">Divide 1100 (12) by 11 (3):</div>
                    <div className="mb-2">      100  (quotient = 4)</div>
                    <div className="mb-2">   -------</div>
                    <div className="mb-2">11 ) 1100</div>
                    <div className="mb-2">     11</div>
                    <div className="mb-2">     --</div>
                    <div className="mb-2">      00</div>
                    <div className="mb-2">      00</div>
                    <div className="mb-2">      --</div>
                    <div className="text-green-600 font-bold">      00  (remainder = 0)</div>
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      Check: 12 ÷ 3 = 4 remainder 0 ✓
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Example 2: With Remainder</h4>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                    <div className="mb-3">Divide 1011 (11) by 10 (2):</div>
                    <div className="mb-2">      101  (quotient = 5)</div>
                    <div className="mb-2">   -------</div>
                    <div className="mb-2">10 ) 1011</div>
                    <div className="mb-2">     10</div>
                    <div className="mb-2">     --</div>
                    <div className="mb-2">      01</div>
                    <div className="mb-2">      00</div>
                    <div className="mb-2">      --</div>
                    <div className="mb-2">       11</div>
                    <div className="mb-2">       10</div>
                    <div className="mb-2">       --</div>
                    <div className="text-blue-600 font-bold">        1  (remainder = 1)</div>
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      Check: 11 ÷ 2 = 5 remainder 1 ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Signed Binary Operations */}
      {activeTab === 'signed' && (
        <div className="space-y-8">
          <div className="module-card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Signed Binary Arithmetic Operations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Performing arithmetic operations on signed binary numbers using 2's complement representation.
            </p>
            
            <div className="space-y-8">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Principle:</h3>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">In 2's complement system:</p>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                    <li>Addition and subtraction use the same circuitry</li>
                    <li>To subtract, add the 2's complement of subtrahend</li>
                    <li>Overflow occurs when result is outside representable range</li>
                    <li>Carry out of MSB is discarded in subtraction</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Example 1: Addition of Signed Numbers</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">Add (+5) + (-3) using 8-bit 2's complement:</p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono">
                    <div className="mb-2">+5 = 00000101</div>
                    <div className="mb-2">-3 = 11111101 (2's complement of 3)</div>
                    <div className="mb-2">------------</div>
                    <div className="text-green-600 font-bold">    00000010  = +2</div>
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      Result: 00000010 = +2 ✓ (5 + (-3) = 2)
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Example 2: Subtraction using Addition</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">Calculate (+7) - (+3) = (+7) + (-3):</p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono">
                    <div className="mb-2">+7 = 00000111</div>
                    <div className="mb-2">-3 = 11111101 (2's complement)</div>
                    <div className="mb-2">------------</div>
                    <div className="text-blue-600 font-bold">    00000100  = +4</div>
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      Result: 00000100 = +4 ✓ (7 - 3 = 4)
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Example 3: Handling Overflow</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">Add (-120) + (-20) in 8-bit 2's complement:</p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono">
                    <div className="mb-2">-120 = 10001000</div>
                    <div className="mb-2">-20  = 11101100</div>
                    <div className="mb-2">-------------</div>
                    <div className="text-red-600 font-bold">    100101100  = -140?</div>
                    <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <p className="text-red-800 dark:text-red-200 font-semibold">⚠️ Overflow Detected!</p>
                      <p className="text-red-700 dark:text-red-300 text-sm">
                        8-bit 2's complement range: -128 to +127<br/>
                        -140 is outside this range<br/>
                        The extra carry bit indicates overflow
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-8">
        <button
          onClick={() => {
            markTopicComplete('binary-arithmetic');
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

export default BinaryArithmetic;