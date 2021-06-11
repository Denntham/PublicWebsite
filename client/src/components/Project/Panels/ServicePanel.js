import React from 'react';
import placeholder from '../../../resources/projectview/placeholder.png';
import { Box, Card, CardContent, CardMedia, Grid, Typography, InputBase, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';


function ServicePanel({services, bestProjects}){
	
	const classes = useStyles();


	function renderPanel(){
		return services.map((service, idx) => {
			const avatarUrl = `http://localhost:5000/avatar/render/${service.username}`
			let color;

			if(service.serviceType == 'Architect') color = '#04253A';
			if(service.serviceType == 'Interior') color = '#C6BF88';
			if(service.serviceType == 'Contractor') color = '#3B6760';
			
			const projectThumb = bestProjects[idx].projects[0] ? `http://localhost:5000/projectImage/thumbnail/${bestProjects[idx].projects[0]._id}` : ''
			return(
				<Box xs={3} className={classes.cardContainer}>
					<Card className={classes.serviceView} fluid>
						<Link className={classes.cardLink} to={`/services/${service.username}`}>
						<CardMedia
							component="img"
							height="240"
							image={bestProjects[idx].projects.length > 0 ? projectThumb : placeholder}
							className={classes.cardImage}/>
						<CardContent className={classes.cardContent2}>
							<Grid container justify='center' alignItems='center' xs={12} style={{width: '100%'}}>
								<Grid item xs={3}>
									<Avatar className={classes.avatar2} variant="square" src={avatarUrl}/>
								</Grid>
								<Grid item xs={9} className={classes.info}>
									<Typography style={{
										padding: '0px 0px 5px 0px',
										fontSize: 14, fontWeight: 700}}>
									{service.username}
									</Typography>
									<Typography style={{
										padding: '0px 0px 5px 0px',
										fontSize: 11, fontWeight: 400}}>
									{service.city ? service.city : '--'} 
									</Typography>
									<Typography 
									style={{
										fontSize: 9, 
										fontWeight: 600,
										color: 'white',
										borderRadius: '30px',
										backgroundColor: color,
										width: 'max-content',
										padding: '5px 20px 5px 20px',
									}}>
									{service.serviceType}
									</Typography>
								</Grid>
								<Button onClick={() => {console.log('clicked')}} className={classes.contactButton}>
									Contact
								</Button>
							</Grid>
						</CardContent>
						</Link>
					</Card>
				</Box>
			)
		})
	}

	return(
		<>
			<Grid container xs={12} 
			className={classes.root}
			direction="row"
			justify="flex-start"
			alignItems="flex-start"
			>	
				{services.length < 1 && (
					<Box className={classes.cardContainer} style={{alignContent: 'center', justifyContent: 'center', width: '100%', display: 'inline-flex', marginRight: '7%', marginTop: '2%'}}>
						<Typography style={{fontWeight: 500, 
							fontSize: 50, alignContent: 'center', 
							justifyContent: 'center', textShadow: '-1px 0 black, 0 3px black, 1px 0 black, 0 -1px black',
							color: 'white',
							}}>Professional dengan kriteria tersebut tidak ditemukan</Typography>
					</Box>
				)}
				{services.length > 1 && bestProjects.length > 1 && (
					<>
					{renderPanel()}
					</>
				)}
		</Grid>
		</>
	)
}

export default ServicePanel;