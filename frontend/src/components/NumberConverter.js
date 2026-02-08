import React, { useState, useEffect } from 'react';

const NumberConverter = () => {
  const [decimalInput, setDecimalInput] = useState('');
  const [binaryResult, setBinaryResult] = useState('');
  const [octalResult, setOctalResult] = useState('');
  const [hexResult, setHexResult] = useState('');

  useEffect(() => {
    if (decimalInput === '' || isNaN(decimalInput)) {
      setBinaryResult('');
      setOctalResult('');
      setHexResult('');
      return;
    }
    
    const num = parseInt(decimalInput, 10);
    setBinaryResult(num.toString(2));
    setOctalResult(num.toString(8));
    setHexResult(num.toString(16).toUpperCase());
  }, [decimalInput]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Number System Converter
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Convert between different number systems with real-time results
          </p>
        </div>

        {/* Number Systems Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-2xl border-4 border-blue-400 shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-2xl font-extrabold text-yellow-300 mb-2 drop-shadow-2xl filter brightness-150">Binary (Base 2)</div>
            <div className="text-yellow-200 font-bold text-lg">Uses only two digits: 0 and 1. This is the fundamental language of computers.</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-2xl border-4 border-green-400 shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-2xl font-extrabold text-yellow-300 mb-2 drop-shadow-2xl filter brightness-150">Decimal (Base 10)</div>
            <div className="text-yellow-200 font-bold text-lg">Uses ten digits: 0-9. This is the number system we use in daily life.</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-2xl border-4 border-purple-400 shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-2xl font-extrabold text-yellow-300 mb-2 drop-shadow-2xl filter brightness-150">Octal (Base 8)</div>
            <div className="text-yellow-200 font-bold text-lg">Uses eight digits: 0-7. Often used as a shorthand for binary.</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 p-6 rounded-2xl border-4 border-orange-400 shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-2xl font-extrabold text-yellow-300 mb-2 drop-shadow-2xl filter brightness-150">Hexadecimal (Base 16)</div>
            <div className="text-yellow-200 font-bold text-lg">Uses sixteen symbols: 0-9 and A-F. Commonly used in programming and memory addressing.</div>
          </div>
        </div>

        {/* Converter */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl p-8 mb-8 border-2 border-gray-300 dark:border-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Number Converter</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Decimal Input
              </label>
              <input
                type="number"
                value={decimalInput}
                onChange={(e) => setDecimalInput(e.target.value)}
                className="w-full px-4 py-3 text-lg border-2 border-blue-300 dark:border-blue-500 rounded-xl focus:ring-4 focus:ring-blue-400 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md transition-all duration-300"
                placeholder="Enter a decimal number"
              />
            </div>
            
            {/* Results Section */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-4 rounded-xl border-4 border-blue-400 shadow-xl">
                <div className="text-sm font-extrabold text-yellow-300 mb-1 filter brightness-150">Binary</div>
                <div className="text-3xl font-extrabold text-yellow-300 drop-shadow-2xl filter brightness-150">{binaryResult || '0'}</div>
              </div>
              
              <div className="bg-gradient-to-r from-green-700 to-green-900 p-4 rounded-xl border-4 border-green-400 shadow-xl">
                <div className="text-sm font-extrabold text-yellow-300 mb-1 filter brightness-150">Octal</div>
                <div className="text-3xl font-extrabold text-yellow-300 drop-shadow-2xl filter brightness-150">{octalResult || '0'}</div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-4 rounded-xl border-4 border-purple-400 shadow-xl">
                <div className="text-sm font-extrabold text-yellow-300 mb-1 filter brightness-150">Hexadecimal</div>
                <div className="text-3xl font-extrabold text-yellow-300 drop-shadow-2xl filter brightness-150">{hexResult || '0'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl p-8 border-2 border-gray-300 dark:border-gray-600">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Quick Reference</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center bg-gradient-to-br from-blue-700 to-blue-900 p-4 rounded-xl border-4 border-blue-400 shadow-lg">
              <div className="text-sm font-extrabold text-yellow-300 mb-2 filter brightness-150">Binary:</div>
              <div className="text-xl font-mono font-extrabold text-yellow-300 bg-black/30 px-4 py-2 rounded-lg inline-block filter brightness-150">0, 1</div>
            </div>
            
            <div className="text-center bg-gradient-to-br from-green-700 to-green-900 p-4 rounded-xl border-4 border-green-400 shadow-lg">
              <div className="text-sm font-extrabold text-yellow-300 mb-2 filter brightness-150">Octal:</div>
              <div className="text-xl font-mono font-extrabold text-yellow-300 bg-black/30 px-4 py-2 rounded-lg inline-block filter brightness-150">0-7</div>
            </div>
            
            <div className="text-center bg-gradient-to-br from-purple-700 to-purple-900 p-4 rounded-xl border-4 border-purple-400 shadow-lg">
              <div className="text-sm font-extrabold text-yellow-300 mb-2 filter brightness-150">Decimal:</div>
              <div className="text-xl font-mono font-extrabold text-yellow-300 bg-black/30 px-4 py-2 rounded-lg inline-block filter brightness-150">0-9</div>
            </div>
            
            <div className="text-center bg-gradient-to-br from-orange-700 to-orange-900 p-4 rounded-xl border-4 border-orange-400 shadow-lg">
              <div className="text-sm font-extrabold text-yellow-300 mb-2 filter brightness-150">Hexadecimal:</div>
              <div className="text-xl font-mono font-extrabold text-yellow-300 bg-black/30 px-4 py-2 rounded-lg inline-block filter brightness-150">0-9, A-F</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberConverter;