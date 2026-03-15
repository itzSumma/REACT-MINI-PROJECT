import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"
const Countries = ({countriesPromise}) => {


  const [visitedCountries,setVisitedCountries]=useState([]);

  const handleVisitedCountries=(country)=>{
    console.log("visited country clicked",country.name.common)
  }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    // console.log(countries);

  return (
    <div>
     <h1>In the Countries : {countries.length}</h1>
     <h2>Total Country You Visited:</h2>

    <div className="countries">
     
      {
        countries.map(country=> <Country
        key={country.cca3.cca3}
        handleVisitedCountries={handleVisitedCountries}
             country={country}></Country>)
      }
    </div>
    </div>
  );
};

export default Countries;
