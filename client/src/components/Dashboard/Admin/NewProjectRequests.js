import { Button, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CancelIcon from '@material-ui/icons/Cancel';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import useStyles from './styles';

function NewProjectRequests() {
    const classes = useStyles();
    const [requests, setRequests] = useState([]);
    const [open, setOpen] = useState(false);
    const [check, setCheck] = useState(false);


    async function getRequests(){
        const res = await axios.get('http://localhost:5000/admin/requests');
        if(res.data){
            setRequests(res.data);
        }
    }

    function TransitionsModel({open, setFunc, id, forceRender}){
        const [rejectedMessage, setRejectMessage] = useState('');

        const handleClose = () => {
            setFunc(false);
        };

        async function submitRejection(e) {
            if(!rejectedMessage) return;

            const request = {
                status: 2,
                rejectedMessage: rejectedMessage,
            }
            console.log(request);
            await axios.post(`http://localhost:5000/admin/handle/${id}`, request);
            setCheck(!check);
            console.log(check);
            setOpen(false);
        }

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
                    <Typography>Reasons for rejection</Typography>
                    <IconButton disableRipple disableFocusRipple onClick={handleClose} style={{marginTop: '-20px', marginRight: '-20px', color: 'black'}}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                    </div>
                    <Grid item xs={12} className={classes.rejectedMessageBox}>
                        <TextField
                        variant="outlined" 
                        type="text"
                        fullWidth
                        multiline
                        InputProps={{className: classes.inputLong}}
                        onChange={(e) => setRejectMessage(e.target.value)}
                        value={rejectedMessage}
                        />
                        <Button onClick={submitRejection} className={classes.submitButton}>Submit</Button>
                    </Grid>
                </div>
                </Fade>
            </Modal>
            </div>
        )
    }

    async function handleRequests(e, id, idx){
        const handleCode = Number(e);
        
        if(handleCode == 1){
            setOpen(false);
            const request = {
                status: handleCode,
            }
            await axios.post(`http://localhost:5000/admin/handle/${id}`, request);
            let reqList = requests;
            reqList.splice(idx, 1);
            setRequests(reqList);
            setCheck(!check);
        }
        if(handleCode == 2){
            setOpen(true);
        }
    }

    function renderRequest(){
        if(requests.length > 0) {
            return requests.map((req, idx) => {
                return(
                    <>
                    <Grid item xs={12} className={classes.contentBlock}>
                        <Link to={`/projects/${req._id}`} style={{textDecoration: 'none', color: 'white'}}>
                            <Typography className={classes.titleText}>
                                {req.name}
                            </Typography>
                        </Link>
                        
                        <Grid xs={1} className={classes.controls}>
                            <IconButton 
                            className={classes.controlsButton}
                            value={1, `${req._id}`, idx}
                            onClick={(e) => handleRequests(1, `${req._id}`, idx)}>
                                <CheckBoxIcon />
                            </IconButton>
                            <IconButton 
                            value={2}
                            className={classes.controlsButton} 
                            onClick={(e) => handleRequests(2, `${req._id}`, idx)}
                            style={{color: 'black'}}>
                                <CancelIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <TransitionsModel open={open} setFunc={setOpen} id={`${req._id}`} forceRender={setCheck}/>
                    </>
                    
                )
            })
        }
    }

    useEffect(() => {
        getRequests();
    }, [check])
    
    return (
        <Grid container xs={12} justify='center' alignItems='center'>
            <Typography style={{display: 'inline-flex', width: '100%',alignItems:'flex-start',
            color: '#DE9E48', fontSize: 25,fontWeight:700, margin: "-20px 0px 10px 0px"}}>
                Requests
            </Typography>
                {requests.length > 0 && (
                    <>
                        {renderRequest()}
                    </>
                )}
                {requests.length == 0 && (
                    <>
                        <Typography style={{marginTop: '5%'}}>Tidak ada request untuk saat ini.</Typography>
                    </>
                )}
            </Grid>
    );
}

export default NewProjectRequests;