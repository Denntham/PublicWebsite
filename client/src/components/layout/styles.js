import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    navbar: {
        display: 'inline-flex',
        justifyContent: 'space-between',
        width: '100vw',
        position: 'fixed',
        zIndex: 5,
        paddingTop: '1.5%',
        transitionTimingFunction: 'ease-in',
        transition: '0.2s',
        background: 'white',
        paddingBottom: '10px',
        borderBottom: '30px',
        boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.1)',
    },
    navbarActive: {
        display: 'inline-flex',
        justifyContent: 'space-between',
        width: '100vw',
        position: 'fixed',
        zIndex: 5,
        paddingTop: '1.5%',
        backgroundColor: '#DE9E48',
        transitionTimingFunction: 'ease-in',
        transition: '0.2s',
        borderBottom: '30px',
        paddingBottom: '5px',
        boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.1)',
    },
    left: {
        marginLeft: 30,
    },

    right: {
        marginRight: 0,
        display: 'inline-flex',
        flexDirection: 'row',
    },

    navLink: {
        color: theme.palette.tertiary.main,
        textDecoration: 'none',
        fontWeight: 600,
        marginLeft: 30,
        marginRight: 30,
    },

    navText: {
        color: theme.palette.secondary.main,
        fontWeight: 500,
        fontSize: 15,
    },

    navTextActive: {
        color: 'white',
        fontWeight: 500,
        fontSize: 15,
    },
    
    navButton: {
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        border: '1px solid',
        borderRadius: '21.5px',
        width: '50%',
        display: 'inline-flex',
        height: '60%',
        fontWeight: 500,
        marginLeft: 25,
        marginRight: 25,
        padding: '5px 20px 5px 20px',
        fontSize: 15,
        whiteSpace: 'nowrap',
    },
    navButtonActive: {
        color: theme.palette.tertiary.main,
        borderColor: theme.palette.tertiary.main,
        border: '1px solid',
        borderRadius: '21.5px',
        width: '50%',
        display: 'inline-flex',
        height: '60%',
        fontWeight: 500,
        marginLeft: 25,
        marginRight: 25,
        padding: '5px 20px 5px 20px',
        fontSize: 15,
        whiteSpace: 'nowrap',

    }
}));