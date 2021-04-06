import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import LootboxSearchBar from '../LootboxSearchBar/LootboxSearchBar'


export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            barToggle: false
        }
    }
    toggleSearchBar = () => {
        const barSwitch = !this.state.barToggle
        this.setState({
            barToggle: barSwitch
        })
    }
    render() {
        return (
            <section className="landing">
                <header className="App-header">
                    <NavBar />
                </header>
                <div className="intro-card">
                    <h2>You've unlocked The Lootbox!</h2>
                    <p>Inside you'll find curated lists of our users' favorite anime and manga. Search our database of anime and manga to find titles or description. Then, sign up to be able to save your selections to your personally styled Lootbox. Create a name and description for your Lootbox and for each drop inside to give people peek into your personal style. Find your next great show from for other users to search and grow their collection!</p>
                </div>
                
                
                {this.state.barToggle ? <> <LootboxSearchBar />
                <button onClick={() => this.toggleSearchBar()}>
                    Search myAnimeList
                </button> </> :<> <SearchBar /> <button onClick={() => this.toggleSearchBar()}>
                    Search Lootboxes
                </button> </> 
                }
            </section>
        )
    }
}