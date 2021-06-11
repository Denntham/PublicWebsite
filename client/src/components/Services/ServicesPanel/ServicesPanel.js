import React from 'react';
import placeholder from '../../../resources/projectview/placeholder.png';
import { Box, Card, CardContent, CardMedia, Grid, Typography, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ContactForm from '../../Project/Contact/ContactForm'
import useStyles from './styles';


function ServicesPanel({users, banner, bannerText}){
	
	const classes = useStyles();

	function renderPanel(){
		if(projects.length < 1) {
			return (
				<Box className={classes.cardContainer} style={{alignContent: 'center', justifyContent: 'center', width: '100%', display: 'inline-flex', marginRight: '7%', marginTop: '5%'}}>
					<Typography style={{fontWeight: 500, 
						fontSize: 50, alignContent: 'center', 
						justifyContent: 'center', textShadow: '-1px 0 black, 0 3px black, 1px 0 black, 0 -1px black',
						color: 'white',
						}}>Daftar projek kosong</Typography>
				</Box>
			)
		}
		return users.map((user, idx) => {
			const userAvatar = `http://localhost:5000/projectImage/thumbnail/${user.username}`
			return (
				<Box xs={3} className={classes.cardContainer}>
					<Card className={classes.ProjectView} fluid>
						{/*<Link className={classes.cardLink} to={`/projects/${project._id}`}>*/}
						<CardMedia
							component="img"
							height="240"
							image={project._id? projectUrl : placeholder}
							className={classes.cardImage}/>
						<CardContent className={classes.cardContent}>
							<Typography className={classes.projectTitle}>
								{project.name}
							</Typography>
							<Typography className={classes.projectTags}>
								Tags
							</Typography>
							<Typography className={classes.projectLocation}>
								{project.location}
							</Typography>
							<Typography className={classes.projectUploader}>
								By <strong style={{marginLeft: '5px'}}>{project.uploader}</strong>
							</Typography>
						</CardContent>
						{/*</Link>*/}
					</Card>
				</Box>

			)
		});
	}

	return(
		<>
			<Grid container xs={12} 
			className={classes.root}
			direction="row"
			justify="flex-start"
			alignItems="flex-start"
			>	
				{banner && (
					<Grid item xs={11} className={classes.bannerContainer}>
						<Typography className={classes.bannerText}>{bannerText}</Typography>
						<img src={banner} className={classes.banner}/>
					</Grid>
				)}
				<Box xs={8} className={classes.searchContainer}>
				<div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder='Search'
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
				</div>
				</Box>
				{renderPanel()}
		</Grid>
		</>
	)
}

export default ServicesPanel;