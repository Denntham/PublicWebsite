import {fade, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        padding: 0,
        top: 0,
        height: '100%',
        width: '100%',
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: '2%',
    },
    Texts: {
        margin: 0
    },
    cardContainer:{
        margin: '20px 30px 10px 30px',
        left: '45px',
        position: 'relative',
    },
    cardLink: {
        textDecoration: 'none',
        color: 'black',
        '&:active':{
            color: theme.palette.secondary.main,
        }
    },
    ProjectView: {
        width: '330px',
        height: '350px',
        flexDirection: 'column',
    },
    cardContent:{
        marginBottom: '5%',
        paddingTop: '1%',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
    },
    cardImage:{
        width: '95%',
        marginLeft: '2.5%',
        marginTop: '2%',
        borderRadius: '5px',
    },
    projectTitle: {
        fontWeight: 700,
        fontSize: 18,
        padding:0,
        margin:0,
    },
    projectTags: {
        fontWeight: 400,
        fontSize: 13,
        marginBottom: '1%',
    },
    projectLocation: {
        fontSize: 9,
        color: theme.palette.secondary.main,
    },
    projectUploader:{
        display: 'inline-flex',
    },
    banner: {
        width: 'inherit',
        height: '100%',
        borderRadius: '15px',
    },
    bannerContainer:{
        width: '99.5%',
        left: '45px',
        marginLeft: '30px',
        height: '194px',
        marginTop: '0%',
        position: 'relative',
        display:'inline-flex',
        flexDirection: "column",
        justifyContent: "center",
        marginTop: '4%',
    },
    bannerText: {
        color: 'white',
        position: 'absolute',
        zIndex: 1,
        marginTop: '0',
        marginLeft: '4%',
        fontSize: 48,
        fontWeight: 800,
    },

    search: {
        zIndex: 1,
        borderBottom: '3px solid black',
        position: 'relative',
        '&:hover': {
          backgroundColor: fade(theme.palette.secondary.main, 0.10),
        },
        marginLeft: '75px',
        marginTop: '16px',
        width: '40%',
      },
      searchContainer:{
        width: '100%',
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
  
      },
}))