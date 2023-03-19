import React, { useEffect, useState } from "react";
import styles from "../css/styles.module.css";
import { Link } from "react-router-dom";
import { useExamRegisterMutation } from "../redux/features/rtkAPI/exam";
import toast from "react-hot-toast";

const Main = () => {
  const [examRegistrationData, setExamRegistrationData] = useState({
    name: "",
    age: "",
    qualification: "",
    state: "",
  });

  const [examRegisterFunction, examRegisterResponse] =
    useExamRegisterMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "name" ||
      name === "age" ||
      name === "qualification" ||
      name === "state"
    ) {
      setExamRegistrationData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("examRegistrationData", examRegistrationData);
    if (
      Object.values(examRegistrationData).some(
        (value) => value?.trim() === "" || undefined || null
      )
    ) {
      return toast.error("Please fill in all fields");
    }
    examRegisterFunction(examRegistrationData);
  };

  useEffect(() => {
    if (examRegisterResponse.isSuccess) {
      toast.success("Registration Successful!");
    }
    if (examRegisterResponse.isError) {
      toast.error("Registration Failed!");
    }
  }, [examRegisterResponse]);

  return (
    <>
      <main>
        <div>
          <Link to="/login" className={`${styles.icon} ${styles.about}`}>
            <i className="fas fa-user"></i>
          </Link>
        </div>
        <div className={styles.main_container}>
          <div className={styles.card_container}>
            <div className={`${styles.card} ${styles.card_1}`}>
              <div className={styles.number}>244 days</div>
            </div>
            <div className={`${styles.card} ${styles.card_2}`}>
              <div className={styles.number}>3 months</div>
            </div>
            <div className={`${styles.card} ${styles.card_3}`}>
              <div className={styles.number}>1 month</div>
            </div>
          </div>
          <div className={styles.form_container}>
            <center>
              <h1 className="">Search the exams</h1>
            </center>
            <form onSubmit={handleSubmit}>
              <label className="bg-black" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="name"
                name="name"
                style={{ display: "inline-block", width: "calc(100%)" }}
              />
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                onChange={handleChange}
                style={{ display: "inline-block", width: "calc(100%)" }}
              />
              <label htmlFor="qualification">Qualification:</label>
              <select
                id="qualification"
                name="qualification"
                onChange={handleChange}
                style={{ display: "inline-block", width: "calc(100%)" }}
              >
                <option value="empty"></option>
                <option value="high_school">High School</option>
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
                <option value="phd">PhD</option>
              </select>
              <label htmlFor="state">State:</label>
              <select
                id="state"
                name="state"
                onChange={handleChange}
                style={{ display: "inline-block", width: "calc(100%)" }}
              >
                <option value="empty"></option>
                <option value="state_1">State 1</option>
                <option value="state_2">State 2</option>
                <option value="state_3">State 3</option>
              </select>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
