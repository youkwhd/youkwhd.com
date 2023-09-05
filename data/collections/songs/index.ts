import jj from "data/collections/songs/jj"
import espana from "data/collections/songs/espana"

import edm from "data/collections/songs/edm"
import instrumental from "data/collections/songs/instrumental"
import indonesia from "data/collections/songs/indonesia"

import { mergeCollections } from "data/collections/utils"

export default mergeCollections(instrumental, jj, indonesia, espana, edm)
