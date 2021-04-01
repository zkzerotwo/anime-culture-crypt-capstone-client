import React from 'react'
import config from '../config';
import ResultBar from '../ResultBar/ResultBar'

export default class LootboxSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: {
               value: '',
               touched: false
            },
            options: [
                "anime", "manga", "person", "character"
            ],
            searchConfig: 'anime',
            searchResults: [],
            lootboxes: []
        }
    }
    static defaultProps = {
    }

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
        const endpoint = `${config.AUTH_ENDPOINT}`
        // const pass = `${config.API_TOKEN}`
        const query = this.state.query.value
        // this.state.search
        // const options = {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-key": pass,
        //         "x-rapidapi-host": "jikan1.p.rapidapi.com"
        //     }
        // }
        const fullUrl = endpoint + query
        console.log(fullUrl, "url check")
        fetch(fullUrl)
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
            searchConfig: type
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
        const seriesType = this.state.searchConfig
        // const searchType = this.state.options
        //     .map(select => {
        //         return (
        //             <option key={select.toString()} value={select}>{select}</option>
        //         )
        //     })
        // console.log(searchType, "checking search type")
        console.log(this.state, "state check")
        return (
            <section className='search-bar'>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>
                        <input type='text'
                            id='search'
                            name='search'
                            placeholder='Search by keyword'
                            onChange={e => this.updateSearchQuery(e.target.value)}
                            required
                        ></input>
                    </label>
                    {/* <label
                        htmlFor="search-type"
                    >
                        <select
                            id="search-type"
                            name="search-type"
                            defaultValue={this.state.searchConfig}
                            onChange={e => this.updateSearchType(e.target.value)}>
                            {searchType}
                        </select>
                    </label> */}
                    <p>Hey there!</p>
                    <button>
                        Submit!
                    </button>
                </form>
                <ResultBar seriesType={seriesType} results={resultsList}/>
            </section>
        )
    }
}