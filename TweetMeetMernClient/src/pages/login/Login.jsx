import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router";
import logo from '../../Images/web-app-logo.jpg';
import { motion } from 'framer-motion/dist/framer-motion';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  const registerToAc = () => {
    history.push("/");
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <motion.div className="loginLeft" initial={{ x: -200 }} animate={{ x: 0 }} transition={{ type: "spring", duration: 0.7 }}>
          <motion.h3 className="loginLogo noselect" initial={{ scale: 0 }} transition={{ delay: 0.2, type: "spring" }} animate={{ scale: 1 }}>Tweet Meet</motion.h3>
          <span className="loginDesc noselect">
            Connect with friends and the world around you on Tweet Meet.
          </span>
        </motion.div>
        <div className="loginRight">
          <motion.form className="loginBox" onSubmit={handleClick} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring", duration: 1}} exit={{ scale: 0 }}>
            <img src={logo} height="50px" width="100px" style={{ marginLeft: "auto", marginRight: "auto" }} alt="" className="noselect" />
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput noselect"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput noselect"
              ref={password}
              autoComplete="on"
            />
            <button className="loginButton noselect" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <button className="loginRegisterButton noselect" onClick={registerToAc} >
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
