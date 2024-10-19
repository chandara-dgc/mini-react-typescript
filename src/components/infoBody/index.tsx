import infoList from "./data";
import "./index.css";

function InfoBody() {
  return (
    <div className="info-area">
      {infoList.map((info, index) => (
        <div className="info-card" key={index}>
          <div className="text-area">
            <h2>{info.title}</h2>
            <div>{info.describe}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoBody;
