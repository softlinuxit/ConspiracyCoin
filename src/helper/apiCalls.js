import authAxios from "./axios";

export const getBlogCall = async (id) => {
    return await authAxios.get(`posts/${id}`)
};

export const getCommentsCall = async (id) => {
    return await authAxios.post('comments/getbypost', { postId: id });
};