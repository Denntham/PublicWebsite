import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';


const Accordion = withStyles({
		root: {
			width: '90%',		
			height: '100%',
      		boxShadow: 'none',
			'&:before': {
				display: 'none',
			},
			'&$expanded': {
			},
		},
		expanded: {},
	})(MuiAccordion);

	const AccordionDetails = withStyles((theme) => ({
		root: {
			padding: theme.spacing(2),
			borderRadius: 'inherit',

		},
	}))(MuiAccordionDetails);
	
	const AccordionSummary = withStyles({
		root: {
			marginBottom: -1,
			minHeight: 1,
			borderRadius: 'inherit',
			borderWidth: '2px 2px 2px 2px',
			'&$expanded': {
				minHeight: 1,
				marginBottom: '0.7em',
			},
		},
		content: {
			'&$expanded': {
				margin: '12px 0',
			},
		},
		expanded: {},
	})(MuiAccordionSummary);

	const useStyles = makeStyles((theme) => ({
		containerRoot: {
			width: '250px',
			marginLeft: '10%',
		},
		menuContainer: {
			width: '100%',
			height: '105px',
			overflowY: 'scroll',
			marginTop: '-17px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			alignContent: 'flex-start',
			'&::-webkit-scrollbar': {
				width: '0.4em',
				borderRadius: '5px',
			},
			'&::-webkit-scrollbar-track-piece': {
				backgroundColor: '#F2F3F5',
				borderRadius: '5px',
			},
			'&::-webkit-scrollbar-thumb': {
				backgroundColor: '#C4C4C4',
				borderRadius: '5px',
			},
			scrollbarWidth: 'thin',
			scrollbarColor: '#C4C4C4 #F2F3F5',
		},
		buttonMenu: {
			padding: 0,
			margin: '3px 0px 3px 0px',
			width: '100%',
			textAlign: 'left',
			'&:hover': {
				background: 'none',
			},
			'&:active': {
				backgroundColor: 'none',
			},
		},
		buttonText: {
			width: '100%',
			fontSize: 13,
			textTransform: 'none',
			color: '#828282',
		},
		activeButton: {
			width: '100%',
			color: '#DE9E48',
			textTransform: 'none',
			fontSize: 13,
	},
	}))

	

function AccordionFilters({title, tabs, onChange, value}) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState('panel1');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};


	function renderButtons() {
		return tabs.map((tab, idx) => {
				return (
					<Button key={idx} value={tab} onClick={(e) => {onChange(e.currentTarget.value)}} disableRipple className={classes.buttonMenu}>
						<Typography className={value == tab ? classes.activeButton : classes.buttonText}>
							{tab}
						</Typography>
					</Button>
				)
		})
}

 
	return (
		<div className={classes.containerRoot}>
			<Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon style={{color: 'black'}} />}>
					<Typography style={{
						fontWeight: 600, 
						textTransform: 'uppercase',
						letterSpacing: '0.25em',
						fontSize: '14px',
						color: '#4F4F4F',
					}}>
						{title}
					</Typography>
				</AccordionSummary>
				<div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', width: '100%'}}>
					<div style={{width: '90%', height: '1px',borderTop: '0.1em solid black', marginBottom: '0.7em', marginTop: '-0.7em'}}>
					</div>
				</div>
				<AccordionDetails>
						<div className={classes.menuContainer}>
							{renderButtons(tabs)}
						</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default AccordionFilters;