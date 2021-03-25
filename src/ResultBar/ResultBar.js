import React from 'react'
import LootBox from '../LootBox/LootBox'
// import LootboxContext from '../LootboxContext'

export default function ResultBar(props) {
    console.log(props.results, "results props")
    const entries = props.results.map(entry => {
        return (
            <li key={entry.mal_id}>{entry.title}
            <img alt={entry.title}src={entry.image_url} /></li>
        )
    })
    return (
        <section className="search-results">
            <p>RESULTS</p>
            <ul className="entries">{entries}</ul>
            <LootBox />
        </section>
    )
}
