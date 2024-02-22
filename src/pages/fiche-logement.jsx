import { useLoaderData } from "react-router-dom";
import jsonData from "../locations.json";

export async function loader({ params }) {
  console.log(params);
  const logements = jsonData;
  const logement = logements.filter((el) => el.id === params.id);
  return { logement };
}

export default function FicheLogement() {
  const { logement } = useLoaderData();
  console.log(logement);
  return (
    
  )
}
