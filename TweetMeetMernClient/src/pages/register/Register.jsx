import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import logo from '../../Images/web-app-logo.jpg';
import { motion } from 'framer-motion/dist/framer-motion';


export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const loginToAc = () => {
    history.push("/login");
  }

  return (
    <div className="login">
      <div className="loginWrapper noselect">
        <motion.div className="loginLeft" initial={{x: -200}} animate={{x: 0}} transition={{type:"spring", duration:0.7}}>
          <motion.h3 className="loginLogo noselect" initial={{ scale: 0 }} transition={{ delay: 0.2, type: "spring" }} animate={{ scale: 1 }}>Tweet Meet</motion.h3>
          <span className="loginDesc noselect">
            Connect with friends and the world around you on Tweet Meet.
          </span>
        </motion.div>&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="loginRight">
          <motion.form className="loginBox" onSubmit={handleClick} initial={{scale: 0}} animate={{ scale: 1 }} transition={{type: "spring", duration: 1}} exit={{scale: 0}}>
          <img src={logo} height="50px" width="100px" style={{marginLeft: "auto", marginRight: "auto"}} alt="" className="noselect"/>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput noselect"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput noselect"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput noselect"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput noselect"
              type="password"
            />
            <button className="loginButton noselect" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton noselect" onClick={loginToAc}>Log into Account</button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
