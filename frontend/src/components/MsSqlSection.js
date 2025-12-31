import React, { useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSqlContent } from '../hooks/useSqlContent';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

const MsSqlSection = () => {
  const { content, loading, error } = useSqlContent('mssql');
  
  const pageRef = useRef(null);
  const cardRef = useRef(null);
  const headerRef = useRef(null);
  
  const { useAnimatePage, useAnimateCards, useAnimateHeaders } = useGSAPAnimations();
  
  useAnimatePage(pageRef);
  useAnimateCards(cardRef);
  useAnimateHeaders(headerRef);

  if (loading) return <div className="text-center py-5">Loading Microsoft SQL Server content...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  if (!content) return <div>No content available</div>;

  return (
    <div ref={pageRef}>
      <div className="bg-primary text-white text-center py-5 mb-4 rounded" ref={headerRef}>
        <h1 className="display-4">{content.title}</h1>
        <p className="lead">{content.description}</p>
      </div>

      {/* Why Learn MSSQL Section */}
      <Row className="mt-4">
        <Col md={12}>
          <div className="why-learn-section">
            <h3>Why Learn Microsoft SQL Server?</h3>
            <Row>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🏢</div>
                  <div className="why-learn-content">
                    <h4>Enterprise Ready</h4>
                    <p>SQL Server is designed for enterprise environments with robust features for large-scale applications.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">📊</div>
                  <div className="why-learn-content">
                    <h4>Business Intelligence</h4>
                    <p>Advanced analytics and reporting tools make it ideal for data-driven decision making.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🔒</div>
                  <div className="why-learn-content">
                    <h4>Security First</h4>
                    <p>Enterprise-grade security with compliance features for sensitive data handling.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🔄</div>
                  <div className="why-learn-content">
                    <h4>Integration</h4>
                    <p>Seamless integration with other Microsoft technologies like .NET, Excel, and Power BI.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">⚡</div>
                  <div className="why-learn-content">
                    <h4>Performance</h4>
                    <p>High-performance capabilities with features like in-memory OLTP and columnstore indexes.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">📈</div>
                  <div className="why-learn-content">
                    <h4>Career Growth</h4>
                    <p>High demand for SQL Server DBAs and developers in enterprise environments.</p>
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
                    <p><strong>Key Features of SQL Server:</strong></p>
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
                          <code>{command}</code>
                        </pre>
                        {cmdIdx < subsection.commands.length - 1 && <br />}
                      </div>
                    ))}
                    
                    {subsection.types && subsection.types.map((typeGroup, typeIdx) => (
                      <div key={typeIdx}>
                        <h5>{typeGroup.category}</h5>
                        <ul>
                          {typeGroup.types.map((type, typeIdx) => (
                            <li key={typeIdx}>{type}</li>
                          ))}
                        </ul>
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

export default MsSqlSection;