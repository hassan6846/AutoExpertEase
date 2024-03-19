
//this Container only login related logic controller to use the api.
// and not token is required AKA AUTHENTICATION...
//input requirements


const LoginUser = async () => {
    try {

        const response = fetch('/api/check', {
            //method
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            // BODY
            body: JSON.stringify(
                // Pass object of postman request vice virsa
                {

                }
                // End of Request object
            )

        })
    } catch (error) {
        console.log(error)
    }
}