import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root:{
        paddingTop: '0',
    },
    section1:{
        height: '100vh',
        overflow: 'hidden',
    },
    landingImage: {
        width: '100%',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
        height: '100vh',
        borderRadius: '5px',

        zIndex: 0,
    },
    landingImageContainer: {
        width: '100%',
        height: '100vh',
        zIndex: 0,
    },
    landingText:{
        padding: '3em',
        borderRadius: '5px',
        width: '100%',
        height: '45%',
        backgroundColor: "#6C5C4C",
        zIndex:2,
        position: 'absolute',
        left: '3.5%',
        color: 'white',
    },
    filterBar: {
        marginTop: '1.5em',
        borderRadius: '5px',
        height: '25%',
        minWidth: '60vw',
        backgroundColor: 'white',
        position: 'absolute',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    filters:{
        display: 'flex',
        justifyContent: 'center',
    },
    searchButton: {
        width: '90%',
        background: '#DE9E48',
        color: 'white',
        '&:hover': {
            background: theme.buttons.primary.main,
        },
    },
    sections: {
        paddingTop: '2.5%',
        paddingBottom: '2.5%',
        height: '100%',
    },
    buttons:{
        background: '#DE9E48', 
        color: 'white', 
        marginRight: '0.3%', 
        marginTop: '-2%', 
        textTransform: 'none',
        fontWeight: 700,
        fontSize: 18,
        '&:hover': {
            background: theme.buttons.primary.main,
        },
    },
    sectionTitle: {
        fontSize: 48, fontWeight: 700
    },
    sectionDesc:{
        color: '#737373',
        fontSize: 18,
        fontWeight: 400,
        marginLeft: '0.5%',
    },
    servicesIcons: {
        height: '150px',
        margin: '0em 3em 0em 3em',
        width: '150px',
        cursor: 'pointer',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    servicesIconsContainer: {
        display: 'inline-flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    servicesContent: {
        padding: '3% 0 6% 0',
    },
    iconsDesc: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 600,
        whiteSpace: 'nowrap',
    },
    servicesImage1:{
        height: '25em',
        width: '25em',
        boxShadow: '1.5em 1.5em #6C5C4C'
    },
    image2:{
        boxShadow: '1.5em 1.5em #6C5C4C'
    },
    stepsTitle: {
        fontSize: '36px',
        fontWeight: 'bold',
    },
    stepsContent: {
        color: '#737373',
        fontSize: '18px',
    },
    steps: {
        paddingBottom: '1em',
    }
}))