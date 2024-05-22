import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { MDBInput, } from "mdb-react-ui-kit";
import { Button as MDBBtn } from '@mui/material';

import toast, { Toaster } from "react-hot-toast";
// Css
import "./Login.css";
// components and Library.



const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Track login submission
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Please fill the email field";
      }

      if (!values.password) {
        errors.password = "Please fill the password field";
      }

      if (values.password.length < 7) {
        errors.password = "Please valid Password You might be joking";
      }

      return errors;
    },
    onSubmit: async (values) => {
      if (!formik.isValid) {
        return;
      }

      setIsSubmitting(true); // Start login submission

      const api = axios.create({
        baseURL: "http://localhost:3001",
      });

      try {
        const stringedVal = JSON.stringify(values);
        console.log(JSON.parse(stringedVal));
        await api.post("/api/v1/login", {
          email: values.email,
          password: values.password,
        });

        // Handle successful login
        toast.success("Successfully logged in");
      } catch (error) {
        console.log(error);

        if (error.response && error.response.data && error.response.data.msg) {
          toast.error(error.response.data.msg);
        } else if (error.message) {
          toast.error(error.response.data.Msg);
        } else {
          toast.error("Error when logging in");
        }
      } finally {
        setIsSubmitting(false); // End login submission
      }
    },
  });

  useEffect(() => {
    sessionStorage.clear();//clear storage to make sure no added previous or old cookies 
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
        (contact Adminstrations)
            </Link>
            <MDBBtn
              type="submit"
              style={{ backgroundColor: "#4BB497", border: "0px" }}
              className="otp-submit"
              disabled={isSubmitting}
            >
              Login
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