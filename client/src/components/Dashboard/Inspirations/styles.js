import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    cardRoot: {
        display: 'inline-flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'center',
        width: '290px',
        height: '320px',
        maxHeight: '320px',
        padding: '0.5%',
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
        width: 'auto'
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
    cardContainer: {
        width: '200px',
        height: '200px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '190px',
        height: '190px',
        
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

    content:{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center'
    }
}))