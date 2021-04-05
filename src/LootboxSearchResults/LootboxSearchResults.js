import React from 'react'
import config from '../config'
import Lootbox from '../LootBox/LootBox'

export default class LootboxSearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drops: [],
            lootbox: []
        }
    }
    static defaultProps = {
        search: true
    }
    componentDidMount() {
        let boxId = this.props.results.map(item => {
            let getDropsInLootboxes = `${config.AUTH_ENDPOINT}/lootboxes/${item.id}/saved`
            console.log(getDropsInLootboxes, "url check")
            fetch(getDropsInLootboxes)
                .then(drops => {
                    if (!drops.ok)
                        return drops.json().then(e => Promise.reject(e));
                    return drops.json()
                })
                .then(drops => {
                    this.setState({
                        drops: [...this.state.drops, drops]
                    })
                    console.log(drops, "check drops")
                })
                .catch(error => this.setState({
                    error
                }))
                console.log(this.state.drops, "Drop state check")
                return <li>
                {/* <Drops drop={entry} search={this.props.search} /> */}
            </li>
        })
        console.log(boxId, "id check")
        
    }
    render() {
        console.log(this.props, this.state, "loot search data check")
        const entries = this.props.results.map(entry => {
            return (

                <li>
                    <Lootbox key={entry.id} 
                    lootbox={entry} 
                    search={this.props.search}
                    />
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