import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'

const Card = ({ name, price, image, endpoint }) => {
    return (
        <div className='card'>
            <img className='card-img'
                src={ image } 
                alt={ name }/>
            <div className='card-body'>
                <h3 className='card-body-title'>{ name }</h3>
                <h5 className='card-body-price'>${ price }</h5>
                <div>
                    <Link 
                        className='card-body-container-buttons'
                        to='/detail'>
                        Detail
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
