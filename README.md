# SQL Learning Center

A comprehensive web application for learning SQL concepts with focus on MySQL, Microsoft SQL Server, and PostgreSQL.

## Features

- SQL Basics: Fundamental concepts applicable to all database systems
- MySQL Section: Specific commands and features for MySQL
- Microsoft SQL Server Section: Specific commands and features for MS SQL
- PostgreSQL Section: Specific commands and features for PostgreSQL
- Advanced SQL: Complex queries, optimization techniques, and advanced concepts
- Responsive design with Bootstrap
- Code examples with syntax highlighting

## Requirements

- Python 3.7 or higher
- Flask web framework

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install the required packages:

```bash
pip install -r requirements.txt
```

## Running the Application

1. Navigate to the project directory in your terminal
2. Run the Flask application:

```bash
python app.py
```

3. Open your browser and go to `http://127.0.0.1:5000`

## Project Structure

```
MySql Website/
│
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── templates/             # HTML templates
│   ├── base.html          # Base template with layout
│   ├── index.html         # Home page
│   ├── basics.html        # SQL basics section
│   ├── mysql.html         # MySQL specific content
│   ├── mssql.html         # Microsoft SQL Server content
│   ├── postgresql.html    # PostgreSQL specific content
│   └── advanced.html      # Advanced SQL concepts
└── static/                # Static assets
    ├── css/
    │   └── style.css      # Custom CSS styles
    └── js/
        └── script.js      # JavaScript functionality
```

## Usage

The website provides comprehensive tutorials for SQL databases:

1. **Home**: Overview of the SQL Learning Center
2. **SQL Basics**: Fundamental SQL concepts applicable to all systems
3. **MySQL**: Specific commands and features for MySQL
4. **Microsoft SQL**: Specific commands and features for MS SQL Server
5. **PostgreSQL**: Specific commands and features for PostgreSQL
6. **Advanced SQL**: Complex queries and optimization techniques

Each section includes practical examples, code snippets, and explanations of key concepts.