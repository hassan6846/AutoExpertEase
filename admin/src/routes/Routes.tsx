import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from "react"


//pages

import AdminOutlet from "../pages/dashboard/Sidebar/AdminOutlet"
import ErrorPage from "../pages/404/ErrorPage"
import Login from "../pages/Login/Login"
import AllProducts from "../pages/dashboard/nested/AllProducts/AllProducts"



const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdminOutlet/>}>
                    <Route path="/" element={<AllProducts/>}/>
                   
                </Route>
                <Route path="*" element={<ErrorPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}
export default Routing