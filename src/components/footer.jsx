import logofooter from "../assets/logofooter.png";
import "../styles/layout/footer.scss";
import "../styles/main.scss";

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={logofooter} />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
