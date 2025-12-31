import React, { useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSqlContent } from '../hooks/useSqlContent';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

const MySqlSection = () => {
  const { content, loading, error } = useSqlContent('mysql');
  
  const pageRef = useRef(null);
  const cardRef = useRef(null);
  const headerRef = useRef(null);
  
  const { useAnimatePage, useAnimateCards, useAnimateHeaders } = useGSAPAnimations();
  
  useAnimatePage(pageRef);
  useAnimateCards(cardRef);
  useAnimateHeaders(headerRef);

  if (loading) return <div className="text-center py-5">Loading MySQL content...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  if (!content) return <div>No content available</div>;

  return (
    <div ref={pageRef}>
      <div className="bg-primary text-white text-center py-5 mb-4 rounded" ref={headerRef}>
        <h1 className="display-4">{content.title}</h1>
        <p className="lead">{content.description}</p>
      </div>

      {/* Why Learn MySQL Section */}
      <Row className="mt-4">
        <Col md={12}>
          <div className="why-learn-section">
            <h3>Why Learn MySQL?</h3>
            <Row>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🚀</div>
                  <div className="why-learn-content">
                    <h4>High Performance</h4>
                    <p>MySQL is optimized for speed and reliability, making it ideal for web applications and high-traffic sites.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">💰</div>
                  <div className="why-learn-content">
                    <h4>Cost Effective</h4>
                    <p>Being open-source, MySQL is free to use, making it an economical choice for startups and enterprises.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🌐</div>
                  <div className="why-learn-content">
                    <h4>Wide Adoption</h4>
                    <p>Used by top companies like Facebook, Netflix, and Twitter, with a large community and resources.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🔧</div>
                  <div className="why-learn-content">
                    <h4>Easy Integration</h4>
                    <p>Seamlessly integrates with popular web technologies like PHP, Python, and Node.js.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">📊</div>
                  <div className="why-learn-content">
                    <h4>Data Analysis</h4>
                    <p>Powerful for handling structured data and generating reports for business intelligence.</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why-learn-item">
                  <div className="why-learn-icon">🔒</div>
                  <div className="why-learn-content">
                    <h4>Security</h4>
                    <p>Robust security features with authentication, authorization, and encryption options.</p>
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
                    <p><strong>Key Features of MySQL:</strong></p>
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
                        <pre className="bg-dark text-light p-3 rounded">
                          <code>{typeGroup.types.join('\n')}</code>
                        </pre>
                      </div>
                    ))}
                    
                    {subsection.functions && subsection.functions.map((func, funcIdx) => (
                      <div key={funcIdx}>
                        <pre className="bg-dark text-light p-3 rounded">
                          <code>{func}</code>
                        </pre>
                        {funcIdx < subsection.functions.length - 1 && <br />}
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

export default MySqlSection;