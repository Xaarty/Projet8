import "../styles/pages/home-page.scss";
import "../styles/main.scss";
import imgtitle from "../assets/imgtitle.png";

export default function Title() {
  return (
    <div className="title-img">
      <div>
        <img src={imgtitle} />
      </div>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}
