"use client";

import React, { useState } from 'react';
import { useSettings } from '@/hooks/useSettings';

const SettingsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSettings } = useSettings();

  const handleSave = () => {
    // Save settings logic here
    console.log('Saving settings:', settings);
    setIsOpen(false);
  };

  const handleCancel = () => {
    // Reset to original settings
    setIsOpen(false);
  };

  return (
    <div>
      {/* Settings Button in Header */}
      <button 
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        Settings
      </button>

      {/* Settings Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Settings</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">API Keys</label>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">ChatGPT API Key</label>
                      <input
                        type="password"
                        value={settings.chatgptApiKey || ''}
                        onChange={(e) => updateSettings({ chatgptApiKey: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Claude API Key</label>
                      <input
                        type="password"
                        value={settings.claudeApiKey || ''}
                        onChange={(e) => updateSettings({ claudeApiKey: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Gemini API Key</label>
                      <input
                        type="password"
                        value={settings.geminiApiKey || ''}
                        onChange={(e) => updateSettings({ geminiApiKey: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Preferences</label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Enable Auto-Inject</span>
                      <input
                        type="checkbox"
                        checked={settings.enableAutoInject || false}
                        onChange={(e) => updateSettings({ enableAutoInject: e.target.checked })}
                        className="rounded"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Enable Auto-Submit</span>
                      <input
                        type="checkbox"
                        checked={settings.enableAutoSubmit || false}
                        onChange={(e) => updateSettings({ enableAutoSubmit: e.target.checked })}
                        className="rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPopup;
