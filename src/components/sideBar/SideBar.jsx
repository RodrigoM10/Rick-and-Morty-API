import React, { useState } from "react";
import { Link } from "react-router-dom";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./sideBar.css";
//import react pro sidebar componetns
import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarContent,
    SidebarHeader,
} from "react-pro-sidebar";

//import icons from react icons
import { FiHome } from "react-icons/fi";
import {  FaRegHeart } from "react-icons/fa";
import { BiCog } from "react-icons/bi";
import { BsFilterLeft, BsFilterRight } from "react-icons/bs";


export default function SideBar({children}) {    

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true);

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="sidebar">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="closemenu d-flex justify-content-center align-items-center">
                            {/* small and big change using menucollapse state */}
                            <div>
                                <span>{menuCollapse ? " " : "Main Menu"}</span>
                            </div>
                            <div onClick={menuIconClick}>
                                {/* changing menu collapse icon on click */}
                                {menuCollapse ? (
                                    <BsFilterLeft />
                                ) : (
                                    <BsFilterRight />
                                )}
                            </div>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}  >
                                All the characters
                                <Link to="/" exact/>
                            </MenuItem>
                            <MenuItem active={true} icon={<FiHome />}  >
                                All Ricks
                                <Link to="/ricks" exact/>
                            </MenuItem>
                            <MenuItem active={true} icon={<FiHome />}  >
                                All Mortys
                                <Link to="/mortys" exact/>
                            </MenuItem>
                            <MenuItem active={true} icon={<FiHome />}  >
                                 Interdimensional Cable Stars
                                <Link to="/interdimensionalTV" exact/>
                            </MenuItem>
                            {children}
                            <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
                            <MenuItem icon={<BiCog />}>Settings</MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
        </>
    );
}