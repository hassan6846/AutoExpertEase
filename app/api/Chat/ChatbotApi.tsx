const SendBotMessage = async () => {
    try {
        const response = await fetch(`https://api.openai.com/v1/threads/${process.env.OPEN_AI_THREADS_KEY}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPEN_AI_TOKEN}`
            },
            body: JSON.stringify(
               
                { role: "user", content: "How to cook and egg" }
            )
        });

        // Check if request was successful
        if (response.ok) {
            const data = await response.json();
            console.log("Message sent successfully:", data);
        } else {
            // Handle error response
            console.error("Failed to send message. HTTP status:", response.status);
            const errorData = await response.json();
            console.error("Error response:", errorData);
        }
    } catch (error) {
        // Handle network errors
        console.error("Error sending message:", error);
    }
};

SendBotMessage()