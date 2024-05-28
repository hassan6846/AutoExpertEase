import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');
        setIsAuthenticated(!!token); // Set isAuthenticated based on whether token exists
        
        // Redirect to login page only if not authenticated and not already on the login page
        if (!token && window.location.pathname !== '/login') {
            window.location.href = '/login';
        }
    }, []); // Empty dependency array to ensure this effect runs only once

    const setAuth = (value) => {
        setIsAuthenticated(value);
    };

    return { isAuthenticated, setAuth };
}

export default useAuth;
