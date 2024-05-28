import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

 // Empty dependency array to ensure this effect runs only once

    const setAuth = (value) => {
        setIsAuthenticated(value);
    };

    return { isAuthenticated, setAuth };
}

export default useAuth;
