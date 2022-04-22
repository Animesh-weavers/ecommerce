import React from "react";

const DetailsThumb = (props) => {
  return (
    <div className="thumb">
      {props.images.map((img, index) => (
        <img
          src={img}
          alt=""
          key={index}
          onClick={() => props.setIndex(index)}
        />
      ))}
    </div>
  );
};

export default DetailsThumb;
