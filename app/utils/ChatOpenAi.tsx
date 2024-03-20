const OpenAI =require("openai")
x
// Initialize OpenAI instance with your API key
const openai = new OpenAI({
  apiKey: process.env.asd,
});

const fetchOpenAIResponse = async () => {
  try {
    // Make API request to OpenAI using the openai.chat.completions.create method
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: '',
        },
        {
          role: 'assistant',
          content: 'Hello! How can I assist you today?',
        },
        {
          role: 'assistant',
          content: 'Hello! How can I help you today?',
        },
        {
          role: 'assistant',
          content: 'Hello! How can I assist you today?',
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log(response.model); // Log the API response data or handle it as needed

  } catch (error) {
    console.error('Error fetching data from OpenAI:', error);
  }
};

// Call the fetchOpenAIResponse function to execute the API request
fetchOpenAIResponse();
