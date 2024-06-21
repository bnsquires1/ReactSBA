import React from 'react'
import { BsCart } from 'react-icons/bs'
const Navbar = () => {
    return (
        <div className='d-flex justify-content-between bg-secondary py-3 px-5 text-white'>
            <a href=""className='navbar-brand'>Shop</a>
            <a href="" className= 'navbar-link text-white'><BsCart/></a>
        </div>

    )
}

export default Navbar