import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Cart, List, X } from 'react-bootstrap-icons';
import Logo from '../../../assets/applelogo.png';

import './navbar.css'

const Navbar = () => {
    const cart = useSelector(state => state.cart.quantity);
    const [openMenu,setOpenMenu] = useState(false)
    return (
        <>
            <div className='header'>
                <Link className='header-nav-link' to= '../apple'>
                    <img src={ Logo } alt='logo' className='header-img' />
                </Link>
                <div className='header-nav'>
                    <Link className='header-nav-link' to= '../mac'>Mac</Link>
                    <Link className='header-nav-link' to= '../iphone'>iPhone</Link>
                    <Link className='header-nav-link' to= '../airpods'>AirPods</Link>
                    <Link className='header-nav-link' to= '../cart'>
                        <Cart className='header-nav-icons'/>
                        { cart }
                    </Link>
                </div>
            </div>

            <div className='header-mobile'>
                <div className='header-mobile-container'>
                    <Link className='header-nav-link' to= '../'>
                        <img src={ Logo } alt='logo' className='header-img' />
                    </Link>
                    <div className='header-nav-mobile'>
                        <Link className='header-nav-link' to= '../cart'>
                            <Cart className='header-nav-icons'/>
                            { cart }
                        </Link>
                        {
                            !openMenu ?
                            <List 
                                className='header-nav-icons'
                                onClick={() => setOpenMenu(!openMenu)}
                                />
                            :
                            <X
                                className='header-nav-icons'
                                onClick={() => setOpenMenu(!openMenu)}
                                />
                        }
                    </div>
                </div>
                {
                    openMenu &&
                    <div className='hamburguer-menu'>
                        <Link className='header-nav-link-mobile1' to= '../mac' onClick={() => setOpenMenu(false)}>Mac</Link>
                        <Link className='header-nav-link-mobile2' to= '../iphone' onClick={() => setOpenMenu(false)}>iPhone</Link>
                        <Link className='header-nav-link-mobile3' to= '../airpods' onClick={() => setOpenMenu(false)}>AirPods</Link>
                    </div>
                }
            </div>
        </>
    );
}

export default Navbar;
