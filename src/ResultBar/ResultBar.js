import React from 'react'
import LootBox from '../LootBox/LootBox'
// import LootboxContext from '../LootboxContext'

export default function ResultBar(props) {
    console.log(props.results, "results props")
    const entries = props.results.map(entry => {
        return (
            <li key={entry.mal_id}>
                <img alt={entry.title} src={entry.image_url} />
                <div>
                    <p>{entry.title}</p>
                    <p>{entry.synopsis}</p>
                    <a href={entry.url}>Learn More</a>
                </div>
            </li>
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
