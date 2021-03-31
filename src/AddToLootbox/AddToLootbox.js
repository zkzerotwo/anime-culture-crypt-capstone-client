import React from 'react'
import config from '../config'
import TokenService from '../services/token-service'
import { lootboxesByOwner } from '../lootbox-handlers'
import ValidationError from '../ValidationError'

export default class AddToLootbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lootboxes: [],
            series: {
                value: '',
                touched: false
            },
            description: {
                value: '',
                touched: false
            },
            lootboxId: {
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
    updateLootboxId = (lootboxId) => {
        this.setState({
            lootbox: {
                value: lootboxId,
                touched: true
            }
        })
        console.log(lootboxId)
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
    componentDidMount() {
        let currentUser = TokenService.getUserId();
        // console.log(currentUser, "user id")

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
                })
            })
            .catch(
                (error => this.setState({ error }))
            )
    }
    render() {
        console.log(this.state.lootboxes, "data check")
        const lootboxList = this.state.lootboxes.map(lootbox => {
            console.log(lootbox.title)
            return (
                <option key={lootbox.id} value={lootbox.id}>{lootbox.title}</option>
            )
        })
        console.log(lootboxList, "list of lootboxes")
        return (
            <div><form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor='series'>
                    series
      {' '}

                </label>
                <input
                    type='text'
                    title='series'
                    id='series'
                    placeholder='Title of your Lootbox'
                    onChange={e => this.updateTitle(e.target.value)}
                    required
                />
            </div>
            {this.state.series.touched && (<ValidationError message={this.validateTitle()} />)}
            <label htmlFor="description">
                Description
                </label>
            <textarea
                id="description"
                title="description"
                onChange={e => this.updateDescription(e.target.value)}
            ></textarea>
            <label
                        htmlFor="lootboxes"
                    >
                        Save in *
                        </label>
                    <select
                        id="lootboxes"
                        name="lootboxes"
                        onChange={e => this.updateLootboxId(e.target.value)}
                        defaultValue="Select Lootbox"
                    >
                        <option
                            disabled
                        >
                            Select Lootbox
                            </option>
                        {lootboxList}
                    </select>
            <button
                type='submit'
            // disabled={this.validateTitle() || this.validateLootboxSelect()}
            >
                Save
    </button>
        </form></div>
        )
    }
}