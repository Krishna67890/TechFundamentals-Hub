import React, { createContext, useContext, useState, useCallback } from 'react';

const QuizContext = createContext();

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

export const QuizProvider = ({ children }) => {
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const startQuiz = useCallback((quizData) => {
    if (!quizData || !quizData.questions) return;
    
    setActiveQuiz(quizData);
    setSelectedAnswers({});
    setShowFeedback(false);
    setCurrentQuestionIndex(0);
  }, []);

  const submitAnswer = useCallback((questionId, answer, isCorrect) => {
    if (!activeQuiz) return;
    
    // Ensure consistent question ID handling
    const questionIdKey = typeof questionId === 'string' ? questionId : questionId.toString();
    
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIdKey]: answer
    }));
    setShowFeedback(true);
    
    // Auto-hide feedback after 3 seconds
    setTimeout(() => {
      setShowFeedback(false);
    }, 3000);
  }, [activeQuiz]);

  const submitQuiz = useCallback((onComplete) => {
    if (!activeQuiz) return;
    
    // Calculate final score
    const totalQuestions = activeQuiz.questions.length;
    const correctAnswers = Object.entries(selectedAnswers).reduce((count, [questionId, answerIdx]) => {
      const question = activeQuiz.questions.find(q => {
        const questionIdKey = typeof q.id === 'string' ? q.id : q.id.toString();
        return questionIdKey === questionId;
      });
      return count + (question && question.correctAnswer === answerIdx ? 1 : 0);
    }, 0);
    
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Trigger completion callback
    if (onComplete) {
      onComplete({ score, answers: selectedAnswers, totalQuestions, correctAnswers });
    }
    
    // Reset quiz state
    setActiveQuiz(null);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
  }, [activeQuiz, selectedAnswers]);

  const resetQuiz = useCallback(() => {
    setActiveQuiz(null);
    setSelectedAnswers({});
    setShowFeedback(false);
    setCurrentQuestionIndex(0);
  }, []);



  const getQuizProgress = useCallback(() => {
    if (!activeQuiz || !activeQuiz.questions) return 0;
    return Math.round(((currentQuestionIndex + 1) / activeQuiz.questions.length) * 100);
  }, [activeQuiz, currentQuestionIndex]);

  const getCurrentQuestion = useCallback(() => {
    if (!activeQuiz || !activeQuiz.questions || currentQuestionIndex >= activeQuiz.questions.length) {
      return null;
    }
    return activeQuiz.questions[currentQuestionIndex];
  }, [activeQuiz, currentQuestionIndex]);

  const value = {
    activeQuiz,
    selectedAnswers,
    setSelectedAnswers,
    showFeedback,
    setShowFeedback,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    submitQuiz,
    startQuiz,
    submitAnswer,
    resetQuiz,
    getQuizProgress,
    getCurrentQuestion
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};