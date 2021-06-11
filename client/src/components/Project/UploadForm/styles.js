import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		paddingTop: '7%',
		background: '#dbaa65',
		width: '100%',
	},

	formTitle: {
		fontSize: 25,
		fontWeight: 700,
		paddingBottom: '2%',
		alignItems: 'flex-start',
		display: 'inline-flex',
		justifyContent: 'flex-start',
		width: '90%',
		color: '#DE9E48',
	},
	formContainer: {
		backgroundColor: 'white',
		boxShadow: '0px 1px 10px black',
		width: '100%',
		display: 'inline-flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: '25px 25px 25px 25px',
		zIndex: 1,

	},
	fieldLabel: {
		color: 'black',
		fontSize: 16,
		fontWeight: 600,
		alignItems: 'center',
		alignContent: 'center'
	},
	inputblock: {
		display: 'inline-flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		width: '100%',
		minWidth: '100%',
		padding: '20px 10px 20px 10px',
	},
	input: {
		backgroundColor: '#F3F3F4',
		border: 'none',
		zIndex: 1,
		height: '36px',
		width: '100%',
		margin: '0.5rem 0rem 0.5rem 0rem',
	},
	inputLong: {
		backgroundColor: '#F3F3F4',
		display: 'inline-flex',
		alignItems: 'flex-start',
		border: 'none',
		zIndex: 1,
		width: '100%',
		margin: '0.5rem 0rem 0.5rem 0rem',
	},
	formControl: {
		width: '95%',
	  },
	  selectEmpty: {
		marginTop: theme.spacing(2),
	  },
	datePicker: {
	  width: '13.5%',
	  borderColor: 'rgba(0,0,0,0.1)',
	  display: 'inline-flex',
	  textDecoration: 'none',
	},
	imageBoxes: {
		width: '125px',
		height: '125px',
		margin: '5px 5px 5px 5px',
	},
	imageObjects :{
		width: '125px',
		height: '125px',
	},
	button1:{
		backgroundColor: theme.buttons.primary.main,
		color: 'white',
		margin: '20px 0px -5px 0px',
		width: '30%',
		'&:hover': {
			backgroundColor: theme.buttons.primary.secondary,
		}
	},
	button2:{
		backgroundColor: theme.buttons.primary.main,
		color: 'white',
		margin: '20px 0px -5px 0px',
		width: '50%',
		height: '50px',
		'&:hover': {
			backgroundColor: theme.buttons.primary.secondary,
		}
	},
	delete: {
		zIndex: 2,
		position: 'absolute',
		padding: 0,
	},
	desc: {
		width: '100%',
		marginTop: '3px',
		fontSize: 12,
		fontWeight: 600,
		color: '#656565',
	  },
}));