/**
 * Application configuration
 * Centralizes all environment variables and configuration settings
 */

interface Config {
  port: number;
  env: string;
  database: {
    url: string | undefined;
  };
  api: {
    secret: string | undefined;
  };
  openai: {
    apiKey: string | undefined;
  };
}

const config: Config = {
  // Server configuration
  port: parseInt(process.env.PORT || '3000', 10),
  env: process.env.NODE_ENV || 'development',

  // Database configuration
  database: {
    url: process.env.DATABASE_URL
  },

  /**
   * API configuration
   * - `api.secret` would be used to secure your own application's internal APIs or webhooks (for example, requiring a secret to access protected endpoints).
   * - This is entirely separate from `openai.apiKey`, which is needed to communicate with the external OpenAI API.
   * - If you have not set up internal API security or do not have endpoints requiring this secret yet, you likely do not need `API_SECRET` currently.
   */
  api: {
    secret: process.env.API_SECRET
  },

  // OpenAI configuration
  openai: {
    apiKey: process.env.OPENAI_API_KEY
  }
};

export default config;
