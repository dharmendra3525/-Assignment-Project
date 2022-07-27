import React from "react";

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className="navbar">
                <h1>Our Menu</h1>
                <div className="btn-group">
                    {menuList.map((currElem) => {
                        return (
                            <button className="btn-group__Item"
                                onClick={() => filterItem(currElem)}>
                                {currElem}
                            </button>
                        );
                    })}

                    {/* <button className="btn-group__Item"
                        onClick={() => filterItem("breakfast")}>
                        breakfast
                    </button>
                    <button className="btn-group__Item"
                        onClick={() => filterItem("lunch")}>
                        lunch
                    </button>
                    <button className="btn-group__Item"
                        onClick={() => filterItem("snacks")}>
                        snacks
                    </button>
                    <button className="btn-group__Item"
                        onClick={() => filterItem("dinner")}>
                        dinner
                    </button> */}
                    {/* <button className="btn-group__Item"
                        onClick={() => setMenuData(Menu)}>
                        All
                    </button> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
