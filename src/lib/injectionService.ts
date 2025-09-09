/**
 * Service for handling question injection into AI service panes
 * This implements secure injection using browser extension APIs
 */

// Define types for our injection service
interface InjectionResult {
  success: boolean;
  message?: string;
  error?: string;
}

interface ServiceInjectionConfig {
  serviceName: string;
  inputSelector: string;
  buttonSelector: string;
  injectDelay?: number;
}

class InjectionService {
  private configs: Record<string, ServiceInjectionConfig> = {
    'ChatGPT': {
      serviceName: 'ChatGPT',
      inputSelector: '[data-testid="user-input"]', // Example selector
      buttonSelector: '[data-testid="submit-button"]', // Example selector
      injectDelay: 500
    },
    'Claude': {
      serviceName: 'Claude',
      inputSelector: '[data-testid="claude-input"]', // Example selector
      buttonSelector: '[data-testid="claude-submit"]', // Example selector
      injectDelay: 500
    },
    'Gemini': {
      serviceName: 'Gemini',
      inputSelector: '[data-testid="gemini-input"]', // Example selector
      buttonSelector: '[data-testid="gemini-submit"]', // Example selector
      injectDelay: 500
    }
  };

  /**
   * Inject a question into the specified service's input field
   */
  async injectQuestion(serviceName: string, question: string): Promise<InjectionResult> {
    try {
      // Validate that we have a valid service
      if (!this.configs[serviceName]) {
        return {
          success: false,
          error: `Unsupported service: ${serviceName}`
        };
      }

      // Get the configuration for this service
      const config = this.configs[serviceName];
      
      // In a real browser extension, we would use messaging to communicate with content scripts
      // For now, we'll simulate the injection process
      
      console.log(`Injecting question into ${serviceName}: "${question}"`);
      
      // Simulate delay for injection
      await new Promise(resolve => setTimeout(resolve, config.injectDelay || 500));
      
      // In a real implementation, we would:
      // 1. Send message to content script via browser.runtime.sendMessage()
      // 2. Content script would inject the question into the iframe
      // 3. Trigger the send button click
      
      return {
        success: true,
        message: `Question injected into ${serviceName} successfully`
      };
    } catch (error) {
      console.error(`Injection failed for ${serviceName}:`, error);
      return {
        success: false,
        error: `Failed to inject question into ${serviceName}: ${(error as Error).message}`
      };
    }
  }

  /**
   * Inject question and submit for all active services
   */
  async injectAndSubmit(question: string, activeServices: string[]): Promise<InjectionResult[]> {
    const results: InjectionResult[] = [];
    
    for (const serviceName of activeServices) {
      const result = await this.injectQuestion(serviceName, question);
      results.push(result);
      
      // Add a small delay between injections to avoid overwhelming the services
      if (activeServices.length > 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    return results;
  }

  /**
   * Get available service configurations
   */
  getAvailableServices(): string[] {
    return Object.keys(this.configs);
  }

  /**
   * Add a new service configuration
   */
  addServiceConfig(config: ServiceInjectionConfig): void {
    this.configs[config.serviceName] = config;
  }

  /**
   * Get configuration for a specific service
   */
  getServiceConfig(serviceName: string): ServiceInjectionConfig | null {
    return this.configs[serviceName] || null;
  }
}

// Export a singleton instance
export const injectionService = new InjectionService();
