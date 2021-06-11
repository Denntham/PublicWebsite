import { Grid } from '@material-ui/core';
import React from 'react';
import UserCard from '../Components/UserCard';


import useStyles from './styles';
import AdminDashboard from '../Admin/AdminDashboard';
import ProDashboard from '../Pro/ProDashboard';
import UserDashboard from '../User/UserDashboard';

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
				{userData.permission == 2 && (
					<AdminDashboard userData={userData}/>
				)}
				{userData.permission == 1 && (
					<ProDashboard userData={userData}/>
				)}
				{userData.permission == 0 && (
					<UserDashboard userData={userData}/>
				)}
            </Grid>
		</Grid>
		</>
	)
}

export default DashboardContent;