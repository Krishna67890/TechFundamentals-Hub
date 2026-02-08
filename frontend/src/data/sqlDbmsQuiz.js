export const fullSqlDbmsQuiz = {
  title: "SQL & Database Systems Mastery Quiz",
  topicId: "sql-dbms-mastery",
  timeLimit: 7200, // 2 hours in seconds
  questions: [
    // Database Fundamentals Questions
    {
      id: 1,
      question: "What does DBMS stand for?",
      options: ["Database Management System", "Data Base Management Software", "Database Management Service", "Data Backup Management System"],
      correctAnswer: 0,
      explanation: "DBMS stands for Database Management System, which is a collection of inter-related data and programs to store & access those data in an easy and effective manner."
    },
    {
      id: 2,
      question: "Which of the following is NOT an advantage of DBMS over file system?",
      options: ["No redundant data", "Data consistency and integrity", "High implementation cost", "Data security"],
      correctAnswer: 2,
      explanation: "High implementation cost is actually a DISADVANTAGE of DBMS compared to file systems, not an advantage."
    },
    {
      id: 3,
      question: "What is the main purpose of data normalization?",
      options: ["Increase storage capacity", "Remove redundant data", "Improve security", "Reduce cost"],
      correctAnswer: 1,
      explanation: "Data normalization removes redundant data by organizing data efficiently and eliminating duplicates."
    },
    {
      id: 4,
      question: "Which level of DBMS architecture is also called the 'view level'?",
      options: ["External level", "Conceptual level", "Internal level", "Physical level"],
      correctAnswer: 0,
      explanation: "The external level is also called the view level as it presents different views of data to different users."
    },
    {
      id: 5,
      question: "What is the main difference between Von Neumann and Harvard architectures?",
      options: ["Processor speed", "Memory organization", "Input/output methods", "Power consumption"],
      correctAnswer: 1,
      explanation: "The main difference is in memory organization: Von Neumann uses single memory for data and instructions, while Harvard uses separate memories."
    },
    {
      id: 6,
      question: "Which characteristic defines a mainframe computer?",
      options: ["Personal use", "Low cost", "High reliability and large-scale processing", "Portability"],
      correctAnswer: 2,
      explanation: "Mainframes are characterized by high reliability and ability to handle large-scale processing for enterprises like banks and airlines."
    },
    {
      id: 7,
      question: "What does FLOPS measure in supercomputers?",
      options: ["Storage capacity", "Memory size", "Floating point operations per second", "Power consumption"],
      correctAnswer: 2,
      explanation: "FLOPS (Floating Point Operations Per Second) measures the processing speed of supercomputers."
    },
    {
      id: 8,
      question: "What is the main advantage of Harvard architecture over Von Neumann?",
      options: ["Lower cost", "Faster execution", "Simpler design", "Less complexity"],
      correctAnswer: 1,
      explanation: "Harvard architecture offers faster execution due to separate memories and buses for data and instructions."
    },
    {
      id: 9,
      question: "Which type of computer is used for weather forecasting?",
      options: ["Microcomputer", "Minicomputer", "Mainframe", "Supercomputer"],
      correctAnswer: 3,
      explanation: "Supercomputers are used for complex calculations like weather forecasting and scientific research."
    },
    {
      id: 10,
      question: "Which computer type is most commonly used today?",
      options: ["Mainframe", "Supercomputer", "Minicomputer", "Microcomputer"],
      correctAnswer: 3,
      explanation: "Microcomputers (desktops, laptops, smartphones) are the most commonly used computer type."
    },
    {
      id: 11,
      question: "What is the lowest level of data abstraction?",
      options: ["View level", "Logical level", "Physical level", "External level"],
      correctAnswer: 2,
      explanation: "The physical level is the lowest level of data abstraction, describing how data is actually stored in the database."
    },
    {
      id: 12,
      question: "Which level of data abstraction describes what data is stored in the database?",
      options: ["Physical level", "Logical level", "View level", "External level"],
      correctAnswer: 1,
      explanation: "The logical level describes what data is stored in the database and the relationships between data."
    },
    {
      id: 13,
      question: "What is the main limitation of Von Neumann architecture?",
      options: ["High cost", "Memory bottleneck", "Low reliability", "Complex design"],
      correctAnswer: 1,
      explanation: "Von Neumann architecture suffers from memory bottleneck as data and instructions share the same bus."
    },
    {
      id: 14,
      question: "Which is an example of a microcomputer?",
      options: ["Mainframe server", "Desktop PC", "Supercomputer", "Minicomputer"],
      correctAnswer: 1,
      explanation: "Desktop PC is an example of a microcomputer, designed for personal and individual use."
    },
    {
      id: 15,
      question: "What does the conceptual level of DBMS architecture maintain?",
      options: ["User views", "Physical storage", "Entire database design", "Access permissions"],
      correctAnswer: 2,
      explanation: "The conceptual level maintains the entire database design including relationships among data and schema."
    },
    {
      id: 16,
      question: "What is the main purpose of physical data independence?",
      options: ["Change logical schema without affecting external schemas", "Change physical storage without affecting conceptual level", "Improve security", "Reduce cost"],
      correctAnswer: 1,
      explanation: "Physical data independence allows changes in physical storage structure without affecting the conceptual level."
    },
    {
      id: 17,
      question: "Which architecture type uses a single bus for data and instructions?",
      options: ["Harvard", "Von Neumann", "RISC", "CISC"],
      correctAnswer: 1,
      explanation: "Von Neumann architecture uses a single bus for both data and instructions."
    },
    {
      id: 18,
      question: "What is the main advantage of microcomputers?",
      options: ["High processing power", "Low cost", "Multi-user capability", "High reliability"],
      correctAnswer: 1,
      explanation: "The main advantage of microcomputers is their low cost and personal usability."
    },
    {
      id: 19,
      question: "Which level of DBMS architecture is maintained by DBA?",
      options: ["External level", "Conceptual level", "Internal level", "View level"],
      correctAnswer: 1,
      explanation: "The conceptual level is maintained by the Database Administrator (DBA) and describes the entire database design."
    },
    {
      id: 20,
      question: "What is the main purpose of data abstraction?",
      options: ["Increase complexity", "Hide irrelevant details", "Improve performance", "Reduce storage"],
      correctAnswer: 1,
      explanation: "Data abstraction hides irrelevant details from users to ease database interaction and complexity management."
    },

    // DBMS Applications Questions
    {
      id: 21,
      question: "In which industry is DBMS primarily used for call tracking and network usage?",
      options: ["Banking", "Telecom", "Airlines", "Education"],
      correctAnswer: 1,
      explanation: "Telecom industry uses DBMS to track calls made, network usage, and customer details."
    },
    {
      id: 22,
      question: "Which DBMS application handles day-to-day credit and debit transactions?",
      options: ["Telecom", "Industry", "Banking System", "Sales"],
      correctAnswer: 2,
      explanation: "Banking systems use DBMS to store customer info and track day-to-day credit and debit transactions."
    },
    {
      id: 23,
      question: "What is the primary DBMS use in airlines?",
      options: ["Inventory management", "Reservation systems", "Payroll processing", "Student records"],
      correctAnswer: 1,
      explanation: "Airlines use DBMS for reservation systems, storing flight schedules and passenger information."
    },
    {
      id: 24,
      question: "Which industry uses DBMS for manufacturing units, warehouses, and distribution centers?",
      options: ["Banking", "Industry", "Telecom", "Education"],
      correctAnswer: 1,
      explanation: "Industry uses DBMS to track manufacturing units, warehouse operations, and distribution centers."
    },
    {
      id: 25,
      question: "What type of data does the education sector store in DBMS?",
      options: ["Customer transactions", "Flight schedules", "Student and staff details", "Network usage"],
      correctAnswer: 2,
      explanation: "Education sector uses DBMS to store student details, staff details, course details, exam details, and attendance."
    },
    {
      id: 26,
      question: "Which e-commerce company uses DBMS for product information and customer preferences?",
      options: ["Amazon", "Google", "Microsoft", "Apple"],
      correctAnswer: 0,
      explanation: "Companies like Amazon and Flipkart use DBMS for product information, customer preferences, and order processing."
    },
    {
      id: 27,
      question: "What is the main challenge in telecom DBMS applications?",
      options: ["Low volume", "High security", "Million of transactions per second", "Simple queries"],
      correctAnswer: 2,
      explanation: "Telecom DBMS must handle millions of transactions per second as data keeps updating every millisecond."
    },
    {
      id: 28,
      question: "Which DBMS application ensures ACID properties and high security?",
      options: ["E-commerce", "Banking", "Education", "Industry"],
      correctAnswer: 1,
      explanation: "Banking systems require ACID properties and high security for financial transactions."
    },
    {
      id: 29,
      question: "What does e-commerce DBMS store about customers?",
      options: ["Flight information", "Account balances", "Product preferences and addresses", "Employee records"],
      correctAnswer: 2,
      explanation: "E-commerce DBMS stores customer addresses, preferences, and product information."
    },
    {
      id: 30,
      question: "Which industry uses DBMS for inventory management?",
      options: ["Banking", "Sales", "Telecom", "Education"],
      correctAnswer: 1,
      explanation: "Sales and industry sectors use DBMS for inventory management and product tracking."
    },
    {
      id: 31,
      question: "What makes education DBMS complex?",
      options: ["High volume", "Inter-related data", "Real-time updates", "Multiple users"],
      correctAnswer: 1,
      explanation: "Education DBMS is complex due to the large amount of inter-related data that needs efficient storage and retrieval."
    },
    {
      id: 32,
      question: "Which DBMS application requires real-time availability updates?",
      options: ["Banking", "Airlines", "Industry", "Education"],
      correctAnswer: 1,
      explanation: "Airlines require real-time availability updates for flight bookings and seat management."
    },
    {
      id: 33,
      question: "What is the main requirement for banking DBMS?",
      options: ["Low cost", "ACID properties and security", "Simple design", "Fast queries"],
      correctAnswer: 1,
      explanation: "Banking DBMS requires ACID properties and high security for financial transactions."
    },
    {
      id: 34,
      question: "Which DBMS application handles distribution center records?",
      options: ["Industry", "Banking", "Telecom", "Education"],
      correctAnswer: 0,
      explanation: "Industry DBMS handles records of product units supplied into and delivered from distribution centers."
    },
    {
      id: 35,
      question: "What makes telecom DBMS challenging?",
      options: ["Simple queries", "Low volume", "Millisecond updates", "Single user"],
      correctAnswer: 2,
      explanation: "Telecom DBMS is challenging due to the need to handle data that updates every millisecond."
    },

    // Data Models Questions
    {
      id: 36,
      question: "What is a data model?",
      options: ["Physical storage structure", "Logical structure of database", "Query language", "Access method"],
      correctAnswer: 1,
      explanation: "A data model is the logical structure of a database that describes entities, attributes, relationships, and constraints."
    },
    {
      id: 37,
      question: "Which level of data abstraction hides complex data structures from programmers?",
      options: ["Physical level", "Logical level", "View level", "External level"],
      correctAnswer: 2,
      explanation: "The view level (external level) hides complex data structures from end users and presents a simplified interface."
    },
    {
      id: 38,
      question: "Which level of data abstraction is targeted at end users?",
      options: ["Physical level", "Logical level", "View level", "Internal level"],
      correctAnswer: 2,
      explanation: "The view level (external level) is targeted at end users who interact with the database through interfaces."
    },
    {
      id: 39,
      question: "What does the logical level of data abstraction describe?",
      options: ["How data is stored", "What data is stored", "User interfaces", "Access permissions"],
      correctAnswer: 1,
      explanation: "The logical level describes what data is stored in the database and relationships between data."
    },
    {
      id: 40,
      question: "Which type of data independence allows changes to logical schema without affecting external schemas?",
      options: ["Physical data independence", "Logical data independence", "View independence", "Storage independence"],
      correctAnswer: 1,
      explanation: "Logical data independence allows changes to conceptual schema without affecting external schemas."
    },
    {
      id: 41,
      question: "What is an example of physical level data abstraction?",
      options: ["Database forms", "Tables and columns", "Memory blocks", "Query results"],
      correctAnswer: 2,
      explanation: "At the physical level, data is viewed as memory blocks, bytes, and storage devices."
    },
    {
      id: 42,
      question: "Which level of abstraction do programmers typically work at?",
      options: ["Physical level", "Logical level", "View level", "External level"],
      correctAnswer: 1,
      explanation: "Programmers typically work at the logical level where they deal with fields, attributes, and relationships."
    },
    {
      id: 43,
      question: "What is the main benefit of logical data independence?",
      options: ["Changes in physical storage don't affect conceptual level", "Changes in conceptual schema don't affect external schemas", "Improved security", "Better performance"],
      correctAnswer: 1,
      explanation: "Logical data independence means changes in conceptual schema don't affect external schemas."
    },
    {
      id: 44,
      question: "Which level of abstraction is concerned with how data is actually stored?",
      options: ["External level", "Conceptual level", "Internal level", "View level"],
      correctAnswer: 2,
      explanation: "The internal level (physical level) describes how data is actually stored in storage devices."
    },
    {
      id: 45,
      question: "What does data abstraction help with?",
      options: ["Increasing complexity", "Simplifying user interaction", "Reducing performance", "Adding features"],
      correctAnswer: 1,
      explanation: "Data abstraction simplifies user interaction by hiding complex implementation details."
    },
    {
      id: 46,
      question: "Which example demonstrates physical level abstraction?",
      options: ["Customer form", "Customer table", "Customer record in memory", "Customer report"],
      correctAnswer: 2,
      explanation: "At physical level, a customer record is seen as blocks of storage in memory."
    },
    {
      id: 47,
      question: "What is the main purpose of conceptual level?",
      options: ["User interface", "Physical storage", "Database design", "Query optimization"],
      correctAnswer: 2,
      explanation: "The conceptual level describes the overall database design including relationships and constraints."
    },
    {
      id: 48,
      question: "Which level of abstraction is maintained by DBA?",
      options: ["External level", "Conceptual level", "Internal level", "View level"],
      correctAnswer: 1,
      explanation: "The conceptual level is maintained by the Database Administrator (DBA)."
    },
    {
      id: 49,
      question: "What does the view level provide?",
      options: ["Physical storage details", "Logical structure", "User-specific perspective", "System administration"],
      correctAnswer: 2,
      explanation: "The view level provides user-specific perspectives of the database tailored to individual needs."
    },
    {
      id: 50,
      question: "What is the main advantage of data independence?",
      options: ["Increases complexity", "Reduces performance", "Allows changes without affecting applications", "Adds storage overhead"],
      correctAnswer: 2,
      explanation: "Data independence allows changes in storage structure or schema without affecting applications."
    },

    // SQL Basics Questions
    {
      id: 51,
      question: "What does SQL stand for?",
      options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Language"],
      correctAnswer: 0,
      explanation: "SQL stands for Structured Query Language, the standard language for managing relational databases."
    },
    {
      id: 52,
      question: "Which SQL command is used to retrieve data from a database?",
      options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
      correctAnswer: 2,
      explanation: "SELECT is the SQL command used to retrieve data from a database."
    },
    {
      id: 53,
      question: "What is the purpose of the WHERE clause in SQL?",
      options: ["Sort data", "Filter records", "Group data", "Join tables"],
      correctAnswer: 1,
      explanation: "The WHERE clause is used to filter records based on specified conditions."
    },
    {
      id: 54,
      question: "Which SQL statement is used to insert new records into a table?",
      options: ["ADD", "INSERT", "CREATE", "PUT"],
      correctAnswer: 1,
      explanation: "INSERT INTO statement is used to add new records to a table."
    },
    {
      id: 55,
      question: "What does the DISTINCT keyword do in SQL?",
      options: ["Sorts data", "Groups data", "Removes duplicates", "Joins tables"],
      correctAnswer: 2,
      explanation: "DISTINCT removes duplicate values from the result set."
    },
    {
      id: 56,
      question: "Which SQL clause is used to sort the result set?",
      options: ["ORDER BY", "GROUP BY", "SORT BY", "ARRANGE BY"],
      correctAnswer: 0,
      explanation: "ORDER BY clause is used to sort the result set in ascending or descending order."
    },
    {
      id: 57,
      question: "What is the purpose of the PRIMARY KEY constraint?",
      options: ["Allow duplicates", "Ensure uniqueness", "Link tables", "Sort data"],
      correctAnswer: 1,
      explanation: "PRIMARY KEY ensures that each record in a table has a unique identifier."
    },
    {
      id: 58,
      question: "Which SQL command is used to modify existing records?",
      options: ["CHANGE", "MODIFY", "ALTER", "UPDATE"],
      correctAnswer: 3,
      explanation: "UPDATE statement is used to modify existing records in a table."
    },
    {
      id: 59,
      question: "What does the LIKE operator do in SQL?",
      options: ["Compare values", "Pattern matching", "Join tables", "Sort data"],
      correctAnswer: 1,
      explanation: "LIKE operator is used for pattern matching with wildcards (% and _)."
    },
    {
      id: 60,
      question: "Which SQL function counts the number of rows?",
      options: ["SUM()", "COUNT()", "TOTAL()", "ROWS()"],
      correctAnswer: 1,
      explanation: "COUNT() function returns the number of rows that match a specified criterion."
    },
    {
      id: 61,
      question: "What is the purpose of the GROUP BY clause?",
      options: ["Sort data", "Filter data", "Group rows", "Join tables"],
      correctAnswer: 2,
      explanation: "GROUP BY clause groups rows that have the same values in specified columns."
    },
    {
      id: 62,
      question: "Which SQL clause is used with aggregate functions to filter grouped data?",
      options: ["WHERE", "HAVING", "FILTER", "GROUP"],
      correctAnswer: 1,
      explanation: "HAVING clause is used with aggregate functions to filter grouped data."
    },
    {
      id: 63,
      question: "What does the INNER JOIN return?",
      options: ["All records", "Matching records", "Left records", "Right records"],
      correctAnswer: 1,
      explanation: "INNER JOIN returns only records that have matching values in both tables."
    },
    {
      id: 64,
      question: "Which SQL statement is used to delete records?",
      options: ["REMOVE", "ERASE", "DELETE", "DROP"],
      correctAnswer: 2,
      explanation: "DELETE statement is used to remove records from a table."
    },
    {
      id: 65,
      question: "What is the purpose of the FOREIGN KEY constraint?",
      options: ["Unique identification", "Reference to another table", "Primary identification", "Sorting data"],
      correctAnswer: 1,
      explanation: "FOREIGN KEY creates a link between two tables by referencing the primary key of another table."
    },

    // Advanced SQL Questions
    {
      id: 66,
      question: "What does ACID stand for in database transactions?",
      options: ["Atomicity, Consistency, Isolation, Durability", "Availability, Consistency, Isolation, Distribution", "Accuracy, Consistency, Integrity, Dependability", "Atomicity, Capacity, Integrity, Durability"],
      correctAnswer: 0,
      explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability - properties of database transactions."
    },
    {
      id: 67,
      question: "What is normalization in database design?",
      options: ["Adding redundant data", "Removing redundant data", "Increasing storage", "Improving security"],
      correctAnswer: 1,
      explanation: "Normalization is the process of organizing data to reduce redundancy and improve data integrity."
    },
    {
      id: 68,
      question: "Which normal form eliminates partial dependencies?",
      options: ["First Normal Form", "Second Normal Form", "Third Normal Form", "Boyce-Codd Normal Form"],
      correctAnswer: 1,
      explanation: "Second Normal Form (2NF) eliminates partial dependencies on composite primary keys."
    },
    {
      id: 69,
      question: "What is a transaction in a database?",
      options: ["Single query", "Sequence of operations", "Data backup", "User login"],
      correctAnswer: 1,
      explanation: "A transaction is a sequence of database operations treated as a single unit of work."
    },
    {
      id: 70,
      question: "What is the purpose of indexing in databases?",
      options: ["Increase storage", "Improve query performance", "Add security", "Create backups"],
      correctAnswer: 1,
      explanation: "Indexes improve query performance by allowing faster data retrieval."
    },
    {
      id: 71,
      question: "What is a deadlock in database systems?",
      options: ["Lost connection", "Circular wait situation", "Data corruption", "System crash"],
      correctAnswer: 1,
      explanation: "A deadlock occurs when two or more transactions are waiting for each other to release locks."
    },
    {
      id: 72,
      question: "What does the isolation level SERIALIZABLE mean?",
      options: ["No isolation", "Partial isolation", "Full isolation", "No locking"],
      correctAnswer: 2,
      explanation: "SERIALIZABLE is the highest isolation level providing full isolation between transactions."
    },
    {
      id: 73,
      question: "What is a view in SQL?",
      options: ["Physical table", "Virtual table", "Stored procedure", "Index"],
      correctAnswer: 1,
      explanation: "A view is a virtual table based on the result of an SQL statement."
    },
    {
      id: 74,
      question: "What is the purpose of triggers in databases?",
      options: ["Store data", "Execute actions automatically", "Create indexes", "Manage users"],
      correctAnswer: 1,
      explanation: "Triggers automatically execute actions when specific events occur in the database."
    },
    {
      id: 75,
      question: "What is the difference between clustered and non-clustered indexes?",
      options: ["Storage location", "Data sorting and storage", "Security level", "Query speed"],
      correctAnswer: 1,
      explanation: "Clustered indexes sort and store data rows in the table, while non-clustered indexes create separate structures."
    },
    {
      id: 76,
      question: "What does the CAP theorem state?",
      options: ["Consistency, Availability, Partition tolerance", "Concurrency, Atomicity, Performance", "Capacity, Access, Protection", "Cost, Agility, Performance"],
      correctAnswer: 0,
      explanation: "CAP theorem states that distributed systems can only guarantee two of three properties: Consistency, Availability, and Partition tolerance."
    },
    {
      id: 77,
      question: "What is a stored procedure?",
      options: ["Precompiled SQL code", "Database backup", "User account", "Security setting"],
      correctAnswer: 0,
      explanation: "A stored procedure is precompiled SQL code stored in the database for reuse."
    },
    {
      id: 78,
      question: "What is the purpose of a cursor in SQL?",
      options: ["Move mouse pointer", "Process rows individually", "Create indexes", "Manage connections"],
      correctAnswer: 1,
      explanation: "A cursor is used to process rows individually in a result set."
    },
    {
      id: 79,
      question: "What is referential integrity?",
      options: ["Data accuracy", "Foreign key relationships", "User permissions", "Backup policies"],
      correctAnswer: 1,
      explanation: "Referential integrity ensures that foreign key relationships between tables remain consistent."
    },
    {
      id: 80,
      question: "What is the main purpose of database constraints?",
      options: ["Improve performance", "Enforce business rules", "Create indexes", "Manage users"],
      correctAnswer: 1,
      explanation: "Constraints enforce business rules and data integrity requirements."
    },

    // Relational Model Questions
    {
      id: 81,
      question: "What is a relation in the relational model?",
      options: ["Connection between tables", "Two-dimensional table", "Foreign key", "Primary key"],
      correctAnswer: 1,
      explanation: "In the relational model, a relation is a two-dimensional table consisting of rows and columns."
    },
    {
      id: 82,
      question: "What is a tuple in the relational model?",
      options: ["Table name", "Column", "Row", "Cell"],
      correctAnswer: 2,
      explanation: "A tuple is a row in a relation (table) in the relational model."
    },
    {
      id: 83,
      question: "What is an attribute in the relational model?",
      options: ["Table", "Row", "Column", "Cell"],
      correctAnswer: 2,
      explanation: "An attribute is a column in a relation (table) in the relational model."
    },
    {
      id: 84,
      question: "What is a domain in the relational model?",
      options: ["Table name", "Set of allowed values", "Row", "Foreign key"],
      correctAnswer: 1,
      explanation: "A domain is the set of allowed values for an attribute in the relational model."
    },
    {
      id: 85,
      question: "What is a candidate key?",
      options: ["Primary key only", "Any key", "Minimal superkey", "Foreign key"],
      correctAnswer: 2,
      explanation: "A candidate key is a minimal superkey that can uniquely identify tuples in a relation."
    },
    {
      id: 86,
      question: "What is a superkey?",
      options: ["Primary key", "Any set of attributes that uniquely identifies a tuple", "Foreign key", "Composite key"],
      correctAnswer: 1,
      explanation: "A superkey is any set of attributes that can uniquely identify a tuple in a relation."
    },
    {
      id: 87,
      question: "What is a composite key?",
      options: ["Single attribute key", "Key with multiple attributes", "Foreign key", "Candidate key"],
      correctAnswer: 1,
      explanation: "A composite key is a key that consists of two or more attributes."
    },
    {
      id: 88,
      question: "What is a foreign key?",
      options: ["Primary key", "Key from another relation", "Candidate key", "Superkey"],
      correctAnswer: 1,
      explanation: "A foreign key is an attribute that refers to the primary key of another relation."
    },
    {
      id: 89,
      question: "What are Codd's rules?",
      options: ["Programming rules", "Database design guidelines", "Relational database rules", "Security rules"],
      correctAnswer: 2,
      explanation: "Codd's rules are 12 rules defined by Edgar F. Codd to judge whether a database management system is truly relational."
    },
    {
      id: 90,
      question: "What is entity integrity constraint?",
      options: ["Foreign key constraint", "Primary key constraint", "Domain constraint", "User-defined constraint"],
      correctAnswer: 1,
      explanation: "Entity integrity constraint states that primary key attributes cannot contain null values."
    },
    {
      id: 91,
      question: "What is referential integrity constraint?",
      options: ["Primary key constraint", "Foreign key constraint", "Domain constraint", "User-defined constraint"],
      correctAnswer: 1,
      explanation: "Referential integrity constraint ensures that foreign key values match primary key values in referenced relations."
    },
    {
      id: 92,
      question: "What is a NULL value in the relational model?",
      options: ["Zero", "Empty string", "Unknown or missing value", "False"],
      correctAnswer: 2,
      explanation: "NULL represents unknown or missing values in the relational model."
    },
    {
      id: 93,
      question: "What is the degree of a relation?",
      options: ["Number of rows", "Number of columns", "Number of keys", "Size in bytes"],
      correctAnswer: 1,
      explanation: "The degree of a relation is the number of attributes (columns) it contains."
    },
    {
      id: 94,
      question: "What is the cardinality of a relation?",
      options: ["Number of columns", "Number of rows", "Number of keys", "Size in bytes"],
      correctAnswer: 1,
      explanation: "The cardinality of a relation is the number of tuples (rows) it contains."
    },
    {
      id: 95,
      question: "What is relational algebra?",
      options: ["Programming language", "Query language", "Mathematical foundation for relational operations", "Database design tool"],
      correctAnswer: 2,
      explanation: "Relational algebra is the mathematical foundation for relational operations and query languages."
    },
    {
      id: 96,
      question: "What is the SELECT operation in relational algebra?",
      options: ["Choose columns", "Choose rows", "Join tables", "Sort data"],
      correctAnswer: 1,
      explanation: "The SELECT operation in relational algebra chooses specific rows based on a condition."
    },
    {
      id: 97,
      question: "What is the PROJECT operation in relational algebra?",
      options: ["Choose rows", "Choose columns", "Join tables", "Sort data"],
      correctAnswer: 1,
      explanation: "The PROJECT operation in relational algebra chooses specific columns from a relation."
    },
    {
      id: 98,
      question: "What is the JOIN operation?",
      options: ["Combine columns", "Combine rows from different relations", "Sort data", "Filter data"],
      correctAnswer: 1,
      explanation: "JOIN combines rows from two or more relations based on a related column."
    },
    {
      id: 99,
      question: "What is the Cartesian product in relational algebra?",
      options: ["Column combination", "Row combination", "Cross join of all tuples", "Union operation"],
      correctAnswer: 2,
      explanation: "Cartesian product combines every tuple from one relation with every tuple from another relation."
    },
    {
      id: 100,
      question: "What is the main advantage of the relational model?",
      options: ["High performance", "Data independence and simplicity", "Low cost", "Easy implementation"],
      correctAnswer: 1,
      explanation: "The main advantage of the relational model is data independence and conceptual simplicity."
    }
  ]
};