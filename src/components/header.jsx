import logoheader from "../assets/logoheader.png";
import "../styles/layout/header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img src={logoheader} />
      <ul>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Acceuil
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          A propos
        </NavLink>
      </ul>
    </header>
  );
}
