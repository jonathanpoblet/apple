import React from 'react';
import './card.css'

const Card = ({ name, price, image }) => {
    return (
        <div className='card'>
            <img className='card-img'
                src={ image } 
                alt={ name }/>
            <div className='card-body'>
                <h3 className='card-body-title'>{ name }</h3>
                <h5 className='card-body-price'>${ price }</h5>
                <div>
                    <button className='card-body-container-buttons'>Detail</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
