// import React, {useState, useContext } from 'react';
// import PropTypes from 'prop-types';

// const  Search = ({searchCountries, clearCountries, setAlert}) => {
  
//   const [text, setText] = useState('');
//   const [number, setNumber] = useState('');

//   const onChangeText = (e) => {
//     setText(e.target.value);
//     console.log(e.target.value);
//   }
 
//   const onSubmit = e => {
//     e.preventDefault();
//     if(text === '' || !isNaN(text)) {
//       setAlert('Please enter a country name', 'light')
//     }
    
//     else {
//     searchCountries(text);
//     setText('')
    
//     }

//   }
    
//     return (
//       <div>
//          <form onSubmit={onSubmit} className="form">
//           <div className="column">
//          <input className=" border-radius" type="text" name="text" placeholder="Search Countries..."
//           value={text} 
//           onChange={onChangeText}/>
        
//           <input type="submit" value="Search Countries" className="btn btn-block border-radius" />

//            {/* if showclear is true, finns d countries i listan visar vi clear button
//          */}
//         {countries.length > 0 && (
//         <button className="btn btn-light btn-block border-radius" onClick={clearCountries}> Clear Results</button>
//         )}
//           </div>
//         </form>
//       </div>
//     )
  
// }

// Search.propTypes = {
//   setAlert: PropTypes.func.isRequired,
// }

// export default Search
