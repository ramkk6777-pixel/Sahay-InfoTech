
import { GoogleGenAI, Type } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "AI Solutions Advisor" for Sahay InfoTech, a premier technology consulting firm.
Your goal is to help potential clients understand which services Sahay InfoTech offers that best fit their business needs.

Sahay InfoTech Services:
1. Custom Software Development: Web/Mobile apps, enterprise software.
2. AI & Machine Learning: Predictive analytics, Generative AI, Automation.
3. Cloud Infrastructure: Cloud migration, DevOps, AWS/Azure/GCP.
4. Cybersecurity: Audits, threat protection, compliance.
5. Data Analytics: BI, data engineering, visualization.
6. Mobile Solutions: iOS/Android dev.

Guidelines:
- Be professional, innovative, and helpful.
- Analyze the user's business problem and recommend specific Sahay services.
- Keep responses concise but insightful.
- If they ask for pricing, suggest they contact the sales team via the contact form on the website.
- Do not mention other companies. Focus on Sahay InfoTech.
- Use bullet points for recommendations.
`;

export const getAIAdvisorResponse = async (history: ChatMessage[], currentMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: currentMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I apologize, but I'm having trouble connecting to my knowledge base. Please try again or use our contact form.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently undergoing maintenance. Please reach out to our human consultants via the contact section below!";
  }
};
