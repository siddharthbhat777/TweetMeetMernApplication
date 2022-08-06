import "./post.css";
import { ThumbUp, ThumbUpAltOutlined } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) { }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post" data-aos="fade-up">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg noselect"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername noselect">{user.username}</span>
            <span className="postDate noselect">{format(post.createdAt)}</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText noselect">{post?.desc}</span>
          <img className="postImg noselect" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft noselect">
            <div onClick={likeHandler} style={{ cursor: "pointer" }} className="noselect">
              {isLiked ? <ThumbUp /> : <ThumbUpAltOutlined />}
            </div> &nbsp;
            <span className="postLikeCounter noselect">{like} people like it</span>
          </div>
        </div>
      </div>
    </div>
  );
}
