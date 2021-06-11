import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    cardRoot: {
        display: 'inline-flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'center',
        width: '290px',
        padding: '0.5%',
        paddingTop: '1em',
        border: '1px solid #ACACAC',
    },

    cardAvatar: {
        height: '127px',
        width: '127px',
    },

    cardUsername: {
        padding: '10px',
        fontSize: 18,
        fontWeight: 600
    },
    address:{
        fontWeight: 350,
        fontSize: '11px',
        width: '80%',
        textAlign: 'center',
    },
    dataKeys:{
        color: '#989898',
        fontSize: 14,
        margin: '5px 0px 5px 0px',
    },
    dataValues:{
        color: 'black',
        fontSize: 14,
        fontWeight: 600,
        margin: '5px 0px 5px 20px',
    },
    dataContainer: {
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 'auto',
    },
    editButton: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        width: '100%',
        textTransform: 'capitalize',
        '&:hover':{
            backgroundColor: theme.palette.primary.hover,
        }
    },
    contentTitle: {
        fontSize: '14px',
        fontWeight: 600,
        width: '100%',
        margin: '0em 0em 0.5em 0em',
    },
    serviceTag: {
        background: '#04253A',
        color: 'white',
        padding: '0.5em 1.5em 0.5em 1.5em',
        fontSize: '12px',
        fontWeight: 600,
        borderRadius: '20px',
    },
    contentText: {
        fontSize: '12px',
        fontWeight: 350,
        width: '100%',
    },
    contactUs: {
        backgroundColor: '#DE9E48',
        color: 'white',
        width: '80%',
        textTransform: 'capitalize',
        '&:hover':{
            backgroundColor: theme.buttons.primary.main,
        }
    },
    cardContainer: {
        width: '160px',
        height: '160px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '140px',
        height: '140px',
        
    },
    
    addNewCard:{
        display: 'inline-flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '160px',
        height: '160px',
        border: '1px solid rgba(0,0,0,0.2)',
        textTransform: 'none',
    },
    addNewText:{
        display: 'inline-flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '140px',
        height: '140px',
        border: '1px solid rgba(0,0,0,0.2)',
    },
    contentTitle2:{
        fontSize: 13,
        paddingTop: '0.5em',
    }
}))