import logoheader from "../assets/logoheader.png";
import "../styles/layout/header.scss";
import "../styles/main.scss";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/apropos");
  return (
    <header>
      <img src={logoheader} />
      <ul>
        <li>Accueil</li>
        <li onClick={handleClick}>A Propos</li>
      </ul>
    </header>
  );
}
