import React from 'react';
import Card from '../../components/Cards/Card';
import { macs } from '../../products/macs.js';

import './mac.css'

const Mac = () => {
    return (
        <div className='macs'> 
            <h1 className='macs-title'>
            I want to put a ding in the universe.
            </h1>
            <h2 className='macs-title-person'>
                - Steve Jobs
            </h2>
            <hr className='hr-mac'/>
            <div className='macs-products'>
                {
                    macs.map(( mac, index ) => {
                        return(
                            <Card
                                name={ mac.product }
                                image={ mac.image }
                                price={ mac.price }
                                memory={ mac.memory }
                                colors= { mac.colors }
                                key={ index }
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Mac;
