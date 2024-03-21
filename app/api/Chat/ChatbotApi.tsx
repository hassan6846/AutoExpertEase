const SendBotMessage = async (prompt:any) => {
    try {
        const response = await fetch("http://localhost:4001/api/help/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(
               
                {  prompt: prompt }
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

export default SendBotMessage