import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { Grid, Typography } from '@material-ui/core';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
    filters:{
        display: 'flex',
        justifyContent: 'center',
    },
    select: {
        alignItems: 'center',
        alignContent: 'center',
        display: 'flex',
    }
}))

function FilterSelect({label, values, valueVar, setFunction}) {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [currVal, setCurrVal] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (val) => {
        setCurrVal(val);
        setFunction(val);
        setAnchorEl(null);
    };
    

    function mapValues(){
        return values.map((value, idx) => {
            return (
                <StyledMenuItem key={idx} onClick={() => handleChange(value)}>
                    <ListItemText primary={value}/>
                </StyledMenuItem>
            )
        })
    }

    return (
        <Grid item xs={3} className={classes.filters}>
            <Grid item xs={8}>
                <Typography onClick={handleClick} className={classes.select} style={{fontSize: 16, fontWeight: 600, cursor: 'pointer'}}>
                    {label}
                    <ArrowDropDownIcon style={{height: '100%'}}/>
                </Typography>
                <Typography style={{color: '#838383', fontSize: '16px', fontWeight: 350}}>
                    {currVal ? currVal : 'Semua'}
                </Typography>
                <StyledMenu
                    anchorEl={anchorEl}
                    keepMounted
                    disableScrollLock
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {mapValues()}
                </StyledMenu>
            </Grid>
        </Grid>
    );
}

export default FilterSelect;