import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../redux/features/rtkAPI/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Styles from "../css/Login.module.css";
import { useDispatch } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { logout, setToken, setUser } from "../redux/features/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Local variables
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Handling changes for variables
  const handleChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // API Functions
  const [loginFunction, loginResponse] = useLoginMutation(loginData);

  // Handling submittings
  const handleSubmit = (e) => {
    e.preventDefault();

    loginFunction(loginData);
  };

  useEffect(() => {
    console.log("loginResponse", loginResponse);
  }, [loginResponse]);

  useEffect(() => {
    if (loginResponse.isSuccess) {
      dispatch(
        setUser({
          token: loginResponse.data.token,
          user: loginResponse.data.user,
        })
      );
      localStorage.setItem("token", loginResponse.data.token);

      navigate("/dashboard");
      toast.success("Login Successfull!");
    }
  }, [dispatch, loginResponse, navigate]);

  // eslint-disable-next-line no-unused-vars
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <main className={Styles.main}>
        <div className={Styles.container}>
          <section className={Styles.wrapper}>
            <div className={Styles.heading}>
              <h1 className={`${Styles.text} ${Styles.text_large}`}>Sign In</h1>
              <p className={`${Styles.text} ${Styles.text_normal}`}>
                New user?{" "}
                <span>
                  <a
                    href="/register"
                    className={`${Styles.text} ${Styles.text_links}`}
                  >
                    Create an account
                  </a>
                </span>
              </p>
            </div>
            <form name="signin" className={Styles.form} onSubmit={handleSubmit}>
              <div className={Styles.input_control}>
                <label for="email" className={Styles.input_label} hidden>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={Styles.input_field}
                  placeholder="Email Address"
                  value={loginData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={Styles.input_control}>
                <label for="password" className={Styles.input_label} hidden>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={Styles.input_field}
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleChange}
                />
              </div>
              <div className={Styles.input_control}>
                <a href="/" className={`${Styles.text} ${Styles.text_links}`}>
                  Forgot Password
                </a>
                <button
                  type="submit"
                  className={Styles.input_submit}
                  disabled={
                    loginData.email.trim() !== "" &&
                    loginData.password.trim() !== ""
                      ? false
                      : true
                  }
                >
                  SignIn
                </button>
              </div>
            </form>
            {/* <div className={Styles.striped}>
              <span className={Styles.striped_line}></span>
              <span className={Styles.striped_text}>Or</span>
              <span className={Styles.striped_line}></span>
            </div>
            <div className={Styles.method}>
              <div className={Styles.method_control}>
                <a href="/" className={Styles.method_action}>
                  <i className={`${Styles.ion} ${Styles.ion_logo_google}`}></i>
                  <span>Sign in with Google</span>
                </a>
              </div>
              <div className={Styles.method_control}>
                <a href="/" className={Styles.method_action}>
                  <i
                    className={`${Styles.ion} ${Styles.ion_logo_facebook}`}
                  ></i>
                  <span>Sign in with Facebook</span>
                </a>
              </div>
              <div className={Styles.method_control}>
                <a href="/" className={Styles.method_action}>
                  <i class={`${Styles.ion} ${Styles.ion_logo_apple}`}></i>
                  <span>Sign in with Apple</span>
                </a>
              </div>
            </div> */}
          </section>
        </div>
      </main>
    </>
  );
};

export default Login;
