import "../styles/pages/a-propos.scss";
import "../styles/main.scss";
import imgapropos from "../assets/imgapropos.png";

export default function Bannerpropos() {
  return (
    <div className="banner_block">
      <div className="banner">
        <img src={imgapropos} />
      </div>
    </div>
  );
}
