import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error));
  }, []);

  const handleCountryAdd = country => {
    let newCart = [...cart, country];
    setCart(newCart);
  }

  return (
    <div className="App">
      <h2>Country Loaded: {countries.length}</h2>
      <h2>Country Added: {cart.length}</h2>
      <Cart cart={cart}></Cart>
      {
        countries.map(country => <Country country={country} handleCountryAdd={handleCountryAdd} key={country.alpha3Code}></Country>)
      }
    </div>
  );
}

export default App;
