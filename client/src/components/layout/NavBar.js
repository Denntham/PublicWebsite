import React, { useContext, useState } from "react";
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Button, Typography } from "@material-ui/core";
import AuthContext from '../Auth/Context/AuthContext';
import axios from 'axios';
import {useHistory} from 'react-router';
import Dropdown from '../Reuseables/Dropdown';
import { useLocation } from 'react-router-dom'

import useStyles from './styles.js';

function Navbar(){
    const classes = useStyles();
    const pagesWithTransparentNav = ["/","/login", "/register"]
    const {loggedIn, getLoggedIn, permission} = useContext(AuthContext);
    const history = useHistory();
	const loc = useLocation();
    const [navbar, setNavbar] = useState(!pagesWithTransparentNav.includes(loc.pathname) ? true : false);

    async function logout(){
        await axios.get("http://localhost:5000/auth/logout");
        history.push("/");

        await getLoggedIn();
    }

    function changeBackground(){
        if(window.scrollY >= 100){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);


    return(
        <Container maxWidth className={navbar || !pagesWithTransparentNav.includes(loc.pathname) ? classes.navbarActive : classes.navbar}>
            <div className={classes.left}>
                <NavLink to="/">LOGO</NavLink>
            </div>
            <div className={classes.right}>
                <NavLink className={classes.navLink} to="/">
                    <Typography noWrap className={navbar || !pagesWithTransparentNav.includes(loc.pathname) ? classes.navTextActive : classes.navText}>
                        Home
                    </Typography>
                </NavLink>
                <Dropdown menuList={["Projects", "Services"]} links={["/projects", "/services"]} navbar={navbar} mainText={"Portfolios"} mainLink={"/projects"}/>
                
                
                {/*<Dropdown/>*/}
                {!loggedIn && (
                    <>
                        <Button component={NavLink} className={navbar || !pagesWithTransparentNav.includes(loc.pathname) ? classes.navButtonActive : classes.navButton} to="/login">Login</Button>
                        <Button component={NavLink} className={navbar || !pagesWithTransparentNav.includes(loc.pathname) ? classes.navButtonActive : classes.navButton} to="/register">Register</Button>
                    </>
                )}
                {loggedIn === true && (
                    <>
                        {permission > 0 && (
                            <Dropdown menuList={["Dashboard", "Pesan"]} links={["/dashboard", "/dashboard/inbox"]} navbar={navbar} mainText={"Dashboard"} mainLink={"/projects"}/>
                        )}
                        {permission === 0 && (
                            <Dropdown menuList={["Settings", "Pesan"]} links={["/dashboard/settings", "/dashboard/inbox"]} navbar={navbar} mainText={"Dashboard"} mainLink={"/projects"}/>
                        )}
                        <Button onClick={logout} className={navbar || !pagesWithTransparentNav.includes(loc.pathname) ? classes.navButtonActive : classes.navButton}>Logout</Button>
                    </>
                )}
            </div>
        </Container>
    )
}

export default Navbar; 