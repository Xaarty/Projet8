import "../styles/main.scss";
import Title from "../components/homepagetitle";
import Location from "../components/locationhomepage";
export default function Home() {
  return (
    <div className="home-content">
      <Title />
      <Location />
    </div>
  );
}
