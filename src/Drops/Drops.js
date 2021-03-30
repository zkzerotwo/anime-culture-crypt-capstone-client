import React from 'react'

export default class Drops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        console.log(this.props.drop, "drop props")
        const drop = this.props.drop
        return (
            <div>
                <h3>{drop.series_id}</h3>
                <p>What'd you drop?</p>
            </div>
        )
    }
}