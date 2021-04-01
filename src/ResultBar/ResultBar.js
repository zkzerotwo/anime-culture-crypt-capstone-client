import React from 'react'
// import LootBox from '../LootBox/LootBox'
import LootboxContext from '../LootboxContext'
import TokenService from '../services/token-service'
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
                        {TokenService.hasAuthToken() ? <AddToLootbox entryType={this.props.seriesType} entryId={entry.mal_id} /> : ''}
                    </div>
                </li>
            )
        })
        return (
            <section className="search-results">
                <h3>RESULTS</h3>
                <hr />
                <ul className="entries">{entries}</ul>

            </section>
        )
    }
}
