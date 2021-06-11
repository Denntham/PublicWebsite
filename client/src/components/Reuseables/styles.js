import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    filterOptions:{
        width: '100%',
        marginLeft: '8px',
        height: '30px',
        
    },
    checkboxLabel: {
        color: 'black',
        fontSize: 15,
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
}))