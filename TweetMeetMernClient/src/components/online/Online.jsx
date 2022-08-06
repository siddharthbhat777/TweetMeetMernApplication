import "./online.css";

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg noselect" src={PF+user.profilePicture} alt="" />
        <span className="rightbarOnline noselect"></span>
      </div>
      <span className="rightbarUsername noselect">{user.username}</span>
    </li>
  );
}
