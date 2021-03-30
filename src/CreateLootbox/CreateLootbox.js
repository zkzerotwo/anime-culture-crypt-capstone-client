import React from 'react'
import config from '../config'
import TokenService from '../services/token-service'
import { lootboxesByOwner } from '../lootbox-handlers' 

export default class CreateLootbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lootboxes: []
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
    handleAddToLootbox = (selection) => {
        this.setState({
            selectedLootbox: [...this.state.lootboxes, selection]
        })
    }

    render() {
        console.log(this.state.lootboxes, "Create loot check")
        return  (
            <section>
                <form>

                </form>
            </section>

        )
    }
}