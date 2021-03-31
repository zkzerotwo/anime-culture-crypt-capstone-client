import React from 'react'

export default class Drops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        console.log(this.props.drop.img_url, "drop props")
        const drop = this.props.drop
        return (
            <div>
                <h3>{drop.drop_name}</h3>
                <p>{drop.drop_description}</p>
                <img alt={drop.drop_name} src={drop.image_url}/>
            </div>
        )
    }
}