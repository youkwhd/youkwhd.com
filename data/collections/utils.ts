import type { Collection } from "data/collections"

export const COLLECTION_SEPERATOR: Collection = {
    name: "__COLLECTION_SEPERATOR__",
    url: "__COLLECTION_SEPERATOR__"
}

export const mergeCollections = (...args: Collection[][]): Collection[] => {
    if (args[0] === undefined || args.length === 0)
        return []

    let collectionWithSeperator: Collection[] = [...args[0]]
    if (args.length != 1)
        collectionWithSeperator.push(COLLECTION_SEPERATOR)

    return [...collectionWithSeperator, ...mergeCollections(...args.slice(1))]
}

export const isSeperator = (collection: Collection): boolean =>
    collection.name === COLLECTION_SEPERATOR.name && collection.url === COLLECTION_SEPERATOR.url
