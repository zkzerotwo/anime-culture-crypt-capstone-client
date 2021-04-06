import React from 'react'
import './App.css';
import LandingPage from './LandingPage/LandingPage'
import Login from './Login/Login'
import Register from './Register/Register'
import Dashboard from './Dashboard/Dashboard'
import Footer from './Footer/Footer'
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
              <Route exact path='/' component={LandingPage} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/dashboard' component={Dashboard} />
            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
      </LootboxContext.Provider>
    );
  }
}

export default App;
