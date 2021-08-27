import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar/Navbar'

import { useDispatch, useSelector } from 'react-redux'
import TestBody from './Test-Body/Test-body'

const Test =() =>{
    const user= useSelector(state => state.userReducer.user)
    console.log(user)


    return(
        <div className="App">
        <Navbar />
        <TestBody />
        </div>
    )
}


export default Test;
