import React, { useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSqlContent } from '../hooks/useSqlContent';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

const AdvancedSql = () => {
  const { content, loading, error } = useSqlContent('advanced');
  
  const pageRef = useRef(null);
  const cardRef = useRef(null);
  const headerRef = useRef(null);
  
  const { useAnimatePage, useAnimateCards, useAnimateHeaders } = useGSAPAnimations();
  
  useAnimatePage(pageRef);
  useAnimateCards(cardRef);
  useAnimateHeaders(headerRef);

  if (loading) return <div className="text-center py-5">Loading Advanced SQL content...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  if (!content) return <div>No content available</div>;

  return (
    <div ref={pageRef}>
      <div className="bg-primary text-white text-center py-5 mb-4 rounded" ref={headerRef}>
        <h1 className="display-4">{content.title}</h1>
        <p className="lead">{content.description}</p>
      </div>

      {/* Why Learn Advanced SQL Section */}
      <Row className="mt-4">
        <Col md={12}>
          <div className="why-learn-section">
            <h3>Why Learn Advanced SQL?</h3>
            <Row>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">💼</div>
                  <div className="why-learn-content">
                    <h4>Career Advancement</h4>
                    <p>Advanced SQL skills are essential for senior roles like Data Architect, Database Administrator, and Data Scientist.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">⚡</div>
                  <div className="why-learn-content">
                    <h4>Performance Optimization</h4>
                    <p>Learn to write efficient queries that can save significant time and resources in large databases.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">📊</div>
                  <div className="why-learn-content">
                    <h4>Complex Data Analysis</h4>
                    <p>Perform advanced analytics, reporting, and business intelligence with complex queries.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🔧</div>
                  <div className="why-learn-content">
                    <h4>Problem Solving</h4>
                    <p>Handle complex business logic and data transformations that basic SQL cannot address.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🔄</div>
                  <div className="why-learn-content">
                    <h4>ETL Processes</h4>
                    <p>Design efficient Extract, Transform, Load processes for data warehousing and migration.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">📈</div>
                  <div className="why-learn-content">
                    <h4>Business Intelligence</h4>
                    <p>Extract valuable insights from complex data relationships for strategic decision making.</p>
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
                
                {section.key_topics && (
                  <div className="alert alert-info">
                    <p><strong>Key Topics:</strong></p>
                    <ul>
                      {section.key_topics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {section.why_use && (
                  <div className="alert alert-success">
                    <p><strong>Why Use Advanced SQL:</strong></p>
                    <ul>
                      {section.why_use.map((reason, idx) => (
                        <li key={idx}>{reason}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {section.where_use && (
                  <div className="alert alert-primary">
                    <p><strong>Where to Use Advanced SQL:</strong></p>
                    <ul>
                      {section.where_use.map((use, idx) => (
                        <li key={idx}>{use}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {section.subsections && section.subsections.map((subsection, subIdx) => (
                  <div key={subIdx}>
                    <h4>{subsection.title}</h4>
                    {subsection.description && <p>{subsection.description}</p>}
                    
                    {subsection.examples && subsection.examples.map((example, exIdx) => (
                      <div key={exIdx}>
                        <pre className="bg-dark text-light p-3 rounded">
                          <code>{example}</code>
                        </pre>
                        {exIdx < subsection.examples.length - 1 && <br />}
                      </div>
                    ))}
                    
                    {subsection.how_it_works && (
                      <div className="alert alert-info">
                        <p><strong>How it works:</strong> {subsection.how_it_works}</p>
                      </div>
                    )}
                    
                    {subsection.when_to_use && (
                      <div className="alert alert-success">
                        <p><strong>When to use:</strong></p>
                        <ul>
                          {subsection.when_to_use.map((use, idx) => (
                            <li key={idx}>{use}</li>
                          ))}
                        </ul>
                      </div>
                    )}
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

export default AdvancedSql;