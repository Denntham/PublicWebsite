import {fade, makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
		root: {
				backgroundColor: theme.palette.background.paper,
				display: 'flex',
				height: '100%',
				paddingTop: '70px',
				paddingLeft: '25px',
			},
			tabs: {
				width: '270px',
				padding: 0,
				
			},
			tabsDivider: {
				backgroundColor: 'black',
				height: '2px',
			},
			borderContainer:{
				position: 'fixed',
				height: '100%',
				display: 'inline-flex',
				alignContents: 'flex-start',
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
				flexDirection: 'column',
			},
		indicator: {
				left: 0,
				width: '5px',
				backgroundColor: '#0F255E',
				flexDirection: "row",
				justifyContent: "center",
				marginLeft: '10px',
				textTransform: 'none',
				color: 'black',
		},
		tabPanels:{
			width: '80%',
			position: 'relative',
			left: '268px',
		},
		tab: {
				height: '0px !important',
				"& .MuiTab-wrapper": {
						flexDirection: "row",
						justifyContent: "flex-start",
						marginLeft: '10px',
						textTransform: 'none',
						color: 'black',
					}
		},
		filterOptions:{
				width: '100%',
				marginLeft: '8px',
				height: '30px',
				
		},
		checkboxLabel: {
				color: 'black',
				fontSize: 15,
		},
		tabLabel: {
				fontWeight: 500,
				textAlign: 'left',
				width: '80%',
				alignItems: 'flex-start',
				justifyContent: 'flex-start',
				color: 'black',
		},
		activeTab: {
				fontWeight: 700,
				color: '#0F255E',
		},
		wrapper: {
				alignItems: "flex-start !important",
				flexDirection: 'row !important',

		},
		
		search: {
			zIndex: 1,
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: theme.palette.secondary.main,
			'&:hover': {
				backgroundColor: fade(theme.palette.secondary.main, 0.75),
			},
			marginLeft: '75px',
			marginTop: '20px',
			width: '50%',
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: '100%',
			position: 'absolute',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
		inputRoot: {
			color: 'inherit',
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create('width'),
			width: '100%',

		},
		rootSettings: {
				width: '82%',
				paddingTop: '20px',
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
				alignItems: 'center',
				justifyContent: 'center',
				alignContent: 'center',
        width: '100%',
		paddingBottom: '10%',
		},
		formContainer: {
				padding: '10px 30px 30px 30px',
				backgroundColor: 'white',
				display: 'inline-flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				alignContent: 'center',
				zIndex: 1,
				borderRadius: '5px',
        width: '100%',
		},
		uploadImage: {
				position: 'absolute',
				marginLeft: '100px',
				marginTop: '100px',
				backgroundColor: 'white',

				borderRadius: '50%',
				padding: '15px 15px 15px 15px',
				border: `1px solid rgba(0,0,0, .2)`,
				cursor: 'pointer',
				zIndex: 1,
				'&:active': {
						backgroundColor: 'rgba(255,255,255,0.6)'
				}
		},
		heading: {
			fontSize: theme.typography.pxToRem(15),
			flexBasis: '33.33%',
			flexShrink: 0,
		},
		secondaryHeading: {
			fontSize: theme.typography.pxToRem(15),
			color: theme.palette.text.secondary,
		},
		menuRoot:{
			width: '20%',
			paddingTop: '4.5%',
			position: 'sticky',
			height: '100%'
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
		justifyContent: 'center',
		alignItems: 'center',
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
	}));