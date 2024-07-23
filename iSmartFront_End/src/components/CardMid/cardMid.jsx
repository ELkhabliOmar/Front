import React from "react";
import "./cardMid.scss";

// local components
import TextHeader from "../TextHeader/textHeader";

// external components

const numberStyles = {
  fontWeight: "500",
};

const titleStyles = {
  fontWeight: "500",
  fontSize: "16px",
};

const iconStyles = {
  position: "absolute",
  fontSize: "15px",
  left: "0",
  top: "0.1rem",
  color: "#32CD32",
};

function CardMid({ title, child }) {
  return (
    <div className="info-card">
      <TextHeader level="small" value={title} styles={titleStyles} />
      <div>
      {child}
      </div>
    </div>
  );
}

export default CardMid;
