import { Button, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import {Img} from 'react-image'
import landingImage from '../../../resources/SML/Kazumi-Sinarmaslandcom.jpg';
import FilterSelect from './FilterSelect';
import FeaturedCard from '../featuredCard/featuredCard';

import {ROOM_TYPE, LOCATIONS, STYLES} from '../../MenuOptions';
//Custom icons
import architectIcon from '../../../resources/icons/Architect.svg';
import interiorIcon from '../../../resources/icons/Interior.svg';
import contractorIcon from '../../../resources/icons/Contractor.svg';

//Images
import image1 from '../../../resources/home/img2.jpg'
import image2 from '../../../resources/home/image2.png'

import useStyles from './styles';
import { Link, useHistory } from 'react-router-dom';

function Home() {
    const classes = useStyles();

    const [location, setLocation] = useState();
    const [buildingType, setBuildingType] = useState();
    const [designStyle, setDesignStyle] = useState();

    const history = useHistory()
    
    function handleSubmit(){
        history.push('/projects', 
        {state: {
            location: location,
            buildingType: buildingType,
            designStyle: designStyle,
        }})
    }

    function ToServices(state) {
        history.push('/services', 
        {state: {
            serviceType: state
        }})
    }

    return (
        <Grid container xs={12} justify="center" alignItems="center" className={classes.root}>
            <Grid container xs={11} className={classes.section1} justify="flex-end" alignItems="flex-end">
                <Grid item xs={6} className={classes.landingText}>
                    <Typography style={{fontSize: '36px', fontWeight: 'bold',}}>
                        Temukan vendor terbaik untuk membangun rumah impianmu disini 
                    </Typography>
                    <Typography style={{color: '#CFCDCD', fontSize: '18px', marginTop: '1em'}}>
                        Pilih sesuai kebutuhan atau seleramu dibawah ini
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container xs={12} className={classes.filterBar}>
                            <FilterSelect label={"Lokasi"} valueVar={location} setFunction={setLocation} values={LOCATIONS}/>
                            <FilterSelect label={"Tipe Ruangan"} valueVar={buildingType} setFunction={setBuildingType} values={ROOM_TYPE}/>
                            <FilterSelect label={"Gaya Desain"} valueVar={designStyle} setFunction={setDesignStyle} values={STYLES}/>
                            <Grid item xs={3}>
                                <Button type="submit" className={classes.searchButton}>Cari</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs={9}>
                    <Img src={landingImage} decode={true} alt="Landing" className={classes.landingImage}/>
                </Grid>
            </Grid>
            <Grid container xs={11} className={classes.sections} justify="flex-start" alignItems="center">
                <Typography className={classes.sectionTitle}>Servis Populer</Typography>
                <FeaturedCard/>
                <Grid container xs={12} justify="flex-end">
                    <Button component={Link} to="/projects" className={classes.buttons}>
                        Lihat semua 
                    </Button>
                </Grid>
            </Grid>
            <Grid container xs={11} className={classes.sections} justify="flex-start">
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <Typography className={classes.sectionTitle}>
                    Telusuri Marketplace
                </Typography>
                <Typography className={classes.sectionDesc}>
                Temukan vendor terbaik dari 3 servis utama sesuai dengan <br/> kebutuhan anda!
                </Typography>
                </div>
                <Grid container xs={12} className={classes.servicesContent}>
                    <Grid item xs={7} className={classes.servicesIconsContainer}>
                        <div onClick={() => ToServices("Architect")} className={classes.servicesIcons}>
                        <Img style={{width: '100px', height: '100px'}} src={architectIcon} alt="Architect Icon" decode={true}/>
                        <Typography className={classes.iconsDesc}>
                            Arsitek
                        </Typography>
                        </div>
                        <div onClick={() => ToServices("Interior")} className={classes.servicesIcons}>
                        <Img style={{width: '100px', height: '100px'}} src={interiorIcon} alt="Architect Icon" decode={true}/>
                        <Typography className={classes.iconsDesc}>
                            Interior Desainer
                        </Typography>
                        </div>
                        <div onClick={() => ToServices("Contractor")} className={classes.servicesIcons}>
                        <Img style={{width: '100px', height: '100px'}} src={contractorIcon} alt="Architect Icon" decode={true}/>
                        <Typography className={classes.iconsDesc}>
                            Kontraktor
                        </Typography>
                        </div>
                    </Grid>
                    <Grid container justify="center" xs={5}>
                        <div>
                            <Img className={classes.servicesImage1} src={image1} decode={true} alt="Image1"/>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={11}className={classes.sections} justify="flex-start">
                <Grid item xs={11}> 
                    <div style={{display: 'flex', flexDirection: 'column', paddingBottom: '2.5em'}}>
                        <Typography className={classes.sectionTitle}>
                            Cara Kerja
                        </Typography>
                        <Typography className={classes.sectionDesc}>
                            Hanya butuh 3 langkah mudah untuk mencapai rumah <br/> impian terbaik anda
                        </Typography>
                    </div>
                </Grid>
                <Grid container xs={11} direction="row" style={{paddingBottom: '6em',}}>
                    <Grid item xs={7}>
                        <Img className={classes.image2} src={image2} alt="Image2" decode={true}/>
                    </Grid>
                    <Grid container justify="flex-start" alignItems="center" alignContent="center" xs={5}>
                        <Grid item xs={12} className={classes.steps}>
                            <Typography className={classes.stepsTitle}>
                                1. Telusuri
                            </Typography>
                            <Typography className={classes.stepsContent}>
                                Telusuri portofolio terbaik dari para profesional
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.steps}>
                            <Typography className={classes.stepsTitle}>
                                2. Temukan
                            </Typography>
                            <Typography className={classes.stepsContent}>
                                Temukan yang paling cocok dengan anda
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.steps}>
                            <Typography className={classes.stepsTitle}>
                                3. Hubungi
                            </Typography>
                            <Typography className={classes.stepsContent}>
                                Hubungi dengan profesional yang akan membuat rumah impian anda menjadi nyata
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;