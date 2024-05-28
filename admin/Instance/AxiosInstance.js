import axios from "axios"

//AXIOS INSTANCE
const ApiInstance=axios.create({
    baseURL:'http://localhost:4001/api',//Replace with any Current url
    header:{
        'Content-Type': 'application/json',
    }
})
//INCERCEPTOR
api.interceptors.request.use(
    async (config) => {
        // Get the token from local storage or your preferred storage method
        const token = localStorage.getItem('token');
        
        if (token) {
            const isValid = await verifyToken(token);

            if (!isValid) {
                // Handle the invalid token case
                localStorage.removeItem('token'); // Remove the invalid token
                // Optionally, redirect to login or show an error message
                window.location.href = '/login'; // Redirect to login
                return Promise.reject(new Error('Invalid token'));
            }

            // Add the token to the request headers if valid
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
ApiInstance.interceptors.response.use(
    response => response,
    error => {
        // Handle errors globally
        return Promise.reject(error);
    }
);
export default ApiInstance;