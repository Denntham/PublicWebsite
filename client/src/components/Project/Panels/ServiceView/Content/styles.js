import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        padding: '1.5% 5% 0% 3%',
    },
    mainContainer: {
        position: 'relative',
    },
    content: {
        position: 'relative',
        left: '2%',
        height: '100%',
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
    }
}))