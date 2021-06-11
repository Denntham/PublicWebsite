import { Button, Fade, FormLabel, Grid, IconButton, Modal, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReplyIcon from '@material-ui/icons/Reply';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import PhoneInput from 'react-phone-input-2'
import CloseIcon from '@material-ui/icons/Close';
import 'react-phone-input-2/lib/style.css'
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
        width: '50%',
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
        width: '50%',
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
    modalTitle: {
        color: '#372C2E',
        fontSize: 30,
    },
    input: {
		backgroundColor: '#F3F3F4',
		border: 'none',
		zIndex: 1,
		height: '36px',
		width: '100%',
		margin: '0.5rem 0rem 0.5rem 0rem',
	},
    fieldLabel: {
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',

        alignContent: 'center',
    },
    inputBlock: {
        marginTop: '10px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
  }));

function ControlledAccordions({message}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    function openReply() {
        setOpen(true);
    }
  
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
            <Typography className={expanded? classes.activeHeading : classes.secondaryHeading}>{message.persistSender}</Typography>
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
            <Button onClick={openReply} className={classes.replyButton}>
                <ReplyIcon style={{margin: '0% 1% 0% 1%'}}/>
                Reply    
            </Button>
            </div>
          </AccordionDetails>
          <ContactForm open={open} openFunc={setOpen} username={message.persistSender}/>
        </Accordion>
      </div>
    );
  }

  function ContactForm({open, openFunc, username}){
    const classes = useStyles();

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');

    async function sendMessage() {
        if(!title || !message || !phone) return;
        const parsedMessage = {
            title: title,
            message: message,
            phone: Number(phone),
        }
        
        await axios.post(`http://localhost:5000/mail/${username}`, parsedMessage);
        openFunc(false);
    }
    
    const handleClose = () => {
        openFunc(false);
    };

    return(
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <div className={classes.modalHeading}>
                    <Typography className={classes.modalTitle}>Contact {username}</Typography>
                    <IconButton disableRipple disableFocusRipple onClick={handleClose} style={{marginTop: '-20px', marginRight: '-20px', color: 'black'}}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                    </div>
                    <Grid container xs={12} className={classes.inputblock} style={{marginTop: '10px'}}>
                        <Grid item xs={2} className={classes.fieldLabel}>
                            <FormLabel
                            className={classes.fieldLabel}
                            htmlFor="title">
                                Subjek
                            </FormLabel>
                        </Grid>
                            <Grid item xs={10}>
                                <TextField id="title" 
                                variant="outlined" 
                                type="text"
                                fullWidth
                                InputProps={{className: classes.input}}
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                />
                        </Grid>
                    </Grid>
                    <Grid container xs={12} className={classes.inputblock} style={{marginTop: '10px'}}>
                        <Grid item xs={2} className={classes.fieldLabel}>
                            <FormLabel
                            className={classes.fieldLabel}
                            htmlFor="title">
                                Telefon
                            </FormLabel>
                        </Grid>
                            <Grid item xs={10}>
                            <PhoneInput
                            country={'id'}
                            style={{width: '100%'}}
                            value={phone}
                            inputStyle={{width:'100%'}}
                            onChange={e => setPhone(e)}/>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} className={classes.inputblock} style={{marginTop: '10px'}}>
                        <Grid item xs={2} className={classes.fieldLabel}>
                            <FormLabel
                            className={classes.fieldLabel}
                            htmlFor="message">
                                Pesan
                            </FormLabel>
                        </Grid>
                            <Grid item xs={10}>
                                <TextField id="message" 
                                variant="outlined" 
                                type="text"
                                fullWidth
                                multiline
                                InputProps={{className: classes.inputLong}}
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                />
                        </Grid>
                    </Grid>
                    <div style={{display:'inline-flex', width: '100%', alignItems: 'center', justifyContent: 'center', alignContents: 'center'}}>
                        <Button 
                        onClick={sendMessage}
                        className={classes.submitButton}>
                            Send
                        </Button>
                    </div>
                </div>
                </Fade>
            </Modal>
        </div>
    )
}

function Inbox() {

    const [messages, setMessages] = useState([])
    async function getMessages(){
            const res = await axios.get('http://localhost:5000/mail/inbox');
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
                <Typography style={{fontSize: 30, fontWeight: 600, padding: '2% 0% 2% 0%'}}>Inbox</Typography>
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

export default Inbox;