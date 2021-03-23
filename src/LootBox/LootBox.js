import React from 'react'
import Drops from '../Drops/Drops'

export default class LootBox extends React.Component {
    render() {
        return (
            <section>
                <p>Feelin' Looty?</p>
                <Drops />
            </section>
        )
    }
}