import React from 'react'
import Drops from '../Drops/Drops'

export default class LootboxSearchResults extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { 

    //     }
    // }
    render() {
        console.log(this.props, "loot search prop check")
        const entries = this.props.results.map(entry => {
            return (

                <li key={entry.id}>
                    <Drops drop={entry}/>
                    {/* <img alt={entry.name} src={entry.image_url} /> */}
                    <div>
                        <h3>{entry.title}</h3>
                        <p>{entry.description}</p> 
                    </div>
                </li>
            )
        })
        return (
            <section className="lootbox_search_results">
                <h3>RESULTS</h3>
                <hr />
                <ul className="lootbox_search_entries">{entries}</ul>

            </section>
        )
    }
}