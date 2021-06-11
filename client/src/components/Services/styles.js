import {fade, makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100%',
        paddingTop: '70px',
      },
      tabs: {
        width: '270px',
        padding: 0,
        
      },
      tabsDivider: {
        backgroundColor: 'black',
        height: '2px',
      },
      borderContainer:{
        borderRight: `3px solid ${theme.palette.divider}`,
        position: 'fixed',
        height: '100%',
      },
    indicator: {
        left: 0,
        width: '5px',
        backgroundColor: '#0F255E',
    },
    tabPanels:{
      width: '80%',
      position: 'relative',
      left: '268px',
    },
    tab: {
        borderTop: `1px solid ${theme.palette.secondary.main}`,
        height: '0px !important',
        width: '261px',
        "& .MuiTab-wrapper": {
            flexDirection: "row",
            justifyContent: "flex-start",
            marginLeft: '10px',
            textTransform: 'none',
            color: 'black',
          }
    },
    filterOptions:{
        width: '100%',
        marginLeft: '8px',
        height: '30px',
        
    },
    checkboxLabel: {
        color: 'black',
        fontSize: 15,
    },
    tabLabel: {
        fontWeight: 500,
        textAlign: 'left',
        alignItems: 'self-start',
        justifyContent: 'flex-start',
        color: 'black',
    },
    activeTab: {
        fontWeight: 700,
        color: '#0F255E',
    },
    wrapper: {
        alignItems: "flex-start !important",
        flexDirection: 'row !important',

    },
    
    search: {
      zIndex: 1,
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: fade(theme.palette.secondary.main, 0.75),
      },
      marginLeft: '75px',
      marginTop: '20px',
      width: '50%',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',

    },
  }));