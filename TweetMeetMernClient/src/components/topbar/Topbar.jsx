import "./topbar.css";
import { Search, Chat, ExitToApp } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo from '../../Images/logomain.PNG';
import { motion } from 'framer-motion/dist/framer-motion';
import { createRef } from "react";
import Cookies from "js-cookie";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const textSearchInput = createRef();

  const messageClick = () => {
    history.push("/messenger")
  }

  const logoutClick = () => {
    Cookies.remove("localhost", { path: "/", domain: "localhost" });
    localStorage.clear();
    history.push("/");
    window.location.reload();
  }

  const borderSearch = () => {
    var obj = document.getElementById("searchId");
    obj.setAttribute("style", "border: 2px solid black;");
  }

  const borderSearchOut = () => {
    var obj = document.getElementById("searchId");
    obj.setAttribute("style", "border: 2px solid gray;");
  }

  function searchBtnOnClick() {
    history.push(`/profile/${textSearchInput.current.value}`)
  }

  return (
    <div className="topbarContainer noselect">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/" style={{ textDecoration: "none" }}>
        <motion.img src={logo} height="50px" width="100px" alt="" className="logoImg noselect" initial={{ opacity: 0 }} transition={{ duration: 2, type: "spring" }} animate={{ opacity: 1 }} end={{ opacity: 1 }} />
      </Link>
      <motion.div className="topbarLeft" initial={{ opacity: 0 }} transition={{ duration: 2, type: "spring" }} animate={{ opacity: 1 }} end={{ opacity: 1 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo noselect">Tweet Meet</span>
        </Link>
      </motion.div>
      <div className="topbarCenter">
        <div className="searchbar" id="searchId">
          <Search className="searchIcon noselect" />
          <input
            style={{ focus: 'border: 2px solid black;' }}
            placeholder="Search for friends"
            className="searchInput noselect"
            onFocus={borderSearch}
            onBlur={borderSearchOut}
            ref={textSearchInput}
          />
        </div>
      </div>
      <button type="submit" className="searchButton noselect" onClick={searchBtnOnClick}>Search</button>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="topbarLink noselect">Homepage</span>
          </Link>
          <Link to={`/profile/${user.username}`} style={{ textDecoration: "none" }}>
            <span className="topbarLink noselect" src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"}
              style={{ marginRight: '-75px' }}>
              Timeline
            </span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem" onClick={messageClick} style={{ marginRight: "10px" }}>
            <Chat />
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg noselect"
            style={{ marginRight: "10px" }}
          />
        </Link>
        <div className="topbarIconItem noselect" onClick={logoutClick} style={{ marginRight: "20px" }}>
          <ExitToApp />
        </div>
      </div>
    </div>
  );
}
