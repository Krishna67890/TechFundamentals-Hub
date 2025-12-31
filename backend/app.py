from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes to allow React frontend to communicate

# Sample SQL content data
sql_content = {
    "basics": {
        "title": "SQL Basics",
        "description": "Learn fundamental SQL concepts that apply to all database systems",
        "sections": [
            {
                "id": "introduction",
                "title": "Introduction to SQL",
                "content": "SQL (Structured Query Language) is a standard language for accessing and manipulating databases. It allows you to perform various operations like retrieving data, inserting records, updating records, and deleting records.",
                "content_style": {
                    "color": "#007bff",
                    "font_size": "1.1rem",
                    "font_weight": "normal"
                },
                "key_concepts": [
                    {"name": "DDL", "description": "Data Definition Language: CREATE, ALTER, DROP"},
                    {"name": "DML", "description": "Data Manipulation Language: SELECT, INSERT, UPDATE, DELETE"},
                    {"name": "DCL", "description": "Data Control Language: GRANT, REVOKE"},
                    {"name": "TCL", "description": "Transaction Control Language: COMMIT, ROLLBACK"}
                ]
            },
            {
                "id": "basic_commands",
                "title": "Basic SQL Commands",
                "subsections": [
                    {
                        "title": "SELECT Statement",
                        "description": "The SELECT statement is used to select data from a database.",
                        "content_style": {
                            "color": "#dc3545",
                            "font_size": "1.1rem",
                            "font_weight": "normal"
                        },
                        "syntax": "SELECT column1, column2, ...\nFROM table_name;",
                        "example": "SELECT FirstName, LastName\nFROM Employees;"
                    },
                    {
                        "title": "WHERE Clause",
                        "description": "The WHERE clause is used to filter records.",
                        "content_style": {
                            "color": "#dc3545",
                            "font_size": "1.1rem",
                            "font_weight": "normal"
                        },
                        "syntax": "SELECT column1, column2, ...\nFROM table_name\nWHERE condition;",
                        "example": "SELECT * \nFROM Customers\nWHERE Country='Mexico';"
                    },
                    {
                        "title": "INSERT INTO Statement",
                        "description": "The INSERT INTO statement is used to insert new records in a table.",
                        "content_style": {
                            "color": "#FFD700",
                            "font_size": "1.1rem",
                            "font_weight": "normal"
                        },
                        "syntax": "INSERT INTO table_name (column1, column2, column3, ...)\nVALUES (value1, value2, value3, ...);",
                        "example": "INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)\nVALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');"
                    },
                    {
                        "title": "UPDATE Statement",
                        "description": "The UPDATE statement is used to modify the existing records in a table.",
                        "content_style": {
                            "color": "#FFD700",
                            "font_size": "1.1rem",
                            "font_weight": "normal"
                        },
                        "syntax": "UPDATE table_name\nSET column1 = value1, column2 = value2, ...\nWHERE condition;",
                        "example": "UPDATE Customers\nSET ContactName = 'Alfred Schmidt', City= 'Frankfurt'\nWHERE CustomerID = 1;"
                    },
                    {
                        "title": "DELETE Statement",
                        "description": "The DELETE statement is used to delete existing records in a table.",
                        "content_style": {
                            "color": "#FFD700",
                            "font_size": "1.1rem",
                            "font_weight": "normal"
                        },
                        "syntax": "DELETE FROM table_name WHERE condition;",
                        "example": "DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';"
                    }
                ]
            },
            {
                "id": "functions",
                "title": "Common SQL Functions",
                "subsections": [
                    {
                        "title": "Aggregate Functions",
                        "functions": [
                            {"name": "COUNT()", "description": "Returns the number of rows"},
                            {"name": "SUM()", "description": "Returns the sum of a numeric column"},
                            {"name": "AVG()", "description": "Returns the average value"},
                            {"name": "MAX()", "description": "Returns the largest value"},
                            {"name": "MIN()", "description": "Returns the smallest value"}
                        ],
                        "example": "SELECT COUNT(*), AVG(Price)\nFROM Products;"
                    },
                    {
                        "title": "Common Functions",
                        "functions": [
                            {"name": "UPPER()", "description": "Converts a string to upper case"},
                            {"name": "LOWER()", "description": "Converts a string to lower case"},
                            {"name": "LEN()", "description": "Returns the length of a string"},
                            {"name": "ROUND()", "description": "Rounds a numeric field to the specified number of decimals"}
                        ],
                        "example": "SELECT ProductName, UPPER(Category)\nFROM Products;"
                    }
                ]
            },
            {
                "id": "joins",
                "title": "JOIN Operations",
                "description": "JOINs are used to combine rows from two or more tables, based on a related column between them.",
                "content_style": {
                    "color": "#a0e7ff",
                    "font_size": "1.1rem",
                    "font_weight": "normal"
                },
                "subsections": [
                    {
                        "title": "INNER JOIN",
                        "description": "Returns records that have matching values in both tables.",
                        "content_style": {
                            "color": "#a0e7ff",
                            "font_size": "1.1rem",
                            "font_weight": "normal"
                        },
                        "example": "SELECT Orders.OrderID, Customers.CustomerName\nFROM Orders\nINNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;"
                    },
                    {
                        "title": "LEFT JOIN",
                        "description": "Returns all records from the left table, and the matched records from the right table.",
                        "content_style": {
                            "color": "#a0e7ff",
                            "font_size": "1.1rem",
                            "font_weight": "normal"
                        },
                        "example": "SELECT Customers.CustomerName, Orders.OrderID\nFROM Customers\nLEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID\nORDER BY Customers.CustomerName;"
                    },
                    {
                        "title": "RIGHT JOIN",
                        "description": "Returns all records from the right table, and the matched records from the left table.",
                        "content_style": {
                            "color": "#a0e7ff",
                            "font_size": "1.1rem",
                            "font_weight": "normal"
                        },
                        "example": "SELECT Customers.CustomerName, Orders.OrderID\nFROM Customers\nRIGHT JOIN Orders ON Customers.CustomerID = Orders.CustomerID\nORDER BY Customers.CustomerName;"
                    },
                    {
                        "title": "FULL OUTER JOIN",
                        "description": "Returns all records when there is a match in either left or right table records.",
                        "content_style": {
                            "color": "#a0e7ff",
                            "font_size": "1.1rem",
                            "font_weight": "normal"
                        },
                        "example": "SELECT Customers.CustomerName, Orders.OrderID\nFROM Customers\nFULL OUTER JOIN Orders ON Customers.CustomerID = Orders.CustomerID\nORDER BY Customers.CustomerName;"
                    }
                ]
            }
        ]
    },
    "mysql": {
        "title": "MySQL Database",
        "description": "Learn MySQL - the world's most popular open-source database",
        "sections": [
            {
                "id": "introduction",
                "title": "Introduction to MySQL",
                "content": "MySQL is an open-source relational database management system (RDBMS) based on Structured Query Language (SQL). It is widely used for web applications and is one of the most popular database systems in the world. MySQL is ideal for small to medium-sized applications and is commonly used with web development technologies.",
                "content_style": {
                    "color": "#7bff7b",
                    "font_size": "1.1rem",
                    "font_weight": "normal"
                },
                "key_features": [
                    "Open Source - Free to use and modify",
                    "High Performance - Optimized for speed and reliability",
                    "Scalability - Handles large databases efficiently",
                    "Cross-Platform - Runs on various operating systems",
                    "Replication Support - Enables high availability",
                    "ACID Compliance - Ensures data integrity",
                    "Full-text Search - Powerful search capabilities"
                ],
                "use_cases": [
                    "Web applications",
                    "Content management systems",
                    "E-commerce platforms",
                    "Data warehousing",
                    "Logging applications"
                ],
                "pros": [
                    "Fast and reliable",
                    "Large community support",
                    "Excellent for read-heavy operations",
                    "Good integration with PHP",
                    "Low memory footprint"
                ],
                "cons": [
                    "Limited window functions compared to PostgreSQL",
                    "Fewer advanced data types",
                    "Less robust stored procedure capabilities"
                ]
            },
            {
                "id": "installation",
                "title": "MySQL Installation and Setup",
                "subsections": [
                    {
                        "title": "Installation Commands",
                        "commands": [
                            "# On Ubuntu/Debian\nsudo apt-get update\nsudo apt-get install mysql-server",
                            "# On CentOS/RHEL\nsudo yum install mysql-server",
                            "# On Windows\n# Download from official MySQL website and run installer"
                        ]
                    },
                    {
                        "title": "Starting MySQL Service",
                        "commands": [
                            "# Start MySQL service\nsudo systemctl start mysql",
                            "# Enable MySQL service to start on boot\nsudo systemctl enable mysql",
                            "# Connect to MySQL\nmysql -u root -p"
                        ]
                    }
                ]
            },
            {
                "id": "commands",
                "title": "MySQL Specific Commands",
                "subsections": [
                    {
                        "title": "Database Operations",
                        "commands": [
                            "-- Create Database\nCREATE DATABASE database_name;",
                            "-- Use Database\nUSE database_name;",
                            "-- Show Databases\nSHOW DATABASES;",
                            "-- Drop Database\nDROP DATABASE database_name;"
                        ]
                    },
                    {
                        "title": "Table Operations",
                        "commands": [
                            "-- Create Table\nCREATE TABLE table_name (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    email VARCHAR(255) UNIQUE,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);",
                            "-- Show Tables\nSHOW TABLES;",
                            "-- Describe Table\nDESCRIBE table_name;",
                            "-- Drop Table\nDROP TABLE table_name;"
                        ]
                    },
                    {
                        "title": "MySQL Data Types",
                        "types": [
                            {
                                "category": "Numeric Types",
                                "types": ["INT, TINYINT, SMALLINT, MEDIUMINT, BIGINT", "DECIMAL(M,D), FLOAT, DOUBLE"]
                            },
                            {
                                "category": "Date and Time Types",
                                "types": ["DATE, TIME, DATETIME, TIMESTAMP, YEAR"]
                            },
                            {
                                "category": "String Types",
                                "types": ["CHAR(n), VARCHAR(n), TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT", "BINARY, VARBINARY, BLOB, MEDIUMBLOB, LONGBLOB"]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "functions",
                "title": "MySQL Functions and Features",
                "subsections": [
                    {
                        "title": "String Functions",
                        "functions": [
                            "-- Common String Functions\nSELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;",
                            "SELECT UPPER(name) FROM products;",
                            "SELECT LOWER(name) FROM products;",
                            "SELECT LENGTH(name) FROM products;",
                            "SELECT SUBSTRING(name, 1, 5) FROM products;",
                            "SELECT REPLACE(name, 'old', 'new') FROM products;"
                        ]
                    },
                    {
                        "title": "Date and Time Functions",
                        "functions": [
                            "-- Common Date Functions\nSELECT NOW(); -- Current date and time",
                            "SELECT CURDATE(); -- Current date",
                            "SELECT CURTIME(); -- Current time",
                            "SELECT DATE_FORMAT(NOW(), '%Y-%m-%d %H:%i:%s'); -- Formatted date",
                            "SELECT DATEDIFF('2023-12-31', '2023-01-01'); -- Difference in days",
                            "SELECT DATE_ADD(NOW(), INTERVAL 1 MONTH); -- Add 1 month"
                        ]
                    },
                    {
                        "title": "MySQL Specific Functions",
                        "functions": [
                            "-- MySQL Specific Functions\nSELECT UUID(); -- Generate unique identifier",
                            "SELECT IF(condition, value_if_true, value_if_false);",
                            "SELECT CASE WHEN condition THEN result1 ELSE result2 END;",
                            "SELECT COALESCE(value1, value2, value3); -- Returns first non-null value",
                            "SELECT IFNULL(value, replacement); -- MySQL specific null check"
                        ]
                    }
                ]
            }
        ]
    },
    "mssql": {
        "title": "Microsoft SQL Server",
        "description": "Learn Microsoft SQL Server - enterprise-grade database solution",
        "sections": [
            {
                "id": "introduction",
                "title": "Introduction to Microsoft SQL Server",
                "content": "Microsoft SQL Server is a relational database management system developed by Microsoft. It is designed for enterprise environments and offers advanced features for data management, business intelligence, and analytics. SQL Server is commonly used in corporate environments and integrates well with other Microsoft technologies.",
                "content_style": {
                    "color": "#ffd166",
                    "font_size": "1.1rem",
                    "font_weight": "normal"
                },
                "key_features": [
                    "Enterprise-grade security and compliance",
                    "Advanced analytics and machine learning integration",
                    "High availability and disaster recovery options",
                    "Business intelligence and reporting tools",
                    "Columnstore indexes for data warehousing",
                    "Built-in reporting and analysis services",
                    "AlwaysOn Availability Groups for high availability"
                ],
                "use_cases": [
                    "Enterprise applications",
                    "Business intelligence",
                    "Data warehousing",
                    "Reporting solutions",
                    "Line-of-business applications"
                ],
                "pros": [
                    "Strong integration with Microsoft ecosystem",
                    "Powerful reporting tools",
                    "Excellent performance tuning tools",
                    "Comprehensive security features",
                    "Advanced analytics capabilities"
                ],
                "cons": [
                    "Expensive licensing costs",
                    "Windows-centric (though now available on Linux)",
                    "Resource intensive"
                ]
            },
            {
                "id": "installation",
                "title": "SQL Server Installation and Setup",
                "subsections": [
                    {
                        "title": "Installation Notes",
                        "commands": [
                            "-- SQL Server Installation\n-- 1. Download SQL Server from Microsoft website\n-- 2. Run the installation wizard\n-- 3. Choose edition (Express, Standard, Enterprise)\n-- 4. Configure security settings\n-- 5. Complete installation\n\n-- Connect using SQL Server Management Studio (SSMS)\n-- Or connect using command line tools like sqlcmd"
                        ]
                    },
                    {
                        "title": "Connecting to SQL Server",
                        "commands": [
                            "-- Using sqlcmd\nsqlcmd -S server_name -U username -P password",
                            "-- Connection string example\nServer=server_name;Database=database_name;User Id=username;Password=password;"
                        ]
                    }
                ]
            },
            {
                "id": "commands",
                "title": "SQL Server Specific Commands",
                "subsections": [
                    {
                        "title": "Database Operations",
                        "commands": [
                            "-- Create Database\nCREATE DATABASE database_name;",
                            "-- Use Database\nUSE database_name;",
                            "-- Show Databases\nSELECT name FROM sys.databases;",
                            "-- Drop Database\nDROP DATABASE database_name;"
                        ]
                    },
                    {
                        "title": "Table Operations",
                        "commands": [
                            "-- Create Table\nCREATE TABLE table_name (\n    id INT IDENTITY(1,1) PRIMARY KEY,\n    name NVARCHAR(255) NOT NULL,\n    email NVARCHAR(255) UNIQUE,\n    created_at DATETIME2 DEFAULT GETDATE()\n);",
                            "-- Show Tables\nSELECT TABLE_NAME \nFROM INFORMATION_SCHEMA.TABLES \nWHERE TABLE_TYPE = 'BASE TABLE';",
                            "-- Describe Table\nEXEC sp_columns table_name;",
                            "-- Drop Table\nDROP TABLE table_name;"
                        ]
                    },
                    {
                        "title": "SQL Server Data Types",
                        "types": [
                            {
                                "category": "Numeric Types",
                                "types": ["INT, TINYINT, SMALLINT, BIGINT", "DECIMAL(p,s), NUMERIC(p,s), FLOAT, REAL, MONEY"]
                            },
                            {
                                "category": "Date and Time Types",
                                "types": ["DATE, TIME, DATETIME2, DATETIME, SMALLDATETIME, DATETIMEOFFSET"]
                            },
                            {
                                "category": "String Types",
                                "types": ["CHAR(n), VARCHAR(n), TEXT", "NCHAR(n), NVARCHAR(n), NTEXT (Unicode support)"]
                            },
                            {
                                "category": "Binary Types",
                                "types": ["BINARY(n), VARBINARY(n), IMAGE"]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "postgresql": {
        "title": "PostgreSQL Database",
        "description": "Learn PostgreSQL - the most advanced open-source database",
        "sections": [
            {
                "id": "introduction",
                "title": "Introduction to PostgreSQL",
                "content": "PostgreSQL is a powerful, open-source object-relational database system known for its reliability, feature robustness, and performance. It supports a large part of the SQL standard and offers many modern features. PostgreSQL is often considered the most advanced open-source database and is ideal for complex applications.",
                "content_style": {
                    "color": "#ff9f80",
                    "font_size": "1.1rem",
                    "font_weight": "normal"
                },
                "key_features": [
                    "ACID compliance for reliable transactions",
                    "Extensive SQL standard compliance",
                    "Advanced data types (JSON, arrays, custom types)",
                    "Geospatial data support through PostGIS",
                    "Extensibility with custom functions and operators",
                    "Advanced indexing options",
                    "Window functions and CTEs",
                    "Foreign data wrappers"
                ],
                "use_cases": [
                    "Complex applications",
                    "Geospatial applications",
                    "Data analytics",
                    "Content management systems",
                    "Financial applications"
                ],
                "pros": [
                    "Most advanced open-source database",
                    "Excellent JSON support",
                    "Powerful indexing options",
                    "Extensible architecture",
                    "Strong community and documentation",
                    "Advanced SQL features"
                ],
                "cons": [
                    "Can be slower for simple read operations",
                    "Steeper learning curve",
                    "Less PHP integration compared to MySQL"
                ]
            },
            {
                "id": "installation",
                "title": "PostgreSQL Installation and Setup",
                "subsections": [
                    {
                        "title": "Installation Commands",
                        "commands": [
                            "# On Ubuntu/Debian\nsudo apt-get update\nsudo apt-get install postgresql postgresql-contrib",
                            "# On CentOS/RHEL\nsudo yum install postgresql-server postgresql-contrib\nsudo postgresql-setup initdb",
                            "# On Windows\n# Download from official PostgreSQL website and run installer"
                        ]
                    },
                    {
                        "title": "Starting PostgreSQL Service",
                        "commands": [
                            "# Start PostgreSQL service\nsudo systemctl start postgresql",
                            "# Enable PostgreSQL service to start on boot\nsudo systemctl enable postgresql",
                            "# Connect to PostgreSQL\nsudo -u postgres psql",
                            "# Connect to specific database\npsql -U username -d database_name -h hostname"
                        ]
                    }
                ]
            }
        ]
    },
    "advanced": {
        "title": "Advanced SQL Concepts",
        "description": "Master complex queries, optimization techniques, and advanced database concepts",
        "sections": [
            {
                "id": "overview",
                "title": "Advanced SQL Overview",
                "content": "Advanced SQL concepts go beyond basic SELECT, INSERT, UPDATE, and DELETE statements. These techniques allow for sophisticated data analysis, reporting, and manipulation. Advanced SQL is essential for data analysts, database administrators, and developers working with complex systems.",
                "content_style": {
                    "color": "#007bff",
                    "font_size": "1.1rem",
                    "font_weight": "normal"
                },
                "key_topics": [
                    "Complex queries with multiple joins",
                    "Performance optimization",
                    "Advanced data manipulation",
                    "Database design patterns",
                    "Analytical functions",
                    "Procedural extensions"
                ],
                "why_use": [
                    "Handle complex business logic",
                    "Optimize query performance",
                    "Perform advanced analytics",
                    "Create robust data solutions",
                    "Solve complex reporting needs"
                ],
                "where_use": [
                    "Data warehousing",
                    "Business intelligence",
                    "Complex reporting",
                    "Data migration",
                    "ETL processes"
                ]
            },
            {
                "id": "subqueries",
                "title": "Subqueries and Nested Queries",
                "subsections": [
                    {
                        "title": "Subqueries in WHERE Clause",
                        "examples": [
                            "-- Find employees who earn more than the average salary\nSELECT employee_name, salary\nFROM employees\nWHERE salary > (\n    SELECT AVG(salary)\n    FROM employees\n);",
                            "-- Find customers who have placed orders\nSELECT customer_name\nFROM customers\nWHERE customer_id IN (\n    SELECT DISTINCT customer_id\n    FROM orders\n);"
                        ],
                        "how_it_works": "Subqueries in WHERE clauses are executed first to provide a result set that the outer query uses for filtering. They can return a single value, a single row, a single column, or a table.",
                        "when_to_use": [
                            "When you need to filter based on results from another query",
                            "For complex conditional logic",
                            "To avoid multiple separate queries"
                        ]
                    },
                    {
                        "title": "Subqueries in FROM Clause (Derived Tables)",
                        "examples": [
                            "-- Calculate department averages and compare to company average\nSELECT dept_avg.dept_name, dept_avg.avg_salary\nFROM (\n    SELECT department, AVG(salary) AS avg_salary\n    FROM employees\n    GROUP BY department\n) AS dept_avg\nWHERE dept_avg.avg_salary > (\n    SELECT AVG(salary) FROM employees\n);"
                        ],
                        "how_it_works": "Derived tables (subqueries in FROM) create a temporary result set that becomes a virtual table for the outer query. The result is treated as a regular table.",
                        "when_to_use": [
                            "When you need to aggregate data before further processing",
                            "To create temporary datasets",
                            "For complex reporting requirements"
                        ]
                    },
                    {
                        "title": "Correlated Subqueries",
                        "examples": [
                            "-- Find employees who earn more than the average in their department\nSELECT e1.employee_name, e1.salary, e1.department\nFROM employees e1\nWHERE e1.salary > (\n    SELECT AVG(e2.salary)\n    FROM employees e2\n    WHERE e2.department = e1.department\n);"
                        ],
                        "how_it_works": "Correlated subqueries reference columns from the outer query and are executed once for each row processed by the outer query.",
                        "when_to_use": [
                            "When the subquery depends on values from the outer query",
                            "For row-by-row processing logic",
                            "To compare each row with an aggregate value"
                        ]
                    }
                ]
            },
            {
                "id": "window_functions",
                "title": "Window Functions",
                "subsections": [
                    {
                        "title": "Ranking Functions",
                        "examples": [
                            "-- Rank employees by salary within each department\nSELECT \n    employee_name,\n    department,\n    salary,\n    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num,\n    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank,\n    DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_rank\nFROM employees;"
                        ],
                        "how_it_works": "Window functions perform calculations across a set of rows related to the current row without collapsing the result set into a single row like aggregate functions do.",
                        "when_to_use": [
                            "Ranking data within partitions",
                            "Creating running totals",
                            "Accessing previous/next values",
                            "Calculating moving averages"
                        ]
                    },
                    {
                        "title": "Analytical Functions",
                        "examples": [
                            "-- Calculate moving averages\nSELECT \n    date,\n    sales,\n    AVG(sales) OVER (\n        ORDER BY date \n        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW\n    ) AS moving_avg_3_days\nFROM daily_sales;\n\n-- Lead and Lag functions\nSELECT \n    product_name,\n    price,\n    LAG(price) OVER (ORDER BY date) AS prev_price,\n    LEAD(price) OVER (ORDER BY date) AS next_price,\n    price - LAG(price) OVER (ORDER BY date) AS price_change\nFROM products;"
                        ],
                        "how_it_works": "Analytical functions like LAG, LEAD, FIRST_VALUE, and LAST_VALUE allow access to data from other rows relative to the current row.",
                        "when_to_use": [
                            "Time series analysis",
                            "Comparing current values to previous values",
                            "Calculating differences between periods",
                            "Accessing previous/next records"
                        ]
                    }
                ]
            },
            {
                "id": "ctes",
                "title": "Common Table Expressions (CTEs)",
                "subsections": [
                    {
                        "title": "Simple CTEs",
                        "examples": [
                            "-- Define a CTE for complex calculations\nWITH department_stats AS (\n    SELECT \n        department,\n        AVG(salary) AS avg_salary,\n        MAX(salary) AS max_salary,\n        MIN(salary) AS min_salary\n    FROM employees\n    GROUP BY department\n)\nSELECT \n    e.employee_name,\n    e.salary,\n    ds.avg_salary,\n    (e.salary - ds.avg_salary) AS diff_from_avg\nFROM employees e\nJOIN department_stats ds ON e.department = ds.department;"
                        ],
                        "how_it_works": "CTEs create named temporary result sets that exist only within the execution of a single statement, making complex queries more readable.",
                        "when_to_use": [
                            "Breaking down complex queries",
                            "Improving query readability",
                            "Avoiding deeply nested subqueries",
                            "Reusing the same subquery multiple times"
                        ]
                    },
                    {
                        "title": "Recursive CTEs",
                        "examples": [
                            "-- Generate a series of numbers\nWITH RECURSIVE number_series AS (\n    SELECT 1 AS n\n    UNION ALL\n    SELECT n + 1\n    FROM number_series\n    WHERE n < 10\n)\nSELECT * FROM number_series;\n\n-- Hierarchical data (organizational chart)\nWITH RECURSIVE org_chart AS (\n    -- Base case: top-level managers\n    SELECT employee_id, employee_name, manager_id, 0 AS level\n    FROM employees\n    WHERE manager_id IS NULL\n    \n    UNION ALL\n    \n    -- Recursive case: subordinates\n    SELECT e.employee_id, e.employee_name, e.manager_id, oc.level + 1\n    FROM employees e\n    JOIN org_chart oc ON e.manager_id = oc.employee_id\n)\nSELECT * FROM org_chart\nORDER BY level, employee_name;"
                        ],
                        "how_it_works": "Recursive CTEs call themselves to process hierarchical or tree-structured data, with a base case and a recursive case.",
                        "when_to_use": [
                            "Processing hierarchical data",
                            "Generating sequences",
                            "Traversing tree structures",
                            "Flattening nested relationships"
                        ]
                    }
                ]
            },
            {
                "id": "performance",
                "title": "Performance Optimization",
                "subsections": [
                    {
                        "title": "Query Optimization Techniques",
                        "examples": [
                            "-- Use EXISTS instead of IN for subqueries\n-- Instead of:\nSELECT * FROM customers \nWHERE customer_id IN (SELECT customer_id FROM orders);\n\n-- Use:\nSELECT * FROM customers \nWHERE EXISTS (SELECT 1 FROM orders WHERE orders.customer_id = customers.customer_id);\n\n-- Use UNION ALL instead of UNION when duplicates are acceptable\nSELECT customer_id FROM active_customers\nUNION ALL\nSELECT customer_id FROM archived_customers;\n\n-- Limit result sets when possible\nSELECT * FROM large_table\nORDER BY date_created DESC\nLIMIT 100;"
                        ],
                        "how_it_works": "Query optimization involves techniques to improve execution speed and resource usage, often by reducing the amount of data processed.",
                        "when_to_use": [
                            "Working with large datasets",
                            "Improving slow queries",
                            "Reducing server load",
                            "Optimizing frequently executed queries"
                        ]
                    },
                    {
                        "title": "Indexing Strategies",
                        "examples": [
                            "-- Create composite indexes for multi-column queries\nCREATE INDEX idx_customer_date_status \nON orders (customer_id, order_date, status);\n\n-- Covering index to avoid table lookups\nCREATE INDEX idx_covering \nON orders (customer_id, order_date) \nINCLUDE (total_amount, status);\n\n-- Partial index for frequently filtered data\nCREATE INDEX idx_active_customers \nON customers (last_login_date) \nWHERE status = 'active';"
                        ],
                        "how_it_works": "Indexes are data structures that improve the speed of data retrieval operations on database tables at the cost of additional writes and storage space.",
                        "when_to_use": [
                            "Frequently queried columns",
                            "Columns used in WHERE clauses",
                            "Join columns",
                            "Columns used in ORDER BY"
                        ]
                    }
                ]
            }
        ]
    }
}

@app.route('/')
def home():
    return jsonify({"message": "SQL Learning API is running!"})

@app.route('/api/content/<section>')
def get_content(section):
    """Get content for a specific SQL section"""
    if section in sql_content:
        return jsonify(sql_content[section])
    else:
        return jsonify({"error": "Section not found"}), 404

@app.route('/api/content')
def get_all_content():
    """Get all SQL content"""
    return jsonify(sql_content)

@app.route('/api/search', methods=['POST'])
def search_content():
    """Search for specific SQL commands or concepts"""
    data = request.get_json()
    query = data.get('query', '').lower()
    
    results = []
    for section_key, section_data in sql_content.items():
        # Search in section title and description
        if query in section_data['title'].lower() or query in section_data['description'].lower():
            results.append({
                'section': section_key,
                'title': section_data['title'],
                'description': section_data['description'],
                'type': 'section'
            })
        
        # Search in subsections
        for section in section_data.get('sections', []):
            if query in section.get('title', '').lower():
                results.append({
                    'section': section_key,
                    'title': section['title'],
                    'description': section.get('content', ''),
                    'type': 'subsection'
                })
            
            for subsection in section.get('subsections', []):
                if query in subsection.get('title', '').lower():
                    results.append({
                        'section': section_key,
                        'title': subsection['title'],
                        'description': subsection.get('description', ''),
                        'type': 'subsection'
                    })
    
    return jsonify({"results": results})

@app.route('/api/command-examples')
def get_command_examples():
    """Get examples of SQL commands"""
    examples = {
        "select": {
            "syntax": "SELECT column1, column2, ... FROM table_name;",
            "description": "Retrieve data from one or more tables",
            "examples": [
                "SELECT * FROM employees;",
                "SELECT first_name, last_name FROM employees WHERE department = 'IT';"
            ]
        },
        "insert": {
            "syntax": "INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);",
            "description": "Insert new records into a table",
            "examples": [
                "INSERT INTO employees (first_name, last_name, department) VALUES ('John', 'Doe', 'IT');"
            ]
        },
        "update": {
            "syntax": "UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;",
            "description": "Modify existing records in a table",
            "examples": [
                "UPDATE employees SET salary = salary * 1.10 WHERE department = 'IT';"
            ]
        },
        "delete": {
            "syntax": "DELETE FROM table_name WHERE condition;",
            "description": "Remove records from a table",
            "examples": [
                "DELETE FROM employees WHERE status = 'inactive';"
            ]
        }
    }
    return jsonify(examples)

if __name__ == '__main__':
    app.run(debug=True, port=5001)