import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from "react"


//pages

import AdminOutlet from "../pages/dashboard/Sidebar/AdminOutlet"
import ErrorPage from "../pages/404/ErrorPage"
import Login from "../pages/Login/Login"

 // Nested 
 import Overview from "../pages/dashboard/nested/Oveview/Overview"
import Stats from "../pages/dashboard/nested/Stats/Stats"
import ProductRequests from "../pages/dashboard/nested/ProductRequests/ProductRequests"

import AllProducts from "../pages/dashboard/nested/AllProducts/AllProducts"
import UserManegment from "../pages/dashboard/nested/UserManegment/UserManegment"
import VendorRequest from "../pages/dashboard/nested/VendorRequest/VendorRequest"
import ExpertRequests from "../pages/dashboard/nested/ExpertRequests/ExpertRequests"
import Logout from "../pages/dashboard/nested/Logout/Logout"

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdminOutlet/>}>

                    <Route path="/admin" element={<Overview/>}/>
                   <Route path="/stats" element={<Stats/>}/>
                   <Route path="/products" element={<AllProducts/>}/>
                   <Route path="/products/add" element={<ProductRequests/>}/>

                   <Route path="/users" element={<UserManegment/>}/>
                   <Route path="/vendorrequest" element={<VendorRequest/>}/>
                   <Route path="/expertrequests" element={<ExpertRequests/>}/>
                   <Route path="/logout" element={<Logout/>}/>
                   <Route path="*" element={<ErrorPage/>}/>
                </Route>

                <Route path="*" element={<ErrorPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}
export default Routing