import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex',
        width: '100%',
        height: '100%',
        justify: 'center',
        flexDirection: 'column',
    },
    cardsContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex',
        width: '100%',
        height: '100%',
        justify: 'center',
        paddingTop: '2%',
        paddingBottom: '3%',
    },
    cardView: {
        marginLeft: '1.85em',
        marginRight: '1.85em',
        justifyContent: 'left',
        alignItems: 'start',
        display: 'inline-flex',
        cursor: 'pointer',
    },
    cardImage: {
        position: 'relative',
        borderRadius: '15px',
        filter: 'brightness(0.6)',
        width: '230px',
        height: '350px',
    },
    cardText:{
        position: 'absolute',
        marginLeft: '1%',
        marginTop: '3%',
        color: 'white',
        fontWeight: 600,
        fontSize: 20,
    },
    Title: {
        fontSize: 40,
        fontWeight: 600,
    },
    section2:{
        display: 'flex',
    }
}));