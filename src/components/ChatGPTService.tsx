"use client";

import React, { useState } from 'react';
import { useSettings } from '@/hooks/useSettings';

interface ChatGPTServiceProps {
  question: string;
  isActive: boolean;
}

const ChatGPTService: React.FC<ChatGPTServiceProps> = ({ question, isActive }) => {
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { settings } = useSettings();

  const handleSubmit = async () => {
    if (!question.trim() || !settings.chatgptApiKey) return;
    
    setIsLoading(true);
    setResponse(null);
    
    try {
      // In a real implementation, this would call the OpenAI API
      // For now, we'll simulate an API call with a mock response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockResponse = `This is a simulated response from ChatGPT for your question: "${question}". In a real implementation, this would be the actual API response from OpenAI's GPT model.`;
      setResponse(mockResponse);
    } catch (error) {
      setResponse('Error retrieving response from ChatGPT');
      console.error('ChatGPT API error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle the submit when the component becomes active
  React.useEffect(() => {
    if (isActive && question.trim()) {
      handleSubmit();
    }
  }, [isActive, question]);

  return (
    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg text-green-600 dark:text-green-400">ChatGPT</h3>
        {isLoading ? (
          <span className="text-xs text-gray-500 dark:text-gray-400">Loading...</span>
        ) : response ? (
          <span className="text-xs text-green-600 dark:text-green-400">Complete</span>
        ) : null}
      </div>
      
      {response ? (
        <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
          <p className="text-sm text-gray-800 dark:text-gray-200">{response}</p>
        </div>
      ) : isLoading ? (
        <div className="mt-3 space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6 animate-pulse"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4 animate-pulse"></div>
        </div>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          {question.trim() ? 'Ready to process question' : 'Enter a question to get started'}
        </p>
      )}
    </div>
  );
};

export default ChatGPTService;
