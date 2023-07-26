import {
    Avatar,
} from "@mui/material";
import styled from "styled-components";
import { green } from '@mui/material/colors';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {IPost} from "../types/post";

const WrapperPostItem = styled.section`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(4px) saturate(60%);
  -webkit-backdrop-filter: blur(4px) saturate(60%);
  background-color: rgba(186, 185, 185, 0.44);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  gap: 1rem;
`

const TimePost = styled.span`
  color: grey;
  font-size: 12px;
`

const AuthorName = styled.span`
  color: black;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #77a8d0;
  }
`

const Author = styled.section`
  display: flex;
  align-items: center;
  z-index: auto;
  gap: 8px;
`

const ContentPost = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const PostTitle = styled.span`
  font-size: 20px;
  font-family: monospace;
  font-weight: 900;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`
const ViewCount = styled.span`
  color: grey;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
`
const StarCount = styled.span`
  color: grey;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
`

const PostAction = styled.button`
  user-select: none;
  font-size: 1rem;
  width: min-content;
  line-height: 1.5rem;
  color: #eb5180;
  cursor: pointer;
  border: 1px solid #eb5180;
  border-radius: 4px;
  background: transparent;
  padding: 6px 8px;
  font-family: system-ui;
  transition: 0.5ms linear;
  font-weight: 900;

  &:hover {
    //border: 1px solid white;
    background: #eb5180;
    color: white;
  }
`

const PostItem: React.FC<IPost> =  ({id, newPostTitle, newPostDesc}) => {
    const [open, setOpen] = useState(false);

    return (
        <WrapperPostItem>
            <Author>
                <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                    <PersonRoundedIcon />
                </Avatar>
                <AuthorName>
                    Imanariii
                </AuthorName>
                <TimePost>
                    5 минут назад
                </TimePost>
            </Author>
            <ContentPost>
                <PostTitle>
                    {newPostTitle}
                    <ViewCount>
                        <VisibilityRoundedIcon />
                        96
                    </ViewCount>
                    <StarCount>
                        <GradeRoundedIcon />
                        43
                    </StarCount>
                </PostTitle>
                <Link to={`../posts/${id}`}>
                    <PostAction onClick={()=>setOpen(true)}>
                        Подробнее
                    </PostAction>

                </Link>
            </ContentPost>
        </WrapperPostItem>
    )
}

export default PostItem;