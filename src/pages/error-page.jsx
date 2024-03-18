import "../styles/pages/error-page.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div id="root">
      <main id="main_error">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </main>
    </div>
  );
}
