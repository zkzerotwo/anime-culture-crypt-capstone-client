import React from 'react'
import config from '../config'

export default class Drops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dash: false
        }
    }
    handleClickDelete = e => {
        e.preventDefault()
        const dropId = this.props.drop.id
        // console.log(dropId, "delete id")
        fetch(`${config.AUTH_ENDPOINT}/drops/${dropId}`, {
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
    componentDidMount() {
        this.windowCheck()
    }
    windowCheck() {
        if (!this.props.search) {
            this.setState({
                dash: true
            })
        }
    }
    lootSearchDrop() {
        const drop = this.props.drop
        return (
            <>
                <h3>
                    {this.props.drop.drop_name}
                </h3>
                <img alt={this.props.drop.drop_description} src={this.props.drop.image_url} />
                <p>
                    {drop.drop_description}
                </p>
                <a href={drop.url}>
                    Learn More
                    </a>
                <button
                    className='drop_delete'
                    type='button'
                    onClick={this.handleClickDelete}>
                    {' '}
                         Delete Drop
                </button>

            </>
        )
    }

    render() {
        // console.log(this.props.drop, "drop props")
        // console.log(this.state.dash, "dash check")
        console.log(this.props.location)
        const check = this.state.dash
        const drop = this.props.drop
        // console.log(this.props.search, "check check")
        return (
            <div className="drop_list">
                {check ? this.lootSearchDrop() :
                    <>
                        <h3>
                            {drop.drop_name}
                        </h3>

                        <img alt={drop.drop_name} src={drop.image_url} />
                        <p>
                            {drop.drop_description}
                        </p>
                        <a href={drop.url}>
                            Learn More
                            </a>
                    </>
                }
            </div>
        )
    }
}