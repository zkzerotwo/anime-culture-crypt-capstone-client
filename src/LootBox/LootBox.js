import React from 'react'
import Drops from '../Drops/Drops'
import TokenService from '../services/token-service'
import config from '../config'
import { lootboxesByOwner } from '../lootbox-handlers';

export default class LootBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drops: []
        }
    }
    static defautProps = {
        match: {
            params: {}
        }
    }
    componentDidMount() {
        let currentUser = TokenService.getUserId();
        // console.log(currentUser, "user id")
        // console.log(this.props.lootbox, "lootbox id")
        //if the user is not logged in, send him to landing page
        if (!TokenService.hasAuthToken()) {
            window.location = '/'
        }
        let getDropsInLootboxes = `${config.AUTH_ENDPOINT}/lootboxes/${this.props.lootbox.id}/saved`
        // console.log(getDropsInLootboxes, "drop list url")
        fetch(getDropsInLootboxes)
            .then(drops => {
                if (!drops.ok)
                    return drops.json().then(e => Promise.reject(e));
                return drops.json()
            })
            .then(drops => {

                this.setState({
                    drops: drops.drops
                })
            })
            .catch(error => this.setState({
                error
            }))
    }
    render() {
        console.log(this.state, "drop check")

        const lootboxDrops = this.state.drops
        console.log(lootboxDrops, "Second check")
        const dropRender = lootboxDrops.map(drop => {
            return <li><Drops key={drop.id} drop={drop} /></li>
        })

        return (
            <section>
                <p>Feelin' Looty?</p>
                <ul>
                    {dropRender}
                </ul>
            </section>
        )
    }
}