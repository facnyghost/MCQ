import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Navbar.css'

const Navbar = () => {

    return (
        <div className="navbar">
            <h1>Simple Science</h1>
            <div>
                <p className="p-2"> HI Genuins</p>
            </div>
        </div>
    )

}

export default Navbar;