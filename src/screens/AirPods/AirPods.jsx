import React from 'react';
import Card from '../../components/Cards/Card.jsx';
import { airpods } from '../../products/airpods.js';

import './airpods.css';

const AirPods = () => {
    return (
        <div className='airpods'> 
            <h1 className='airpods-title'>
                Think different.
            </h1>
            <h2 className='airpods-title-person'>
                - Apple
            </h2>
            <hr/>
            <div className='airpods-products'>
                {
                    airpods.map(( iphone,index ) => {
                        return(
                            <Card
                                name={ iphone.product }
                                image={ iphone.image }
                                price={ iphone.price }
                                key={ index }
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default AirPods;
