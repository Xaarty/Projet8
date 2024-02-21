import Bannerpropos from "../components/aproposbanner";
import Collapse from "../components/collapse";
import "../styles/pages/a-propos.scss";
import jsonData from "../a-propos.json";

export default function Apropos() {
  var json = jsonData;
  console.log(json);
  return (
    <div className="apropos-content">
      <Bannerpropos />
      {/* {Array(4)
        .fill(true)
        .map((_, i) => (
          <Collapse key={i} />
        ))} */}
      {json.map((propos) => (
        <Collapse title={propos.title} text={propos.text} key={propos.id} />
      ))}
    </div>
  );
}
