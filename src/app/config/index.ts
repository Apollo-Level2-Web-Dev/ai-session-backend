import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  openai_api_key: process.env.OPENAI_API_KEY,
  deepseek_api_key: process.env.DEEPSEEK_API_KEY,
  stripe_api_key: process.env.STRIPE_API_KEY,
  stripe_webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
  clerk_publishable_key: process.env.CLERK_PUBLISHABLE_KEY,
  clerk_secret_key: process.env.CLERK_SECRET_KEY,
  public_base_url: process.env.PUBLIC_BASE_URL
};