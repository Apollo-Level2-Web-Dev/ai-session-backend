import OpenAI from "openai";
import config from "../config";

export const deepseek = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: config.deepseek_api_key
});