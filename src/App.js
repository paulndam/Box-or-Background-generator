import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Message from "./components/Message";
import MessageDisplay from "./components/MessageDisplay";
import Color from "./components/Color";
import ColorDisplay from "./components/ColorDisplay";
function App() {
  // setting our const variable
  // giving it two arguments here current message and then we set it since we are using set state

  const [currentMsg, setCurrentMsg] = useState(["There are no messages"]);

  const [currentColor, setcurrentColor] = useState("");

  //in order to display our message we set a method that will accep our child component or take into our child component
  //and by doing so we assign it a function which will serve as delivering all of new incoming message and we can now set it to our set current message
  //later on once we are calling our message component we pass in our method for receiving new message
  const incomingMessage = (newMessage) => {
    setCurrentMsg([...currentMsg, newMessage]);
  };

  const choosingColor = (newColor) => {
    setcurrentColor(newColor);
  };

  return (
    <div className="App">
      <Message NewMessage={incomingMessage} />
      {/* now we can call our prop message we assign in our message display
      component and now assign it to current message */}
      <MessageDisplay message={currentMsg} />
      {/* <Message />
      <MessageDisplay /> */}

      <Color newColor={choosingColor} />
      <ColorDisplay thecolor={currentColor} />
    </div>
  );
}

export default App;
