import "./message.css";
import { format } from "timeago.js";

export default function Message({ message, own }) {

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop noselect">
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom noselect">{format(message.createdAt)}</div>
    </div>
  );
}
