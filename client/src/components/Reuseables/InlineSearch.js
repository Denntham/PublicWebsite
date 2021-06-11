import React from 'react';
import { Box, InputBase } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    search: {
        zIndex: 1,
        borderBottom: '1px solid black',
        position: 'relative',
        '&:hover': {
          backgroundColor: fade(theme.palette.secondary.main, 0.10),
        },
        marginLeft: '75px',
        marginTop: '16px',
      },
      searchContainer:{
        display: 'inline-flex',
        position: 'relative',
        bottom: '10px', 
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
  
      },
}));

export default function InlineSearch() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return(
        <Box className={classes.searchContainer}>
			<div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder='Search'
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
			</div>
        </Box>
    )
}