import React from 'react'

export default class Drops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        console.log(this.props, "drop props")
        return (
            <p>What'd you drop?</p>
        )
    }
}