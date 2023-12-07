/*
 * @Descripttion: 
 * @version: 
 * @Author: 高月飞
 * @Date: 2023-11-29 15:31:20
 * @LastEditors: 高月飞
 * @LastEditTime: 2023-12-07 14:15:05
 */


import TopCard from './Card/topCard/index'
import leftCard from './Card/leftCard/index'
import RightCard from './Card/rightCard/index'
import ShardCard from './Card/shard/index'
import BarOneCard from './Card/study/OneCard/index'
import BarTwoCard from './Card/study/twoCard/index'
import Player from './VideoPlay/index'
import CourseIntroduction from './source/CourseIntroduction/index'
import CourseCatalog from './source/CourseCatalog/index'
import CourseEvaluation from './source/CourseEvaluation/index'
import QRCode from './Qrcode/QRCode/index'
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
    app.component('QRCode', QRCode)
}