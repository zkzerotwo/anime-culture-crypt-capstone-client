// import logo from './logo.svg';
import './App.css';
// import NavBar from './NavBar/NavBar'
import LandingPage from './LandingPage/LandingPage'
import Login from './Login/Login'
import Register from './Register/Register'
import UserAccount from './UserAccount/UserAccount'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          {/* static routes */}
          <Route exact path='/' component={LandingPage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/account' component={UserAccount} />
          {/* dynamic route */}
          {/* <Route path="/account/:variable_name" component={GrandChild} /> */}
          {/* error route */}
          {/* <Route component={Error} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
