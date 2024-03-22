import { BrowserRouter as Router, Route, Routes } from "react-router-dom"



//pages


import ErrorPage from "../pages/404/ErrorPage"
import React from "react"


const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}
export default Routing