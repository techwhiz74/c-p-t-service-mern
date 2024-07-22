import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
import { motion } from "framer-motion";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (err) {
      console.error(err);
      console.log(err.response);
      if (
        err.response &&
        err.response.status >= 400 &&
        err.response.status <= 500
      ) {
        setErr(err.response.data);
      }
    }
  };

  return (
    <div className="login_container">
      <motion.div
        className="login_form_container"
        initial={{ opacity: 0, rotateY: 90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 90 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <div className="login_left">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="input"
            />
            {err && <div className="err_msg">{err}</div>}
            <button type="submit" className="loginB_btn">
              Sign In
            </button>
          </form>
        </div>
        <div className="login_right">
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className="loginW_btn">
              Sign Up
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
