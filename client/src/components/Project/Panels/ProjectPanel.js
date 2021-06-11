import React from 'react';
import placeholder from '../../../resources/projectview/placeholder.png';
import { Box, Card, CardContent, CardMedia, Grid, Typography, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';


function ProjectPanel({projects, banner, bannerText}){
	
	const classes = useStyles();

	function renderTags(tags, buildType){
		if(tags.length < 1) return;

		const tagsList = [];

		for(let i=0;i<tags.length;i++){
			if(i == 0){
				tagsList.push(
					<Typography style={{
					backgroundColor: "#50423D",
					fontSize: 10,
					margin: '5px 5px 5px 0px', 
					fontWeight: 600,
					color: 'white',
					borderRadius: '30px',
					whiteSpace: 'nowrap',
					height: 'max-content',
					padding: '5px 20px 5px 20px',
					}}>
					{buildType}
				</Typography>
				)
			}
			tagsList.push(
				<Typography style={{
					backgroundColor: "#7A431D",
					fontSize: 10,
					margin: '5px 5px 5px 0px', 
					fontWeight: 600,
					color: 'white',
					borderRadius: '30px',
					whiteSpace: 'nowrap',
					height: 'max-content',
					padding: '5px 20px 5px 20px',
					}}>
					{tags[i]}
				</Typography>
			)
		}

		return tagsList;
	}

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
		return projects.map((project, idx) => {
			const projectUrl = `http://localhost:5000/projectImage/thumbnail/${project._id}`
			return (
				<Box key={idx} xs={3} className={classes.cardContainer}>
					<Card className={classes.ProjectView} fluid>
						<Link className={classes.cardLink} to={`/projects/${String(project._id)}`}>
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
								{renderTags(project.designStyle, project.buildingType)}
							</Typography>
							<Typography className={classes.projectLocation}>
								{project.location}
							</Typography>
							<Typography className={classes.projectUploader}>
								By <strong style={{marginLeft: '5px'}}>{project.uploader}</strong>
							</Typography>
						</CardContent>
						</Link>
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
				{renderPanel()}
		</Grid>
		</>
	)
}

export default ProjectPanel;