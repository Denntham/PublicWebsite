import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

import dining from '../../../resources/home/dining.png';
import house from '../../../resources/home/house.png';
import office from '../../../resources/home/office.png';
import living from '../../../resources/home/living.png';
import bed from '../../../resources/home/bed.png';
import useStyles from './style';

const categories = ["Kamar Tidur", "Ruang Makan", "Ruang Keluarga", "Ruangan Outdoor", "Kantor"];
const images = [bed, dining, living, house, office];

function FeaturedCard(){
    const classes = useStyles();

    const history = useHistory();

    function navigate(state){
        history.push('/projects', 
        {state: {
            buildingType: state
        }})
    }

    function renderCards(){
        return categories.map((category, idx) => {
            return(
            <React.Fragment key={idx}>
                <Box onClick={() => {navigate(category)}} className={classes.cardView}>
                    <div>
                        <img src={images[idx]} className={classes.cardImage}/>
                    </div>
                    <Typography className={classes.cardText}>{category}</Typography>
                </Box>
            </React.Fragment>
            )
        })
    }

    return(
        <>
        <Box className={classes.mainContainer}>
            <div className={classes.cardsContainer}>
                {renderCards()}
            </div>
        </Box>
        </>
    );
}

export default FeaturedCard;