import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            setIsAuthenticated(true);
        } else if (!token && window.location.pathname !== '/login') {
            // Redirect to login page only if not already on the login page
            window.location.href = '/login';
        }
    }, []); // Empty dependency array to ensure this effect runs only once

    return isAuthenticated;
}

export default useAuth;
