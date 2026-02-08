import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }) => {
  const [userProgress, setUserProgress] = useState(() => {
    const savedProgress = localStorage.getItem('userProgress');
    return savedProgress ? JSON.parse(savedProgress) : {
      topicsCompleted: [],
      quizScores: {},
      streak: 0,
      totalPoints: 0,
      achievements: [],
      lastActive: new Date().toISOString()
    };
  });

  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  const markTopicComplete = (topicId, score = 100) => {
    setUserProgress(prev => {
      const topicsCompleted = [...new Set([...prev.topicsCompleted, topicId])];
      const quizScores = {
        ...prev.quizScores,
        [topicId]: Math.max(prev.quizScores[topicId] || 0, score)
      };
      
      return {
        ...prev,
        topicsCompleted,
        quizScores,
        totalPoints: prev.totalPoints + (score > 0 ? 10 : 0),
        lastActive: new Date().toISOString()
      };
    });
  };

  const updateStreak = () => {
    const today = new Date().toDateString();
    const lastActive = new Date(userProgress.lastActive).toDateString();
    
    if (today !== lastActive) {
      setUserProgress(prev => ({
        ...prev,
        streak: today === new Date(Date.now() - 86400000).toDateString() 
          ? prev.streak + 1 
          : 1,
        lastActive: new Date().toISOString()
      }));
    }
  };

  const addAchievement = (achievement) => {
    setUserProgress(prev => ({
      ...prev,
      achievements: [...prev.achievements, achievement]
    }));
  };

  const getTopicProgress = (topicId) => {
    return {
      completed: userProgress.topicsCompleted.includes(topicId),
      score: userProgress.quizScores[topicId] || 0
    };
  };

  const getOverallProgress = () => {
    const totalTopics = 20; // Adjust based on actual content
    const completedTopics = userProgress.topicsCompleted.length;
    return {
      percentage: Math.round((completedTopics / totalTopics) * 100),
      completed: completedTopics,
      total: totalTopics,
      streak: userProgress.streak,
      points: userProgress.totalPoints
    };
  };

  const value = {
    userProgress,
    markTopicComplete,
    updateStreak,
    addAchievement,
    getTopicProgress,
    getOverallProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};