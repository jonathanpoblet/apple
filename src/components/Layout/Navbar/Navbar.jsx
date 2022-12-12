import React from 'react';
import { Link } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import Logo from '../../../assets/applelogo.png';

import './navbar.css'

const Navbar = () => {
    return (
        <div className='header'>
            <Link className='header-nav-link' to= '../'>
                <img src={ Logo } alt='logo' className='header-img' />
            </Link>
            <div className='header-nav'>
                <Link className='header-nav-link' to= '../mac'>Mac</Link>
                <Link className='header-nav-link' to= '../iphone'>iPhone</Link>
                <Link className='header-nav-link' to= '../airpods'>AirPods</Link>
                <Link className='header-nav-link' to= '../cart'>
                    <Cart/>
                    0
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
