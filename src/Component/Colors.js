import React from "react";

const Colors = (props) => {
  return (
    <div className="colors">
      {props.colors.map((color, index) => (
        <button key={index} style={{ background: `${color}` }} />
      ))}
    </div>
  );
};

export default Colors;
