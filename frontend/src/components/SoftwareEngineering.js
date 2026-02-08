import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SoftwareEngineering = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'fundamentals', label: 'Fundamentals' },
    { id: 'design', label: 'Design & Architecture' },
    { id: 'process', label: 'Processes & Methodologies' },
    { id: 'quality', label: 'Quality Assurance' },
    { id: 'maintenance', label: 'Maintenance & Evolution' },
    { id: 'quiz', label: 'Take Quiz' }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-700/50">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">⚙️</span>
                Software Engineering Overview
              </h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-blue-200 leading-relaxed mb-6">
                  Software Engineering is the systematic application of engineering approaches to the development, 
                  operation, maintenance, and retirement of software. It encompasses the entire lifecycle of 
                  software development with a focus on quality, efficiency, and maintainability.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-600/30">
                    <div className="text-3xl mb-3">🎯</div>
                    <h3 className="text-lg font-bold text-cyan-300 mb-2">Goal</h3>
                    <p className="text-blue-200">Develop high-quality software that meets user requirements on time and within budget</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 p-6 rounded-xl border border-emerald-600/30">
                    <div className="text-3xl mb-3">🔧</div>
                    <h3 className="text-lg font-bold text-emerald-300 mb-2">Approach</h3>
                    <p className="text-green-200">Systematic, disciplined, quantifiable approach to software development</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 p-6 rounded-xl border border-purple-600/30">
                    <div className="text-3xl mb-3">📊</div>
                    <h3 className="text-lg font-bold text-purple-300 mb-2">Scope</h3>
                    <p className="text-violet-200">Analysis, design, implementation, testing, maintenance, and evolution</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 p-6 rounded-xl border border-yellow-600/30">
                  <h3 className="text-xl font-bold text-yellow-300 mb-3">Key Characteristics</h3>
                  <ul className="space-y-2 text-yellow-200">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      Application of scientific and mathematical principles to software development
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      Emphasis on systematic and disciplined approaches
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      Focus on cost-effective software development
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">•</span>
                      Attention to software quality and maintainability
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'fundamentals':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-700/50">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">📚</span>
                Software Engineering Fundamentals
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-6 rounded-xl border border-cyan-600/30">
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">Software Development Life Cycle (SDLC)</h3>
                  <p className="text-blue-200 mb-4">
                    The SDLC is a process that guides software development projects through various stages from 
                    planning to maintenance. Common models include Waterfall, Agile, Spiral, and Iterative models.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { emoji: '🔍', stage: 'Requirements', desc: 'Gather and analyze requirements' },
                      { emoji: '✏️', stage: 'Design', desc: 'Design system architecture' },
                      { emoji: '💻', stage: 'Implementation', desc: 'Write the code' },
                      { emoji: '🧪', stage: 'Testing', desc: 'Test for defects' },
                      { emoji: '🚀', stage: 'Deployment', desc: 'Release to users' },
                      { emoji: '🔄', stage: 'Maintenance', desc: 'Maintain and update' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <div className="text-2xl mb-2">{item.emoji}</div>
                        <h4 className="font-bold text-white mb-1">{item.stage}</h4>
                        <p className="text-sm text-gray-300">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-900/20 to-green-900/20 p-6 rounded-xl border border-emerald-600/30">
                  <h3 className="text-xl font-bold text-emerald-300 mb-3">Software Requirements</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-600 rounded-full p-2 mt-1">
                        <span className="text-white font-bold">F</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-200">Functional Requirements</h4>
                        <p className="text-green-200">Define what the system should do - specific behaviors and functions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-600 rounded-full p-2 mt-1">
                        <span className="text-white font-bold">NF</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-200">Non-Functional Requirements</h4>
                        <p className="text-green-200">Define how the system should perform - quality attributes like performance, security, usability</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-violet-900/20 p-6 rounded-xl border border-purple-600/30">
                  <h3 className="text-xl font-bold text-purple-300 mb-3">Software Quality Attributes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { attr: 'Reliability', desc: 'Ability to perform required functions under stated conditions' },
                      { attr: 'Maintainability', desc: 'Ease of modifying software to correct faults or improve performance' },
                      { attr: 'Usability', desc: 'Degree to which software is easy to learn and use' },
                      { attr: 'Security', desc: 'Protection against unauthorized access or malicious attacks' },
                      { attr: 'Performance', desc: 'How well software performs under specified conditions' },
                      { attr: 'Scalability', desc: 'Ability to handle growth in workload or functionality' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-purple-300 mb-2">{item.attr}</h4>
                        <p className="text-purple-200 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'design':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-700/50">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">🏗️</span>
                Software Design & Architecture
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-6 rounded-xl border border-cyan-600/30">
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">Design Principles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { principle: 'S - SRP', desc: 'Single Responsibility Principle', detail: 'A class should have only one reason to change' },
                      { principle: 'O - OCP', desc: 'Open/Closed Principle', detail: 'Software entities should be open for extension but closed for modification' },
                      { principle: 'L - LSP', desc: 'Liskov Substitution Principle', detail: 'Objects should be replaceable with their subtypes' },
                      { principle: 'I - ISP', desc: 'Interface Segregation Principle', detail: 'Clients should not be forced to depend on interfaces they don\'t use' },
                      { principle: 'D - DIP', desc: 'Dependency Inversion Principle', detail: 'Depend on abstractions, not concretions' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-cyan-300 mb-1">{item.principle}</h4>
                        <p className="text-blue-200 text-sm font-medium mb-1">{item.desc}</p>
                        <p className="text-blue-300 text-xs">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-900/20 to-green-900/20 p-6 rounded-xl border border-emerald-600/30">
                  <h3 className="text-xl font-bold text-emerald-300 mb-3">Architectural Patterns</h3>
                  <div className="space-y-4">
                    {[
                      { pattern: 'MVC (Model-View-Controller)', desc: 'Separates data (Model), presentation (View), and control logic (Controller)' },
                      { pattern: 'Layered Architecture', desc: 'Organizes software into horizontal layers with specific responsibilities' },
                      { pattern: 'Microservices', desc: 'Decomposes application into small, independent services' },
                      { pattern: 'Event-Driven', desc: 'Based on production, detection, and consumption of events' },
                      { pattern: 'Service-Oriented (SOA)', desc: 'Uses services to communicate across a network' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-emerald-300 mb-2">{item.pattern}</h4>
                        <p className="text-green-200">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-violet-900/20 p-6 rounded-xl border border-purple-600/30">
                  <h3 className="text-xl font-bold text-purple-300 mb-3">Design Patterns</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { category: 'Creational', patterns: ['Factory', 'Builder', 'Singleton'] },
                      { category: 'Structural', patterns: ['Adapter', 'Decorator', 'Facade'] },
                      { category: 'Behavioral', patterns: ['Observer', 'Strategy', 'Command'] },
                      { category: 'Architectural', patterns: ['MVC', 'MVVM', 'MVP'] }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-purple-300 mb-2">{item.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.patterns.map((pattern, idx) => (
                            <span key={idx} className="bg-purple-700/50 text-purple-200 px-2 py-1 rounded text-xs">
                              {pattern}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'process':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-700/50">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">🔄</span>
                Software Processes & Methodologies
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-6 rounded-xl border border-cyan-600/30">
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">Traditional Models</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                      <h4 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
                        <span>💧</span>
                        Waterfall Model
                      </h4>
                      <ul className="space-y-2 text-sm text-blue-200">
                        <li>• Linear sequential approach</li>
                        <li>• Each phase must complete before next begins</li>
                        <li>• Well-suited for stable requirements</li>
                        <li>• Difficult to accommodate changes</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                      <h4 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
                        <span>🌀</span>
                        Spiral Model
                      </h4>
                      <ul className="space-y-2 text-sm text-blue-200">
                        <li>• Risk-driven approach</li>
                        <li>• Combines iterative development with systematic aspects</li>
                        <li>• Includes prototyping and waterfall models</li>
                        <li>• Suitable for large, complex projects</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-900/20 to-green-900/20 p-6 rounded-xl border border-emerald-600/30">
                  <h3 className="text-xl font-bold text-emerald-300 mb-3">Agile Methodologies</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <h4 className="font-bold text-emerald-300 mb-2">Agile Manifesto Values</h4>
                      <ul className="space-y-2 text-sm text-green-200">
                        <li>• Individuals and interactions over processes and tools</li>
                        <li>• Working software over comprehensive documentation</li>
                        <li>• Customer collaboration over contract negotiation</li>
                        <li>• Responding to change over following a plan</li>
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { method: 'Scrum', desc: 'Framework with sprints, roles, and ceremonies' },
                        { method: 'XP', desc: 'Extreme Programming with pair programming, TDD' },
                        { method: 'Kanban', desc: 'Visual workflow management system' }
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                          <h4 className="font-bold text-emerald-300 mb-2">{item.method}</h4>
                          <p className="text-green-200 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-violet-900/20 p-6 rounded-xl border border-purple-600/30">
                  <h3 className="text-xl font-bold text-purple-300 mb-3">Process Improvement Models</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { model: 'CMMI', desc: 'Capability Maturity Model Integration', level: '5 maturity levels' },
                      { model: 'ISO/IEC 12207', desc: 'International standard for software lifecycle processes', level: 'Process reference model' },
                      { model: 'SPICE', desc: 'Software Process Improvement and Capability Determination', level: 'European standard' },
                      { model: 'Six Sigma', desc: 'Statistical approach to eliminate defects', level: 'Quality improvement methodology' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-purple-300 mb-1">{item.model}</h4>
                        <p className="text-violet-200 text-sm">{item.desc}</p>
                        <p className="text-violet-300 text-xs mt-1">{item.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'quality':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-700/50">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">✅</span>
                Software Quality Assurance
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-6 rounded-xl border border-cyan-600/30">
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">Testing Strategies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                      <h4 className="font-bold text-cyan-300 mb-3">Static Testing</h4>
                      <ul className="space-y-2 text-sm text-blue-200">
                        <li>• Reviews and inspections</li>
                        <li>• Analyzes code without execution</li>
                        <li>• Finds defects early in cycle</li>
                        <li>• Includes peer reviews, walkthroughs</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
                      <h4 className="font-bold text-cyan-300 mb-3">Dynamic Testing</h4>
                      <ul className="space-y-2 text-sm text-blue-200">
                        <li>• Executes code to observe behavior</li>
                        <li>• Includes unit, integration, system testing</li>
                        <li>• Validates functionality and performance</li>
                        <li>• Performed at various levels</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-900/20 to-green-900/20 p-6 rounded-xl border border-emerald-600/30">
                  <h3 className="text-xl font-bold text-emerald-300 mb-3">Testing Levels</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { level: 'Unit', desc: 'Individual components', emoji: '🧩' },
                      { level: 'Integration', desc: 'Component interactions', emoji: '🔗' },
                      { level: 'System', desc: 'Complete system', emoji: '⚙️' },
                      { level: 'Acceptance', desc: 'User requirements', emoji: '✅' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center">
                        <div className="text-2xl mb-2">{item.emoji}</div>
                        <h4 className="font-bold text-emerald-300 mb-1">{item.level}</h4>
                        <p className="text-green-200 text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-violet-900/20 p-6 rounded-xl border border-purple-600/30">
                  <h3 className="text-xl font-bold text-purple-300 mb-3">Quality Metrics</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { metric: 'Defect Density', desc: 'Number of defects per size of code' },
                        { metric: 'Code Coverage', desc: 'Percentage of code exercised by tests' },
                        { metric: 'Mean Time to Failure', desc: 'Average time between failures' },
                        { metric: 'Customer Satisfaction', desc: 'User satisfaction with software' }
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                          <h4 className="font-bold text-purple-300 mb-2">{item.metric}</h4>
                          <p className="text-violet-200 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 p-4 rounded-lg border border-yellow-600/30">
                      <h4 className="font-bold text-yellow-300 mb-2">ISO 9126 Quality Characteristics</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {['Functionality', 'Reliability', 'Usability', 'Efficiency', 'Maintainability', 'Portability'].map((char, index) => (
                          <span key={index} className="bg-yellow-700/50 text-yellow-200 px-2 py-1 rounded text-xs text-center">
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'maintenance':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-700/50">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">🔄</span>
                Software Maintenance & Evolution
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-6 rounded-xl border border-cyan-600/30">
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">Types of Maintenance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-cyan-300 mb-2 flex items-center gap-2">
                          <span>🔧</span>
                          Corrective
                        </h4>
                        <p className="text-blue-200 text-sm">Fixing errors and bugs discovered after delivery</p>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-cyan-300 mb-2 flex items-center gap-2">
                          <span>📈</span>
                          Perfective
                        </h4>
                        <p className="text-blue-200 text-sm">Improving performance, maintainability, or other attributes</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-cyan-300 mb-2 flex items-center gap-2">
                          <span>🔄</span>
                          Adaptive
                        </h4>
                        <p className="text-blue-200 text-sm">Modifying software to accommodate environmental changes</p>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-cyan-300 mb-2 flex items-center gap-2">
                          <span>🛡️</span>
                          Preventive
                        </h4>
                        <p className="text-blue-200 text-sm">Modifying software to prevent future problems</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-900/20 to-green-900/20 p-6 rounded-xl border border-emerald-600/30">
                  <h3 className="text-xl font-bold text-emerald-300 mb-3">Maintenance Activities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { activity: 'Bug Fixes', desc: 'Correcting defects' },
                      { activity: 'Updates', desc: 'Feature enhancements' },
                      { activity: 'Optimization', desc: 'Performance tuning' },
                      { activity: 'Documentation', desc: 'Updating documentation' },
                      { activity: 'Migration', desc: 'Moving to new platforms' },
                      { activity: 'Retirement', desc: 'Phasing out old systems' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-emerald-300 mb-2">{item.activity}</h4>
                        <p className="text-green-200 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-violet-900/20 p-6 rounded-xl border border-purple-600/30">
                  <h3 className="text-xl font-bold text-purple-300 mb-3">Software Evolution Techniques</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { technique: 'Reverse Engineering', desc: 'Analyzing existing software to identify components' },
                        { technique: 'Forward Engineering', desc: 'Creating software from high-level specifications' },
                        { technique: 'Reengineering', desc: 'Restructuring existing software to improve it' },
                        { technique: 'Refactoring', desc: 'Improving code structure without changing behavior' }
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                          <h4 className="font-bold text-purple-300 mb-2">{item.technique}</h4>
                          <p className="text-violet-200 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 p-4 rounded-lg border border-yellow-600/30">
                      <h4 className="font-bold text-yellow-300 mb-2">Challenges in Maintenance</h4>
                      <ul className="space-y-1 text-sm text-yellow-200">
                        <li>• Understanding legacy code</li>
                        <li>• Lack of documentation</li>
                        <li>• Limited personnel with domain knowledge</li>
                        <li>• Changing user requirements</li>
                        <li>• Technical debt accumulation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'quiz':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-700/50">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">📝</span>
                Software Engineering Quiz
              </h2>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Test Your Knowledge</h3>
                <p className="text-xl text-blue-200 mb-8">
                  Challenge yourself with our comprehensive 100-question quiz covering all aspects of Software Engineering
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-600/30">
                    <div className="text-3xl mb-3">⏰</div>
                    <h4 className="font-bold text-cyan-300 mb-2">Time Limit</h4>
                    <p className="text-blue-200">2 Hours</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 p-6 rounded-xl border border-emerald-600/30">
                    <div className="text-3xl mb-3">❓</div>
                    <h4 className="font-bold text-emerald-300 mb-2">Questions</h4>
                    <p className="text-green-200">100 Questions</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 p-6 rounded-xl border border-purple-600/30">
                    <div className="text-3xl mb-3">🏆</div>
                    <h4 className="font-bold text-purple-300 mb-2">Topics Covered</h4>
                    <p className="text-violet-200">All Major Areas</p>
                  </div>
                </div>
                
                <Link 
                  to="/quiz/software-engineering"
                  className="inline-block bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-12 py-4 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start 100-Question Quiz
                </Link>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 p-6 rounded-xl border border-yellow-600/30">
                <h3 className="text-xl font-bold text-yellow-300 mb-3">Quiz Topics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    'Software Fundamentals',
                    'Design & Architecture',
                    'Project Management',
                    'Quality Assurance',
                    'Testing Strategies',
                    'Maintenance & Evolution',
                    'Process Models',
                    'Best Practices'
                  ].map((topic, index) => (
                    <span key={index} className="bg-yellow-700/50 text-yellow-200 px-3 py-2 rounded-lg text-sm">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl shadow-2xl p-8 border border-gray-700">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Software Engineering</h1>
            <p className="text-xl text-gray-300">
              Comprehensive learning platform for software engineering principles, practices, and methodologies
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-1 rounded-xl">
            <Link 
              to="/quiz/software-engineering" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              Take 100-Question Quiz
            </Link>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SoftwareEngineering;