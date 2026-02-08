# TechFundamentals Hub

A modern educational website for learning Computer Architecture and Database Systems (SQL/DBMS) with interactive tools and progress tracking.

## 🚀 Features

### Core Features
- **Dual Subject Learning Paths**: Computer Architecture and SQL/DBMS
- **Interactive Modules**: Comprehensive learning content with examples and exercises
- **Progress Tracking**: Detailed progress monitoring with streaks and achievements
- **Dark/Light Mode**: Fully responsive theme switching with system preference detection
- **Quiz System**: Interactive quizzes with instant feedback
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Computer Architecture Topics
1. **Number Systems & Conversions** - Binary, decimal, octal, hexadecimal
2. **Computer Types** - Microcomputers to supercomputers
3. **Architecture Types** - Von Neumann vs Harvard architecture
4. **Binary Arithmetic** - Addition, subtraction, multiplication, division
5. **Signed Binary Numbers** - Signed magnitude, 1's complement, 2's complement

### SQL/DBMS Topics
1. **Database Fundamentals & Architecture** - Basic concepts and architecture
2. **ER Diagrams & Data Modeling** - Entity-relationship diagrams
3. **Keys & Normalization** - Comprehensive coverage of database design
4. **SQL Queries & Joins** - Query writing and JOIN operations
5. **Advanced DBMS Concepts** - Transactions, ACID properties, indexing

### Interactive Tools (Planned)
- SQL Editor with syntax highlighting
- Number System Converter
- ER Diagram Builder
- Schema Visualizer

## 🛠️ Technology Stack

### Frontend
- **React 18** - Component-based UI library
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Context API** - State management for theme, progress, and quiz data
- **LocalStorage** - Client-side data persistence

### Planned Backend (Node.js/Express)
- RESTful API endpoints
- User authentication and management
- Content delivery
- Progress synchronization

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── HomePage.js           # Main landing page
│   │   ├── ComputerArchitecture.js # CA main section
│   │   ├── SqlDbms.js           # SQL/DBMS main section
│   │   ├── Tools.js             # Interactive tools overview
│   │   ├── Profile.js           # User profile and progress
│   │   ├── QuizCenter.js        # Quiz selection and management
│   │   ├── ca-modules/          # Computer Architecture modules
│   │   │   ├── NumberSystems.js
│   │   │   ├── ComputerTypes.js
│   │   │   ├── ArchitectureTypes.js
│   │   │   ├── BinaryArithmetic.js
│   │   │   └── SignedNumbers.js
│   │   └── sql-modules/         # SQL/DBMS modules
│   │       ├── DatabaseFundamentals.js
│   │       ├── ErDiagrams.js
│   │       ├── KeysNormalization.js
│   │       ├── SqlQueries.js
│   │       └── AdvancedDbms.js
│   ├── contexts/
│   │   ├── ThemeContext.js      # Dark/light mode management
│   │   ├── ProgressContext.js   # Learning progress tracking
│   │   ├── QuizContext.js       # Quiz state management
│   │   └── index.js             # Combined context provider
│   ├── App.js                   # Main application component
│   ├── index.js                 # Entry point
│   └── index.css                # Global styles and Tailwind imports
├── public/
│   └── index.html               # HTML template
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
└── demo.html                    # Static demo version
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2563eb` (Computer Architecture)
- **Primary Green**: `#10b981` (SQL/DBMS)
- **Dark Background**: `#1a1a1a`
- **Card Background**: `#2d2d2d` (dark mode)

### Typography
- **Font Family**: Inter (via Google Fonts)
- **Headings**: Semi-bold (600)
- **Body Text**: Regular (400)
- **Code**: Mono font

### Components
- **Buttons**: Primary (blue) and Secondary (green) variants
- **Cards**: Elevated with hover effects and smooth transitions
- **Progress Bars**: Gradient-filled with animation
- **Navigation**: Sticky header with active state indicators

## 🚀 Getting Started

### Prerequisites
- Node.js (>=14.0.0)
- npm (>=6.0.0)

### Installation
1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd react-sql-website/frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Demo Version
For a quick preview without Node.js setup, open `demo.html` in your browser.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px and above
- **Tablet**: 768px and above
- **Desktop**: 1024px and above
- **Large Screens**: 1280px and above

## 🔧 Customization

### Theme Configuration
Modify `tailwind.config.js` to customize:
- Color palette
- Spacing scale
- Typography
- Breakpoints

### Content Management
All educational content is stored in component files and can be easily modified:
- Update module content in respective component files
- Modify quiz questions in the quiz context
- Adjust progress tracking logic in ProgressContext

## 📈 Future Enhancements

### Planned Features
- **Backend Integration**: Node.js API with MongoDB
- **User Authentication**: JWT-based login system
- **Advanced Tools**: Interactive SQL editor, ER diagram builder
- **Community Features**: Discussion forums, peer learning
- **Offline Support**: Service workers for offline content access
- **Export Functionality**: PDF generation for notes and certificates

### Performance Optimizations
- **Code Splitting**: Lazy loading for improved initial load time
- **Image Optimization**: WebP format and responsive images
- **Caching**: Service workers for offline functionality
- **Bundle Optimization**: Tree shaking and minification

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with React and Tailwind CSS
- Educational content curated by computer science professionals
- Inspired by modern learning platforms and educational best practices

---

**TechFundamentals Hub** - Master Computer Architecture & Database Systems