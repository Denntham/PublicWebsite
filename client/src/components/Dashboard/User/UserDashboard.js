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
    const [value, setValue] = useState(1);
    const [projects, setProjects] = useState([]);



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

    const [albums, setAlbums] = useState([]);

    async function getInspo(){
        const res = await axios.get('http://localhost:5000/inspo/albums');
        setAlbums(res.data);
    }

    useEffect(() => {
        getInspo();
    }, [])

    useEffect(() => {
        getProjects(value);
    }, [value])

    return (
        <>
        {userData.permission == 0 && (
            <VerticalTabs tabsList={["Inspirations"]} changeHandler={setPage}/>
        )}
        <Grid item xs={12} className={classes.content}>
            
        </Grid>
        </>
    );
}

export default ProDashboard;