import React from 'react';
import "./Country.css"
const Country = ({country}) => {
    console.log(country);
const handleVisited =()=>{

}

    return (
        <div className='country'>
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
<p>Area: {country.area.area}  {country.area.area >30000 ?   "Big County": "Small Country" }</p>
<br />
<button onClick={handleVisited} className='button'>Not Visited</button>
        </div>
    );
};

export default Country;