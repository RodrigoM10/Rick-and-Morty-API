import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

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
    SubMenu,
} from "react-pro-sidebar";

//import icons from react icons
import { BsFilterLeft, BsFilterRight } from "react-icons/bs";
import IconAllCharacters from "../icons/IconAllCharacters";
import IconAllRicks from "../icons/IconAllRicks";
import IconAllMortys from "../icons/IconAllMortys";
import IconTv from "../icons/IconTv";
import IconConfig from "../icons/IconConfig";
import IconFav from "../icons/IconFav";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import IconGun from "../icons/IconGun";
import IconStatus from "../icons/IconStatus";
import SelectStatus from "../filters/SelectStatus";
import IconSpecies from "../icons/IconSpecies";
import SelectSpecies from "../filters/SelectSpecies";
import IconLocation from "../icons/IconLocation";
import SelectLocation from "../filters/SelectLocation";


export default function SideBar({
    species, setSpecies, status, setStatus, location, locations, isLoadingLocations, clearFilterLocations, clearFilterSpecies, clearFilterStatus }) {

    const [menuCollapse, setMenuCollapse] = useState(true);
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const locationUse = useLocation();
    const { pathname } = locationUse;
    const splitLocation = pathname.split("/");

    return (
            <div id="sidebar">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="closemenu d-flex justify-content-center align-items-center">
                            <div>
                                <span>{menuCollapse ? " " : "Main Menu"}</span>
                            </div>
                            <div onClick={menuIconClick}>
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
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={
                                    (props) => (
                                        <Tooltip id="button-tooltip" className={menuCollapse ? " " : " d-none "} {...props}>
                                            All characters
                                        </Tooltip>)
                                }
                            >
                                <MenuItem active={true} icon={<IconAllCharacters />} >
                                    All the characters
                                    <Link to="/" exact="true" />
                                </MenuItem>
                            </OverlayTrigger>

                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={
                                    (props) => (
                                        <Tooltip id="button-tooltip" className={menuCollapse ? " " : " d-none "} {...props}>
                                            All Ricks
                                        </Tooltip>)
                                }
                            >
                                <MenuItem active={true} icon={<IconAllRicks />}  >
                                    All Ricks
                                    <Link to="/ricks" />
                                </MenuItem>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={
                                    (props) => (
                                        <Tooltip id="button-tooltip" className={menuCollapse ? " " : " d-none "} {...props}>
                                            All Mortys
                                        </Tooltip>)
                                }
                            >
                                <MenuItem active={true} icon={<IconAllMortys />}  >
                                    All Mortys
                                    <Link to="/mortys" />
                                </MenuItem>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={
                                    (props) => (
                                        <Tooltip id="button-tooltip" className={menuCollapse ? " " : " d-none "} {...props}>
                                            Interdimensional TV
                                        </Tooltip>)
                                }
                            >
                                <MenuItem active={true} icon={<IconTv />}  >
                                    Interdimensional Cable Stars
                                    <Link to="/interdimensionalTV" />
                                </MenuItem>
                            </OverlayTrigger>
                            {splitLocation[1] !== 'favorites' && splitLocation[1] !== 'character'  &&
                                <SubMenu title="Filter" icon={<IconGun />}>
                                    {splitLocation[1] !== 'interdimensionalTV' &&
                                        <MenuItem icon={<IconLocation />}>
                                            <SelectLocation
                                                location={location}
                                                locations={locations}
                                                onSelect={clearFilterLocations}
                                                isLoading={isLoadingLocations}
                                            />
                                        </MenuItem>
                                    }
                                    <MenuItem icon={<IconStatus />}>
                                        <SelectStatus
                                            setStatus={setStatus}
                                            status={status}
                                            onSelect={clearFilterStatus}
                                        />
                                    </MenuItem>
                                    <MenuItem icon={<IconSpecies />}>
                                        <SelectSpecies
                                            setSpecies={setSpecies}
                                            species={species}
                                            onSelect={clearFilterSpecies}
                                        />
                                    </MenuItem>
                                </SubMenu>
                            }
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={
                                    (props) => (
                                        <Tooltip id="button-tooltip" className={menuCollapse ? " " : " d-none "} {...props}>
                                            Favorites
                                        </Tooltip>)
                                }
                            >
                                <MenuItem icon={<IconFav />}>
                                    Favourite
                                    <Link to="/favorites" />
                                </MenuItem>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={
                                    (props) => (
                                        <Tooltip id="button-tooltip" className={menuCollapse ? " " : " d-none "} {...props}>
                                            Settings
                                        </Tooltip>)
                                }
                            >
                                <MenuItem icon={<IconConfig />}>Settings</MenuItem>
                            </OverlayTrigger>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
    );
}