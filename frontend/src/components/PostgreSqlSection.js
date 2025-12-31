import React, { useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSqlContent } from '../hooks/useSqlContent';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

const PostgreSqlSection = () => {
  const { content, loading, error } = useSqlContent('postgresql');
  
  const pageRef = useRef(null);
  const cardRef = useRef(null);
  const headerRef = useRef(null);
  
  const { useAnimatePage, useAnimateCards, useAnimateHeaders } = useGSAPAnimations();
  
  useAnimatePage(pageRef);
  useAnimateCards(cardRef);
  useAnimateHeaders(headerRef);

  if (loading) return <div className="text-center py-5">Loading PostgreSQL content...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  if (!content) return <div>No content available</div>;

  return (
    <div ref={pageRef}>
      <div className="bg-primary text-white text-center py-5 mb-4 rounded" ref={headerRef}>
        <h1 className="display-4">{content.title}</h1>
        <p className="lead">{content.description}</p>
      </div>

      {/* Why Learn PostgreSQL Section */}
      <Row className="mt-4">
        <Col md={12}>
          <div className="why-learn-section">
            <h3>Why Learn PostgreSQL?</h3>
            <Row>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🔍</div>
                  <div className="why-learn-content">
                    <h4>Advanced Features</h4>
                    <p>PostgreSQL offers the most advanced open-source database features including JSON support and full-text search.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🧩</div>
                  <div className="why-learn-content">
                    <h4>Extensibility</h4>
                    <p>Highly extensible with custom functions, data types, and procedural languages.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🎯</div>
                  <div className="why-learn-content">
                    <h4>Standards Compliant</h4>
                    <p>Follows SQL standards closely with excellent support for complex queries and transactions.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">📊</div>
                  <div className="why-learn-content">
                    <h4>Geospatial Support</h4>
                    <p>Excellent for geospatial applications with PostGIS extension for geographic objects.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🚀</div>
                  <div className="why-learn-content">
                    <h4>Performance</h4>
                    <p>Advanced indexing options and query optimization for handling complex data.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🤝</div>
                  <div className="why-learn-content">
                    <h4>Active Community</h4>
                    <p>Strong community support with continuous development and improvements.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {content.sections && content.sections.map((section, index) => (
        <Row key={index} className="mt-4">
          <Col md={12}>
            <Card ref={cardRef}>
              <Card.Body>
                <Card.Title>{section.title}</Card.Title>
                
                {section.content && <p style={section.content_style ? {color: section.content_style.color, fontSize: section.content_style.font_size, fontWeight: section.content_style.font_weight} : {}}>{section.content}</p>}
                
                {section.key_features && (
                  <div className="alert alert-info">
                    <p><strong>Key Features of PostgreSQL:</strong></p>
                    <ul>
                      {section.key_features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {section.use_cases && (
                  <div className="alert alert-primary">
                    <p><strong>Common Use Cases:</strong></p>
                    <ul>
                      {section.use_cases.map((useCase, idx) => (
                        <li key={idx}>{useCase}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {section.pros && (
                  <div className="alert alert-success">
                    <p><strong>Pros:</strong></p>
                    <ul>
                      {section.pros.map((pro, idx) => (
                        <li key={idx}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {section.cons && (
                  <div className="alert alert-warning">
                    <p><strong>Cons:</strong></p>
                    <ul>
                      {section.cons.map((con, idx) => (
                        <li key={idx}>{con}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {section.subsections && section.subsections.map((subsection, subIdx) => (
                  <div key={subIdx}>
                    <h4>{subsection.title}</h4>
                    
                    {subsection.commands && subsection.commands.map((command, cmdIdx) => (
                      <div key={cmdIdx}>
                        <pre className="bg-dark text-light p-3 rounded">
                          <code>{command.replace(/\\c/g, '\\c').replace(/\\l/g, '\\l').replace(/\\dt/g, '\\dt').replace(/\\d/g, '\\d')}</code>
                        </pre>
                        {cmdIdx < subsection.commands.length - 1 && <br />}
                      </div>
                    ))}
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default PostgreSqlSection;