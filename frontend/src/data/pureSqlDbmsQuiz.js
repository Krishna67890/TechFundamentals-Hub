export const pureSqlDbmsQuiz = {
  title: "Pure SQL & Database Systems Mastery Quiz",
  topicId: "pure-sql-dbms-mastery",
  timeLimit: 7200, // 2 hours in seconds
  questions: [
    // Database Fundamentals Questions (20 questions)
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
      question: "What is the lowest level of data abstraction?",
      options: ["View level", "Logical level", "Physical level", "External level"],
      correctAnswer: 2,
      explanation: "The physical level is the lowest level of data abstraction, describing how data is actually stored in the database."
    },
    {
      id: 6,
      question: "Which level of data abstraction describes what data is stored in the database?",
      options: ["Physical level", "Logical level", "View level", "External level"],
      correctAnswer: 1,
      explanation: "The logical level describes what data is stored in the database and the relationships between data."
    },
    {
      id: 7,
      question: "What is the main purpose of physical data independence?",
      options: ["Change logical schema without affecting external schemas", "Change physical storage without affecting conceptual level", "Improve security", "Reduce cost"],
      correctAnswer: 1,
      explanation: "Physical data independence allows changes in physical storage structure without affecting the conceptual level."
    },
    {
      id: 8,
      question: "Which level of DBMS architecture is maintained by DBA?",
      options: ["External level", "Conceptual level", "Internal level", "View level"],
      correctAnswer: 1,
      explanation: "The conceptual level is maintained by the Database Administrator (DBA) and describes the entire database design."
    },
    {
      id: 9,
      question: "What is the main purpose of data abstraction?",
      options: ["Increase complexity", "Hide irrelevant details", "Improve performance", "Reduce storage"],
      correctAnswer: 1,
      explanation: "Data abstraction hides irrelevant details from users to ease database interaction and complexity management."
    },
    {
      id: 10,
      question: "What is the main difference between centralized and distributed DBMS?",
      options: ["Storage location", "Number of users", "Data processing", "Security level"],
      correctAnswer: 0,
      explanation: "The main difference is storage location: centralized stores data in one location, distributed stores data across multiple locations."
    },
    {
      id: 11,
      question: "Which database model represents data as tables with rows and columns?",
      options: ["Hierarchical", "Network", "Relational", "Object-oriented"],
      correctAnswer: 2,
      explanation: "The relational model represents data as tables (relations) with rows (tuples) and columns (attributes)."
    },
    {
      id: 12,
      question: "What is the main advantage of the relational model?",
      options: ["High performance", "Data independence and simplicity", "Low cost", "Easy implementation"],
      correctAnswer: 1,
      explanation: "The main advantage of the relational model is data independence and conceptual simplicity."
    },
    {
      id: 13,
      question: "Which component of DBMS handles query processing?",
      options: ["Storage manager", "Query processor", "Transaction manager", "Recovery manager"],
      correctAnswer: 1,
      explanation: "The query processor handles query parsing, optimization, and execution."
    },
    {
      id: 14,
      question: "What is the purpose of the storage manager in DBMS?",
      options: ["Process queries", "Manage storage", "Handle transactions", "Recover data"],
      correctAnswer: 1,
      explanation: "The storage manager handles storage allocation, access methods, and data organization."
    },
    {
      id: 15,
      question: "Which DBMS component ensures atomicity and durability of transactions?",
      options: ["Query processor", "Storage manager", "Transaction manager", "Recovery manager"],
      correctAnswer: 2,
      explanation: "The transaction manager ensures ACID properties of transactions."
    },
    {
      id: 16,
      question: "What is the main function of the buffer manager?",
      options: ["Process queries", "Manage memory buffers", "Handle storage", "Optimize performance"],
      correctAnswer: 1,
      explanation: "The buffer manager manages memory buffers for efficient data access between disk and memory."
    },
    {
      id: 17,
      question: "Which database architecture allows multiple users to access the same database?",
      options: ["Single-user", "Multi-user", "Distributed", "Centralized"],
      correctAnswer: 1,
      explanation: "Multi-user database architecture allows concurrent access by multiple users."
    },
    {
      id: 18,
      question: "What is the purpose of database schema?",
      options: ["Store data", "Define database structure", "Process queries", "Manage users"],
      correctAnswer: 1,
      explanation: "Database schema defines the structure and organization of the database including tables, relationships, and constraints."
    },
    {
      id: 19,
      question: "Which type of database schema is created by DBA?",
      options: ["External schema", "Conceptual schema", "Internal schema", "Physical schema"],
      correctAnswer: 1,
      explanation: "The conceptual schema is created by the Database Administrator (DBA) and describes the overall database design."
    },
    {
      id: 20,
      question: "What is the main advantage of three-tier architecture in DBMS?",
      options: ["High performance", "Better security and modularity", "Low cost", "Simple design"],
      correctAnswer: 1,
      explanation: "Three-tier architecture provides better security and modularity by separating presentation, business logic, and data layers."
    },

    // DBMS Applications Questions (15 questions)
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

    // Data Models Questions (15 questions)
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

    // SQL Basics Questions (20 questions)
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
    {
      id: 66,
      question: "Which SQL command creates a new table?",
      options: ["MAKE TABLE", "NEW TABLE", "CREATE TABLE", "BUILD TABLE"],
      correctAnswer: 2,
      explanation: "CREATE TABLE statement is used to create a new table in the database."
    },
    {
      id: 67,
      question: "What does the ALTER TABLE statement do?",
      options: ["Delete table", "Modify table structure", "Create table", "Rename table"],
      correctAnswer: 1,
      explanation: "ALTER TABLE statement is used to modify the structure of an existing table."
    },
    {
      id: 68,
      question: "Which SQL operator is used to combine two or more conditions?",
      options: ["AND", "WITH", "PLUS", "COMBINE"],
      correctAnswer: 0,
      explanation: "AND operator is used to combine multiple conditions in SQL WHERE clause."
    },
    {
      id: 69,
      question: "What is the purpose of the AS keyword in SQL?",
      options: ["Create alias", "Sort data", "Filter records", "Join tables"],
      correctAnswer: 0,
      explanation: "AS keyword is used to create aliases for table or column names."
    },
    {
      id: 70,
      question: "Which SQL statement is used to remove a table completely?",
      options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "ERASE TABLE"],
      correctAnswer: 2,
      explanation: "DROP TABLE statement removes the entire table structure and data from the database."
    },

    // Advanced SQL Questions (30 questions)
    {
      id: 71,
      question: "What does ACID stand for in database transactions?",
      options: ["Atomicity, Consistency, Isolation, Durability", "Availability, Consistency, Isolation, Distribution", "Accuracy, Consistency, Integrity, Dependability", "Atomicity, Capacity, Integrity, Durability"],
      correctAnswer: 0,
      explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability - properties of database transactions."
    },
    {
      id: 72,
      question: "What is normalization in database design?",
      options: ["Adding redundant data", "Removing redundant data", "Increasing storage", "Improving security"],
      correctAnswer: 1,
      explanation: "Normalization is the process of organizing data to reduce redundancy and improve data integrity."
    },
    {
      id: 73,
      question: "Which normal form eliminates partial dependencies?",
      options: ["First Normal Form", "Second Normal Form", "Third Normal Form", "Boyce-Codd Normal Form"],
      correctAnswer: 1,
      explanation: "Second Normal Form (2NF) eliminates partial dependencies on composite primary keys."
    },
    {
      id: 74,
      question: "What is a transaction in a database?",
      options: ["Single query", "Sequence of operations", "Data backup", "User login"],
      correctAnswer: 1,
      explanation: "A transaction is a sequence of database operations treated as a single unit of work."
    },
    {
      id: 75,
      question: "What is the purpose of indexing in databases?",
      options: ["Increase storage", "Improve query performance", "Add security", "Create backups"],
      correctAnswer: 1,
      explanation: "Indexes improve query performance by allowing faster data retrieval."
    },
    {
      id: 76,
      question: "What is a deadlock in database systems?",
      options: ["Lost connection", "Circular wait situation", "Data corruption", "System crash"],
      correctAnswer: 1,
      explanation: "A deadlock occurs when two or more transactions are waiting for each other to release locks."
    },
    {
      id: 77,
      question: "What does the isolation level SERIALIZABLE mean?",
      options: ["No isolation", "Partial isolation", "Full isolation", "No locking"],
      correctAnswer: 2,
      explanation: "SERIALIZABLE is the highest isolation level providing full isolation between transactions."
    },
    {
      id: 78,
      question: "What is a view in SQL?",
      options: ["Physical table", "Virtual table", "Stored procedure", "Index"],
      correctAnswer: 1,
      explanation: "A view is a virtual table based on the result of an SQL statement."
    },
    {
      id: 79,
      question: "What is the purpose of triggers in databases?",
      options: ["Store data", "Execute actions automatically", "Create indexes", "Manage users"],
      correctAnswer: 1,
      explanation: "Triggers automatically execute actions when specific events occur in the database."
    },
    {
      id: 80,
      question: "What is the difference between clustered and non-clustered indexes?",
      options: ["Storage location", "Data sorting and storage", "Security level", "Query speed"],
      correctAnswer: 1,
      explanation: "Clustered indexes sort and store data rows in the table, while non-clustered indexes create separate structures."
    },
    {
      id: 81,
      question: "What does the CAP theorem state?",
      options: ["Consistency, Availability, Partition tolerance", "Concurrency, Atomicity, Performance", "Capacity, Access, Protection", "Cost, Agility, Performance"],
      correctAnswer: 0,
      explanation: "CAP theorem states that distributed systems can only guarantee two of three properties: Consistency, Availability, and Partition tolerance."
    },
    {
      id: 82,
      question: "What is a stored procedure?",
      options: ["Precompiled SQL code", "Database backup", "User account", "Security setting"],
      correctAnswer: 0,
      explanation: "A stored procedure is precompiled SQL code stored in the database for reuse."
    },
    {
      id: 83,
      question: "What is the purpose of a cursor in SQL?",
      options: ["Move mouse pointer", "Process rows individually", "Create indexes", "Manage connections"],
      correctAnswer: 1,
      explanation: "A cursor is used to process rows individually in a result set."
    },
    {
      id: 84,
      question: "What is referential integrity?",
      options: ["Data accuracy", "Foreign key relationships", "User permissions", "Backup policies"],
      correctAnswer: 1,
      explanation: "Referential integrity ensures that foreign key relationships between tables remain consistent."
    },
    {
      id: 85,
      question: "What is the main purpose of database constraints?",
      options: ["Improve performance", "Enforce business rules", "Create indexes", "Manage users"],
      correctAnswer: 1,
      explanation: "Constraints enforce business rules and data integrity requirements."
    },
    {
      id: 86,
      question: "Which SQL function returns the current date and time?",
      options: ["NOW()", "CURRENT()", "TODAY()", "DATE()"],
      correctAnswer: 0,
      explanation: "NOW() function returns the current date and time in SQL."
    },
    {
      id: 87,
      question: "What is the purpose of the UNION operator?",
      options: ["Combine rows", "Join tables", "Filter data", "Sort results"],
      correctAnswer: 0,
      explanation: "UNION operator combines the result sets of two or more SELECT statements."
    },
    {
      id: 88,
      question: "Which SQL clause limits the number of records returned?",
      options: ["LIMIT", "TOP", "RESTRICT", "BOUND"],
      correctAnswer: 0,
      explanation: "LIMIT clause restricts the number of rows returned by a query."
    },
    {
      id: 89,
      question: "What does the CASE statement do in SQL?",
      options: ["Create loops", "Conditional logic", "Join tables", "Sort data"],
      correctAnswer: 1,
      explanation: "CASE statement provides conditional logic similar to IF-THEN-ELSE in programming."
    },
    {
      id: 90,
      question: "Which SQL function converts a value to uppercase?",
      options: ["UPPER()", "UCASE()", "CAPITAL()", "BIG()"],
      correctAnswer: 0,
      explanation: "UPPER() function converts string values to uppercase in SQL."
    },
    {
      id: 91,
      question: "What is the purpose of the COMMIT statement?",
      options: ["Save transaction", "Undo changes", "Create backup", "Close connection"],
      correctAnswer: 0,
      explanation: "COMMIT statement permanently saves all changes made in the current transaction."
    },
    {
      id: 92,
      question: "Which SQL command rolls back a transaction?",
      options: ["UNDO", "ROLLBACK", "REVERT", "CANCEL"],
      correctAnswer: 1,
      explanation: "ROLLBACK statement undoes all changes made in the current transaction."
    },
    {
      id: 93,
      question: "What does the EXPLAIN statement do?",
      options: ["Execute query", "Show query plan", "Debug code", "Optimize performance"],
      correctAnswer: 1,
      explanation: "EXPLAIN statement shows the execution plan of a query for performance analysis."
    },
    {
      id: 94,
      question: "Which SQL function calculates the average value?",
      options: ["MEAN()", "AVERAGE()", "AVG()", "MEDIAN()"],
      correctAnswer: 2,
      explanation: "AVG() function calculates the average (mean) value of a numeric column."
    },
    {
      id: 95,
      question: "What is the purpose of the BETWEEN operator?",
      options: ["Range checking", "Pattern matching", "Null checking", "Equality testing"],
      correctAnswer: 0,
      explanation: "BETWEEN operator selects values within a specified range, inclusive of boundaries."
    },
    {
      id: 96,
      question: "Which SQL function returns the length of a string?",
      options: ["LENGTH()", "SIZE()", "COUNT()", "LEN()"],
      correctAnswer: 0,
      explanation: "LENGTH() function returns the number of characters in a string."
    },
    {
      id: 97,
      question: "What does the IN operator do?",
      options: ["Check membership", "Perform division", "Create indexes", "Join tables"],
      correctAnswer: 0,
      explanation: "IN operator checks if a value matches any value in a list or subquery."
    },
    {
      id: 98,
      question: "Which SQL statement is used to grant permissions?",
      options: ["ALLOW", "PERMIT", "GRANT", "ACCESS"],
      correctAnswer: 2,
      explanation: "GRANT statement is used to give specific permissions to database users."
    },
    {
      id: 99,
      question: "What is the purpose of the EXISTS operator?",
      options: ["Check table existence", "Test for subquery results", "Verify constraints", "Validate data"],
      correctAnswer: 1,
      explanation: "EXISTS operator tests whether a subquery returns any rows."
    },
    {
      id: 100,
      question: "Which SQL function removes leading and trailing spaces?",
      options: ["TRIM()", "STRIP()", "CLEAN()", "REMOVE()"],
      correctAnswer: 0,
      explanation: "TRIM() function removes leading and trailing spaces from string values."
    }
  ]
};