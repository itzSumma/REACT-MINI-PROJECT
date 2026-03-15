import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"
const Countries = ({countriesPromise}) => {

  const [visitedCountries,setVisitedCountries]=useState([]);
const [visitedFlags,setVisitedFlags]=useState([]);

  const handleVisitedCountries=(country)=>{
    console.log("visited country",country.name.common );
const newVisitedCountries =[...visitedCountries,country];
setVisitedCountries(newVisitedCountries);
  }

  const handleVisitedFlags =(flag)=>{
    console.log("flag need to added",flag);
    const newVisitedFlags=[...visitedFlags,flag];
    setVisitedFlags(newVisitedFlags)
  }


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    // console.log(countries);

  return (
    <div>
     <h1>The Countries I Visited : {countries.length}</h1>
     <h2>Total Country You Visited:{visitedCountries.length}</h2>
     <h2>Total Flags Visited: {visitedFlags.length}</h2>
<ol>
  {
    visitedCountries.map(country=> <li
    key={country.cca3.cca3}>{country.name.common}</li>)
  }
</ol>
<div className="flag-box">
  {
    visitedFlags.map(flag=> <img src={flag}></img> )
  }
</div>

    <div className="countries">
     
      {
        countries.map(country=> <Country
        key={country.cca3.cca3}
        handleVisitedCountries={handleVisitedCountries}
        handleVisitedFlags={handleVisitedFlags}
             country={country}></Country>)
      }
    </div>
    </div>
  );
};

export default Countries;
