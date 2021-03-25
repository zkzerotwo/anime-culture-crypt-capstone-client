import React from 'react'
// import { textChangeRangeIsUnchanged } from 'typescript';
import config from '../config';
import ResultBar from '../ResultBar/ResultBar'
import LootboxContext from '../LootboxContext'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: {
                q: ""
            },
            options: [
                "anime", "manga", "person", "character"
            ],
            searchResults: []
        }
    }
    static defaultProps = {
    }

    static contextType = LootboxContext

    formatQueryParams(params) {
        console.log(params, "queryczech")
        const queryItems = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        return queryItems.join('&');
    }
    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.state)
        this.setState({
            searchResults: []
        })
        this.formatQueryParams(this.state.query)
        const endpoint = `${config.API_ENDPOINT}`
        const pass = `${config.API_TOKEN}`
        const query = this.state.searchType + "?" + this.formatQueryParams(this.state.query)
        // this.state.search
        const options = {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": pass,
                "x-rapidapi-host": "jikan1.p.rapidapi.com"
            }
        }
        const fullUrl = endpoint + query
        console.log(fullUrl, pass, "url check")
        fetch(fullUrl,
            options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong, please try again later.');
                }
                return response
            })
            .then(response => response.json())
            .then(response => {
                console.log(response.results, "response")
                this.setState({
                    searchResults: response.results
                })
            })
            .catch(err => {
                console.error(err);
            });
    }
    updateSearchType(type) {
        // console.log(type, "selected")
        this.setState({
            searchType: type
        })
    }
    updateSearchQuery(find) {
        // console.log(find, "queryCheck1")
        this.setState({
            query: {
                q: find
            }

        })
    }
    render() {
        // console.log(this.context, "context check")
        const resultsList = this.state.searchResults
        const searchType = this.state.options
            .map(select => {
                return (
                    <option key={select.toString()} value={select}>{select}</option>
                )
            })
        // console.log(searchType, "checking search type")
        console.log(this.state, "state check")
        return (
            <section className='search-bar'>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>
                        <input type='text'
                            id='search'
                            name='search'
                            placeholder='Search by keyword or genre'
                            onChange={e => this.updateSearchQuery(e.target.value)}
                            required
                        ></input>
                    </label>
                    <label
                        htmlFor="search-type"
                    >
                        <select
                            id="search-type"
                            name="search-type"
                            defaultValue="anime"
                            onChange={e => this.updateSearchType(e.target.value)}>
                            {searchType}
                        </select>
                    </label>
                    <p>Hey there!</p>
                    <button>
                        Submit!
                    </button>
                </form>
                <ResultBar results={resultsList}/>
            </section>
        )
    }
}