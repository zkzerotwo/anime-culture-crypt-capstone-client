import React from 'react'

const LootboxContext = React.createContext({
    searchResults: [],
    lootboxes: [],
    drops: [],
    addToLootbox: () => {},
    addToDrops: () => {}
})

export default LootboxContext