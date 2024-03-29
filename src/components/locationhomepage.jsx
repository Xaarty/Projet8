import "../styles/pages/home-page.scss";
import "../styles/main.scss";
import jsonData from "../locations.json";
import { Link } from "react-router-dom";

export default function Location({ logements }) {
  return (
    // link
    <div className="all_card">
      {logements.map((location) => (
        <Link to={location.id} className="card" key={location.id}>
          <div className="card_linear"></div>
          <img src={location.cover} />
          <h2>{location.title}</h2>
        </Link>
      ))}
    </div>
  );
}
