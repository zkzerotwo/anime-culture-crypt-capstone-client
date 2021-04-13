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
                <h3 className="navbar-button"><NavLink to='/'>Home</NavLink></h3>
                {TokenService.hasAuthToken() ?
                    <>
                        <h3 className="navbar-button"><NavLink to='/dashboard'>Dashboard</NavLink></h3>
                        <h3 className="navbar-button"><NavLink to="/" onClick={() => this.logOutClick()}>Logout</NavLink></h3>
                    </> :
                    <>
                        <h3 className="navbar-button"><NavLink to='/login'>Login</NavLink></h3>
                        <h3 className="navbar-button"><NavLink to='/register'>Sign Up</NavLink></h3>
                    </>}
            </div>
        )
    }

}

export default NavBar;