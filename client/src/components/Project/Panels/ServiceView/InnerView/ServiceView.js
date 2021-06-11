import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import VerticalTabs from '../../../../Reuseables/VerticalTabs';
import axios from 'axios';
import useStyles from '../Content/styles';
import ProjectTile from '../Content/Components/ProjectTile';
import { useParams } from 'react-router';

function ServiceView({userData}) {

	const classes = useStyles();
	const [page, setPage] = useState(0);
    const [value, setValue] = useState(1);
    const [projects, setProjects] = useState([]);

    const {userID} = useParams();
    async function getProjects(val){
        try {
            const res = await axios.get(`http://localhost:5000/project/all/${userID}`);
            setProjects(res.data);
        } catch (error) {
            console.log(error);
            setProjects([]);
        }
    }

    useEffect(() => {
        getProjects(value);
    }, [value])

    return (
        <>
        <VerticalTabs tabsList={["Projects"]} changeHandler={setPage}/>
        <Grid item xs={12} className={classes.content}>
            {page == 0 && (
                <>
                <ProjectTile projects={projects}/>
                </>
            )}
        </Grid>
        </>
    );
}

export default ServiceView;