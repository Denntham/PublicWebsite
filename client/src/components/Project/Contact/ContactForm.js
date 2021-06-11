import React, { useState } from 'react';
import axios from 'axios'
import {makeStyles} from '@material-ui/core/styles';
import { Button, Fade, FormLabel, Grid, IconButton, Modal, TextField, Typography } from '@material-ui/core';
import PhoneInput from 'react-phone-input-2';
import Backdrop from '@material-ui/core/Backdrop';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginTop: '10%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid rgba(0,0,0,0.2)',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: '5px',
        width: '50%',
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
}))

function ContactForm({open, openFunc, username}){
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const classes = useStyles();

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
                                Title
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
                                Phone
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
                                Message
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

export default ContactForm;