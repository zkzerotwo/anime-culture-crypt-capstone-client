// import 'NavBar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import TokenService from '../services/token-service'


class NavBar extends React.Component {
    logOutClick = () => {
        //console.log('Logging out')
        TokenService.clearAuthToken()
        TokenService.getUserId = (id) => {
            //console.log(id)
        }

        window.location = '/'
    }
    render() {
        return (
            <div className='nav'>
                    <NavLink to='/'><h3>Home</h3></NavLink>
                    <NavLink to='/login'><h3>Login</h3></NavLink>
                    <NavLink to='/register'><h3>Sign Up</h3></NavLink>
                    {TokenService.hasAuthToken() ? <>
                    <NavLink to='/dashboard'><h3>Dashboard</h3></NavLink>
                    <NavLink to="/" onClick={() => this.logOutClick()}><h3 >Logout</h3></NavLink>
                </> : ''}


                {/* <NavLink to='/edit'><h3>Sign Up</h3></NavLink> */}
            </div>
        )
    }

}

export default NavBar;