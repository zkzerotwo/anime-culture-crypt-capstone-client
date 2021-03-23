// import { Route } from 'react-router-dom'
// import './App.css';
import NavBar from './NavBar/NavBar'
import SearchBar from './SearchBar/SearchBar'
import Footer from './Footer/Footer'
import ResultBar from './ResultBar/ResultBar'
import React from 'react'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="intro-card">
          <h2>You've unlocked The Lootbox!</h2>
          <p>Inside you'll find curated lists of its users favorite anime and manga. Search our database of anime and manga to find titles by genre. Then, sign up to be able to save your selections to your personally styled Lootbox. Create a name and description for your Lootbox for other users to search and grow their collection!</p>
        </div>
        <SearchBar />
        <ResultBar />
        <Footer />
      </div>

    );
  }

}

export default App;
