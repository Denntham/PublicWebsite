
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectPanel from './Panels/ProjectPanel';

//SPAM
import React from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {ROOM_TYPE, LOCATIONS, STYLES} from '../MenuOptions';
import useStyles from './styles.js'
import AccordionFilters from './Components/AccordionFilters';
import { Button, Tab, Tabs } from '@material-ui/core';
import ServicePanel from './Panels/ServicePanel';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';


function ProjectIndex() {

    const loc = useLocation();
    const {state} = useLocation();

    const [content, setContent] = useState(loc.pathname == '/projects' ? 'projects' : 'services');
    const [projects, setProjects] = useState([]);
    const [bestProjects, setBestProjects] = useState([]);
    const [serviceType, setServiceType] = useState( state && state.state.serviceType ? `&serviceType=${state.state.serviceType}` : '');
    const classes = useStyles();

	const [services, setServices] = useState([])

    const [buildingType, setBuildingType] = useState( state && state.state.buildingType ? `&buildingType=${state.state.buildingType}` : '');
    const [designStyle, setDesignStyle] = useState(state && state.state.designStyle ? `&designStyle=${state.state.designStyle}` : '');
    const [location, setLocation] = useState(state && state.state.location ? `&province=${state.state.location}` : '');

    const [apiUrl, setApiUrl] = useState('http://localhost:5000/project?')
    const [serviceUrl, setServiceUrl] = useState('http://localhost:5000/user/professionals?')
    const [loaded, setLoaded] = useState(false);

    const [currBuildingType, setCurrBuildingType] = useState(state && state.state.buildingType ? state.state.buildingType : '');
    const [currDesignStyle, setCurrDesignStyle] = useState(state && state.state.designStyle ? state.state.designStyle : '');
    const [currLocation, setCurrLocation] = useState(state && state.state.location ? state.state.location : '');
    const [currServiceType, setCurrServiceType] = useState(state && state.state.serviceType ? state.state.serviceType : '')

    async function getProjects(){
        const projectsRes = await axios.get(apiUrl);
        setProjects(projectsRes.data);
    }

    async function getUsers(){
		const res = await axios.get(serviceUrl);
        let projectsTempArr = [];
		for(let i=0;i<services.length;i++){
			const res2 = await axios.get(`http://localhost:5000/user/topprojects/${services[i].username}`)
			projectsTempArr.push({
				key: i,
				projects: res2.data
			});
		}
		setBestProjects(projectsTempArr)
        setServices(res.data)
        setLoaded(!loaded);
	}

    function resetFilters() {
        setBuildingType('')
        setLocation('')
        setDesignStyle('')
        setServiceType('')

        setCurrBuildingType('')
        setCurrDesignStyle('')
        setCurrLocation('')
        setCurrServiceType('');
    }

    const handleChange = (event, newValue) => {
        setContent(newValue);
      };

    useEffect(() => {
        const url = 'http://localhost:5000/project?' + buildingType + designStyle + location
        setApiUrl(url);
    }, [buildingType, designStyle, location]);
    
    useEffect(() => {
        const url = 'http://localhost:5000/user/professionals?' + serviceType;
        setServiceUrl(url);
    }, [serviceType])

    useEffect(async () => {
        getUsers();
    }, [serviceUrl, loaded]);

    useEffect(() => {
        getProjects();
    }, [apiUrl]);

    return(
        <>
        <div className={classes.menuBar}>
            <Tabs
            value={content}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="full width tabs example">
                <Tab component={Link} to="/projects" value={'projects'} label="Projects"/>
                <Tab component={Link} to="/services" value={'services'} label="Services"/>
            </Tabs>
        </div>
        <Box className={classes.root} p={0}>
            <div className={classes.borderContainer}>
                {content == 'projects' && (
                    <div className={classes.filterContainer}>
                        {/* Previously named building type */}
                        <AccordionFilters 
                        title={"Tipe Ruangan"} 
                        onChange={(e) => {setBuildingType('&buildingType=' + e); setCurrBuildingType(e)}}
                        value = { currBuildingType }
                        tabs={ROOM_TYPE}/>
                        <AccordionFilters 
                        title={"Lokasi"} 
                        onChange={(e) => {setLocation('&province=' + e); setCurrLocation(e)}}
                        value = { currLocation }
                        tabs={LOCATIONS}/>
                        <AccordionFilters 
                        title={"Style"} 
                        value = {currDesignStyle}
                        onChange={(e) => {setDesignStyle('&designStyle=' + e); setCurrDesignStyle(e)}}
                        tabs={STYLES}/>
                        <div className={classes.resetFilter}>
                        <Button 
                        disableRipple
                        onClick={resetFilters}
                        className={classes.resetButton}>
                            <Typography className={classes.resetText}>
                            RESET FILTERS
                            </Typography>
                        </Button>
                        </div>
                    </div>
                )}
                {content == 'services' && (
                    <div className={classes.filterContainer}>
                        <AccordionFilters 
                        title={"Tipe Servis"} 
                        value={currServiceType}
                        onChange={(e) => {setServiceType('&serviceType=' + e); setCurrServiceType(e)}}
                        tabs={["Arsitek", "Interior", "Kontraktor"]}/>
                        <AccordionFilters 
                        title={"Lokasi"} 
                        value={currLocation}
                        onChange={(e) => {setLocation('&province=' + e)}}
                        tabs={LOCATIONS}/>
                        <AccordionFilters 
                        title={"Style"} 
                        value={currDesignStyle}
                        onChange={(e) => {setDesignStyle('&designStyle=' + e)}}
                        tabs={STYLES}/>
                        <div className={classes.resetFilter}>
                        <Button 
                        disableRipple
                        onClick={resetFilters}
                        className={classes.resetButton}>
                            <Typography className={classes.resetText}>
                            RESET FILTERS
                            </Typography>
                        </Button>
                        </div>
                </div>
                )}
                
            </div>
            <Box className={classes.tabPanels} fluid>
                {content == 'projects' && (
                    <ProjectPanel projects={projects}/>
                )}
                {content == 'services' && (
                    <ServicePanel services={services} bestProjects={bestProjects}/>
                )}
            </Box>
        </Box>
        </>
    )
}

export default ProjectIndex;