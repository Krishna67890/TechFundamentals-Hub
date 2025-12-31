# SQL Learning Center - React + Python Full Stack Application

A comprehensive full-stack web application for learning SQL concepts with focus on MySQL, Microsoft SQL Server, and PostgreSQL. Built with React for the frontend and Python Flask for the backend.

## Features

- **Frontend**: React application with modern UI components
- **Backend**: Python Flask API serving SQL content
- **SQL Sections**: Comprehensive coverage of MySQL, Microsoft SQL Server, and PostgreSQL
- **Advanced Topics**: Complex queries, optimization techniques, and advanced concepts
- **Search Functionality**: Search across all SQL content
- **Responsive Design**: Mobile-friendly interface using Bootstrap
- **Interactive Code Examples**: Syntax-highlighted SQL commands

## Tech Stack

- **Frontend**: React, React Bootstrap, React Router
- **Backend**: Python Flask, Flask-CORS
- **API Communication**: Axios
- **Styling**: Bootstrap CSS framework

## Project Structure

```
react-sql-website/
├── frontend/                 # React frontend application
│   ├── public/              # Public assets
│   ├── src/                 # Source code
│   │   ├── components/      # React components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API services
│   │   ├── App.js           # Main application component
│   │   └── index.js         # Entry point
│   └── package.json         # Frontend dependencies
├── backend/                 # Python Flask backend
│   ├── app.py              # Main Flask application
│   └── requirements.txt    # Python dependencies
└── README.md              # This file
```

## Installation and Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd react-sql-website/backend
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Start the backend server:
```bash
python app.py
```

The backend will run on `http://localhost:5001`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd react-sql-website/frontend
```

2. Install React dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

- `GET /api/content` - Get all SQL content
- `GET /api/content/:section` - Get content for a specific section (basics, mysql, mssql, postgresql, advanced)
- `POST /api/search` - Search across all content
- `GET /api/command-examples` - Get SQL command examples

## Available Sections

1. **Home**: Overview with search functionality
2. **SQL Basics**: Fundamental SQL concepts applicable to all systems
3. **MySQL**: Specific commands and features for MySQL
4. **Microsoft SQL**: Specific commands and features for MS SQL Server
5. **PostgreSQL**: Specific commands and features for PostgreSQL
6. **Advanced SQL**: Complex queries and optimization techniques

## Development

To run both frontend and backend simultaneously during development:

1. Start the backend server (port 5001)
2. Start the frontend development server (port 3000)
3. The frontend will proxy API requests to the backend

## Usage

The website provides comprehensive tutorials for SQL databases:

- **Interactive Learning**: Each section includes practical examples and code snippets
- **Search Functionality**: Find specific SQL commands or concepts quickly
- **Cross-Database Coverage**: Learn differences and similarities between SQL dialects
- **Advanced Topics**: Master complex queries, performance optimization, and database design patterns

## Environment Variables

The frontend uses the following environment variable:
- `REACT_APP_API_URL` - API base URL (defaults to `http://localhost:5001/api`)

## Deployment

For production deployment:
1. Build the React frontend: `npm run build`
2. Serve the built files through a web server
3. Deploy the Flask backend with a WSGI server like Gunicorn
4. Configure the API proxy as needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.