import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { MDBInput } from "mdb-react-ui-kit";
import { Button as MDBBtn } from '@mui/material';
import toast, { Toaster } from "react-hot-toast";

import "./Login.css";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setIsSubmitting(true);

      try {
        const response = await fetch("http://localhost:4001/api/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        });

        if (response.ok) {
          // Handle successful login
          toast.success("Successfully logged in");
        } else {
          const data = await response.json();
          toast.error(data.msg || "Error while logging in");
        }
      } catch (error) {
        console.log(error);
        toast.error("Error while logging in");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <div>
      <section className="login_wrapper-100">
        <div>
          <Toaster />
        </div>
        <div className="login-container">
          <h1 className="login-heading">Login account</h1>

          <form onSubmit={formik.handleSubmit} className="login-form">
            <MDBInput
              {...formik.getFieldProps("email")}
              className="login-input"
              type="email"
              placeholder="Enter Email"
              label="Email"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}

            <MDBInput
              {...formik.getFieldProps("password")}
              className="login-input"
              type="password"
              placeholder="Enter Password"
              label="Password"
              autoComplete="true"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
            <Link className="forgot-link" to="#">
              (contact Administrations)
            </Link>
            <MDBBtn
              type="submit"
              style={{ backgroundColor: "#4BB497", border: "0px", color: "#ffff" }}
              className="otp-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </MDBBtn>
          </form>
          <div className="login_flex">
            <p className="login_page_tag_line">DON'T HAVE ACCOUNT?</p>
            <Link to="#" className="register">
              Contact Your Admin's
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
