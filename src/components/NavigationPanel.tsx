import styled from "styled-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Avatar, Divider, ListItemIcon, Menu, MenuItem} from "@mui/material";
import {deepOrange, green} from "@mui/material/colors";
import {Logout, PersonAdd} from "@mui/icons-material";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';

const NavigationPanelWrapper = styled.section`
  width: 100%;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  align-items: center;
  background: white;
  justify-content: space-between;
  padding: 0 16%;
  border-bottom: 1px solid #dedede;
  z-index: 100;
`

const NavList = styled.nav`
  display: flex;
  flex-direction: row;
`
const ButtonLink = styled.div<{active:string}>`
  text-decoration: none;
  font-family: cursive;
  color: ${props => props.active === 'true' ? 'black' : '#909090'};
  &:hover {
    color: #707070;
  }
  padding: 20px 10px;
  cursor: pointer;
  user-select: none;
`

interface IProps {
    activeCategory: number;
    setActiveCategory: Dispatch<SetStateAction<number>>;
}

const NavigationPanel = ({activeCategory, setActiveCategory}:IProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate()

    return (
        <NavigationPanelWrapper>
            <NavList>
                <Link to="../posts">
                    <ButtonLink active={0===activeCategory ? 'true' : 'false'} onClick={()=>setActiveCategory(0)}>
                        Новости
                    </ButtonLink>
                </Link>
            </NavList>

                <Avatar
                    onClick={handleClick}
                    sx={{ bgcolor: green[500] }}
                    alt="Remy Sharp"
                >
                    I
                </Avatar>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Добавить аватарку
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <StarBorderRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    #99 - Ваш рейтинг
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <HandshakeRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    124 - HelpTickets
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Выйти
                </MenuItem>
            </Menu>
        </NavigationPanelWrapper>
    )
}

export default NavigationPanel;