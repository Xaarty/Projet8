import "../styles/pages/a-propos.scss";
import "../styles/main.scss";
import imgapropos from "../assets/imgapropos.png";

export default function Bannerpropos() {
  return (
    <div className="banner">
      <img id="img_apropos" src={imgapropos} />
    </div>
  );
}
