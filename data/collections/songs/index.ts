import jj from "@/data/collections/songs/jj"
import latino from "data/collections/songs/latino"

import type { Collection } from "data/collections"

export type Song = {
    label: string
    data: Collection[]
}

export default { jj, latino }