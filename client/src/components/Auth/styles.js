import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
    },
    input: {
        backgroundColor: '#F3F3F4',
        borderColor: '0px',
        zIndex: 1,
        height: '36px',
        width: '350px',
        margin: '0.5rem 0rem 2rem 0rem',
    },
    form: {
        display: 'inline-flex',
        flexDirection: 'column',
    },
    formContainer: {
        padding: '10px 30px 30px 30px',
        backgroundColor: 'white',
        display: 'inline-flex',
        flexDirection: 'column',
        zIndex: 1,
        borderRadius: '5px',
    },
    background:{
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        zIndex: 0,
    },
    bgContainer: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        position: 'absolute',
        filter: 'brightness(0.6)',
    },
    fieldLabel: {
        color: 'black',
        fontSize: 16,
        fontWeight: 600,
    },
    formTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: '5%',
    },
    submit: {
        backgroundColor: '#DE9E48',
        borderRadius: '4px',
        color: 'white',
        width: '40%',
        marginTop: '2%',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.buttons.primary.main,
        }
    },
    rerouteText: {
        fontSize: 12,
    },
    link: {
        marginLeft: '4px',
        textDecoration: 'none',
        fontWeight: 700,
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.buttons.primary.main,
        }
    },
    inputblock: {
        display: 'inline-flex',
        flexDirection: 'column',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
}))