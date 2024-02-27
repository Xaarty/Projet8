import { useLoaderData } from "react-router-dom";
import jsonData from "../locations.json";
import Tagbox from "../components/tags";
import StarRating from "../components/stars";
import Collapse from "../components/collapse";
import Caroussel from "../components/caroussel";
export async function loader({ params }) {
  console.log(params);
  const logements = jsonData;
  const logement = logements.filter((el) => el.id === params.id);
  return { logement };
}

export default function FicheLogement(props) {
  const { logement } = useLoaderData();
  const logs = { logement }.title;
  console.log(logs);
  console.log(logement);
  const logUnique = logement[0];
  return (
    <div className="main_box">
      <Caroussel pictures={logUnique.pictures} alt={logUnique.location} />

      <div className="main_info">
        <div className="main_info_1">
          <div className="title">
            <h1>{logUnique.title}</h1>
            <p>{logUnique.location}</p>
          </div>
          <div className="all_tag_box">
            {logUnique.tags.map((tag, index) => (
              <Tagbox title={props.title} text={tag} key={index} />
            ))}
          </div>
        </div>

        <div className="main_info_2">
          <div className="identity">
            <p>{logUnique.host.name}</p>
            <img src={logUnique.host.picture} />
          </div>
          <div className="rating">
            <StarRating rating={logUnique.rating} />
          </div>
        </div>
      </div>
      <div className="collapses">
        <Collapse
          title="Description"
          text={logUnique.description}
          key={props.id}
        />
        <Collapse
          title="Équipements"
          text={logUnique.equipments}
          key={props.id}
        />
      </div>
    </div>
  );
}
