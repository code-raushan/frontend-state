import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("User");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const authUser = token;
      if (!authUser) {
        localStorage.removeItem("token");
        navigate("../login", { replace: true });
      } else {
        setUser(authUser);
      }
    } else {
      alert("Please Login");
      navigate("../login", { replace: true });
    }
  }, [navigate]);

  const logoutUser = () => {
    localStorage.removeItem("token");
    navigate("../login", { replace: true });
  };

  return (
    <div>
      <h3>{user.name}</h3>
      <input type="submit" value="logout" onClick={logoutUser} />
      <Link to="/">Home</Link>
    </div>
  );
};

export default Feed;
