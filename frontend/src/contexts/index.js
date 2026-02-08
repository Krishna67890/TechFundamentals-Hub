import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { ProgressProvider } from './ProgressContext';
import { QuizProvider } from './QuizContext';

export const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <QuizProvider>
          {children}
        </QuizProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
};