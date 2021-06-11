import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'block',
        padding: 0,
        margin: 0,
    },
    homeImage: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        position:'absolute',
        filter: 'brightness(0.6)',
    },
    firstContainer: {
      width: '100',
      height: '100%',
      
    },
    mainText: {
        fontWeight: 700,
        color: theme.palette.tertiary.main,
        fontSize: 30,
        textShadow: '2px 2px 3px black',
        marginBottom: '10%',
        width: '100%',
    },
    landingBanner: {
      display: 'inline-flex',
      flexDirection: "column",
      justifyContent: "center",
      position: 'absolute',
      height: '100%',
      width: '50%',
      marginLeft: '7%',
      zIndex: 1,
    },
    
    search: {
      zIndex: 1,
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.tertiary.main,
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.75),
      },
      marginRight: theme.spacing(8),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 'auto',
      },
      borderRadius: '27px'
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
      width: '100%',

    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    secondContainer: {
      width: '100%',
      backgroundColor: '#F5F5F5',
      position: 'relative',
      marginTop: '47.6%',
      paddingTop: '3%',
    },
    statsList: {
      position:'relative',
      marginTop: '2%',
      marginBottom: '2%',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'inline-flex',
      width: '100%',
      height: '100%',
      justify: 'center',
    },
    stats:{
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'inline-flex',
      flexDirection: 'column',
      height: '100%',
      width: '20%'
    },
    statsTitle:{
      fontSize: 30,
      fontWeight: 700,
      textAlign: 'center',
      color: theme.palette.secondary.main,
    },
    statsText: {
      fontSize: 20,
      fontWeight: 500,
    },
    statsNumber: {
      fontSize:30,
      fontWeight:700,
    }
  }))