import styled from 'styled-components';
import {NavigationPanel} from "./index";
import React from "react";
import {Outlet} from "react-router-dom";
import { Link } from 'react-router-dom';

const styleHeader = {
    background: '#343434',
    padding: '18px 16%',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
}

const Logo = styled.span`
  font-weight: 900;
  font-size: 24px;
  font-family: cursive;
  color: white;
`

const Header = () => {
    return (
        <>
            <header style={styleHeader}>
                <Link to="../"><Logo>Help.Io</Logo></Link>
            </header>
        </>
    )
}

export default Header;