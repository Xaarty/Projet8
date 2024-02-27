import arrowleft from "../assets/arrow_left.png";
import arrowright from "../assets/arrow_right.png";
import { useState } from "react";

export default function Caroussel(props) {
  console.log(props);
  const [slide, setSlide] = useState(0);

  const slideRight = () => {
    setSlide(slide === props.pictures.length - 1 ? 0 : slide + 1);
  };

  const slideLeft = () => {
    setSlide(slide === 0 ? props.pictures.length - 1 : slide - 1);
  };

  return (
    <div id="caroussel">
      {props.pictures.map((item, index) => (
        <img
          src={item}
          key={index}
          className={
            slide === index
              ? "img_caroussel"
              : "img_caroussel img_caroussel_hidden"
          }
        />
      ))}
      <button className="arrow arrow_left" onClick={slideLeft}>
        <img src={arrowleft} alt="arrow left carrousel" />
      </button>
      <button className="arrow arrow_right" onClick={slideRight}>
        <img src={arrowright} alt="arrow right carrousel" />
      </button>
      <div className="dots">
        {props.pictures.map((_, index) => (
          <button
            key={index}
            className={slide === index ? "dot dot_selected" : "dot"}
            onClick={() => setSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}