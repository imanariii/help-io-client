import {
    Avatar,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@mui/material";
import {green} from "@mui/material/colors";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import styled from "styled-components";
import {Dispatch, SetStateAction, useEffect, useRef} from "react";
import {CommentItem} from "./index";


const Author = styled.section`
  display: flex;
  align-items: center;
  z-index: auto;
  gap: 8px;
`

const AuthorName = styled.span`
  color: black;
  font-weight: 600;
`

const TimePost = styled.span`
  color: grey;
  font-size: 12px;
`

const ViewCount = styled.span`
  color: grey;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
`

const Comments = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
`

const CommentTitle = styled.span`
  font-size: 18px;
  font-weight: 900;
  font-family: monospace;
`

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 12px 16px;
`

const Button = styled.button`
  color: grey;
  background: transparent;
  border: none;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  &:hover {
    color: #77a8d0;
  }
`

interface ComponentProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const PostModal = ({open, setOpen}: ComponentProps) => {

    const descriptionElementRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    return (
        <Dialog
            open={open}
            onClose={()=>setOpen(false)}
            scroll={'body'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">Выгорит — не выгорит? Или откуда разработчикам взять инвестиции на создание игры?</DialogTitle>
            <Author style={{margin: '10px 20px'}}>
                <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                    <PersonRoundedIcon />
                </Avatar>
                <AuthorName>
                    Imanariii
                </AuthorName>
                <TimePost>
                    5 минут назад
                </TimePost>
                <ViewCount>
                    <VisibilityRoundedIcon />
                    96
                </ViewCount>
            </Author>
            <DialogContent dividers>
                <DialogContentText
                    id="scroll-dialog-description"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                >
                    Бюджет разработки средней PC игры составляет от 1 до 5 млн долларов. Инди-студии могут сделать продукт дешевле, а большие корпорации выпускают ААА игры с бюджетами в десятки и сотни миллионов долларов. Для компании очень важно как минимум вернуть вложенные в игру инвестиции, а лучше – заработать сверх того на создание следующей игры. Давайте посмотрим, какие основные источники привлечения средств на разработку игр сейчас существуют.
                    Бюджет разработки средней PC игры составляет от 1 до 5 млн долларов. Инди-студии могут сделать продукт дешевле, а большие корпорации выпускают ААА игры с бюджетами в десятки и сотни миллионов долларов. Для компании очень важно как минимум вернуть вложенные в игру инвестиции, а лучше – заработать сверх того на создание следующей игры. Давайте посмотрим, какие основные источники привлечения средств на разработку игр сейчас существуют.

                </DialogContentText>
            </DialogContent>
            <DialogActions style={{display: 'flex', alignItems: 'center', width: '100%', padding: '8px 24px'}}>
                <TextField id="standard-basic" label="Введите комментарий" variant="standard" style={{width: '80%'}} />
                <Button onClick={()=>setOpen(false)}><AddCommentOutlinedIcon /></Button>
                <Button onClick={()=>setOpen(false)}>76<GradeRoundedIcon /></Button>
            </DialogActions>
            <Comments>
                <CommentTitle>Все комментарии <span style={{color: 'gray'}}>3</span></CommentTitle>
                <CommentList>
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                </CommentList>
            </Comments>
        </Dialog>
    )
}

export default PostModal;