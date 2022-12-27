import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDetailPage } from '../../redux/slices/detail';
import './card.css'

const Card = ({ name, price, image, colors, memory}) => {
    const info = {
        name: name,
        price: price,
        image: image,
        memory: memory,
        colors: colors
    };

    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
        <div className='card'>
            <img className='card-img'
                src={ image } 
                alt={ name }/>
            <div className='card-body'>
                <h3 className='card-body-title'>{ name }</h3>
                <h5 className='card-body-price'>${ price }</h5>
                <div>
                    <button 
                        className='card-body-container-buttons'
                        to='/detail'
                        onClick={() => {
                            dispatch(setDetailPage(info)) 
                            navigate('/detail')}}>
                        Detail
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
