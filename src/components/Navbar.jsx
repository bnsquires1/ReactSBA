import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'


export const Navbar = () => {
    return (
        <div className='d-flex justify-content-between bg-secondary py-3 px-5 text-white'>
            <Link to="/">Shop</Link>
            <Link to="/cart"><BsCart/></Link>
        </div>

    )
}

