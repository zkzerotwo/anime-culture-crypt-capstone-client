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
        console.log(currentUser, "user id")

        //if the user is not logged in, send him to landing page
        if (!TokenService.hasAuthToken()) {
            window.location = '/'
        }

        let getUserLootboxesUrl = `${config.AUTH_ENDPOINT}/lootboxes`
        let getDropsUrl = `${config.AUTH_ENDPOINT}/drops`
        Promise.all([
            fetch(getUserLootboxesUrl),
            fetch(getDropsUrl)
        ])
        .then(([lootboxes, drops]) => {
            if (!lootboxes.ok)
                return lootboxes.json().then(e => Promise.reject(e));
            if (!drops.ok)
                return drops.json().then(e => Promise.reject(e));
            return Promise.all([lootboxes.json(), drops.json()]);
        })
        .then(([lootboxes, drops]) => {
            console.log(lootboxes, drops, "lootbox list")
            this.setState({
                lootboxes, drops
            })
        })
        .catch(
            (error => this.setState({error}))
        )
    }
    render() {
        const ownerId = TokenService.getUserId()
        const { drops, lootboxes } = this.state
        // const drops = getDropsForLootbox(this.state.drops)
        // const lootboxes = this.state.lootboxes
        const lootbox = lootboxesByOwner(lootboxes, ownerId)
        const userCollection = lootboxes.forEach(box => {
            box.lootboxesByOwner()
        })
        // console.log(this.state, "state check")
        // console.log(lootbox, "owner lootboxes")
        console.log(userCollection, "colection test")
        return (
            <h2>What's in the daaaaaaaaaash?!</h2>
        )
    }
}