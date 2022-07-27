import React, { useState } from "react";
import "./Styles.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [...new Set(Menu.map((currElem) => {
    return currElem.category;
})
),
    "All"
];

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList)
    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }

        const updateList = Menu.filter((currElem) => {
            return currElem.category === category;
        });
        setMenuData(updateList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
}


export default Restaurant;