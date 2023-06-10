import styled from "styled-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Avatar} from "@mui/material";
import {deepOrange, green} from "@mui/material/colors";

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

    const navigate = useNavigate()

    return (
        <NavigationPanelWrapper>
            <NavList>
                <Link to="../all">
                    <ButtonLink active={0===activeCategory ? 'true' : 'false'} onClick={()=>setActiveCategory(0)}>
                        Все потоки
                    </ButtonLink>
                </Link>
                <Link to="../dev">
                    <ButtonLink active={1===activeCategory ? 'true' : 'false'} onClick={()=>setActiveCategory(1)}>
                        Разработка
                    </ButtonLink>
                </Link>
                <Link to="../design">
                    <ButtonLink active={2===activeCategory ? 'true' : 'false'} onClick={()=>setActiveCategory(2)}>
                        Дизайн
                    </ButtonLink>
                </Link>
                <Link to="../manage">
                    <ButtonLink active={3===activeCategory ? 'true' : 'false'} onClick={()=>setActiveCategory(3)}>
                        Манеджмент
                    </ButtonLink>
                </Link>
            </NavList>
            <Link to="../profile">
                <Avatar
                    sx={{ bgcolor: green[500] }}
                    alt="Remy Sharp"
                >
                    I
                </Avatar>
            </Link>
        </NavigationPanelWrapper>
    )
}

export default NavigationPanel;