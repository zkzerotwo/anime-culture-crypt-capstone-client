import React from 'react'
import Drops from '../Drops/Drops'
import TokenService from '../services/token-service'
import config from '../config'

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
        // let currentUser = TokenService.getUserId();
        let getDropsInLootboxes = `${config.AUTH_ENDPOINT}/lootboxes/${this.props.lootbox.id}/saved`
        // let getUserLootboxesUrl = `${config.AUTH_ENDPOINT}/users/${currentUser}/lootboxes`
        console.log(getDropsInLootboxes, "drop list url")

        fetch(getDropsInLootboxes)

            .then(drops => {
                if (!drops.ok)
                    return drops.json().then(e => Promise.reject(e));
                return drops.json()
            })
            .then(drops => {
                // console.log(drops, "fetch check 1")
                this.setState({
                    drops: drops.drops
                })
            })
            .catch(error => this.setState({
                error
            }))

        console.log(this.state, "fetch check")
    }
    handleClickDelete = e => {
        e.preventDefault()
        const lootboxId = this.props.lootbox.id
        console.log(lootboxId, "delete id")
        fetch(`${config.AUTH_ENDPOINT}/lootboxes/${lootboxId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `${config.APP_API_TOKEN}`
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
            })
            .then(() => {
                window.location = '/dashboard'
            })
            .catch(error => {
                console.error({ error })
            })
    }
    render() {
        // console.log(this.state.drops, "drop check")
        // console.log(this.props, "prop check")
        const lootboxDrops = this.state.drops
        const dropRender = lootboxDrops.map(drop => {
            return <li
                className="loot_drop"
                key={drop.id}>
                <Drops
                    drop={drop}
                    search={this.props.search}
                />
            </li>
        })
        // console.log(lootboxDrops, "Second check")
        return (
            <section className="lootbox_display">
                <div className="lootbox_header">
                    <h1>{this.props.lootbox.title}</h1>
                    <h4>{this.props.lootbox.description}</h4>
                </div>
                <ul id="lootbox_drops">
                    {dropRender}
                </ul>
                <button
                    className='delete_lootbox'
                    type='button'
                    onClick={this.handleClickDelete}>
                    {' '}
        Delete Lootbox
      </button>

            </section>
        )
    }
}