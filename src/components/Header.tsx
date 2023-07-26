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