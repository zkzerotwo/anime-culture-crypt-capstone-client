import 'NavBar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className='nav'>
            <h2>Nav Component</h2>
            <NavLink to='/'><h3>Home</h3></NavLink>
            <NavLink to='/login'><h3>Login</h3></NavLink>
            <NavLink to='/account'><h3>Account</h3></NavLink>
            <NavLink to='/register'><h3>Sign Up</h3></NavLink>
            <NavLink to='/edit'><h3>Sign Up</h3></NavLink>
        </div>
    )
}
 export default NavBar; 