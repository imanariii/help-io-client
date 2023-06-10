import {Avatar} from "@mui/material";
import {green} from "@mui/material/colors";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import styled from "styled-components";

const CommentItemStyle = styled.div`
  display: flex;
  flex-direction: column;
`


const Author = styled.section`
  display: flex;
  align-items: center;
  z-index: auto;
  gap: 8px;
`

const AuthorName = styled.span`
  color: black;
  font-weight: 600;
  font-size: 14px;
`

const TimePost = styled.span`
  color: grey;
  font-size: 12px;
`

const CommentText = styled.span`
  color: grey;
  font-size: 16px;
  padding: 8px 0;
`

const CommentItem = () => {
    return (
        <CommentItemStyle>
            <Author>
                <Avatar
                    sx={{ bgcolor: green[500] }}
                    alt="Imanariii"
                    variant="rounded"
                    style={{width: '30px', height: '30px'}}
                >
                    i
                </Avatar>
                <AuthorName>
                    Imanariii
                </AuthorName>
                <TimePost>
                    5 минут назад
                </TimePost>
            </Author>
            <CommentText>
                Блин ну вроде круто
            </CommentText>
        </CommentItemStyle>
    )
}

export default CommentItem;