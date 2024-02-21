import "../styles/layout/collapse.scss";
import vectordown from "../assets/vectordown.png";
import vectorup from "../assets/vectorup.png";
import { useState } from "react";
export default function Collapse(props) {
  const [openstate, isOpen] = useState(true);
  return openstate ? (
    <div className="collapse_box">
      <div className="collapse_box_bar">
        <h2>{props.title}</h2>
        <button className="button_collapse" onClick={() => isOpen(false)}>
          <img src={vectorup} alt="" />
        </button>
      </div>
    </div>
  ) : (
    <div className="collapse_box">
      <div className="collapse_box_bar">
        <h2>{props.title}</h2>
        <button className="button_collapse" onClick={() => isOpen(true)}>
          <img src={vectordown} alt="" />
        </button>
      </div>
      <div className="collapse_box_text">
        <p>{props.text}</p>
      </div>
    </div>
  );
}
