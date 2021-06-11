import React, { useState, useEffect } from 'react';

//SPAM
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Accordions from '../../Reuseables/Accordions';


import useStyles from './styles.js';
import { withStyles } from '@material-ui/core';
import ProfileSettings from './ProfileSettings.js';
import Inbox from '../Mail/Inbox';
import Outbox from '../Mail/Outbox';

function UserSettings({userData, contentStart}) {
    
    const [content, setContent] = useState(contentStart ? contentStart : 'editProfile');

    const StyledTab = withStyles({
        root: {
          minHeight: "35px",
        }
      })(Tab);

    const handleChange = (event, newValue) => {
        setContent(newValue);
    };
    
    //TODO: Implement get settings function later

    const classes = useStyles();
    
    return(
        <Box className={classes.root} p={0}>
            <div className={classes.borderContainer}>
                <Typography style={{
                    paddingTop: '5%', 
                    paddingBottom: '5%',
                    fontWeight: 300,
                    marginLeft: '0%',
                    }}>
                        Breadcrumbs
                </Typography>
                <Accordions pageVal={content} setFunc={setContent}/>
            </div>
            
            <Box className={classes.tabPanels} fluid>
                {content=='editProfile' && (
                    <>
                        <ProfileSettings/>
                    </>
                )}
                {content=='inbox' && (
                    <>
                        <Inbox/>
                    </>
                )}
                {content=='outbox' && (
                    <>
                        <Outbox/>
                    </>
                )}
            </Box>
        </Box>
    );
}

export default UserSettings;