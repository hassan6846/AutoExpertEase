// Api Request in Authentication to check if user already existed or not
// no token is required..



const FindUser = async (Phone: any) => {
    try {
        const response = fetch("/api/check", {
            // Method 
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            // BODY
            body: JSON.stringify(
                // Pass object of postman request vice virsa
                {
                    phone: Phone
                }
                // End of Request object
            )
        })

        //Check if Response Was Good
        if ((await response).ok) {
            const data = (await response).json()
            console.log(data)
        }
        else {
            // Handle error response
            console.error("Failed to send message. HTTP status:", (await response).status);
            const errorData = await (await response).json
            console.error("Error response:", errorData);
        }

    } catch (error) {
        console.log(error)
    }
}

//export finally
export default FindUser