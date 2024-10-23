import { data } from "../data/module-data.js";
import PersonProfile from "../components/PersonProfile.jsx"

function Lab1() {
  return (
    <>
      <div>
        <h1>Person Profiles</h1>
        <div className="profiles-container">
          {data.map((data) => (
            <PersonProfile key={data.id} {...data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Lab1;
