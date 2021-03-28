import React from 'react' 
import config from '../config'
import TokenService from '../services/token-service'
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

    componentDidMount() {
        let currentUser = TokenService.getUserId();
        console.log(currentUser, "user id")

        //if the user is not logged in, send him to landing page
        if (!TokenService.hasAuthToken()) {
            window.location = '/'
        }

        let getUserLootboxesUrl = `${config.AUTH_ENDPOINT}/lootboxes`
    }
    render() {
        return (
            <h2>What's in the daaaaaaaaaash?!</h2>
        )
    }
}