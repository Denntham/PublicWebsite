import { Grid } from '@material-ui/core';
import React from 'react';
import UserCard from './Components/UserCard';
import ServiceView from '../InnerView/ServiceView';
import useStyles from './styles';

function DashboardContent({userData}){

	const classes = useStyles();

	return(
		<>

		<Grid container
		direction="row"
		justify="flex-start"
		alignItems="flex-start"
		className={classes.root}
        xs={12}>
			<UserCard userData={userData}/>
            <Grid className={classes.mainContainer} xs={9}>
				<ServiceView userData={userData}/>
            </Grid>
		</Grid>
		</>
	)
}

export default DashboardContent;