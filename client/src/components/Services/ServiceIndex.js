
import axios from 'axios';
import { useEffect, useState } from 'react';

//SPAM
import React from "react";
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FormControl, FormGroup } from '@material-ui/core';

import CustomCheckbox from '../Reuseables/CustomCheckbox';

import interiorBanner from '../../resources/projectview/Inte.jpg';
import contractorBanner from '../../resources/projectview/kontrak.jpg';
import architectureBanner from '../../resources/projectview/Arsi.jpg';

import useStyles from './styles.js'
import { useLocation } from 'react-router';


function ServiceIndex() {
    const buildType = ["House", "Office", "Restaurant", "Shop House", "Retail"];

    const [filter, setFilter] = useState('');
    const [projects, setProjects] = useState([]);
    const classes = useStyles();

    const [bannerImage, setBannnerImage] = useState(undefined);
    const [bannerText, setBannerText] = useState(undefined);
    const [value, setValue] = React.useState(0);

    const loc = useLocation();

    const [buildingTypeArray, setBuildingTypeArray] = useState([]);
    const [buildingType, setBuildingType] = useState('');

    async function getProjects(){
        const apiUrl = 'http://localhost:5000/project?' + filter + buildingType;
        console.log(apiUrl);
        const projectsRes = await axios.get(apiUrl);
        setProjects(projectsRes.data);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleCheckbox = (event, isChecked) => {
        if(isChecked && !buildingTypeArray.includes(event.target.value)){
            buildingTypeArray.push('&buildingType=' + event.target.value);
        } else {
            const elementPos = buildingTypeArray.findIndex(type => String(type) === String('&buildingType=' + event.target.value));
            buildingTypeArray.splice(elementPos, 1);  
        }

        console.log(buildingTypeArray);
        if(buildingTypeArray.length > 0){
            const query = buildingTypeArray.join('');
            setBuildingType(query);
        } else {
            const query = '';
            setBuildingType(query);
        }
    }

    useEffect(() => {
        switch(value){
            case 0:
                setFilter('');
                setBannnerImage(undefined);
                setBannerText('');
                break;
            case 1:
                setFilter('category=Architecture');
                setBannnerImage(architectureBanner);
                setBannerText("Architecture")
                break;
            
            case 2:
                setFilter('category=Interior');
                setBannnerImage(interiorBanner);
                setBannerText("Interior")
                break;
            
            case 3:
                setFilter('category=Contractor');
                setBannnerImage(contractorBanner);
                setBannerText("Contractor")
                break;
        }
    }, [value]);

    useEffect(() => {
        getProjects();
    }, [filter, buildingType]);

    return(
        <Box className={classes.root} p={0}>
            <div className={classes.borderContainer}>
                <Typography style={{
                    paddingTop: '5%', 
                    paddingBottom: '5%',
                    fontWeight: 300,
                    marginLeft: '8%',
                    }}>
                        Breadcrumbs
                </Typography>
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    fixed
                    className={classes.tabs}
                    classes={{
                        indicator: classes.indicator,
                    }}
                    >
                    <Divider className={classes.tabsDivider}/>
                        <Tab label={<span className={ value === 0 ? classes.activeTab : classes.tabLabel}>All</span>} className={classes.tab} style={{borderTop: 'none'}} value={0}/>
                        <Tab label={<span className={ value === 1 ? classes.activeTab : classes.tabLabel}>Architecture</span>} className={classes.tab} value={1}/>
                        <Tab label={<span className={ value === 2 ? classes.activeTab : classes.tabLabel}>Interior</span>} className={classes.tab} value={2}/>
                        <Tab label={<span className={ value === 3 ? classes.activeTab : classes.tabLabel}>Contractor</span>} className={classes.tab} value={3}/>
                    <Divider className={classes.tabsDivider}/>
                </Tabs>
                     
                <FormControl component="fieldset">
                    <FormGroup column className={classes.filters}>
                        <CustomCheckbox handleCheckbox={handleCheckbox} categories={buildType}/>
                    </FormGroup>
                </FormControl>
            </div>
            
            <Box className={classes.tabPanels} fluid>

                {!bannerImage && (
                    <>
                    </>
                )}
                {bannerImage && (
                    <>

                    </>
                )}
            </Box>
        </Box>
    )
}

export default ServiceIndex;