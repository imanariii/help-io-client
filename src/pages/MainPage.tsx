import {Header, NavigationPanel} from "../components";
import React, {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";

const styleBody = {
    background: '#868686',
    minHeight: '90vh'
}

const MainPage = () => {
    const [activeCategory, setActiveCategory] = useState(0)
    document.title = "Главная страница"
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
            <div style={styleBody}>
                <Outlet />
            </div>
        </>
    )
}

export default MainPage;