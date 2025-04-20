// pages/api/gemini.js (or equivalent path in your Next.js project, e.g., app/api/gemini/route.js for App Router)

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// --- Configuration ---
// Ensure you have GOOGLE_API_KEY set in your .env.local or environment variables
const apiKey = process.env.GOOGLE_API_KEY;

// Specify the Gemini model to use
const MODEL_NAME = "gemini-2.0-flash"; // You could potentially make this configurable via request body if needed

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT,        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];


if (!apiKey) {
  console.error("FATAL ERROR: GOOGLE_API_KEY environment variable not set.");
  // Consider throwing an error during build or logging prominently
}
// Initialize the SDK only if the API key is available
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;


export default async function handler(req, res) {

  // Check if SDK was initialized successfully
  if (!genAI) {
      console.error("GoogleGenerativeAI SDK not initialized due to missing API key.");
      // Return an error response immediately
      return res.status(500).json({ error: "API key not configured on the server." });
  }

  // Only allow POST requests for this endpoint
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']); // Inform the client which methods are allowed
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

 
  const { messages } = req.body;

  // Validate that 'messages' exists, is an array, and is not empty
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Missing or invalid "messages" array in request body.' });
  }


  const lastMessage = messages[messages.length - 1];

  // Ensure the last message is actually from the user
  if (!lastMessage || lastMessage.role !== 'user') {
      // This prevents processing if the request ends unexpectedly (e.g., with an assistant message)
      return res.status(400).json({ error: 'The last message in the request must be from the user.' });
  }
  const currentUserInput = lastMessage.content;

  // --- Prepare History for Gemini ---
  // Get all messages *except* the last one (which is the current user input)
  let historyMessages = messages.slice(0, -1);

  if (historyMessages.length > 0 && historyMessages[0].role === 'assistant') {
    
      historyMessages = historyMessages.slice(1);
  }
 
  const geminiHistory = historyMessages.map(msg => {
      // Filter out any unexpected roles that might have slipped through (shouldn't happen with current frontend)
      if (msg.role !== 'user' && msg.role !== 'assistant') {
          console.warn(`Unexpected role encountered in history processing: ${msg.role}. Skipping message.`);
          return null; // Mark for removal
      }
      return {
          // Map the frontend's 'assistant' role to Gemini's required 'model' role
          role: msg.role === 'assistant' ? 'model' : 'user',
          // Wrap the text content in the required 'parts' array structure
          parts: [{ text: msg.content }]
      };
  }).filter(Boolean); // Remove any entries marked as null (e.g., skipped messages)


  // --- API Call and Response ---
  try {
    // Get the specific generative model instance from the initialized client
    const model = genAI.getGenerativeModel({
        model: MODEL_NAME,
        safetySettings: safetySettings // Apply the defined safety settings
    });

    // Start a chat session with the model, providing the prepared history
    const chat = model.startChat({
        history: geminiHistory,
        // Optional: Add generation configuration parameters
        generationConfig: {
            maxOutputTokens: 1500, // Example: Limit the maximum length of the response
            temperature: 0.8,      // Example: Control the creativity/randomness (0.0 - 1.0)
            // topP: 0.9,          // Example: Nucleus sampling parameter
            // topK: 40,           // Example: Top-K sampling parameter
        },
    });

    // Send the current user's input to the chat session
    const result = await chat.sendMessage(currentUserInput);

    // --- Process Response ---
    // Validate the structure of the response received from the API
    if (!result || !result.response) {
        console.error("Gemini API returned an invalid or empty response structure:", result);
        // Inform the client about the issue
        return res.status(500).json({ error: 'Received invalid response structure from AI.' });
    }

    // Extract the generated text content from the response
    const responseText = result.response.text();

    // --- Send Success Response ---
    // Send the extracted text back to the frontend in the expected format
    res.status(200).json({ output_text: responseText });

  } catch (error) {
    // --- Handle Errors ---
    console.error("Error calling Google Generative AI:", error);

    // Provide a more informative error message if possible
    const errorMessage = error.message || 'An unexpected error occurred while processing the request.';

    // Check if the error indicates content blocking due to safety settings
    // The exact structure might vary slightly depending on the SDK version
    if (error?.response?.promptFeedback?.blockReason) {
         // If blocked, return a 400 Bad Request status with the reason
         console.warn(`Request blocked by safety settings. Reason: ${error.response.promptFeedback.blockReason}`);
         return res.status(400).json({ error: `Request blocked due to safety filters: ${error.response.promptFeedback.blockReason}`});
    }

    // For other types of errors, return a generic 500 Internal Server Error
    res.status(500).json({ error: errorMessage });
  }
}