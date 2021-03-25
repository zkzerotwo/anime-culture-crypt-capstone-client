import React from 'react'
import './App.css';
// import NavBar from './NavBar/NavBar'
import LandingPage from './LandingPage/LandingPage'
import Login from './Login/Login'
import Register from './Register/Register'
import UserAccount from './UserAccount/UserAccount'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LootboxContext from './LootboxContext';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      lootboxes: [],
      drops: []
    }
  }

  handleAddToLootbox = (lootbox) => {
this.setState({
  lootboxes: [...this.state.lootboxes, lootbox]
})
  }

  handleAddToDrops = () => {

  }

  
  render() {
    const contextValue = {
      searchResults: this.state.searchResults,
      lootboxes: this.state.lootboxes,
      drops: this.state.drops,
      addToLootbox: this.handleAddToLootbox,
      addToDrops: this.handleAddToDrops
    }
    return (
      <LootboxContext.Provider value={contextValue}>
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
      </LootboxContext.Provider>
    );
  }
}

export default App;
