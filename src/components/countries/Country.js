import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Footer from '..//layout/Footer'

class Country extends Component {
  state = {
    activeCountry: [],
    currency: '',
    currencySymbol: '',
    convertedValue: '',
    flag: '',
    alert: ''
  }

  // runs on mount
  componentDidMount = async () => {
    // fetching from api with selected country
    const name = this.props.match.params.name
    const req = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);

    
    this.setState({activeCountry: req.data[0]});
    this.setState({currency: req.data[0].currencies[0].code });
    this.setState({currencySymbol: req.data[0].currencies[0].symbol});
    this.setState({flag: req.data[0].flag})
  }

  
   convertToSEK = async (e) => {
    const amount = e.target.elements.amount.value;
    e.preventDefault();

    //making sure input is okay.
    if (amount === '' || isNaN(amount)) {
      this.setState({alert: 'Please enter a valid number'});
      setTimeout(() => this.setState({alert: ''}), 5000)
    } else {

    // fetching currencies values from api.  
    const api_currency_value = await axios.get(`http://data.fixer.io/api/latest?access_key=ab8de6f40d9d7984fdf71b5fad764947`);
    const rates = api_currency_value.data.rates;    

    // Checking if currenices ok and calcutaling.
    if('SEK' in rates && this.state.currency in rates ){
         const sekValue = rates['SEK'];
         const currencyValue = rates[this.state.currency];
         const result = currencyValue/sekValue*amount;
         this.setState({convertedValue: `Your ${amount} SEK i worth ${result.toFixed(2)} ${this.state.currencySymbol}`});
       } else {
         this.setState({convertedValue: "Sorry could not find your currency in currency list."});
       } 
      }
   }

  render() {
    const country = this.state.activeCountry;
  
    return (
      
      <div>
      <Navbar />
     { this.state.activeCountry.length !== 0 &&
       <div className="container">
       <div key={country.numericCode} className="card text-center border-radius" >
           <h2 className="mb-15"> You Picked {country.name} </h2>
           
          {/* shows alert if no text is entered */}
      {this.state.alert ? 
        <div className="alert alert-light border-radius">
        <i className="fas fa-info-circle"></i> {this.state.alert}
        </div>
           : <span></span> 
         }

       

           <form  className="form convertForm all-center" onSubmit={this.convertToSEK}>
           <input className="border-radius" type="text" name="amount" placeholder="Amount to convert from SEK..."
          />        
          <input type="submit" value="Convert" className="btn btn-block border-radius btn-light mb-15" /></form>

          <h2 className="mb-15"> {this.state.convertedValue} </h2>

          <img className="all-center flag mb-15"
         src={this.state.flag} alt="" 
         />
           
           
           <button className="btn btn-light center-all border-radius">
           <Link to="/">
           Go Back
           </Link>
           </button> 
           </div>
           </div>

     }
     <Footer />
    </div>
    );
  } 
};

export default Country