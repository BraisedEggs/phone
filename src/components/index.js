

import TopCard from './Card/topCard/index'
import leftCard from './Card/leftCard/index'
import RightCard from './Card/rightCard/index'
import ShardCard from './Card/shard/index'
export default (app) => {
    app.component('TopCard', TopCard)
    app.component('leftCard', leftCard)
    app.component('RightCard', RightCard)
    app.component('ShardCard', ShardCard)
}