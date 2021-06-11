import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import { makeStyles } from '@material-ui/core/styles';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .0)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
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
  activePanel:{
    borderLeft: '3px solid #DE9E48',
    paddingLeft: '10px',
    color: '#DE9E48',
    fontWeight: 600,
  },
  subMenu: {
    padding: 0,
    marginLeft: '25%',
    '&:hover': {
      backgroundColor: 'white',
    }
  },
  activeSubmenuText: {
    padding: 0,
    marginLeft: '10%',
    fontSize: 14,
    fontWeight: 400,
    whiteSpace: 'nowrap',
    textTransform: 'none',
    padding: '5px 0px 5px 0px',

    color: '#DE9E48',
    '&:hover': {
      backgroundColor: 'white',
    }
  },
  submenuText: {
    padding: 0,
    marginLeft: '10%',
    fontSize: 14,
    textTransform: 'none',
    fontWeight: 400,
    whiteSpace: 'nowrap',
    padding: '5px 0px 5px 0px',
    color: 'black',
    '&:hover': {
      backgroundColor: 'white',
    }
  }
}));

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: 0
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions({pageVal, setFunc}) {
  const [expanded, setExpanded] = React.useState(pageVal !== 'editProfile' ? 'panel2' : 'panel1');
  const [page, setPage] = useState('');
  const classes = useStyles();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function handleSubmenu(e){
    setFunc(e.currentTarget.value);
  }

  return (
    <div style={{width:'100%', height: '100%', position: 'sticky', marginTop: '0px'}}>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className={expanded == 'panel1' ? classes.activePanel : classes.panel}>Edit Akun</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button value={'editProfile'} onClick={handleSubmenu} disableRipple 
          className={classes.subMenu}>
            <Typography style={{textDecoration: 'none'}} component={Link} to="/dashboard/settings" className={pageVal=='editProfile'? classes.activeSubmenuText : classes.submenuText}>Edit Profil</Typography>
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className={expanded == 'panel2' ? classes.activePanel : classes.panel}>Pesan</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button value={'inbox'} onClick={handleSubmenu} disableRipple 
          className={classes.subMenu}>
            <Typography style={{textDecoration: 'none'}} component={Link} to="/dashboard/inbox" className={pageVal=='inbox'? classes.activeSubmenuText : classes.submenuText}>Inbox</Typography>
          </Button>
        </AccordionDetails>
        <AccordionDetails>
          <Button value={'outbox'} onClick={handleSubmenu} disableRipple 
          className={classes.subMenu}>
            <Typography style={{textDecoration: 'none'}} component={Link} to="/dashboard/outbox" className={pageVal=='outbox'? classes.activeSubmenuText : classes.submenuText}>Outbox</Typography>
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}