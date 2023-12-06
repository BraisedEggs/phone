import { get, post, put, del } from '@/network/https'

// todo:这儿有大量的问题  需要传id进行获取
// 课程
export const useVideoSourceApi = () => {
    return get("https://mock.apifox.com/m1/3669425-0-default/api/video/source")
}
// 章节
export const useVideoChapterApi = () => {
    return get("https://mock.apifox.com/m1/3669425-0-default/api/video/chapter")
}

// 评论
export const useVideoRemackApi = () => {
    return get("https://mock.apifox.com/m1/3669425-0-default/api/video/remark")
}