import { React } from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import ErrorPage from "../pages/Error/Error";

const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<ErrorPage />} />
        </Routes>


    );
};

export default Routing;
