import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartTable from '../../components/Cart/CartTable';
import { ResetCart } from '../../redux/slices/cart';
import Swal from 'sweetalert2';

import './cart.css'


const Cart = () => {
    const products = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className='cart'>
            <h1 className='cart-title'>Cart</h1>
            {
                products.length > 0 ?
                    <>
                        <CartTable products={ products }/>
                        <button 
                            onClick={() => {
                                Swal.fire({
                                    title: 'You finished your purchase',
                                    text: 'Your products will arrive in 3 days',
                                    confirmButtonColor: '#999'
                                })
                                setTimeout(() => {
                                    dispatch(ResetCart());
                                    navigate('/')
                                },2000)
                            }}
                            className='cart-buy'>
                            Buy
                        </button>
                    </>
                    :
                    <h2>NO PRODUCTS IN CART, PLEASE ADD</h2>
            }
        </div>
    );
}

export default Cart;
