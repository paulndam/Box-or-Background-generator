import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./Color.css";

const Color = (props) => {
  const [color, setColor] = useState("");
  //const [bluecolor, setblueColor] = useState("blue");

  const ChangeColor = (e) => {
    e.preventDefault();
    //document.getElementById(id).style.backgroundColor = color;
    // document.body.style.background = document.getElementById(
    //   id
    // ).style.background;
    //let color = document.getElementById(color).value;
    document.body.style.background = color;
    // document.body.style.background = bluecolor;
    props.newColor(color);
    // props.Newcolor = bluecolor;

    setColor("");
    //setblueColor("");
  };

  return (
    <div className="row">
      <div className="col-3">
        <div className="card bg-light mb-3">
          <div className="card-header">Choose a Color</div>
          <div class="card-body">
            <form onSubmit={ChangeColor}>
              <div className="form-group">
                <label for="Color">Color</label>
                <select
                  className="form-control"
                  id="color"
                  onChange={(e) => setColor(e.target.value)}
                >
                  <option></option>
                  <option id="red" value="red">
                    red
                  </option>
                  <option id="blue" value="blue">
                    blue
                  </option>
                  <option id="orange" value="orange">
                    orange
                  </option>
                  <option id="green" value="green">
                    green
                  </option>
                  <option id="black" value="black">
                    black
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                // onClick={ChangeColor}
              >
                Add Color
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
