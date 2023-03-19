import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/features/rtkAPI/auth";
import Styles from "../css/Register.module.css";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Local variables
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handling changes for variables
  const handleChange = (e) => {
    setRegisterData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // API Functions
  const [registerFunction, registerResponse] = useRegisterMutation();

  // Handling submittings
  const handleSubmit = (e) => {
    e.preventDefault();

    registerFunction(registerData);
  };

  useEffect(() => {
    if (registerResponse.isSuccess) {
      dispatch(
        setUser({
          token: registerResponse.data.token,
          user: registerResponse.data.user,
        })
      );
      localStorage.setItem("token", registerResponse.data.token);
      navigate("/dashboard");
      toast.success("Registered Successfull!");
    }
  }, [dispatch, navigate, registerResponse]);

  return (
    <>
      <main className={Styles.main}>
        <div className={Styles.container}>
          <section className={Styles.wrapper}>
            <div className={Styles.heading}>
              <h1 className={`${Styles.text} ${Styles.text_large}`}>Sign In</h1>
              <p className={`${Styles.text} ${Styles.text_normal}`}>
                Already Registered?
                <span>
                  <a
                    href="/login"
                    className={`${Styles.text} ${Styles.text_links}`}
                  >
                    Create an account
                  </a>
                </span>
              </p>
            </div>
            <form name="signin" className={Styles.form} onSubmit={handleSubmit}>
              <div className={Styles.input_control}>
                <label htmlFor="name" className={Styles.input_label} hidden>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={Styles.input_field}
                  placeholder="Name"
                  value={registerData.name}
                  onChange={handleChange}
                />
                <label htmlFor="email" className={Styles.input_label} hidden>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={Styles.input_field}
                  placeholder="Email Address"
                  value={registerData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={Styles.input_control}>
                <label htmlFor="password" className={Styles.input_label} hidden>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={Styles.input_field}
                  placeholder="Password"
                  value={registerData.password}
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
                    registerData.name.trim() !== "" &&
                    registerData.email.trim() !== "" &&
                    registerData.password.trim() !== ""
                      ? false
                      : true
                  }
                >
                  Register
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

export default Register;
