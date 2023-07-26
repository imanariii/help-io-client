import {IPost, PostAction, PostActionTypes} from "../../types/post";
import {Dispatch} from "react";
import axios from "axios";


export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionTypes.FETCH_POSTS})
            const response = await axios.get('http://localhost:8080/posts')
            dispatch({
                type: PostActionTypes.FETCH_POSTS_SUCCESS,
                payload: response.data
            })
        } catch (e) {
            dispatch({type: PostActionTypes.FETCH_POSTS_ERROR, payload: "Ошибка при загрузке постов"})
        }
    }
}

export const createPost = (post: IPost) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {

            dispatch({
                type: PostActionTypes.POST_CREATE,
                payload: post
            })
        } catch (e) {
            dispatch({type: PostActionTypes.FETCH_POSTS_ERROR, payload: "Ошибка при создании поста"})
        }
    }
}