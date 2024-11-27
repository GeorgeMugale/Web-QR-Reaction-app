//auth : Emmanuel
//Button component will be used in the whole project
//will accept props such as Text of button, fucntion, width and height
import React from "react";
import { ButProps } from "./PropTypes";

//Component

const Button = ({ children, Action, Width, Height }: ButProps) => {
  return (
    <button
      className="btn btn-danger"
      key={children}
      onClick={Action}
      style={{ width: `${Width}`, height: `${Height}` }}
    >
      {children}
    </button>
  );
};

export default Button;
