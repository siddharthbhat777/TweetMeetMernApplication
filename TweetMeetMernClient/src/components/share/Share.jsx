import "./share.css";
import {
  PermMedia,
  Cancel,
} from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { motion } from 'framer-motion/dist/framer-motion';

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) { }
  };

  const clickedImage = () => {
    var obj1 = document.getElementById("shareImg");
    var obj2 = document.getElementById("shareImgText");
    obj1.style.color = "gray";
    obj2.style.color = "gray";
    setTimeout(function () {
      obj1.style.color = "black";
      obj2.style.color = "black";
    }, 2000);
  }

  return (
    <motion.div className="share" initial={{ scale: 0 }} transition={{ duration: 0.7, type: "spring" }} animate={{ scale: 1 }} end={{ scale: 1 }}>
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg noselect"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          <input
            placeholder={"What's in your mind " + user.username + "?"}
            className="shareInput noselect"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg noselect" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg noselect" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption noselect">
              <PermMedia htmlColor="black" className="shareIcon noselect" id="shareImg" onClick={clickedImage} /> &nbsp;
              <span htmlColor="black" className="shareOptionText noselect" id="shareImgText" onClick={clickedImage}>Upload your image</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          <button className="shareButton noselect" type="submit">
            Share
          </button>
        </form>
      </div>
    </motion.div>
  );
}
