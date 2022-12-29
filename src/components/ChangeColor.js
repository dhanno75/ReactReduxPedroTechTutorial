import React, { useState } from "react";
import { useDispatch } from "react-redux";

function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => dispatch(color)}>CHANGE COLOR</button>
    </div>
  );
}

export default ChangeColor;
