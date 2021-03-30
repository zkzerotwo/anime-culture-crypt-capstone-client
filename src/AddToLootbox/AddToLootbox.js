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
            lootbox: {
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

    render() {
        console.log(this.state, "data check")
        return (
            <div>Let's Add some drops!</div>
        )
    }
}