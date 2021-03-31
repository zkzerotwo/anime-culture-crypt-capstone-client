import React from 'react'

export default class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        console.log(this.props)
        return(
            <p>This is entry</p>
        )
    }
}