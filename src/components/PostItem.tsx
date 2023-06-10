import {
    Avatar,
} from "@mui/material";
import styled from "styled-components";
import { green } from '@mui/material/colors';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import React, {useState} from "react";
import {PostModal} from "./index";

const WrapperPostItem = styled.section`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  background: white;
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

const PostDescription = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  color: black;
  font-family: system-ui;
  font-weight: 400;
`

const PostAction = styled.button`
  user-select: none;
  font-size: 1rem;
  width: min-content;
  line-height: 1.5rem;
  color: #77a8d0;
  cursor: pointer;
  border: 1px solid #77a8d0;
  border-radius: 4px;
  background: transparent;
  padding: 6px 8px;
  font-family: system-ui;
  font-weight: 400;
  transition: 0.5ms linear;
  &:hover {
    border: 1px solid white;
    background: #77a8d0;
    color: white;
  }
`


const PostItem: React.FC = () => {
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
                    Выгорит — не выгорит? Или откуда разработчикам взять инвестиции на создание игры?
                    <ViewCount>
                        <VisibilityRoundedIcon />
                        96
                    </ViewCount>
                    <StarCount>
                        <GradeRoundedIcon />
                        43
                    </StarCount>
                </PostTitle>
                <PostDescription>
                    Бюджет разработки средней PC игры составляет от 1 до 5 млн долларов. Инди-студии могут сделать продукт дешевле, а большие корпорации выпускают ААА игры с бюджетами в десятки и сотни миллионов долларов. Для компании очень важно как минимум вернуть вложенные в игру инвестиции, а лучше – заработать сверх того на создание следующей игры. Давайте посмотрим, какие основные источники привлечения средств на разработку игр сейчас существуют.
                </PostDescription>
                <PostAction onClick={()=>setOpen(true)}>
                    Подробнее
                </PostAction>
            </ContentPost>
            <PostModal open={open} setOpen={setOpen} />
        </WrapperPostItem>
    )
}

export default PostItem;