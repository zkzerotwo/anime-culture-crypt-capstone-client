import React from 'react'
import config from '../config'
import TokenService from '../services/token-service'
import { lootboxesByOwner } from '../lootbox-handlers'
import ValidationError from '../ValidationError'

export default class CreateLootbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lootboxes: [],
            title: {
                value: '',
                touched: false
            },
            description: {
                value: '',
                touched: false
            },
            owner: {
                value: '',
                touched: false
            },
        }
    }
    static defaultProps = {
        history: {
            goBack: () => { }
        },
        match: {
            params: {}
        }
    }

    updateTitle = (title) => {
        this.setState({
            title: {
                value: title,
                touched: true
            }
        })
    }

    updateDescription = (description) => {
        this.setState({
            description: {
                value: description,
                touched: true
            }
        })
    }
    setOwner = (owner) => {
        this.setState({
            owner: {
                value: owner,
                touched: true
            }
        })
    }
    componentDidMount() {
        let currentUser = TokenService.getUserId();
        console.log(currentUser, "user id")
        let getUserLootboxesUrl = `${config.AUTH_ENDPOINT}/users/${currentUser}/lootboxes`
        fetch(getUserLootboxesUrl)
            .then((lootboxes) => {
                if (!lootboxes.ok)
                    return lootboxes.json().then(e => Promise.reject(e));
                return lootboxes.json()
            })
            .then((lootboxes) => {
                // console.log(lootboxes, "lootbox list")
                this.setOwner(currentUser)
                this.setState({
                    lootboxes: lootboxesByOwner(lootboxes, currentUser),

                })
            })
            .catch(
                (error => this.setState({ error }))
            )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const description = this.state.description.value
        const title = this.state.title.value
        const owner = this.state.owner.value
        console.log(description, title, owner, "data check")
        let payload = {
            title: title,
            description: description,
            box_owner: owner
        }
        // console.log(payload)
        this.setState({
            error: null
        })
        fetch(`${config.AUTH_ENDPOINT}/lootboxes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `${config.APP_API_TOKEN}`
            },
            body: JSON.stringify(payload),
        })
            .then((lootboxsRes) => {
                console.log(lootboxsRes)
                if (!lootboxsRes.ok) {
                    return lootboxsRes.json().then(e => Promise.reject(e));
                }
                window.location = '/dashboard'
                return lootboxsRes.json()
                
            })
            .then((newLootbox) => {
                console.log(newLootbox)
            })

            .catch(error => this.setState({ error }))
    }
    validateLootboxSelect() {
        const lootboxIsSelected = this.state.lootbox.value;
        return !lootboxIsSelected;
    }
    validateTitle() {
        const title = this.state.title.value.trim();
        if (title.length === 0) {
            return 'Title is required'
        }
    }

    render() {
        // console.log(this.state.lootboxes, this.state.owner.value, "Create loot check")
        return (
            <section>
                <form className="create_lootbox" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='lootboxTitle'>
                            Create a New Lootbox
              {' '}

                        </label>
                        <input
                            type='text'
                            title='lootboxTitle'
                            id='lootboxTitle'
                            placeholder='Lootbox Title'
                            onChange={e => this.updateTitle(e.target.value)}
                            required
                        />
                    </div>
                    {this.state.title.touched && (<ValidationError message={this.validateTitle()} />)}
                    <label htmlFor="description">
                        Lootbox Description
                        </label>
                    <textarea
                        id="description"
                        title="description"
                        placeholder="What makes this collection special?"
                        onChange={e => this.updateDescription(e.target.value)}
                    ></textarea>
                    <button
                        type='submit'
                    // disabled={this.validateTitle() || this.validateLootboxSelect()}
                    >
                        Save
            </button>
                </form>
            </section>

        )
    }
}