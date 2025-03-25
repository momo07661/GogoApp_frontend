// src/services/aiService.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-server-domain/api', // 改成你的後端
  timeout: 10000,
});

export async function getAIResponse(prompt: string) {
  try {
    const response = await instance.post('/ai/chat', { prompt });
    return response.data; // 取回 AI 回覆
  } catch (error) {
    console.error(error);
    return null;
  }
}
