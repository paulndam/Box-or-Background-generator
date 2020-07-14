/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Message = (props) => {
  //setting our destructure while usung usestate so that i can keep track of my variable
  const [msg, setmsg] = useState("");
  //this method right here will make sure when submitting our  form all default are being prevented and what was set to be orignal will function normally
  const processing = (e) => {
    e.preventDefault();
    props.NewMessage(msg);

    setmsg("");
  };

  return (
    <div className="container-fluid">
      <div className="jumbotron jumbotron-fluid">
        <div className="container"></div>
      </div>

      <div className="row">
        <div className="col-3">
          <div className="card bg-light mb-3">
            <div className="card-header">Post your Message</div>
            <div class="card-body">
              <form onSubmit={processing}>
                <label for="text">text</label>
                <textarea
                  row="3"
                  className="form-control"
                  id="text"
                  aria-describedby="text"
                  onChange={(e) => setmsg(e.target.value)}
                  value={msg}
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={processing}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
