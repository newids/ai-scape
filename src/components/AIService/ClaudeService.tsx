"use client";

import React, { useState, useEffect } from 'react';
import { injectionService } from '@/lib/injectionService';

interface ClaudeServiceProps {
  question: string;
  isActive: boolean;
}

const ClaudeService: React.FC<ClaudeServiceProps> = ({ question, isActive }) => {
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isActive && question.trim() !== '') {
      setIsLoading(true);
      setError(null);
      
      // Simulate API call to Claude
      const fetchClaudeResponse = async () => {
        try {
          // In a real implementation, this would be an actual API call
          // Example: const response = await fetch('/api/claudia', { method: 'POST', body: JSON.stringify({ question }) });
          
          // Simulate network delay
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          // Mock response - in reality this would come from the Claude API
          const mockResponse = `This is a simulated response from Claude for the question: "${question}". 
          
In a real implementation, this would be the actual response from the Claude AI service. The response would include:
- Context-aware answers based on the input question
- Proper formatting and structure
- Error handling for API failures
- Loading states during processing`;
          
          setResponse(mockResponse);
        } catch (err) {
          setError('Failed to get response from Claude. Please check your API key and connection.');
          console.error('Claude API error:', err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchClaudeResponse();
    } else if (!isActive) {
      setResponse(null);
      setIsLoading(false);
      setError(null);
    }
  }, [question, isActive]);

  // Handle question injection from the main input
  useEffect(() => {
    if (isActive && question.trim() !== '') {
      const injectQuestion = async () => {
        try {
          const result = await injectionService.injectQuestion('Claude', question);
          if (!result.success) {
            setError(result.error || 'Failed to inject question into Claude');
          }
        } catch (err) {
          setError('Failed to inject question into Claude: ' + (err as Error).message);
        }
      };
      
      injectQuestion();
    }
  }, [question, isActive]);

  return (
    <div className="p-4 rounded-lg border border-gray-200 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-lg text-orange-600 dark:text-orange-400">Claude</h3>
        {isLoading ? (
          <span className="text-xs text-gray-500 dark:text-gray-400">Loading...</span>
        ) : response ? (
          <span className="text-xs text-green-600 dark:text-green-400">Complete</span>
        ) : null}
      </div>
      
      {error ? (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
        </div>
      ) : isLoading ? (
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
        </div>
      ) : response ? (
        <div className="p-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-md">
          <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line">{response}</p>
        </div>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          {question.trim() ? 'Ready to process question' : 'Enter a question to get started'}
        </p>
      )}
    </div>
  );
};

export default ClaudeService;
