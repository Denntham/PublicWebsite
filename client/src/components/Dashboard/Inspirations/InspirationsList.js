import React, { useEffect, useState } from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import './masonry.css';
import axios from 'axios';
import useStyles from './styles'

function InspirationsList() {

    const {albumID} = useParams()
    const [inspos, setInspos] = useState([]);
    const [inspoList, setInspoList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const classes = useStyles();

    async function getInspoList(){
        const res = await axios.get(`http://localhost:5000/inspo/inspirations/${albumID}`)
        setInspos(res.data);
        setInspoList(res.data.inspoList);
        setIsLoaded(true);
    }
    
    useEffect(() => {
        getInspoList();
    },[])

    useEffect(() => {
        renderImages();
    },[isLoaded])

    function renderImages(){
        return inspoList.map((inspo) => {
            return(
                <>
                <Link to={`/projects/${inspo}`}>
                <img src={`http://localhost:5000/projectImage/thumbnail/${inspo}`}/>
                </Link>
                </>
            )
        })
    }
    
    return (
        <div className="root">
        {!isLoaded && (
            <div>
                Loading...
            </div>
        )}

        {isLoaded && (
            <Grid container className={classes.content}>
            <Typography className="title">{inspos.name}</Typography>
            <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                {renderImages()}
            </Masonry>
            </Grid>
        )}
        </div>
    );
}

export default InspirationsList;