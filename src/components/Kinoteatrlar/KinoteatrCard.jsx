import React from "react";
import { Card } from "reactstrap";
import "./KinoteatrCard.css";

function KinoteatrCard({ img, title, phone, address, time }) {
  return (
    <Card className="bg-transparent">
      <div className="img">
        <img src={img} alt="img" />
      </div>
      <h1 className="fs-3 ag mb-2">{title}</h1>
      <p className="ag">
        <span className="d-inline-block red">Unvan:</span>
        <span>{" " + address}</span>
      </p>
      <p className="ag">
        <span className="d-inline-block red">Telefon:</span>
        {" " + phone}
      </p>
      <p className="ag">
        <span className="d-inline-block red">Is Rejimi:</span>
        {" " + time}
      </p>
    </Card>
  );
}

export default KinoteatrCard;
