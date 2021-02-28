import React from 'react';

const Country = (props) => {
    const {name, population, region, flag, currencies} = props.country;
    const flagStyle = {height: '50px'};
    const countryStyle = {border: '2px solid slateblue', margin: '10px', padding: '10px'};
    let curr = '';
    currencies.map(currency => {
        for(let key in currency){
            curr += key + ': ' + currency[key] + ' ';
        }
        curr += '\n';
    });
    return (
        <div style={countryStyle}>
            <h2>{name}</h2>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <p>Currencies: {curr}</p>
            <button onClick={() => props.handleCountryAdd(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;