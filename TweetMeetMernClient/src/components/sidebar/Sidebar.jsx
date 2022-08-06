import "./sidebar.css";
import {
  Person,
  Chat,
  PermMedia
} from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { motion } from 'framer-motion/dist/framer-motion';
import Cookies from "js-cookie";

export default function Sidebar() {

  const { user } = useContext(AuthContext);

  const history = useHistory();

  const logoutClick = () => {
    Cookies.remove("localhost", { path: "/", domain: "localhost" });
    localStorage.clear();
    history.push("/");
    window.location.reload();
  }

  const chatsClick = () => {
    history.push("/messenger")
  }

  const homeClick = () => {
    history.push("/")
  }

  return (
    <motion.div className="sidebar" initial={{ x: -200 }} transition={{ duration: 0.7, type: "spring" }} animate={{ x: 0 }} exit={{ x: 0 }}>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link to={`/profile/${user.username}`} style={{ textDecoration: "none" }}>
              <Person className="sidebarIcon noselect" />
              <span className="sidebarListItemText noselect">Profile</span>
            </Link>
          </li>
          <li className="sidebarListItem" onClick={homeClick}>
            <PermMedia className="sidebarIcon noselect" />
            <span className="noselect">Feeds</span>
          </li>
          <li className="sidebarListItem" onClick={chatsClick}>
            <Chat className="sidebarIcon noselect" />
            <span className="noselect">Chats</span>
          </li>
        </ul>
        <button className="sidebarButton noselect" onClick={logoutClick}>Logout</button>
        <hr className="sidebarHr" />
      </div>
    </motion.div>
  );
}
