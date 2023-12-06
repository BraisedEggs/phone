

import TopCard from './Card/topCard/index'
import leftCard from './Card/leftCard/index'
import RightCard from './Card/rightCard/index'
import ShardCard from './Card/shard/index'
import BarOneCard from './Card/study/OneCard/index'
import BarTwoCard from './Card/study/twoCard/index'
import Player from './VideoPlay/index'
import CourseIntroduction from './source/CourseIntroduction/index'
import CourseCatalog from './source/CourseCatalog/index'
import CourseEvaluation from './sourcE/CourseEvaluation/index'
export default (app) => {
    app.component('TopCard', TopCard)
    app.component('leftCard', leftCard)
    app.component('RightCard', RightCard)
    app.component('ShardCard', ShardCard)
    app.component('BarOneCard', BarOneCard)
    app.component('BarTwoCard', BarTwoCard)
    app.component('Player', Player)
    app.component('CourseIntroduction', CourseIntroduction)
    app.component('CourseCatalog', CourseCatalog)
    app.component('CourseEvaluation', CourseEvaluation)
}