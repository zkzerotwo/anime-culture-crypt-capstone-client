import React from 'react'
import config from '../config'
import TokenService from '../services/token-service'
// import { Link } from 'react-router-dom'
import Lootbox from '../LootBox/LootBox'
import CreateLootbox from '../CreateLootbox/CreateLootbox'
import Navbar from '../NavBar/NavBar'
import { getDropsForLootbox } from '../lootbox-handlers'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lootboxes: [],
            youSure: false
        }
    }
    static defautProps = {
        match: {
            params: {}
        }
    }
    deleteWarning = (e) => {
        const justChecking = this.state.youSure
        if (justChecking === false) {
            this.setState({
                youSure: true
            })
        }
        this.setState({
            youSure: false
        })
    }
    handleDeleteUser = (e) => {
        let currentUser = TokenService.getUserId();
        TokenService.clearAuthToken()
        window.location = '/'

        const deleteEndpoint = `${config.AUTH_ENDPOINT}/users/${currentUser}`
        fetch(deleteEndpoint, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((user) => {
                if (!user.ok)
                    return user.json().then(e => Promise.reject(e));
                return user.json()
            })
            .catch(
                (error => this.setState({ error }))
            )
    }
    componentDidMount() {
        let currentUser = TokenService.getUserId();
        console.log(currentUser, "user id")

        //if the user is not logged in, send him to landing page
        if (!TokenService.hasAuthToken()) {
            window.location = '/'
        }
        let getUserLootboxesUrl = `${config.AUTH_ENDPOINT}/users/${currentUser}/lootboxes`
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
                    lootboxes: lootboxes.lootboxes
                    // lootboxesByOwner(lootboxes, currentUser)
                })

            })
            .catch(
                (error => this.setState({ error }))
            )
        console.log(this.state.lootboxes, "state check")
    }
    render() {

        const pulledBoxes = this.state.lootboxes
        // const userLootboxes = getDropsForLootbox(pulledBoxes, pulledBoxes.id).map(box => {
        const userLootboxes = pulledBoxes.map(box => {
            // console.log(box.id, "box check")
            return (
                <li>
                    <Lootbox key={box.id} lootbox={box} />
                </li>
            )
        })
        console.log(pulledBoxes, "loot id czech")
        return (
            <section className="users_lootboxes">
                <Navbar />
                <h2>Cache Board</h2>
                <CreateLootbox />
                <ul className="lootboxes_list">
                    {userLootboxes}
                </ul>
                <button
                    className='_delootboxete'
                    type='button'
                    onClick={(e) => { if (window.confirm('Are you sure you want to delete your account?')) { this.handleDeleteUser(e) }; }}>
                    {' '}
        Delete User
      </button>
            </section>
        )
    }
}