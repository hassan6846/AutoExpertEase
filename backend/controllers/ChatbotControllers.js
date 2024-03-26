const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: process.env.API_KEY || "1RhWaXkJT4tMRGwkzpbUT3BlbkFJ8NnrKthDmAHKSRpvFk34",
    organization: process.env.ORGANIZATION
});

const ChatBot = async (req, res, next) => {
    const { prompt } = req.body;
    try {
        const stream = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            max_tokens:20,
            messages: [{ role: "user", content: prompt }],
            stream: true,
        });
        let generatedText = ''; // Initialize variable to store generated text
        for await (const chunk of stream) {
            generatedText += chunk.choices[0]?.delta?.content || "";
        }
        res.status(200).json({ status: "success", data: generatedText });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", data: error.message });
    }
}

module.exports = { ChatBot };
