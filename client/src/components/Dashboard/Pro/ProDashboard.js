import { Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VerticalTabs from '../../Reuseables/VerticalTabs';
import axios from 'axios';
import FilterSelect from '../Components/FilterSelect';
import useStyles from '../Content/styles';
import ProjectTile from '../Components/ProjectTile';
import InspirationsIndex from '../Inspirations/InspirationsIndex';

function ProDashboard({userData}) {

	const classes = useStyles();
	const [page, setPage] = useState(0);
    const [value, setValue] = useState(0);
    const [projects, setProjects] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [refresh, setRefresh] = useState(true);


    async function getProjects(val){
        try {
            const res = await axios.get(`http://localhost:5000/project/myprojects/${val}`);
            setProjects(res.data);
        } catch (error) {
            console.log(error);
            setProjects([]);
        }
    }

    function valueSetter(e){
        setValue(e.target.value);
    }

    async function deleteProject(id){
        await axios.delete(`http://localhost:5000/project/delete/${id}`);
        setRefresh(!refresh);
    }

    useEffect(() => {
        getProjects(value);
    }, [value, refresh])

    return (
        <>
        {userData.permission == 1 && (
            <VerticalTabs tabsList={["Inspirations"]} changeHandler={setPage} startEdit={() => {setEditMode(!editMode)}}/>
        )}
        <Grid item xs={12} className={classes.content}>
            {page == 0 && (
                <>
                <Grid xs={12}
                style={{display: 'inline-flex', 
                flexDirection: 'row',  
                width: '100%', alignItems: 'flex-end'}}>
                <FilterSelect
                options={["Active", "Pending", "Rejected"]}
                values={[1, 0, 2]}
                onChangeFunc={valueSetter}
                />
                </Grid>
                <ProjectTile projects={projects} editMode={editMode} deleteFunc={deleteProject}/>
                </>
            )}
        </Grid>
        </>
    );
}

export default ProDashboard;