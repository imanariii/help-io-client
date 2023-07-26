


export enum PostActionTypes {
    FETCH_POSTS = "FETCH_POSTS",
    FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
    FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
    POST_CREATE = "POST_CREATE"
}

interface FetchPostsAction {
    type: PostActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
    type: PostActionTypes.FETCH_POSTS_SUCCESS;
    payload: any[];
}

interface FetchPostsErrorAction {
    type: PostActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

export interface IPost {
    newPostTitle: string;
    newPostDesc: string;
    id: number
}

interface PostCreateAction {
    type: PostActionTypes.POST_CREATE;
    payload: IPost;
}

export interface PostState {
    posts: IPost[];
    loading: boolean;
    error: null | string;
}

export type PostAction = FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction | PostCreateAction;
