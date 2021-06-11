	import { Avatar, Button, CircularProgress, Divider, FormLabel, Grid, GridList, GridListTile, IconButton, TextField, Typography } from '@material-ui/core';
	import React, { useContext, useEffect, useState } from 'react';
	import axios from 'axios';
	import AuthContext from '../../Auth/Context/AuthContext';
	import placeholder from '../../../resources/projectview/placeholder.png';
	import { Alert, AlertTitle } from '@material-ui/lab';
	import { useParams } from 'react-router';
	import { Link } from 'react-router-dom';
	import CloseIcon from '@material-ui/icons/Close';

	import Modal from '@material-ui/core/Modal';
	import Backdrop from '@material-ui/core/Backdrop';
	import Fade from '@material-ui/core/Fade';

	import PhoneInput from 'react-phone-input-2'
	import 'react-phone-input-2/lib/style.css'

	import useStyles from './styles';

	function ProjectView({project}){

		const [projectData, setProjectData] = useState(undefined);
        const [uploaderData, setUploaderData] = useState(undefined);
		const [isLoaded, setIsLoaded] = useState(false);
		const [previewedImage, setPreviewedImage] = useState(undefined);
        const [avatar, setAvatar] = useState(undefined);
		const [open, setOpen] = useState(false);
		const {projectID} = useParams();

		const serverUrl = 'http://localhost:5000/project/';
		const imagesUrl = 'http://localhost:5000/projectImage';
        const uploaderAPI = 'http://localhost:5000/user/get';

		const classes = useStyles();

		const {username, permission} = useContext(AuthContext);

		function handleImageChange(e){
			setPreviewedImage(e);
		}

		function getProject(){
			try {
				if(project) {
					setProjectData(project);
					return;
				}
				
				axios.get(serverUrl + projectID).then( response => {
					if(!response.data) throw 'No data received';
					setProjectData(response.data);
					setPreviewedImage(`${imagesUrl}/render/${response.data.photosIDs[0]}`);
                    axios.get(`${uploaderAPI}/${response.data.uploader}`).then(res => {
                        setUploaderData(res.data);
                        setAvatar(`http://localhost:5000/avatar/render/${res.data.username}`);
					    setIsLoaded(true);
                    })
				})
			} catch (error) {
				console.log(error);
			}
		}

		function ContactForm({open, openFunc, username}){
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

		function renderImages() {
			return projectData.photosIDs.map((photoID) => {
				const image = `${imagesUrl}/render/${photoID}`;
					return(
						<GridListTile key={photoID} cols={1}>
							<Link>
								<img className={classes.images} onClick={() => {handleImageChange(image)}} src={image}/>
							</Link>
						</GridListTile>
					)			   
			})
		}

		useEffect(() => {
			getProject();
		},[projectID])

		return(
		
		<Grid className={classes.root} spacing={2} container xs={12} direction="row" justify="center" alignItems="center">
			<Grid item xs={12}>
				<Typography className={classes.breadcrumb}>Breadcrumbs</Typography>
			</Grid>
		{isLoaded === false && (
			<Grid item xs={6}>
				<CircularProgress/>
			</Grid>
		)}

		{isLoaded && (
			<>
			<Grid container xs={10}>
				{projectData.status == 0 && (
					<Grid item  style={{width: '58.3%', margin: '0px 0px 15px 30px', 
					padding: '10px 30px 10px 0px'}}>
						<Alert severity="info">
							<AlertTitle>Under Review</AlertTitle>
							Project ini masih dalam proses review
						</Alert>
					</Grid>
				)}
				{projectData.status == 2 && (
					<Grid item  style={{width: '58.3%', margin: '0px 0px 15px 30px', 
					padding: '10px 30px 10px 0px'}}>
						<Alert severity="error">
							<AlertTitle>Rejected</AlertTitle>
							{projectData.rejectedMessage ?  projectData.rejectedMessage : '--'}
						</Alert>
					</Grid>
				)}
				<Grid item xs={7}>
					<Grid item xs={12} className={classes.leftContainer}>
						<div className={classes.mainImageContainer}>
							<img src={previewedImage} className={classes.imagePreview}/>
						</div>
						<GridList cellHeight={77} className={classes.gridList} 
                        cols={projectData.photosIDs.length > 5 ? 2 : 1}
                        style={{
                            width: projectData.photosIDs.length > 5 ? '30%' : '15%',
                            height: projectData.photosIDs.length > 5 ? '10%' : '5%',
                        }}
                        >
							{renderImages()}
						</GridList>
					</Grid>
				</Grid>
				<Grid item xs={4} className={classes.rightContainer}>
					<Grid className={classes.specs} container direction="row" justifyContent="flex-start" alignItems="flex-start">
						<Typography className={classes.specTexts}>
							<span style={{fontSize: 14}}>Estimate Price</span> 
							<br/>
							Rp. <span className={classes.price}>{projectData.price}</span> /m2
						</Typography>
						<Divider style={{width: '100%', margin: '3% 0px 3% 0px'}}/>
						<Typography>
							<span style={{fontSize: 14, fontWeight: 300}}>Details:</span>
						</Typography>
						{(projectData.uploader === username || permission == 2) && (
							<>
								<Link to={`/edit/${projectData._id}`}>
									<Button>Edit</Button>
								</Link>
							</>
						)}
					</Grid>
				</Grid>
			</Grid>
			<Grid container xs={12}>
				<Grid item xs={7} className={classes.container2}>
					<Typography style={{fontSize: 30, fontWeight: 700}}>{projectData.name}</Typography>
                    <div style={{display: 'inline-flex', flexDirection: 'row'}}>
                        <Button className={classes.tags}>Tags</Button>
                        <Button className={classes.tags}>Tags</Button>
                    </div>
                    <Divider style={{marginTop: '20px', marginBottom: '20px', width: '50%'}}/>
                </Grid>
				<Grid item xs={6} className={classes.container2} style={{width: '80%'}}>
                    <Typography>
                    {projectData.description}
                    </Typography>
                    <Divider style={{marginTop: '20px', marginBottom: '20px', width: '58%'}}/>
                </Grid>
                <Grid item xs={7} className={classes.container2} style={{flexDirection: 'row'}}>
                    <Avatar src={avatar} style={{width: '100px', height: '100px'}}/>
                    <Grid item xs={4} className={classes.uploader}>
                        <Typography style={{fontSize: 24, fontWeight: 700}}>{projectData.uploader}</Typography>
                        <Typography style={{fontSize: 18, fontWeight: 400, marginTop: '-3px'}}>{uploaderData.serviceType}</Typography>
                        <Button onClick={() => setOpen(true)} className={classes.contactUs}>Contact</Button>
                    </Grid>
                </Grid>
				<ContactForm open={open} openFunc={setOpen} username={projectData.uploader}/>
			</Grid>
			</>
		)}
		</Grid>

		)
	}
    
	export default ProjectView;