export const softwareEngineeringQuiz = {
  title: "Software Engineering Mastery Quiz",
  topicId: "software-engineering-mastery",
  timeLimit: 7200, // 2 hours in seconds
  questions: [
    // Software Engineering Fundamentals (20 questions)
    {
      id: 1,
      question: "What is the primary goal of Software Engineering?",
      options: ["To write code as quickly as possible", "To develop software systematically with quality, on time, and within budget", "To create the most complex software possible", "To minimize the use of programming languages"],
      correctAnswer: 1,
      explanation: "Software Engineering aims to develop software systematically, ensuring quality, timely delivery, and staying within budget constraints."
    },
    {
      id: 2,
      question: "Which of the following is NOT a phase of the Software Development Life Cycle (SDLC)?",
      options: ["Requirements Analysis", "Design", "Testing", "Hardware Installation"],
      correctAnswer: 3,
      explanation: "Hardware Installation is not part of SDLC. The typical phases are Requirements Analysis, Design, Implementation, Testing, Deployment, and Maintenance."
    },
    {
      id: 3,
      question: "What does the term 'Agile' refer to in Software Engineering?",
      options: ["A specific programming language", "A methodology emphasizing iterative development and customer collaboration", "A type of software testing", "A database management system"],
      correctAnswer: 1,
      explanation: "Agile is a software development methodology that emphasizes iterative development, continuous customer collaboration, and responding to change over following a rigid plan."
    },
    {
      id: 4,
      question: "What is the main purpose of Software Requirements Specification (SRS)?",
      options: ["To define the hardware requirements", "To document what the software should do and how it should behave", "To specify the programming language to be used", "To list the development team members"],
      correctAnswer: 1,
      explanation: "SRS documents the functional and non-functional requirements of the software, specifying what the system should do and how it should behave."
    },
    {
      id: 5,
      question: "Which SDLC model is also known as the 'Linear Sequential Model'?",
      options: ["Agile Model", "Waterfall Model", "Spiral Model", "Iterative Model"],
      correctAnswer: 1,
      explanation: "The Waterfall model is a linear sequential approach where each phase must be completed before the next begins, hence called the Linear Sequential Model."
    },
    {
      id: 6,
      question: "What is the purpose of software testing?",
      options: ["To prove the software is perfect", "To find errors and defects in the software", "To increase the size of the code", "To eliminate the need for debugging"],
      correctAnswer: 1,
      explanation: "The primary purpose of software testing is to identify defects, errors, and gaps in the software to ensure it meets the specified requirements."
    },
    {
      id: 7,
      question: "What does 'CMMI' stand for in Software Engineering?",
      options: ["Common Model for Manufacturing Industries", "Capability Maturity Model Integration", "Computer Management and Maintenance Interface", "Critical Methodology for Manufacturing Integration"],
      correctAnswer: 1,
      explanation: "CMMI (Capability Maturity Model Integration) is a process improvement approach that provides organizations with the essential elements of effective processes."
    },
    {
      id: 8,
      question: "Which of the following is a type of software maintenance?",
      options: ["Adaptive Maintenance", "Perfective Maintenance", "Corrective Maintenance", "All of the above"],
      correctAnswer: 3,
      explanation: "All three are types of software maintenance: Adaptive (adjusting to new environments), Perfective (improving performance), and Corrective (fixing bugs)."
    },
    {
      id: 9,
      question: "What is the purpose of Software Configuration Management?",
      options: ["To manage the software's color scheme", "To control changes and maintain the integrity of software products", "To optimize software performance", "To reduce software size"],
      correctAnswer: 1,
      explanation: "Software Configuration Management controls changes throughout the software lifecycle and maintains the integrity and traceability of software products."
    },
    {
      id: 10,
      question: "What is 'refactoring' in Software Engineering?",
      options: ["Rewriting the entire software", "Changing the external behavior of the software", "Improving the internal structure without changing external behavior", "Deleting unused code"],
      correctAnswer: 2,
      explanation: "Refactoring is the process of restructuring existing code without changing its external behavior to improve maintainability, readability, and performance."
    },
    {
      id: 11,
      question: "Which design principle suggests 'Program to interfaces, not implementations'?",
      options: ["Open/Closed Principle", "Dependency Inversion Principle", "Interface Segregation Principle", "Liskov Substitution Principle"],
      correctAnswer: 1,
      explanation: "The Dependency Inversion Principle encourages depending on abstractions (interfaces) rather than concretions (implementations)."
    },
    {
      id: 12,
      question: "What is the main advantage of modular software design?",
      options: ["Increased complexity", "Easier maintenance and testing", "Larger file sizes", "Reduced functionality"],
      correctAnswer: 1,
      explanation: "Modular design breaks software into smaller, independent modules, making it easier to maintain, test, and understand."
    },
    {
      id: 13,
      question: "What does the acronym 'SOLID' represent in object-oriented design?",
      options: ["Five design principles", "Programming languages", "Testing techniques", "Development tools"],
      correctAnswer: 0,
      explanation: "SOLID is an acronym representing five key object-oriented design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion."
    },
    {
      id: 14,
      question: "What is the primary purpose of version control in software development?",
      options: ["To increase software speed", "To manage and track changes to source code", "To compress code files", "To encrypt source code"],
      correctAnswer: 1,
      explanation: "Version control systems track and manage changes to source code over time, allowing teams to collaborate effectively and maintain history."
    },
    {
      id: 15,
      question: "Which of the following is NOT a type of software testing?",
      options: ["Unit Testing", "Integration Testing", "System Testing", "Hardware Testing"],
      correctAnswer: 3,
      explanation: "Hardware Testing is not a type of software testing. The other three are common software testing types."
    },
    {
      id: 16,
      question: "What is the difference between verification and validation in software testing?",
      options: ["No difference, they are the same", "Verification is 'Are we building the product right?', Validation is 'Are we building the right product?'", "Validation is for code, Verification is for documentation", "They are opposite processes"],
      correctAnswer: 1,
      explanation: "Verification ensures the product is built according to specifications ('Are we building the product right?'), while validation ensures the product meets user requirements ('Are we building the right product?')."
    },
    {
      id: 17,
      question: "What is the purpose of a software prototype?",
      options: ["To create the final product", "To demonstrate concepts and gather feedback early", "To replace documentation", "To eliminate testing"],
      correctAnswer: 1,
      explanation: "Prototypes are early sample versions that demonstrate concepts, allow for early feedback, and help refine requirements before full development."
    },
    {
      id: 18,
      question: "Which metric measures the cyclomatic complexity of a program?",
      options: ["Lines of Code", "Cyclomatic Complexity", "Function Points", "Defect Density"],
      correctAnswer: 1,
      explanation: "Cyclomatic Complexity measures the number of linearly independent paths through a program's source code, indicating its complexity."
    },
    {
      id: 19,
      question: "What does the term 'technical debt' mean in software development?",
      options: ["Money owed to software vendors", "The cost of software licenses", "Shortcuts taken in development that increase future costs", "Hardware maintenance costs"],
      correctAnswer: 2,
      explanation: "Technical debt refers to the implied cost of additional rework caused by choosing an easy solution now instead of using a better approach that would take longer."
    },
    {
      id: 20,
      question: "What is the main purpose of software documentation?",
      options: ["To increase project cost", "To reduce the need for comments in code", "To communicate system functionality to stakeholders", "To replace user manuals"],
      correctAnswer: 2,
      explanation: "Software documentation communicates system design, functionality, and usage to various stakeholders including developers, testers, and users."
    },

    // Software Design and Architecture (20 questions)
    {
      id: 21,
      question: "What is the main principle of the Single Responsibility Principle?",
      options: ["A class should have only one reason to change", "A function should perform only one operation", "A module should handle only one type of data", "A system should have only one entry point"],
      correctAnswer: 0,
      explanation: "The Single Responsibility Principle states that a class should have only one reason to change, meaning it should have only one job or responsibility."
    },
    {
      id: 22,
      question: "Which architectural pattern separates the data, business logic, and presentation layers?",
      options: ["Singleton Pattern", "MVC (Model-View-Controller)", "Observer Pattern", "Factory Pattern"],
      correctAnswer: 1,
      explanation: "MVC separates an application into three interconnected components: Model (data), View (presentation), and Controller (business logic)."
    },
    {
      id: 23,
      question: "What is cohesion in software design?",
      options: ["How closely related the functions within a module are", "How dependent modules are on each other", "The number of functions in a module", "The size of a module"],
      correctAnswer: 0,
      explanation: "Cohesion measures how closely related and focused the responsibilities of a module are. High cohesion is desirable."
    },
    {
      id: 24,
      question: "What is coupling in software design?",
      options: ["The degree of interdependence between modules", "The size of a module", "The number of functions in a module", "The complexity of algorithms"],
      correctAnswer: 0,
      explanation: "Coupling measures how closely connected two routines or modules are. Low coupling is generally preferred for better maintainability."
    },
    {
      id: 25,
      question: "Which design pattern provides a way to create objects without specifying their exact classes?",
      options: ["Adapter Pattern", "Decorator Pattern", "Factory Pattern", "Proxy Pattern"],
      correctAnswer: 2,
      explanation: "Factory Pattern provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created."
    },
    {
      id: 26,
      question: "What is the Observer Pattern used for?",
      options: ["Creating new objects", "Defining one-to-many dependency between objects", "Protecting access to an object", "Creating a family of related objects"],
      correctAnswer: 1,
      explanation: "Observer Pattern defines a one-to-many dependency between objects so that when one object changes state, all dependents are notified automatically."
    },
    {
      id: 27,
      question: "What is the purpose of the Strategy Pattern?",
      options: ["To create objects", "To define a family of algorithms", "To protect access to an object", "To create a chain of objects"],
      correctAnswer: 1,
      explanation: "Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it."
    },
    {
      id: 28,
      question: "Which UML diagram shows the structural relationship between classes?",
      options: ["Activity Diagram", "Sequence Diagram", "Class Diagram", "State Diagram"],
      correctAnswer: 2,
      explanation: "Class diagrams show the structure of a system by displaying classes, attributes, methods, and the relationships among objects."
    },
    {
      id: 29,
      question: "What does the term 'encapsulation' mean in object-oriented design?",
      options: ["Combining data and methods in a single unit", "Hiding internal details and exposing only necessary functionality", "Creating multiple instances of a class", "Connecting classes together"],
      correctAnswer: 1,
      explanation: "Encapsulation is the bundling of data with the methods that operate on that data, and restricting direct access to internal components."
    },
    {
      id: 30,
      question: "What is inheritance in object-oriented programming?",
      options: ["Creating new objects", "Deriving new classes from existing classes", "Sharing data between objects", "Protecting class members"],
      correctAnswer: 1,
      explanation: "Inheritance allows a class to acquire the properties and methods of another class, promoting code reusability."
    },
    {
      id: 31,
      question: "What is polymorphism?",
      options: ["Creating multiple objects", "Having multiple constructors", "Objects taking multiple forms", "Using multiple data types"],
      correctAnswer: 2,
      explanation: "Polymorphism allows objects of different types to be treated as instances of the same type through a common interface."
    },
    {
      id: 32,
      question: "Which architectural style focuses on components communicating through services?",
      options: ["Monolithic Architecture", "Service-Oriented Architecture (SOA)", "Layered Architecture", "Event-Driven Architecture"],
      correctAnswer: 1,
      explanation: "SOA is an architectural style that enables delivery of services across a network, with components communicating through well-defined interfaces."
    },
    {
      id: 33,
      question: "What is the main advantage of microservices architecture?",
      options: ["Simpler deployment", "Better performance", "Independent development and deployment of services", "Reduced complexity"],
      correctAnswer: 2,
      explanation: "Microservices allow for independent development, deployment, and scaling of small, autonomous services that work together."
    },
    {
      id: 34,
      question: "What is the purpose of an API in software architecture?",
      options: ["To secure the application", "To define how different parts of a software system interact", "To store data", "To manage user sessions"],
      correctAnswer: 1,
      explanation: "API (Application Programming Interface) defines the methods and data formats that applications can use to communicate with each other."
    },
    {
      id: 35,
      question: "What does REST stand for in web services?",
      options: ["Really Easy Software Tool", "Representational State Transfer", "Remote System Transaction", "Responsive Server Technology"],
      correctAnswer: 1,
      explanation: "REST is an architectural style for designing networked applications that uses HTTP requests to access and manipulate data."
    },
    {
      id: 36,
      question: "What is the main characteristic of event-driven architecture?",
      options: ["Sequential processing", "Response to events or changes in state", "Centralized control", "Synchronous communication"],
      correctAnswer: 1,
      explanation: "Event-driven architecture is based on the production, detection, consumption of, and reaction to events or changes in state."
    },
    {
      id: 37,
      question: "What is the purpose of design patterns in software engineering?",
      options: ["To make code look better", "To provide reusable solutions to common problems", "To replace documentation", "To speed up compilation"],
      correctAnswer: 1,
      explanation: "Design patterns provide proven, reusable solutions to common problems in software design, promoting best practices."
    },
    {
      id: 38,
      question: "What is the Command Pattern used for?",
      options: ["Storing requests as objects", "Creating new objects", "Managing threads", "Handling exceptions"],
      correctAnswer: 0,
      explanation: "Command Pattern turns a request into a stand-alone object that contains all information about the request, enabling queuing and logging."
    },
    {
      id: 39,
      question: "What does the Facade Pattern provide?",
      options: ["A simplified interface to a complex subsystem", "Multiple interfaces to a single class", "Access control to objects", "Object creation facilities"],
      correctAnswer: 0,
      explanation: "Facade Pattern provides a unified interface to a set of interfaces in a subsystem, making it easier to use."
    },
    {
      id: 40,
      question: "What is the purpose of the Template Method Pattern?",
      options: ["Creating object templates", "Defining the skeleton of an algorithm in an operation", "Managing memory allocation", "Handling file operations"],
      correctAnswer: 1,
      explanation: "Template Method Pattern defines the program skeleton of an algorithm in an operation, deferring some steps to subclasses."
    },

    // Project Management and Quality Assurance (20 questions)
    {
      id: 41,
      question: "What does the acronym 'PERT' stand for in project management?",
      options: ["Project Evaluation and Review Technique", "Performance Enhancement and Reporting Tool", "Process Estimation and Resource Tracking", "Product Evaluation and Risk Testing"],
      correctAnswer: 0,
      explanation: "PERT (Project Evaluation and Review Technique) is a statistical tool used in project management to analyze and represent tasks involved in completing a project."
    },
    {
      id: 42,
      question: "What is the Critical Path in project scheduling?",
      options: ["The shortest path through the project", "The longest path through the project determining minimum completion time", "The path with the most resources", "The path with the highest risk"],
      correctAnswer: 1,
      explanation: "The Critical Path is the sequence of activities that represents the longest path through a project, determining the minimum project duration."
    },
    {
      id: 43,
      question: "What is Earned Value Management (EVM) used for?",
      options: ["Calculating project profit", "Measuring project performance and progress", "Estimating resource costs", "Tracking team productivity"],
      correctAnswer: 1,
      explanation: "EVM integrates scope, schedule, and resource measurements to assess project performance and progress."
    },
    {
      id: 44,
      question: "Which technique is used for risk identification in software projects?",
      options: ["SWOT Analysis", "Gantt Charts", "Flow Charts", "Entity Relationship Diagrams"],
      correctAnswer: 0,
      explanation: "SWOT Analysis (Strengths, Weaknesses, Opportunities, Threats) is commonly used for identifying risks in software projects."
    },
    {
      id: 45,
      question: "What is the purpose of a Software Quality Assurance (SQA) plan?",
      options: ["To write code", "To ensure software meets specified requirements", "To manage databases", "To create user interfaces"],
      correctAnswer: 1,
      explanation: "An SQA plan establishes the standards, procedures, and methodologies to ensure software meets specified quality requirements."
    },
    {
      id: 46,
      question: "What does the term 'baseline' mean in software configuration management?",
      options: ["Minimum acceptable performance", "A standard for comparison", "A snapshot of the system at a specific point in time", "A type of test"],
      correctAnswer: 2,
      explanation: "A baseline is a snapshot of the system at a specific point in time that serves as a reference for future changes."
    },
    {
      id: 47,
      question: "What is the Capability Maturity Model (CMM) used for?",
      options: ["Hardware evaluation", "Measuring an organization's maturity in managing software projects", "Database design", "Network configuration"],
      correctAnswer: 1,
      explanation: "CMM is a methodology used to develop and refine an organization's software development process based on best practices."
    },
    {
      id: 48,
      question: "What is the main purpose of a Software Configuration Management (SCM) system?",
      options: ["To manage software installation", "To control changes and maintain integrity of software products", "To optimize software performance", "To monitor software usage"],
      correctAnswer: 1,
      explanation: "SCM controls changes throughout the software lifecycle and maintains the integrity and traceability of software products."
    },
    {
      id: 49,
      question: "What does the term 'change control' refer to in software engineering?",
      options: ["Controlling user interface changes", "Managing and controlling changes to software products", "Changing project requirements", "Modifying hardware"],
      correctAnswer: 1,
      explanation: "Change control is a systematic approach to managing all changes made to a product or system, ensuring they are properly evaluated, approved, and implemented."
    },
    {
      id: 50,
      question: "What is the purpose of a software audit?",
      options: ["To find bugs in code", "To evaluate compliance with standards and procedures", "To measure performance", "To estimate project cost"],
      correctAnswer: 1,
      explanation: "A software audit evaluates the software development process and products to ensure compliance with standards, procedures, and regulations."
    },
    {
      id: 51,
      question: "What is the primary goal of risk management in software projects?",
      options: ["To eliminate all risks", "To identify, assess, and mitigate potential risks", "To assign blame for problems", "To reduce project scope"],
      correctAnswer: 1,
      explanation: "Risk management involves identifying, assessing, and mitigating potential risks to minimize their impact on project objectives."
    },
    {
      id: 52,
      question: "What is a milestone in project management?",
      options: ["A project deliverable", "A significant event or achievement in the project timeline", "A team meeting", "A budget allocation"],
      correctAnswer: 1,
      explanation: "A milestone is a significant point or event in the project timeline that marks the completion of a major phase or deliverable."
    },
    {
      id: 53,
      question: "What is the purpose of a Work Breakdown Structure (WBS)?",
      options: ["To list project risks", "To decompose the project into smaller, manageable components", "To assign team members", "To schedule meetings"],
      correctAnswer: 1,
      explanation: "WBS is a hierarchical decomposition of the total scope of work to accomplish project objectives and create deliverables."
    },
    {
      id: 54,
      question: "What is the difference between effort and duration in project estimation?",
      options: ["No difference, they are the same", "Effort is the time spent working, duration is the calendar time", "Duration is for testing, effort is for development", "They are inverse concepts"],
      correctAnswer: 1,
      explanation: "Effort is the actual time spent working on a task, while duration is the total calendar time to complete the task including elapsed time."
    },
    {
      id: 55,
      question: "What is the Delphi technique used for in software estimation?",
      options: ["Software testing", "Expert judgment and consensus building for estimation", "Code optimization", "Database design"],
      correctAnswer: 1,
      explanation: "The Delphi technique is a structured communication technique that relies on a panel of experts to reach consensus on estimates."
    },
    {
      id: 56,
      question: "What does COCOMO stand for?",
      options: ["Constructive Cost Model", "Computer Configuration Model", "Core Construction Model", "Code Complexity Measurement"],
      correctAnswer: 0,
      explanation: "COCOMO (Constructive Cost Model) is a regression model based on data collected from many projects to estimate software development effort and cost."
    },
    {
      id: 57,
      question: "What is the purpose of a Software Process Improvement model?",
      options: ["To reduce software functionality", "To enhance an organization's ability to develop and maintain software", "To increase project costs", "To eliminate testing"],
      correctAnswer: 1,
      explanation: "Software Process Improvement models aim to enhance an organization's ability to develop and maintain software through systematic process improvements."
    },
    {
      id: 58,
      question: "What is the main benefit of using metrics in software engineering?",
      options: ["To increase project complexity", "To provide quantitative insight into software process and product", "To reduce team size", "To eliminate documentation"],
      correctAnswer: 1,
      explanation: "Metrics provide quantitative insight into the software process and product, enabling better decision-making and process improvement."
    },
    {
      id: 59,
      question: "What is the purpose of a Software Quality Plan?",
      options: ["To document the software architecture", "To outline how quality will be achieved and verified", "To list all software features", "To describe user interface design"],
      correctAnswer: 1,
      explanation: "A Software Quality Plan outlines the procedures, standards, and processes to achieve and verify quality in software development."
    },
    {
      id: 60,
      question: "What does the term 'process capability' refer to?",
      options: ["Hardware processing power", "The ability of a process to meet specifications consistently", "Network bandwidth", "Storage capacity"],
      correctAnswer: 1,
      explanation: "Process capability refers to the ability of a process to produce output within specified limits consistently."
    },

    // Testing and Verification (20 questions)
    {
      id: 61,
      question: "What is the difference between static and dynamic testing?",
      options: ["Static is for hardware, dynamic is for software", "Static analysis without execution, dynamic with execution", "Static is automated, dynamic is manual", "No significant difference"],
      correctAnswer: 1,
      explanation: "Static testing analyzes code without executing it (reviews, inspections), while dynamic testing executes the code to observe behavior."
    },
    {
      id: 62,
      question: "What is white-box testing also known as?",
      options: ["Black-box testing", "Glass-box testing", "Gray-box testing", "Blue-box testing"],
      correctAnswer: 1,
      explanation: "White-box testing is also called glass-box or clear-box testing because it examines the internal structures of the code."
    },
    {
      id: 63,
      question: "What does the term 'test coverage' measure?",
      options: ["The number of test cases", "The extent to which code is tested", "The time spent testing", "The number of bugs found"],
      correctAnswer: 1,
      explanation: "Test coverage measures the extent to which the source code of a program is executed when a particular test suite runs."
    },
    {
      id: 64,
      question: "What is the purpose of unit testing?",
      options: ["To test the entire system", "To test individual components or modules", "To test user interfaces", "To test database connections"],
      correctAnswer: 1,
      explanation: "Unit testing verifies the functionality of individual components or modules in isolation from the rest of the system."
    },
    {
      id: 65,
      question: "What is integration testing primarily concerned with?",
      options: ["Individual component functionality", "Interaction between components", "User interface design", "Database performance"],
      correctAnswer: 1,
      explanation: "Integration testing focuses on testing the interfaces and interactions between different components or modules."
    },
    {
      id: 66,
      question: "What is the main purpose of system testing?",
      options: ["To test individual functions", "To test the complete, integrated system", "To test user acceptance", "To test performance only"],
      correctAnswer: 1,
      explanation: "System testing evaluates the complete, integrated system to verify that it meets specified requirements."
    },
    {
      id: 67,
      question: "What does the term 'regression testing' mean?",
      options: ["Testing for system regression", "Re-testing after changes to ensure no new defects", "Testing with older systems", "Performance degradation testing"],
      correctAnswer: 1,
      explanation: "Regression testing ensures that recent code changes have not adversely affected existing functionality."
    },
    {
      id: 68,
      question: "What is alpha testing?",
      options: ["Testing by end users", "Testing by independent teams", "Testing by developers", "Testing by internal teams before release"],
      correctAnswer: 3,
      explanation: "Alpha testing is performed by internal teams within the organization before releasing the software to external users."
    },
    {
      id: 69,
      question: "What is beta testing?",
      options: ["Testing by developers", "Testing by internal teams", "Testing by selected external users", "Testing by management"],
      correctAnswer: 2,
      explanation: "Beta testing is performed by selected external users who provide feedback before the final release."
    },
    {
      id: 70,
      question: "What is the V-model in software testing?",
      options: ["A testing tool", "A testing methodology showing relationship between development and testing phases", "A programming language", "A database model"],
      correctAnswer: 1,
      explanation: "The V-model illustrates the relationship between each phase of the development lifecycle and its associated testing phase."
    },
    {
      id: 71,
      question: "What is the purpose of stress testing?",
      options: ["To make developers stressed", "To test system behavior under extreme conditions", "To test user stress levels", "To test hardware only"],
      correctAnswer: 1,
      explanation: "Stress testing evaluates how a system behaves under extreme conditions, beyond normal operational capacity."
    },
    {
      id: 72,
      question: "What is load testing?",
      options: ["Testing with heavy code", "Testing system behavior under expected load", "Testing with large files", "Testing memory usage"],
      correctAnswer: 1,
      explanation: "Load testing evaluates system performance under expected load conditions to ensure it can handle anticipated traffic."
    },
    {
      id: 73,
      question: "What is the purpose of smoke testing?",
      options: ["Testing fire alarms", "Basic functionality test to verify critical functions", "Testing hardware temperature", "Testing network protocols"],
      correctAnswer: 1,
      explanation: "Smoke testing is a basic functionality test to verify that critical functions of a program work before proceeding to more detailed testing."
    },
    {
      id: 74,
      question: "What does the term 'equivalence partitioning' refer to?",
      options: ["Dividing code into partitions", "Dividing input data into equivalent classes", "Partitioning databases", "Splitting test cases"],
      correctAnswer: 1,
      explanation: "Equivalence partitioning divides input data into equivalent classes where all values in a class are expected to behave the same way."
    },
    {
      id: 75,
      question: "What is boundary value analysis?",
      options: ["Analyzing system boundaries", "Testing values at the edges of equivalence classes", "Analyzing network boundaries", "Testing interface boundaries"],
      correctAnswer: 1,
      explanation: "Boundary value analysis tests values at the edges of equivalence partitions since errors often occur at the boundaries."
    },
    {
      id: 76,
      question: "What is the purpose of a test harness?",
      options: ["To hold test equipment", "To support testing of components by providing drivers and stubs", "To manage test data", "To secure test environments"],
      correctAnswer: 1,
      explanation: "A test harness provides the necessary support for testing components, including drivers and stubs to simulate interactions."
    },
    {
      id: 77,
      question: "What is the difference between verification and validation?",
      options: ["No difference", "Verification: Are we building right? Validation: Are we building right product?", "Verification is for testing, validation is for design", "They are opposite processes"],
      correctAnswer: 1,
      explanation: "Verification ensures the product is built according to specifications, while validation ensures the product meets user requirements."
    },
    {
      id: 78,
      question: "What is mutation testing?",
      options: ["Testing genetic algorithms", "Testing by introducing small changes to code to verify test effectiveness", "Testing with biological systems", "Testing evolutionary algorithms"],
      correctAnswer: 1,
      explanation: "Mutation testing introduces small changes (mutations) to code to verify that test cases can detect these faults."
    },
    {
      id: 79,
      question: "What is the purpose of code inspection?",
      options: ["To beautify code", "To find defects by examining code without executing it", "To optimize performance", "To add comments"],
      correctAnswer: 1,
      explanation: "Code inspection is a static testing technique where reviewers examine code to find defects without executing it."
    },
    {
      id: 80,
      question: "What does the term 'defect density' measure?",
      options: ["Number of developers per defect", "Number of defects per size of code", "Size of defects", "Speed of defect detection"],
      correctAnswer: 1,
      explanation: "Defect density measures the number of defects identified in a product divided by the size of the product (often per KLOC)."
    },

    // Software Maintenance and Evolution (20 questions)
    {
      id: 81,
      question: "What is software maintenance?",
      options: ["Cleaning the software", "Modifying software after delivery to fix faults or improve performance", "Installing software", "Updating hardware"],
      correctAnswer: 1,
      explanation: "Software maintenance is the process of modifying software after delivery to fix faults, improve performance, or adapt to environmental changes."
    },
    {
      id: 82,
      question: "What type of maintenance is performed to correct errors?",
      options: ["Adaptive maintenance", "Perfective maintenance", "Corrective maintenance", "Preventive maintenance"],
      correctAnswer: 2,
      explanation: "Corrective maintenance is performed to correct errors and faults discovered after the software is delivered."
    },
    {
      id: 83,
      question: "What type of maintenance is performed to improve performance?",
      options: ["Adaptive maintenance", "Perfective maintenance", "Corrective maintenance", "Emergency maintenance"],
      correctAnswer: 1,
      explanation: "Perfective maintenance improves the software's performance, maintainability, or other attributes."
    },
    {
      id: 84,
      question: "What type of maintenance is performed to adapt to environmental changes?",
      options: ["Adaptive maintenance", "Perfective maintenance", "Corrective maintenance", "Evolutionary maintenance"],
      correctAnswer: 0,
      explanation: "Adaptive maintenance modifies the software to accommodate changes in the environment (hardware, OS, etc.)."
    },
    {
      id: 85,
      question: "What is software evolution?",
      options: ["Software getting older", "Continuous modification of software over time", "Software deletion", "Software installation"],
      correctAnswer: 1,
      explanation: "Software evolution refers to the continuous modification of software over time to meet changing requirements."
    },
    {
      id: 86,
      question: "What is reverse engineering in software maintenance?",
      options: ["Breaking software", "Analyzing software to identify components and their relationships", "Installing older software", "Removing features"],
      correctAnswer: 1,
      explanation: "Reverse engineering is the process of analyzing a software system to identify its components and their relationships."
    },
    {
      id: 87,
      question: "What is forward engineering?",
      options: ["Moving software forward", "Creating software from scratch", "Creating software from higher-level representations", "Upgrading software"],
      correctAnswer: 2,
      explanation: "Forward engineering is the traditional process of creating software from high-level specifications."
    },
    {
      id: 88,
      question: "What is reengineering?",
      options: ["Starting over", "Reorganizing company structure", "Adding new features", "Restructuring existing software to improve it"],
      correctAnswer: 3,
      explanation: "Reengineering is the examination and transformation of an existing system to reconstitute it in a new form."
    },
    {
      id: 89,
      question: "What is software refactoring?",
      options: ["Rewriting the entire software", "Improving code structure without changing external behavior", "Adding new features", "Deleting old code"],
      correctAnswer: 1,
      explanation: "Refactoring improves the internal structure of code without changing its external behavior."
    },
    {
      id: 90,
      question: "What is the purpose of software configuration management?",
      options: ["Managing user configurations", "Controlling changes and maintaining integrity of software", "Configuring hardware", "Managing user settings"],
      correctAnswer: 1,
      explanation: "Software configuration management controls changes throughout the software lifecycle and maintains integrity."
    },
    {
      id: 91,
      question: "What is version control?",
      options: ["Controlling software versions", "Tracking changes to software over time", "Limiting software versions", "Deleting old versions"],
      correctAnswer: 1,
      explanation: "Version control tracks changes to software over time and manages different versions of source code."
    },
    {
      id: 92,
      question: "What is a software baseline?",
      options: ["A software benchmark", "A snapshot of the system at a specific point in time", "A software measurement", "A software test"],
      correctAnswer: 1,
      explanation: "A baseline is a snapshot of the system at a specific point in time that serves as a reference for future changes."
    },
    {
      id: 93,
      question: "What is software reusability?",
      options: ["Reusing hardware", "Using software components in multiple applications", "Recycling software", "Reinstalling software"],
      correctAnswer: 1,
      explanation: "Software reusability is the practice of using existing software components in multiple applications."
    },
    {
      id: 94,
      question: "What is a software component?",
      options: ["A piece of hardware", "A modular unit with well-defined interface", "A file", "A function"],
      correctAnswer: 1,
      explanation: "A software component is a modular unit with well-defined interfaces that can be composed into applications."
    },
    {
      id: 95,
      question: "What is software architecture reconstruction?",
      options: ["Building new software", "Recreating software from existing code", "Documenting existing architecture from code", "Deleting old architecture"],
      correctAnswer: 2,
      explanation: "Software architecture reconstruction involves documenting the existing architecture from the source code."
    },
    {
      id: 96,
      question: "What is the main challenge in software maintenance?",
      options: ["Lack of documentation", "Understanding legacy code", "Limited personnel", "All of the above"],
      correctAnswer: 3,
      explanation: "Software maintenance faces multiple challenges including lack of documentation, understanding legacy code, and limited personnel."
    },
    {
      id: 97,
      question: "What is technical debt in software maintenance?",
      options: ["Financial debt", "Deferred software maintenance tasks", "Hardware costs", "Training costs"],
      correctAnswer: 1,
      explanation: "Technical debt refers to the implied cost of additional rework caused by choosing an easy solution now instead of a better approach."
    },
    {
      id: 98,
      question: "What is software retirement?",
      options: ["Software getting old", "Phasing out of software systems", "Software backup", "Software installation"],
      correctAnswer: 1,
      explanation: "Software retirement is the process of phasing out software systems that are no longer needed or supported."
    },
    {
      id: 99,
      question: "What is software migration?",
      options: ["Moving software to new locations", "Transferring software from one environment to another", "Deleting software", "Copying software"],
      correctAnswer: 1,
      explanation: "Software migration is the process of transferring software from one environment to another."
    },
    {
      id: 100,
      question: "What is the primary goal of software maintenance?",
      options: ["To increase cost", "To extend software life and improve quality", "To reduce functionality", "To eliminate bugs only"],
      correctAnswer: 1,
      explanation: "The primary goal of software maintenance is to extend the software's useful life and improve its quality, reliability, and performance."
    }
  ]
};