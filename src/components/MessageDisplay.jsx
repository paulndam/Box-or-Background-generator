import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// const incomingMessage = (newMessage) => {
//   setCurrentMsg(newMessage);
// };

const MessageDisplay = (props) => {
  const [currentMsg, setCurrentMsg] = useState(["There are no messages"]);
  return (
    <div className="row">
      <div className="col-4">
        <div className="card bg-light mb-3">
          <div className="card-header">Message Posted</div>
          <div class="card-body">
            <ul className="list-group">
              {props.message.map((messagex) => (
                <li className="list-group-item">{messagex}</li>
              ))}
            </ul>
            {/* <ul className="list-group">
              <li className="list-group-item">{props.message}</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDisplay;
