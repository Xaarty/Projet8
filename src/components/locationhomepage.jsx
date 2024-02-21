import "../styles/pages/home-page.scss";
import "../styles/main.scss";
import jsonData from "../locations.json";

export default function Location() {
  var json = jsonData;
  console.log(json);
  return (
    <div className="all_card">
      {json.map((location) => (
        <div className="card" key={location.id}>
          <h2>{location.title}</h2>
        </div>
      ))}
    </div>
  );
}
