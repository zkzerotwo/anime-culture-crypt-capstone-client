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
                <NavLink to='/'><h3 className="navbar-button">Home</h3></NavLink>
                {TokenService.hasAuthToken() ?
                    <>
                        <NavLink to='/dashboard'><h3 className="navbar-button">Dashboard</h3></NavLink>
                        <NavLink to="/" onClick={() => this.logOutClick()}><h3 className="navbar-button">Logout</h3></NavLink>
                    </> :
                    <>
                        <NavLink to='/login'><h3 className="navbar-button">Login</h3></NavLink>
                        <NavLink to='/register'><h3 className="navbar-button">Sign Up</h3></NavLink>
                    </>}
            </div>
        )
    }

}

export default NavBar;