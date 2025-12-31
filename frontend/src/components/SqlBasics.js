import React, { useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSqlContent } from '../hooks/useSqlContent';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

const SqlBasics = () => {
  const { content, loading, error } = useSqlContent('basics');
  
  const pageRef = useRef(null);
  const cardRef = useRef(null);
  const headerRef = useRef(null);
  
  const { useAnimatePage, useAnimateCards, useAnimateHeaders } = useGSAPAnimations();
  
  useAnimatePage(pageRef);
  useAnimateCards(cardRef);
  useAnimateHeaders(headerRef);

  if (loading) return <div className="text-center py-5">Loading SQL Basics content...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  if (!content) return <div>No content available</div>;

  return (
    <div ref={pageRef}>
      <div className="bg-primary text-white text-center py-5 mb-4 rounded" ref={headerRef}>
        <h1 className="display-4">{content.title}</h1>
        <p className="lead">{content.description}</p>
      </div>

      {content.sections && content.sections.map((section, index) => (
        <Row key={index} className="mt-4">
          <Col md={12}>
            <Card ref={cardRef}>
              <Card.Body>
                <Card.Title>{section.title}</Card.Title>
                
                {section.content && <p style={section.content_style ? {color: section.content_style.color, fontSize: section.content_style.font_size, fontWeight: section.content_style.font_weight} : {}}>{section.content}</p>}
                
                {section.key_concepts && (
                  <div className="alert alert-info">
                    <p><strong>Key Concepts:</strong></p>
                    <ul>
                      {section.key_concepts.map((concept, idx) => (
                        <li key={idx}>
                          <strong>{concept.name}</strong> - {concept.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {section.subsections && section.subsections.map((subsection, subIdx) => (
                  <div key={subIdx}>
                    <h4>{subsection.title}</h4>
                    {subsection.description && <p style={subsection.content_style ? {color: subsection.content_style.color, fontSize: subsection.content_style.font_size, fontWeight: subsection.content_style.font_weight} : (section.content_style ? {color: section.content_style.color, fontSize: section.content_style.font_size, fontWeight: section.content_style.font_weight} : {})}>{subsection.description}</p>}
                    {subsection.syntax && (
                      <pre className="bg-dark text-light p-3 rounded">
                        <code>{subsection.syntax}</code>
                      </pre>
                    )}
                    {subsection.example && (
                      <div className="alert alert-success">
                        <p><strong>Example:</strong></p>
                        <pre className="bg-light p-3 rounded">
                          <code>{subsection.example}</code>
                        </pre>
                      </div>
                    )}
                    {subsection.functions && (
                      <div>
                        <ul>
                          {subsection.functions.map((func, funcIdx) => (
                            <li key={funcIdx}>
                              <strong>{func.name}</strong> - {func.description}
                            </li>
                          ))}
                        </ul>
                        {subsection.example && (
                          <pre className="bg-dark text-light p-3 rounded">
                            <code>{subsection.example}</code>
                          </pre>
                        )}
                      </div>
                    )}
                  </div>
                ))}
                
                {section.description && (
                  <p style={section.content_style ? {color: section.content_style.color, fontSize: section.content_style.font_size, fontWeight: section.content_style.font_weight} : {}}>{section.description}</p>
                )}
                
                {section.subsections && section.id === 'joins' && section.subsections.map((joinType, joinIdx) => (
                  <div key={joinIdx} className="mt-4">
                    <h4>{joinType.title}</h4>
                    <p style={joinType.content_style ? {color: joinType.content_style.color, fontSize: joinType.content_style.font_size, fontWeight: joinType.content_style.font_weight} : (section.content_style ? {color: section.content_style.color, fontSize: section.content_style.font_size, fontWeight: section.content_style.font_weight} : {})}>{joinType.description}</p>
                    <pre className="bg-dark text-light p-3 rounded">
                      <code>{joinType.example}</code>
                    </pre>
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

export default SqlBasics;