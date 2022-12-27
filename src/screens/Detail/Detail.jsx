import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddToCart } from '../../redux/slices/cart';

import Swal from 'sweetalert2';


import './detail.css'

const Detail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const product = useSelector(state => state.detail);
    const [memory, setMemory] = useState(product.memory[0]);
    const [color, setColor] = useState(product.colors[0]);
    const [price, setPrice] = useState(product.price);
    const info = {
        name: product.name,
        price: price,
        image: product.image,
        memory: memory,
        colors: color
    }

    useEffect(() => {
        const buttons = document.getElementsByClassName('detail-info-memories-button');
        if(memory){
            if(memory === product.memory[0]) {
                setPrice(product.price);
                buttons[0].className += ' selected';
                buttons[1].className = 'detail-info-memories-button';
                buttons[2].className = 'detail-info-memories-button';
            } else if (memory === product.memory[1]) {
                setPrice(product.price + 50);
                buttons[0].className = 'detail-info-memories-button';
                buttons[1].className += ' selected';
                buttons[2].className = 'detail-info-memories-button';
            } else if (memory === product.memory[2]) {
                setPrice(product.price + 100);
                buttons[0].className = 'detail-info-memories-button';
                buttons[1].className = 'detail-info-memories-button';
                buttons[2].className += ' selected';
            }
        }
    }, [memory, product.memory, product.price]);
    
    useEffect(() => {
        const buttonsColor = document.getElementsByClassName('detail-info-colors-button');
        if(color === product.colors[0]) {
            buttonsColor[0].className += ' selected';
            buttonsColor[1].className = 'detail-info-colors-button';
            buttonsColor[2].className = 'detail-info-colors-button';
        } else if (color === product.colors[1]) {
            buttonsColor[0].className = 'detail-info-colors-button';
            buttonsColor[1].className += ' selected';
            buttonsColor[2].className = 'detail-info-colors-button';
        } else if (color === product.colors[2]) {
            buttonsColor[0].className = 'detail-info-colors-button';
            buttonsColor[1].className = 'detail-info-colors-button';
            buttonsColor[2].className += ' selected';
        }
    }, [color, product.colors]);


    return (
        <div className='container-detail'>
            <div className='detail'>
                <img className='detail-img' src={ product.image } alt={ product.name }/>
                <div className='detail-info'>
                    <h1 className='detail-info-title'>{ product.name }</h1>
                    <h2 className='detail-info-price'>${ price }</h2>
                    { product.memory.length > 0 && <h3 className='detail-info-carac'>Memory</h3>}
                    <div className='detail-info-memories'>
                        {
                            product.memory.map((mem,index) => {
                                return(
                                    <button 
                                        key={ index }
                                        className = {'detail-info-memories-button'}
                                        onClick = { () => setMemory(mem) }
                                    >
                                        {mem}
                                    </button>
                                )
                            })
                        }
                    </div>
                    <h3 className='detail-info-carac'>Color</h3>
                    <div>
                        {
                            product.colors.map((color,index) => {
                                return(
                                    <button 
                                        key={ index }
                                        className = 'detail-info-colors-button'
                                        onClick = { () => setColor(color) }                                    
                                    >
                                        { color }
                                    </button>
                                    )
                            })
                        }
                    </div>
                    <button 
                        className='detail-info-buttonCart'
                        onClick={() => {
                            Swal.fire({
                                title: 'Product added to your cart',
                                text: "Want to go to cart?",
                                showCancelButton: true,
                                confirmButtonColor: '#999',
                                cancelButtonColor: '#555',
                                confirmButtonText: 'Yes, go to cart!',
                                cancelButtonText: 'Continue buying'
                                }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate('/cart')
                                }
                                })
                            dispatch(AddToCart(info)) 
                            }}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Detail;
