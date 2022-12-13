import React from 'react';
import Card from '../../components/Cards/Card.jsx';
import { iphones } from '../../products/iphones.js';

import './iphone.css';

const IPhone = () => {
    return (
        <div className='iphone'> 
            <h1 className='iphone-title'>
                Think different.
            </h1>
            <h2 className='iphone-title-person'>
                - Apple
            </h2>
            <hr/>
            <div className='iphone-products'>
                {
                    iphones.map(( iphone,index ) => {
                        return(
                            <Card
                                name={ iphone.product }
                                image={ iphone.image }
                                price={ iphone.price }
                                endpoint={ iphone.endpoint }
                                key={ index }
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default IPhone;
