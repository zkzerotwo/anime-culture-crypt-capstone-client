import React from 'react'
import Drops from '../Drops/Drops'

export default class LootboxSearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drops: []
        }
    }
    static defaultProps = {
        search: true
    }
    componentDidMount() {
        let boxId = this.props.results.map(item => item.id)
        console.log(boxId)
    }
    render() {
        console.log(this.props, "loot search prop check")
        const entries = this.props.results.map(entry => {
            return (

                <li key={entry.id}>
                    {/* <img alt={entry.name} src={entry.image_url} /> */}
                    <div>
                        <h3>{entry.title}</h3>
                        <p>{entry.description}</p>
                    </div>
                    <ul></ul>
                    <Drops drop={entry} search={this.props.search} />
                </li>
            )
        })
        return (
            <section className="lootbox_search_results">
                <h3>RESULTS</h3>
                <hr />
                <ul className="lootbox_search_entries">
                    {entries}
                </ul>

            </section>
        )
    }
}