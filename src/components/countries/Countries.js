import React from 'react'

import { Link } from 'react-router-dom'

const Countries = props => (

  

  <div className="grid-2 mb-15">
        { props.countries.map((country) => {
           return (
            <div key={country.numericCode} className="card text-center border-radius countriesCard" >
            <h2 className="mb-15"> {country.name} </h2>
            <img className="all-center flag mb-15"
         src={country.flag} alt="" 
         />
            <h4 className="text-left mb-10">
            Capital: {country.capital} <br/>
            Population: {country.population} Residents <br/>
            Currency: {country.currencies[0].name} <br/>
            Currency Symbol: {country.currencies[0].symbol} 
            </h4>
            <button className="btn btn-light center-all border-radius">
            <Link to={{
              pathname: `/country/${country.name}`,
              state: { name: country.name }
              }}>
            Convert {country.currencies[0].name} to SEK</Link>
            </button>
          </div>
           ); 
         })}
       </div>
);

 export default Countries
