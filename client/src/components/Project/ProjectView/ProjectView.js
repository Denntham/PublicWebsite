	import { Avatar, Button, Card, CircularProgress, Divider, FormLabel, Grid, GridList, GridListTile, IconButton, TextField, Typography } from '@material-ui/core';
	import React, { useContext, useEffect, useState } from 'react';
	import axios from 'axios';
	import AuthContext from '../../Auth/Context/AuthContext';
	import { Alert, AlertTitle } from '@material-ui/lab';
	import { useHistory, useParams } from 'react-router';
	import { Link } from 'react-router-dom';
	import CloseIcon from '@material-ui/icons/Close';
	import EmailIcon from '@material-ui/icons/Email';
	import Modal from '@material-ui/core/Modal';
	import Backdrop from '@material-ui/core/Backdrop';
	import FacebookIcon from '@material-ui/icons/Facebook';
	import Fade from '@material-ui/core/Fade';
	import TwitterIcon from '@material-ui/icons/Twitter';
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

		async function getProject(){
			try {
				const response = await axios.get(serverUrl + projectID)
				if(!response.data) throw 'No data received';
				setProjectData(response.data);
				setPreviewedImage(`${imagesUrl}/render/${response.data.photosIDs[0]}`);
					
				const response2 = await axios.get(`${uploaderAPI}/${response.data.uploader}`)
				setUploaderData(response2.data);
				setAvatar(`http://localhost:5000/avatar/render/${response2.data.username}`);
				setIsLoaded(true);
			} catch (error) {
				console.log(error);
			}
		}

		const {loggedIn} = useContext(AuthContext)
		const history = useHistory()
		
		function openMessage(){
			if(loggedIn) {setOpen(true)}
			else {history.push("/login")}
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

		function renderTags(){
			return projectData.designStyle.map((design) => {
				return(
					<Button className={classes.tags}>{design}</Button>
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
						<GridList cellHeight={95} className={classes.gridList2} 
						cols={5}
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
							Rp. <span className={classes.price}>{projectData.price ? projectData.price : '--'}</span> /m2
						</Typography>
						<Divider style={{width: '100%', margin: '1% 0px 3% 0px'}}/>
						<Typography style={{fontSize: 18, fontWeight: 700}}>
							Location Details:
						</Typography>
							<Grid item xs={12} justifyContent='center' alignItems='center' className={classes.miniSpecs}>
								<Grid>
									<Typography style={{fontSize: 14, fontWeight: 400, color: '#808080'}}>
										Building Type
									</Typography>
								</Grid>
								<div className={classes.values}>
									<Typography style={{fontSize: 14, fontWeight: 600, color: '#484848'}}>
										{projectData.buildingType}
									</Typography>
								</div>
							</Grid>
							<Grid item xs={12} justifyContent='center' alignItems='center' className={classes.miniSpecs}>
								<Grid>
									<Typography style={{fontSize: 14, fontWeight: 400, color: '#808080'}}>
										Address
									</Typography>
								</Grid>
								<div className={classes.values}>
									<Typography style={{fontSize: 14, fontWeight: 600, color: '#484848'}}>
										{projectData.location}
									</Typography>
								</div>
							</Grid>
							<Grid item xs={12} justifyContent='center' alignItems='center' className={classes.miniSpecs}>
								<Grid>
									<Typography style={{fontSize: 14, fontWeight: 400, color: '#808080'}}>
										Status
									</Typography>
								</Grid>
								<div className={classes.values}>
									<Typography style={{fontSize: 14, fontWeight: 600, color: '#484848'}}>
										{projectData.projectStatus}
									</Typography>
								</div>
							</Grid>
							<Grid item xs={12} justifyContent='center' alignItems='center' className={classes.miniSpecs}>
								<Grid>
									<Typography style={{fontSize: 14, fontWeight: 400, color: '#808080'}}>
										Year Finished
									</Typography>
								</Grid>
								<div className={classes.values}>
									<Typography style={{textAlign: 'left',fontSize: 14, fontWeight: 600, color: '#484848'}}>
										{projectData.year}
									</Typography>
								</div>
							</Grid>
							<Divider style={{width: '100%', margin: '1% 0px 3% 0px'}}/>
							<Typography style={{fontSize: 18, fontWeight: 700}}>
								Share this Project:
							</Typography>
								<Grid item xs={12} justifyContent='center' alignItems='center' className={classes.socials}>
									<IconButton>
										<TwitterIcon/>
									</IconButton>
									<IconButton>
										<EmailIcon/>
									</IconButton>
									<IconButton>
										<FacebookIcon/>
									</IconButton>
								</Grid>
						</Grid>
					{(projectData.uploader === username || permission === 2) && (
							<>
								<Link className={classes.editButton} to={`/edit/${projectData._id}`}>
									<Typography style={{fontSize: 14, fontWeight:400}}>
										Edit Project
									</Typography>
								</Link>
							</>
						)}
				</Grid>
			</Grid>
			<Grid container xs={12}>
				<Grid item xs={8} className={classes.container2}>
					<Typography style={{fontSize: 30, fontWeight: 700}}>{projectData.name}</Typography>
						<div style={{display: 'inline-flex', flexDirection: 'row'}}>
							{renderTags()}
						</div>
					<Divider style={{marginTop: '20px', marginBottom: '20px', width: '50%'}}/>
				</Grid>
				<Grid item xs={5} className={classes.container2} style={{width: '80%'}}>
					<Typography>
					{projectData.description ? projectData.description : 
						<span style={{fontStyle: 'italic', color: '#808080'}}>
							The user hasn't written any description
						</span>}
					</Typography>
					<Divider style={{marginTop: '20px', marginBottom: '20px', width: '67%'}}/>
				</Grid>
				<Grid item xs={7} className={classes.container2} style={{flexDirection: 'row'}}>
					<Avatar src={avatar} style={{width: '100px', height: '100px'}}/>
						<Grid item xs={4} className={classes.uploader}>
							<Link style={{textDecoration: 'none', color: 'black'}} to={`/services/${projectData.uploader}`}>
								<Typography style={{fontSize: 24, fontWeight: 700}}>{projectData.uploader}</Typography>
							</Link>
								<Typography style={{fontSize: 18, fontWeight: 400, marginTop: '-3px'}}>{uploaderData.serviceType}</Typography>
							<Button onClick={() => openMessage()} className={classes.contactUs}>Contact</Button>
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