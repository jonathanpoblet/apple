import React from 'react';
import Card from '../../components/Cards/Card.jsx';
import { airpods } from '../../products/airpods.js';

import './airpods.css';

const AirPods = () => {
    return (
        <div className='airpods'> 
            <h1 className='airpods-title'>
            Sometimes life hits you in the head with a brick. Don't lose faith.
            </h1>
            <h2 className='airpods-title-person'>
                - Steve Jobs
            </h2>
            <hr className='hr-airpods'/>
            <div className='airpods-products'>
                {
                    airpods.map(( airpods,index ) => {
                        return(
                            <Card
                                name={ airpods.product }
                                image={ airpods.image }
                                price={ airpods.price }
                                memory={ airpods.memory }
                                colors= { airpods.colors }
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
