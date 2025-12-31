import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSearchContent } from '../hooks/useSqlContent';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { search, results, loading } = useSearchContent();
  
  const pageRef = useRef(null);
  const cardRefs = useRef([]);
  const headerRef = useRef(null);
  
  const { useAnimatePage, useAnimateCards, useAnimateHeaders } = useGSAPAnimations();
  
  useAnimatePage(pageRef);
  useAnimateCards(cardRefs);
  useAnimateHeaders(headerRef);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      search(searchQuery);
    }
  };

  return (
    <div ref={pageRef}>
      <div className="bg-primary text-white text-center py-5 mb-4 rounded" ref={headerRef}>
        <h1 className="display-4">SQL Learning Center</h1>
        <p className="lead">Master SQL with our comprehensive guide covering MySQL, Microsoft SQL Server, and PostgreSQL</p>
      </div>

      <Row className="mb-4">
        <Col md={8} className="mx-auto">
          <Form onSubmit={handleSearch}>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search SQL commands, concepts, or examples..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" variant="primary">Search</Button>
            </InputGroup>
          </Form>

          {loading && <p className="mt-2">Searching...</p>}
          
          {results && results.length > 0 && (
            <div className="mt-3">
              <h5>Search Results:</h5>
              <ul className="list-group">
                {results.slice(0, 5).map((result, index) => (
                  <li key={index} className="list-group-item">
                    <Link to={`/${result.section}`}>
                      <strong>{result.title}</strong>
                    </Link>
                    <p className="text-muted small">{result.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>

      {/* Why Learn SQL Section */}
      <Row className="mt-5">
        <Col md={12}>
          <div className="why-learn-section">
            <h3>Why Learn SQL?</h3>
            <Row>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">📊</div>
                  <div className="why-learn-content">
                    <h4>Data Management</h4>
                    <p>SQL is essential for managing and manipulating data in databases, which is crucial in today's data-driven world.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">💼</div>
                  <div className="why-learn-content">
                    <h4>Career Opportunities</h4>
                    <p>SQL skills are in high demand across various industries including tech, finance, healthcare, and more.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🔍</div>
                  <div className="why-learn-content">
                    <h4>Business Intelligence</h4>
                    <p>SQL enables you to extract valuable insights from data to make informed business decisions.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">⚡</div>
                  <div className="why-learn-content">
                    <h4>Efficiency</h4>
                    <p>With SQL, you can quickly query large datasets that would be impossible to analyze manually.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🔧</div>
                  <div className="why-learn-content">
                    <h4>Versatility</h4>
                    <p>SQL works with various database systems and is used in web development, data science, and more.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">📈</div>
                  <div className="why-learn-content">
                    <h4>Growth</h4>
                    <p>Learning SQL opens doors to advanced roles like Data Analyst, Data Scientist, and Database Administrator.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Welcome to SQL Learning Center</Card.Title>
              <Card.Text>
                This website provides comprehensive tutorials and examples for SQL databases including MySQL, Microsoft SQL Server, and PostgreSQL.
                Whether you're a beginner learning SQL basics or an advanced user looking for complex query examples, 
                you'll find everything you need here.
              </Card.Text>
              
              <Row className="mt-4">
                <Col md={4}>
                  <Card className="h-100 text-center mysql-card" ref={el => cardRefs.current[0] = el}>
                    <Card.Body>
                      <Card.Title>MySQL</Card.Title>
                      <Card.Text>The world's most popular open-source database</Card.Text>
                      <Button as={Link} to="/mysql" variant="primary">Learn MySQL</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 text-center mssql-card" ref={el => cardRefs.current[1] = el}>
                    <Card.Body>
                      <Card.Title>Microsoft SQL Server</Card.Title>
                      <Card.Text>Enterprise-grade database solution by Microsoft</Card.Text>
                      <Button as={Link} to="/mssql" variant="primary">Learn MS SQL</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 text-center" ref={el => cardRefs.current[2] = el}>
                    <Card.Body>
                      <Card.Title>PostgreSQL</Card.Title>
                      <Card.Text>The most advanced open-source database</Card.Text>
                      <Button as={Link} to="/postgresql" variant="primary">Learn PostgreSQL</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card ref={el => cardRefs.current[3] = el}>
            <Card.Body>
              <Card.Title>SQL Basics</Card.Title>
              <Card.Text>Start with fundamental SQL concepts and commands that apply to all database systems.</Card.Text>
              <Button as={Link} to="/basics" variant="outline-primary">Start Learning Basics</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card ref={el => cardRefs.current[4] = el}>
            <Card.Body>
              <Card.Title>Advanced SQL</Card.Title>
              <Card.Text>Explore complex queries, stored procedures, and advanced database concepts.</Card.Text>
              <Button as={Link} to="/advanced" variant="outline-primary">Explore Advanced Topics</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>
          <Card ref={el => cardRefs.current[5] = el}>
            <Card.Body>
              <Card.Title>What You'll Learn</Card.Title>
              <Row>
                <Col md={4}>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">SELECT statements</li>
                    <li className="list-group-item">JOIN operations</li>
                    <li className="list-group-item">Data manipulation</li>
                  </ul>
                </Col>
                <Col md={4}>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Database design</li>
                    <li className="list-group-item">Performance optimization</li>
                    <li className="list-group-item">Stored procedures</li>
                  </ul>
                </Col>
                <Col md={4}>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Triggers and functions</li>
                    <li className="list-group-item">Security best practices</li>
                    <li className="list-group-item">Advanced analytics</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;