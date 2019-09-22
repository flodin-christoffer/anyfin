import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Countries from './components/countries/Countries'
import Footer from './components/layout/Footer'
import SearchForm from './components/countries/SearchForm'
import axios from 'axios';
import './App.css';


class App extends Component  {

  state = {
    countries: [],
    alert: ''
  }
  
getCountries = async (e) => {
  const countryName = e.target.elements.countryName.value;
  e.preventDefault();
  
  //making sure input is okay.
  if (countryName === '' || !isNaN(countryName)) {
    this.setState({alert: 'Please enter a country'});
    setTimeout(() => this.setState({alert: ''}), 5000)
  } else {
  
  // fetching countries from api. 
  const api_call = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`);
  this.setState({countries: api_call.data});
}
}


  render() {
    return (
    
      <div className="App">
       <Navbar />
       <div className="container">
       
       {/* shows alert if no text is entered */}
       {this.state.alert ? 
        <div className="alert alert-light border-radius">
        <i className="fas fa-info-circle"></i> {this.state.alert}
        </div>
           : <span></span> 
         }
      
         <SearchForm getCountries={this.getCountries}/>
         <Countries countries={this.state.countries} />

         {this.state.countries.length < 1 ?
         <img className="showcase all-center"
         src={'./dolphin.jpg'}
         alt="" 
         /> : <span></span> } 
 
       </div>
       <Footer />
      </div>
   
 
    );
  }
    
  
}

export default App;

