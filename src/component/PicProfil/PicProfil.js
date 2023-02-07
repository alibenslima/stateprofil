import React from "react";
import "./PicProfil.css";
const PicProfil = ({ image }) => {
  return (
    <div>
      <img src={image} alt="photoprofil" />
    </div>
  );
};

export default PicProfil;
