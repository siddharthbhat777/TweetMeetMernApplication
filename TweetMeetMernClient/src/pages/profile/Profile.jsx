import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Edit } from '@material-ui/icons';

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data || file);
    };
    fetchUser();
  }, [username, file]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg noselect"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.png"
                }
                alt=""
              />
              <div>
                <img
                id="profImg"
                  className="profileUserImg noselect"
                  src={file ? URL.createObjectURL(file) : 
                     user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                  }
                  alt=""
                />
                <label htmlFor="fileInput">
                  <Edit className="editProfileImg" style={{height: "15px", width: "15px", marginLeft: "525px"}} />
                </label>
                
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName noselect">{user.username}</h4>
              <span className="profileInfoDesc noselect">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
