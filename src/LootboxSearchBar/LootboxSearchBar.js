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
            searchResults: [],
            lootboxes: []
        }
    }
    static defaultProps = {
    }
    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.state)
        this.setState({
            searchResults: []
        })
        // const endpoint = `${config.AUTH_ENDPOINT}`
        // const pass = `${config.API_TOKEN}`
        // const query = this.state.query.value
        // this.state.search
        // const options = {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-key": pass,
        //         "x-rapidapi-host": "jikan1.p.rapidapi.com"
        //     }
        // }
        const fullUrl = `${config.AUTH_ENDPOINT}/lootboxes`
        // console.log(fullUrl, "url check")
        fetch(fullUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong, please try again later.');
                }
                return response
            })
            .then(response => response.json())
            .then(response => {
                // console.log(response, "fetch response")
                this.setState({
                    searchResults: response
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
                value: find
            }

        })
        // console.log(this.state, "state check loot search")
    }
    render() {
        // console.log(this.context, "context check")
        const fliterTheseResults = this.state.searchResults
        const seriesType = this.state.searchConfig
        const filter = this.state.query.value.toLowerCase()
        const resultsList = fliterTheseResults.filter(searchKey => {
            //  console.log(searchKey.description)
            return searchKey.description.includes(filter)
            // ||
            // searchKey.name

        })
        // console.log(this.state.searchResults, "state check")
        console.log(resultsList, "filtered array")
        return (
            <section className='search-bar'>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>
                        <input type='text'
                            id='lootbox_search'
                            name='lootbox_search'
                            className='lootbox_search'
                            placeholder='Search through lootboxes by keyword'
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
                    <button>
                        Submit!
                    </button>
                </form>
                <ResultBar seriesType={seriesType} results={resultsList} />
            </section>
        )
    }
}