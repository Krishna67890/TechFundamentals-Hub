import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav, Tab, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGSAPAnimations } from './hooks/useGSAPAnimations';

// Import components for different sections
import Home from './components/Home';
import SqlBasics from './components/SqlBasics';
import MySqlSection from './components/MySqlSection';
import MsSqlSection from './components/MsSqlSection';
import PostgreSqlSection from './components/PostgreSqlSection';
import AdvancedSql from './components/AdvancedSql';

const NavigationBar = () => {
  const location = useLocation();

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">SQL Learning Center</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === '/'}>Home</Nav.Link>
            <Nav.Link as={Link} to="/basics" active={location.pathname === '/basics'}>SQL Basics</Nav.Link>
            <Nav.Link as={Link} to="/mysql" active={location.pathname === '/mysql'}>MySQL</Nav.Link>
            <Nav.Link as={Link} to="/mssql" active={location.pathname === '/mssql'}>Microsoft SQL</Nav.Link>
            <Nav.Link as={Link} to="/postgresql" active={location.pathname === '/postgresql'}>PostgreSQL</Nav.Link>
            <Nav.Link as={Link} to="/advanced" active={location.pathname === '/advanced'}>Advanced SQL</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basics" element={<SqlBasics />} />
            <Route path="/mysql" element={<MySqlSection />} />
            <Route path="/mssql" element={<MsSqlSection />} />
            <Route path="/postgresql" element={<PostgreSqlSection />} />
            <Route path="/advanced" element={<AdvancedSql />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;