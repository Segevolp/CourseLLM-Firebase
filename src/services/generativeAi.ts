import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// IMPORTANT: Replace with your actual API key.
// Consider using environment variables for security.
const API_KEY = "YOUR_API_KEY";

if (!API_KEY || API_KEY === "YOUR_API_KEY") {
  console.warn(
    "Gemini API key is not set. Please add your API key in src/services/generativeAi.ts"
  );
}

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const tutorPrompt = `
  Your role is to help the student learn by asking guiding questions.
  - DO NOT provide direct answers, definitions, or code solutions.
  - Instead, respond to the student's questions by asking another question that helps them think for themselves.
  - Gently guide them toward the learning objectives.
  - Be encouraging, patient, and inquisitive.
`;

export const askGemini = async (
  message: string,
  courseName: string,
  courseDescription: string,
  chatHistory: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  if (!API_KEY || API_KEY === "YOUR_API_KEY") {
    return "Please configure your Gemini API key in `src/services/generativeAi.ts` to use the AI Tutor.";
  }

  try {
    const chat = model.startChat({
        history: [
            ...chatHistory,
            {
                role: "user",
                parts: [{ text: `This is a conversation about ${courseName}: ${courseDescription}` }]
            },
            {
                role: "model",
                parts: [{ text: `Understood. I will act as an AI tutor for ${courseName} and only ask guiding questions.` }]
            }
        ],
        generationConfig: {
          maxOutputTokens: 200,
          temperature: 0.7,
        },
        safetySettings: [
            { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
            { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
        ]
      });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) { 
    console.error("Error calling Gemini API:", error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
};
