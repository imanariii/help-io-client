import {Header, NavigationPanel} from "../components";
import React, {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import styled from "styled-components";

const styleBody = {
    background: '#868686',
    minHeight: '100vh',
    display: 'flex',
    paddingTop: '2rem',
    justifyContent: 'center',
}

const WrapperProfile = styled.section`
  background: white;
  width: 90%;
  min-height: 70vh;
`

const ProfilePage = () => {
    document.title = 'Личный кабинет'
    const [activeCategory, setActiveCategory] = useState(0)
    const {pathname} = useLocation();
    useEffect(()=>{
        switch (pathname.substr(0, 4)) {
            case '/dev':
                setActiveCategory(1)
                break;
            case '/des':
                setActiveCategory(2)
                break;
            case '/man':
                setActiveCategory(3)
                break;
            default:
                setActiveCategory(0)
                break;
        }
    }, [])
    return (
        <>
            <Header />
            <NavigationPanel activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <section style={styleBody}>
                <WrapperProfile>
                    n
                </WrapperProfile>
            </section>
        </>
    )
}

export default ProfilePage;