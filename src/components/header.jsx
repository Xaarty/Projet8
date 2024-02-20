import logoheader from "../assets/logoheader.png";
import "../styles/layout/header.scss";
import "../styles/main.scss";

export default function Header() {
  return (
    <header>
      <img src={logoheader} />
      <ul>
        <li>Accueil</li>
        <li>A Propos</li>
      </ul>
    </header>
  );
}
