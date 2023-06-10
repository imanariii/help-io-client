import { Avatar } from "@mui/material";
import styled from "styled-components";
import { green } from '@mui/material/colors';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import React from "react";

const WrapperAuthorItem = styled.section`
  padding: 16px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  gap: 1rem;
`

const AuthorName = styled.span`
  color: black;
  font-weight: 600;
  &:hover {
    color: #77a8d0;
  }
`

const Author = styled.section`
  user-select: none;
  display: flex;
  align-items: center;
  z-index: auto;
  gap: 8px;
  cursor: pointer;
`

const StarCount = styled.span`
  color: grey;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #77a8d0;
  }
`

const AuthorItem: React.FC = () => {
    return (
        <WrapperAuthorItem>
            <Author>
                <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                    <PersonRoundedIcon />
                </Avatar>
                <AuthorName>
                    Imanariii
                </AuthorName>
            </Author>
            <StarCount>
                <GradeRoundedIcon />
                43
            </StarCount>
        </WrapperAuthorItem>
    )
}

export default AuthorItem;