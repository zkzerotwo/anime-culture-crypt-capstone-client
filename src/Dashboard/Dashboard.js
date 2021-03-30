import React from 'react'
import config from '../config'
import TokenService from '../services/token-service'
import { getDropsForLootbox, findLootbox, lootboxesByOwner, dropsByLootbox } from '../lootbox-handlers'
import { Link } from 'react-router-dom'
import Lootbox from '../LootBox/LootBox'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lootboxes: [],
        }
    }
    static defautProps = {
        match: {
            params: {}
        }
    }
    componentDidMount() {
        let currentUser = TokenService.getUserId();
        console.log(currentUser, "user id")

        //if the user is not logged in, send him to landing page
        if (!TokenService.hasAuthToken()) {
            window.location = '/'
        }

        let getUserLootboxesUrl = `${config.AUTH_ENDPOINT}/lootboxes`
        // let getDropsUrl = `${config.AUTH_ENDPOINT}/drops`
        // let getDropsInLootboxes = `${config.AUTH_ENDPOINT}/${this.state.lootboxes.id}/saved`
        // console.log(getDropsInLootboxes)
        fetch(getUserLootboxesUrl)
            .then((lootboxes) => {
                if (!lootboxes.ok)
                    return lootboxes.json().then(e => Promise.reject(e));
                return lootboxes.json()
            })
            .then((lootboxes) => {
                console.log(lootboxes, "lootbox list")
                
                this.setState({
                    lootboxes: lootboxesByOwner(lootboxes, currentUser)
                })
            })
            .catch(
                (error => this.setState({ error }))
            )
    }
    render() {
        
        const pulledBoxes = this.state.lootboxes
        const userLootboxes = getDropsForLootbox(pulledBoxes, pulledBoxes.id).map(box => {
        // const userLootboxes = this.state.lootboxes.map(box => {
            
            return <li><Lootbox key={box.id} lootbox={box} /></li>
        })
        console.log(pulledBoxes, "loot id czech")
        return (
            <section className="users_lootboxes">
                <h2>What's in the daaaaaaaaaash?!</h2>
                <ul>
                    {userLootboxes}
                </ul>
            </section>
        )
    }
}