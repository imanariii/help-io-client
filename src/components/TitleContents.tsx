import styled from "styled-components";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import {ChangeEvent, FormEvent, forwardRef, useEffect, useState} from "react";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AppBar, Button, Dialog, IconButton, Slide, Stack, TextField, Toolbar, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {TransitionProps} from "@mui/material/transitions";

const WrapperTitleContents = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: auto;
  margin-bottom: 12px;
  backdrop-filter: blur(4px) saturate(60%);
  -webkit-backdrop-filter: blur(4px) saturate(60%);
  background-color: rgba(186, 185, 185, 0.4);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`

const SectionName = styled.div`
  font-family: cursive;
  padding: 14px 20px;
  font-size: 1.24375rem;
  font-weight: 700;
  line-height: 1.75rem;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
    color: #FFF;
    text-transform: uppercase;
    animation: neon-1 .1s ease-in-out infinite alternate;
  @keyframes neon-1 {
    from {
      text-shadow: 0 0 6px rgba(202, 228, 225, 0.92), 0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(191, 226, 255, 0.52), 0 0 21px rgba(191, 226, 255, 0.92), 0 0 34px rgba(191, 226, 255, 0.78), 0 0 54px rgba(191, 226, 255, 0.92);
    }
    to {
      text-shadow: 0 0 6px rgba(202, 228, 225, 0.98), 0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(191, 226, 255, 0.58), 0 0 22px rgba(191, 226, 255, 0.84), 0 0 38px rgba(191, 226, 255, 0.88), 0 0 60px #FFF;
    }
  }
`

const ButtonCreate = styled.button`
  font-family: cursive;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 16px;
  height: fit-content;
  background: transparent;
  font-weight: 700;
  line-height: 1.75rem;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #FFF;
  border: #fff 1px solid;
  text-transform: uppercase;
  animation: neon-btn .1s ease-in-out infinite alternate;
  margin-right: 24px;
  cursor: pointer;
  transition: 0.1ms ease-in;
  @keyframes neon-btn {
    from {
      text-shadow: 0 0 6px rgba(202, 228, 225, 0.92), 0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(191, 226, 255, 0.52), 0 0 21px rgba(191, 226, 255, 0.92), 0 0 34px rgba(191, 226, 255, 0.78), 0 0 54px rgba(191, 226, 255, 0.92);
      box-shadow: 0 0 6px rgba(202, 228, 225, 0.92), 0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(191, 226, 255, 0.52), 0 0 21px rgba(191, 226, 255, 0.92), 0 0 34px rgba(191, 226, 255, 0.78), 0 0 54px rgba(191, 226, 255, 0.92);
    }
    to {
      text-shadow: 0 0 6px rgba(202, 228, 225, 0.98), 0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(191, 226, 255, 0.58), 0 0 22px rgba(191, 226, 255, 0.84), 0 0 38px rgba(191, 226, 255, 0.88), 0 0 60px #FFF;
      box-shadow: 0 0 6px rgba(202, 228, 225, 0.98), 0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(191, 226, 255, 0.58), 0 0 22px rgba(191, 226, 255, 0.84), 0 0 38px rgba(191, 226, 255, 0.88), 0 0 60px #FFF;
    }
  }

  &:hover {
    background: white;
    color: #343434;
  }
`

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const TitleContents = () => {
    const [newPostTitle, setNewPostTitle] = useState('')
    const [newPostDesc, setNewPostDesc] = useState('')
    const {createPost} = useActions()
    const {posts} = useTypedSelector(state=>state.post)

    const create = () => {
        if(newPostTitle) {
            let id = posts.length
            createPost({id, newPostTitle, newPostDesc})
            setNewPostTitle('')
            handleClose()
        }
    }

    const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) =>{
        setNewPostTitle(event.target.value)
    }
    const handleChangeDesc = (event: ChangeEvent<HTMLInputElement>) =>{
        setNewPostDesc(event.target.value)
    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <WrapperTitleContents>
                <SectionName>Посты</SectionName>
                <ButtonCreate onClick={handleClickOpen}>Добавить пост</ButtonCreate>
            </WrapperTitleContents>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }} style={{background: '#343434'}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Создание поста
                        </Typography>
                    </Toolbar>
                </AppBar>

                    <Stack spacing={2} style={{padding: '24px 48px'}}>
                        <TextField label="Введите заголовок поста" placeholder="Какой-то заголовок..." variant="outlined" value={newPostTitle} onChange={handleChangeTitle} />
                        <TextField
                            label="Введите ваш пост"
                            value={newPostDesc}
                            onChange={handleChangeDesc}
                            placeholder="Какой-то текст..."
                            multiline
                            variant="outlined"
                        />
                        <Button autoFocus color="inherit" onClick={create} style={{
                            background: "none",
                            borderRadius: '8px',
                            height: 'fit-content'
                        }}>
                            Создать пост
                        </Button>
                    </Stack>

            </Dialog>
        </>
    )
}

export default TitleContents;