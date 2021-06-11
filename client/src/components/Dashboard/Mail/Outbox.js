import { Button, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReplyIcon from '@material-ui/icons/Reply';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    msgRoot: {
      width: '100%',
      margin: '1% 0% 1% 0%',
      flexGrow: 0,
      
    },
    heading: {
      fontSize: 18,
      flexBasis: '33.25%',
      flexShrink: 0,
      fontWeight: 600,
    },
    secondaryHeading: {
      color: '#656565',
      flexBasis: '33.33%',
      fontWeight: 400,
      fontSize: 18,
    },
    thirdHeading: {
        alignItems: 'flex-end',
        fontWeight: 400,
      fontSize: 18,
      color: '#656565',
    },
    childLabel : {
        flexBasis: '33%',
    },
    label:{
        flexWrap: 'nowrap',
        backgroundColor: '#F6E8D4',
        borderRadius: '4px',
        height: '50%',
      flexGrow: 0,

    },
    labelText:{
        fontSize: 18,
        fontWeight: 600,
    },
    activeSummary: {
        backgroundColor: '#DE9E48',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        color: 'white',
    },
    activeHeading: {
        color: 'white',
        flexBasis: '33.33%',
        fontWeight: 400,
        fontSize: 18,
        borderRadius: '4px',
    },
    replyButton: {
        backgroundColor: '#DE9E48',
        width: '89px',
        color: 'white',
    },
    
    noContent: {
      fontStyle: 'italic',
      color: '#D2D2D2', 
  },
  }));

function ControlledAccordions({message}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div className={classes.msgRoot}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={expanded ? classes.activeSummary : classes.summary}
          >
            <Typography className={classes.heading}>{message.title}</Typography>
            <Typography className={expanded? classes.activeHeading : classes.secondaryHeading}>{message.persistReceiver}</Typography>
            <Typography className={expanded? classes.activeHeading : classes.secondaryHeading}>{new Date(message.createdAt).toDateString()}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{display: 'inline-flex', flexDirection: 'column',  width: '97%', }}>
            <Typography style={{fontSize: 14, fontWeight: 400, color: '#D2D2D2', padding: '1% 0% 1% 0%'}}>
                Informasi Pesanan
            </Typography>
            <div style={{display: 'inline-flex', flexDirection: 'row', width: '100%',
            justifyContent: 'space-between', alignItems: 'flex-start',}}>
            <Typography style={{fontSize: 14}} className={message.message ? classes.content : classes.noContent}>
              {message.message ? message.message : "Isi pesanan kosong"}
            </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

function Outbox(props) {

    const [messages, setMessages] = useState([])
    async function getMessages(){
            const res = await axios.get('http://localhost:5000/mail/outbox');
            setMessages(res.data);
    }
    const classes = useStyles();
    function renderMessages(){
        let messageList = [];

        messages.forEach((msg) => {
            messageList.push(
                <Grid item xs={12}>
                    <ControlledAccordions message={msg}/>
                </Grid>
            )
        })

        return messageList;
    }

    useEffect(() => {
        getMessages();
    }, [])

    return (
        <Grid style={{minHeight: '100%',}} container direction="row" justify="center" xs={12}>
            <Grid item xs={12}>
                <Typography style={{fontSize: 30, fontWeight: 600, padding: '2% 0% 2% 0%'}}>Outbox</Typography>
                <Grid className={classes.label} container direction="row" alignItems="center" xs={12}>
                    <div className={classes.childLabel}  style={{flexBasis: '31.33%', marginLeft: '1.5%'}}>
                        <Typography className={classes.labelText}>
                        Subjek
                        </Typography>
                    </div>
                    <div className={classes.childLabel} style={{flexBasis: '31.33%'}}>
                        <Typography className={classes.labelText}>
                        Dari
                        </Typography>
                    </div>
                    <div className={classes.childLabel} >
                        <Typography className={classes.labelText}>
                        Tanggal
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <Grid container xs={12} style={{marginTop: '2.5%',}}>
                {renderMessages()}
                </Grid>
        </Grid>
    );
}

export default Outbox;