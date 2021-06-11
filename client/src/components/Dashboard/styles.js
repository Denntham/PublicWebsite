import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        paddingTop: '6%',
        padding: theme.spacing(4),
        display: 'inline-flex',
        justifyContent: 'flex-start',
        margin: 0,
        flexGrow: 1,
    },
    
    breadcrumb: {
        color: theme.palette.secondary.main,
        fontWeight: 300,
        paddingBottom: '1%',
        marginBottom: '1%',
        width: '30%',
        borderBottom: '1px solid black'
    },
}))