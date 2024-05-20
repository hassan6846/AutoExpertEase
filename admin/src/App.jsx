import React, { useState } from "react";
import Routing from "./routes/Routes";
import CircularProgress from "@mui/material/CircularProgress";

import Lottie from 'react-lottie'
import animationData from "./assets/Animation - 1711859930533.json"
function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div style={{ height: "100vh", justifyContent: "center", alignItems: "center", width: "100%", display: "flex" }}>
      {loading ? ( // Render CircularProgress if loading state is true
        <Lottie
        width={300}
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,

          }}
        />
      ) : (
        // Render Routing component once loading is complete
        <Routing />
      )}
    </div>
  );
}

export default App;
