import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries,handleVisitedFlags }) => {
  // console.log(country);
  //   console.log(handleVisitedCountries);
  const [visited, setVisited] = useState(false);
const [flagAdded, setFlagAdded]=useState(false);

  const handleVisited = () => {
    // console.log("button clicked")
    // setVisited(true);
    // Basic condition
    if (visited) {
      setVisited(false);
    } else {
      setVisited(true);
    }
    // ternary condition
    // setVisited(visited? false : true)
    //(!)condition/toggle system
    // setVisited(!visited)

    handleVisitedCountries(country);

  };

  const handleAddFlag=()=>{
    setFlagAdded(!flagAdded);
    handleVisitedFlags(country.flags.flags.png)
  }

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name:{country.name.common}</h2>
      <h3>Capital:{country.capital.capital}</h3>
      <h4>Region:{country.region.region}</h4>
      <p>Population:{country.population.population}</p>
      <br />
      <p>
        Language:
        {country.languages?.languages
          ? Object.values(country.languages.languages).join(", ")
          : "No language"}
      </p>
      {/* <p>{Object.values(country.languages?.languages || {}).join(", ")}</p> */}
      <br />
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 30000 ? "Big County" : "Small Country"}
      </p>
      <br />
      <div className="button-box">
        <button onClick={handleVisited} className="button">
          {visited ? "Visited" : " Not Visited"}
        </button>
      <button onClick={handleAddFlag} className="button">
        {flagAdded ?" Flag Added" : "Not Flag Added"}
        </button>
      </div>
    </div>
  );
};

export default Country;
