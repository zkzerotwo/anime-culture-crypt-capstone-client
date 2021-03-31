import React from 'react'
// import LootBox from '../LootBox/LootBox'
import LootboxContext from '../LootboxContext'
import Entry from '../Entry/Entry'
import AddToLootbox from '../AddToLootbox/AddToLootbox'

export default class ResultBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static contextType = LootboxContext
    

    render() {
        // console.log(this.props.results, "results props")
        const entries = this.props.results.map(entry => {
            return (
                <li key={entry.mal_id}>
                    <img alt={entry.title} src={entry.image_url} />
                    <div>
                        <p>{entry.title}</p>
                        <p>{entry.synopsis}</p>
                        <a href={entry.url}>Learn More</a>
                        <h1>O</h1>
                        <AddToLootbox />
                    </div>
                </li>
            )
        })
        return (
            <section className="search-results">
                <p>RESULTS</p>
                <ul className="entries">{entries}</ul>
                
            </section>
        )
    }
}
