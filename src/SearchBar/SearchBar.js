import React from 'react'

export default class SearchBar extends React.Component {
    render() {
        return (
            <section className='search-bar'>
                <form>
                    <label>
                        <input type='text'
                        id='keyword'
                        name='keyword'
                        placeholder='Search by keyword or genre'
                        value='action'
                        required
                        ></input>
                    </label>

                    <button>
                        Submit!
                    </button>
                </form>
            </section>
        )
    }
}