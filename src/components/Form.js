import React from 'react';

const Form = props => (

  <form  className="form" onSubmit={props.getCountries} >
    <input className=" border-radius" type="text" name="countryName" placeholder="Search Countries..."
      />
        
    <input type="submit" value="Search Countries" className="btn btn-block border-radius" />
  </form>
);

export default Form;