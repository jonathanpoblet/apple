import React from 'react';
import { prominents } from '../../products/prominents.js'
import Card from '../../components/Cards/Card.jsx';
import image from '../../assets/iphones/iphone14promaxgold.png'
import './home.css';

const Home = () => {
    return (
        <div className='home'> 
            <h1 className='home-title'>
                Quality is more important than quantity. One home run is much better than two doubles.
            </h1>
            <h2 className='home-title-person'>
                - Steve Jobs
            </h2>
            <hr/>
            <div className='home-products'>
                {
                    prominents.map(( prominent,index ) => {
                        return(
                            <Card
                                name={ prominent.product }
                                image={ prominent.image }
                                price={ prominent.price }
                                key= { index }
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Home;