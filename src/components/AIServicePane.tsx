import React from 'react';

interface AIServicePaneProps {
  serviceName: string;
  isActive: boolean;
  onClick?: () => void;
}

const AIServicePane = ({ serviceName, isActive, onClick }: AIServicePaneProps) => {
  return (
    <div 
      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
        isActive 
          ? 'border-blue-500 bg-blue-500 dark:bg-blue-900/20' 
          : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{serviceName}</h3>
        <div className={`w-4 h-4 rounded-full border ${
          isActive ? 'bg-blue-500 border-blue-500' : 'border-gray-300 dark:border-gray-600'
        }`}></div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        {serviceName === 'ChatGPT' 
          ? 'OpenAI\'s advanced language model' 
          : serviceName === 'Claude' 
          ? 'Anthropic\'s AI assistant' 
          : 'Google\'s powerful AI model'
        }
      </p>
      <div className="mt-3 flex items-center gap-2">
        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className={`h-full ${
            serviceName === 'ChatGPT' ? 'bg-green-500' : 
            serviceName === 'Claude' ? 'bg-orange-500' : 'bg-purple-500'
          }`} style={{ width: `${Math.random() * 40 + 60}%` }}></div>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">Ready</span>
      </div>
    </div>
  );
};

export default AIServicePane;
