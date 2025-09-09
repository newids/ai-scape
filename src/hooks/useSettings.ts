"use client";

import { useState, useEffect } from 'react';

// Define the settings interface
interface Settings {
  chatgptApiKey?: string;
  claudeApiKey?: string;
  geminiApiKey?: string;
  enableAutoInject?: boolean;
  enableAutoSubmit?: boolean;
}

// Default settings
const defaultSettings: Settings = {
  chatgptApiKey: '',
  claudeApiKey: '',
  geminiApiKey: '',
  enableAutoInject: false,
  enableAutoSubmit: false,
};

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load settings from localStorage on component mount
  useEffect(() => {
    const loadSettings = () => {
      try {
        const savedSettings = localStorage.getItem('ai-scape-settings');
        if (savedSettings) {
          setSettings(JSON.parse(savedSettings));
        }
      } catch (error) {
        console.error('Failed to load settings:', error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadSettings();
  }, []);

  // Update settings and save to localStorage
  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => {
      const updatedSettings = { ...prev, ...newSettings };
      
      // Save to localStorage
      try {
        localStorage.setItem('ai-scape-settings', JSON.stringify(updatedSettings));
      } catch (error) {
        console.error('Failed to save settings:', error);
      }
      
      return updatedSettings;
    });
  };

  // Reset to default settings
  const resetSettings = () => {
    setSettings(defaultSettings);
    try {
      localStorage.removeItem('ai-scape-settings');
    } catch (error) {
      console.error('Failed to reset settings:', error);
    }
  };

  return {
    settings,
    updateSettings,
    resetSettings,
    isLoaded
  };
};
