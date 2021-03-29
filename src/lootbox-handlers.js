export const findLootbox = (lootboxs = [], ownerId) =>
    lootboxs.find(lootbox => lootbox.owner == ownerId)

export const findDrop = (drops = [], dropId) =>
    drops.find(drop => drop.id == dropId)

export const getDropsForLootbox = (drops = [], lootboxId) => (
    (!lootboxId)
        ? drops
        : drops.filter(drop => drop.lootbox == lootboxId)
)

export const countDropsForLootbox = (drops = [], lootboxId) =>
    drops.filter(drop => drop.lootbox === lootboxId).length

export const lootboxesByOwner = (lootboxs = [], ownerId) =>
    lootboxs.filter(lootbox => lootbox.owner == ownerId)

export const dropsByLootbox = (drops = [], lootboxId) => 
    drops.filter(drop => drop.lootbox == lootboxId)