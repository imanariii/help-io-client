import {Header, NavigationPanel} from "../components";
import React, { useState} from "react";
import {Outlet} from "react-router-dom";

const styleBody = {
    // background: 'rgb(2,0,36)',
    background: 'linear-gradient(0deg, rgba(52,52,52,1) 0%, rgba(36,103,109,1) 48%, rgba(0,222,242,1) 100%)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '90vh'
}

const MainPage = () => {
    const [activeCategory, setActiveCategory] = useState(0)
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