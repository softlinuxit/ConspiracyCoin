import { RESET_BLOG, BLOG_FETCH_START, BLOG_FETCH_SUCCESS, BLOG_FETCH_ERROR } from '../actionType';

const initialData = {
    data: null,
    isLoading: false
};

export default (state = initialData, action) => {
    if (action.type === RESET_BLOG) {
        return {
            ...initialData,
        };
    }
    if (action.type === BLOG_FETCH_START) {
        return {
            ...state,
            isLoading: true,
        };
    }

    if (action.type === BLOG_FETCH_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            data: action.payload
        };
    }

    if (action.type === BLOG_FETCH_ERROR) {
        return {
            ...state,
            isLoading: false
        };
    }

    return state;
};