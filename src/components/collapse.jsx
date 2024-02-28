import "../styles/layout/collapse.scss";
import vectorup from "../assets/vectorup.png";
import { useState } from "react";
export default function Collapse(props) {
  const [openstate, isOpen] = useState(false);
  let textContent = null;
  if (Array.isArray(props.text)) {
    textContent = props.text.map((item, index) => <p key={index}>{item}</p>);
  } else {
    textContent = <p>{props.text}</p>;
  }
  return (
    <div className="collapse_box">
      <div className="collapse_box_bar">
        <h2>{props.title}</h2>
        <button className="button_collapse" onClick={() => isOpen(!openstate)}>
          <img
            src={vectorup}
            alt=""
            className={`${openstate ? "rotate" : ""}`}
          />
        </button>
      </div>
      <div className={`collapse_box_text ${openstate ? "is_open" : ""}`}>
        {textContent}
      </div>
    </div>
  );
}
