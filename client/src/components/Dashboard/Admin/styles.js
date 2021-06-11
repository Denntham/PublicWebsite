import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    contentBlock:{
        border: `1px solid ${theme.palette.primary.secondary}`,
        color: 'white',
        padding: '10px 20px 10px 10px',
        height: '50px',
        borderRadius: '5px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '10px',
        marginBottom: '10px',
    },
    controls: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '10%',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 700,
        paddingLeft: '10px',
        color: theme.palette.primary.main,
    },
    controlsButton: {
        color: theme.palette.primary.secondary,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid rgba(0,0,0,0.2)',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: '5px',
        width: '40%',
        height: '40%',
      },
      rejectedMessageBox: {
          height: '100%',
      },
      inputLong: {
		backgroundColor: '#F3F3F4',
		display: 'inline-flex',
		alignItems: 'flex-start',
		border: 'none',
		zIndex: 1,
		height: '12rem',
		width: '100%',
		margin: '0.5rem 0rem 0.5rem 0rem',
	},
    submitButton: {
        width: '100%',
        marginTop: '15px',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.primary.secondary,
        }
    },
    modalHeading: {
        display: 'inline-flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    phoneInput: {
        width: '100%',
    }
}))