import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h4>This is cart: {props.cart.length}</h4>
            <h5>Total population: <small>
                    {
                        props.cart.reduce( (total, country) => total + country.population, 0)
                    }
                </small>
            </h5>
        </div>
    );
};

export default Cart;