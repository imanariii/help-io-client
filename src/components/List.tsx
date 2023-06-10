import {AuthorItem, PostItem} from "./index";
import styled from "styled-components";
import React from "react";
import {Outlet, useLocation} from "react-router-dom";

const WrapperList = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
  width: 90%;
`

interface IList {
    listType: string;
}

const List = ({listType}:IList) => {
    const arr = [1,2,3,4,5]
    if (listType === 'post') {
        return (
            <WrapperList>
                {arr.map((item, i) => (
                    <PostItem key={i} />
                ))}
            </WrapperList>
        )
    } else {
        return (
            <WrapperList>
                {arr.map((item, i) => (
                    <AuthorItem key={i} />
                ))}
            </WrapperList>
        )
    }
}

export default List;