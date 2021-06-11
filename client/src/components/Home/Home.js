import React from 'react';
import Grid from '@material-ui/core/Grid';
import homeImage from '../../resources/home/image 2.png';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import FeaturedCard from './featuredCard/featuredCard';

import useStyles from './styles.js';


function Home(){
    const classes = useStyles();

    return(
        <Box className={classes.root}>
            <Box className={classes.firstContainer}>
                <Box className={classes.landingBanner}>
                    <Typography className={classes.mainText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Duis vel finibus enim, tincidunt hendrerit dolor. 
                        Aliquam vel lacus ac turpis aliquam volutpat.
                    </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder='Try "..."'
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Box>
                <img src={homeImage} className={classes.homeImage}/>
            </Box>
            <Box className={classes.secondContainer}>
                <Typography className={classes.statsTitle}>
                    We collaborate with over 100+ <br/>
                    Interior Designer, 
                    Architecture Designer 
                    and Contractor.
                </Typography>
                <Box className={classes.statsList}>
                    <Box className={classes.stats}>
                        <Typography className={classes.statsNumber}>
                            123
                        </Typography>
                        <Typography className={classes.statsText}>
                            Available Projects
                        </Typography>
                    </Box>
                    <Box className={classes.stats}>
                        <Typography className={classes.statsNumber}>
                            456
                        </Typography>
                        <Typography className={classes.statsText}>
                            Projects In Progress
                        </Typography>
                    </Box>
                    <Box className={classes.stats}>
                        <Typography className={classes.statsNumber}>
                            789
                        </Typography>
                        <Typography className={classes.statsText}>
                            Completed Projects
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <FeaturedCard/>
        </Box>
    )
}

export default Home;