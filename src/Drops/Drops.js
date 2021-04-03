import React from 'react'
import config from '../config'

export default class Drops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

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
                // this.context.deleteNote(noteId)
                // this.props.onDeleteNote(noteId)
            })
            .catch(error => {
                console.error({ error })
            })
    }
    lootSearchDrop() {

        return (
            <>
                <h3>{this.props.drop.drop_name}</h3>
                <img alt={this.props.drop.drop_description} src={this.props.drop.image_url} />
            </>
        )
    }

    render() {
        // console.log(this.props.drop.image_url, "drop props")
        console.log(this.props.search, "search check")
        const check = this.props.search
        const dropToggle = this.lootSearchDrop
        const drop = this.props.drop
        return (
        <div className="drop_list">
            {check ? dropToggle : <>
                <h3>{drop.drop_name}</h3>
                <p>{drop.drop_description}</p>
                <img alt={drop.drop_name} src={drop.image_url} />
                <button
                    className='drop_delete'
                    type='button'
                    onClick={this.handleClickDelete}>
                    {' '}
        Delete Drop
      </button>
            </>
            }
        </div>
        )
    }
}