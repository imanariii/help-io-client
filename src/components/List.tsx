import {AuthorItem, PostItem, TitleContents} from "./index";
import styled from "styled-components";
import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {IPost} from "../types/post";

const WrapperList = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
  width: 70%;
`


const List = () => {
    const {fetchPosts} = useActions()
    const {posts} = useTypedSelector(state=>state.post)
    const arr = [1,2,3,4,5]
    document.title = "Новости"
    return (
        <>
            <TitleContents />
            <WrapperList>
                {posts.map(post => (
                    <PostItem key={`${post.id}`} newPostTitle={post.newPostTitle} id={post.id} newPostDesc={post.newPostDesc} />
                ))}
            </WrapperList>
        </>
    )
}

export default List;