import "../styles/main.scss";
import Title from "../components/homepagetitle";
import Location from "../components/locationhomepage";
import jsonData from "../locations.json";
import { useLoaderData } from "react-router-dom";

export async function loader({}) {
  const logements = jsonData;
  return { logements };
}

export default function Home() {
  const { logements } = useLoaderData();
  return (
    <div className="home-content">
      <Title />
      <Location logements={logements} />
    </div>
  );
}
