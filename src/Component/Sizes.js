import React from "react";

const Sizes = (props) => {
  return (
    <div className="sizes">
      {props.sizes.map((size, index) => (
        <button key={index}>{size}</button>
      ))}
    </div>
  );
};

export default Sizes;
