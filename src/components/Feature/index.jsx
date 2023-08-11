import React from "react";

const Feature = ({ item }) => {
  return (
    <div className="icon-box">
      <div className="icon">
        <i className={item.icon}></i>
      </div>
      <h5 className="title">
        <a href="">{item.title}</a>
      </h5>
      <p className="description">{item.text}</p>
    </div>
  );
};

export default Feature;
