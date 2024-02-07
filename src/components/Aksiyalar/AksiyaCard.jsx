import React from "react";

function AksiyaCard({ img, info }) {
  return (
    <div>
      <img src={img} alt="img" />
      <p>{info}</p>
    </div>
  );
}

export default AksiyaCard;
