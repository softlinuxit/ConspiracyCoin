import { BLOG_FETCH_LOAD, COMMENT_FETCH_LOAD, RESET_BLOG, RESET_COMMENT } from "../actionType"

export const getBlogAction = (id) => {
    const action = {
        type: BLOG_FETCH_LOAD,
        payload: { id: id },
    }
    return action
}

export const getCommentAction = (id) => {
    const action = {
        type: COMMENT_FETCH_LOAD,
        payload: { id: id },
    }
    return action
}

export const resetBlog = () => {
    const action = {
        type: RESET_BLOG
    }
    return action
}
export const resetComment = () => {
    const action = {
        type: RESET_COMMENT
    }
    return action
}