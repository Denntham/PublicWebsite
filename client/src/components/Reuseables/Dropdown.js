import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import useStyles from '../layout/styles';

export default function SimpleMenu({menuList, links, mainText, navbar }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();

  //TODO: Bad needs to be changed later, but no time right now lol
  const pagesWithTransparentNav = ["/", "/login", "/register"]
	const loc = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function renderMenuItems(){
    return menuList.map((menu, idx) => {
      return(
        <MenuItem onClick={handleClose} component={NavLink} to={links[idx]} key={idx}>{menu}</MenuItem>
      )
    })
  }

  return (
    <>
      <NavLink className={classes.navLink} 
      style={{cursor: 'pointer', whiteSpace: 'nowrap'}}
      to="#"
      aria-controls="simple-menu" 
      aria-haspopup="true" 
      onClick={handleClick} 
      >
        <Typography style={{cursor: 'pointer', display: 'inline-flex'}}  
        className={navbar 
        || !pagesWithTransparentNav.includes(loc.pathname) ? 
        classes.navTextActive : classes.navText}>
          {mainText} <ArrowDropDownIcon/>
        </Typography>
      </NavLink>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        disableScrollLock
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{marginTop: '2%', cursor: 'pointer'}}
        MenuListProps={{onMouseLeave: handleClose}}
      >
        {renderMenuItems()}
      </Menu>
    </>
  );
}