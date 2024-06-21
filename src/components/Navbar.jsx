import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'
import { CartContext } from '../ContextProvider'



export const Navbar = () => {
    const {cart} = useContext(CartContext)
    return (
        <div className='d-flex justify-content-between bg-secondary py-3 px-5 text-white'>
            <Link to="/">Shop</Link>
            <Link to="/cart"><BsCart/>0</Link>
        </div>

    )
}

