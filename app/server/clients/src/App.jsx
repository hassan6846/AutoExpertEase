import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes/Routes";
import { CircularProgress } from "@mui/material";

import { AuthProvider } from "./Providers/AuthProviders";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Set a delay of 2 seconds for demonstration
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AuthProvider>
        <div style={{ height: "100vh", justifyContent: "center", alignItems: "center", width: "100%", display: "flex" ,overflow:"hidden"}}>
          {loading ? (
            <CircularProgress
 
            />
          ) : (
            <Routing />
          )}
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
