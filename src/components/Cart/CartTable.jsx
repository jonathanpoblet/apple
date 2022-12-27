import React, { useState, useEffect } from 'react';


import { Trash } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { DeleteProduct } from '../../redux/slices/cart';
import './cart.css'

const CartTable = ({ products }) => {
    
    const dispatch = useDispatch();
    const [total,setTotal] = useState(0);
    
    useEffect(() => {
        let  initialTotal = 0;
        for (const product of products) {
            initialTotal += product.price;
        }
        setTotal(initialTotal)

    }, [products]);

    return (
        <table className="table">
            <thead>
                <tr className='tr-head'>
                    <th scope="col" className='disappear'>Product</th>
                    <th scope="col" className='disappear2'>Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Memory</th>
                    <th scope="col">Color</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product,index) => {
                        return(
                            <tr className='tr-body' key={index + 1}>
                                <th className='disappear' scope="row">{index + 1}</th>
                                <td className='disappear2'><img className='cart-img' src={ product.image } alt={ product.name }/></td>
                                <td>{ product.name }</td>
                                <td>{ product.memory? product.memory : 'Without Memory' }</td>
                                <td>{ product.colors }</td>
                                <td>${ product.price }</td>
                                <td>
                                    <Trash className='trash' key={index} onClick={() => dispatch(DeleteProduct(index))}/>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <h3>Total: ${total} </h3>
        </table>
    );
}

export default CartTable;
