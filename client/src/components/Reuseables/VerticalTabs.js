import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box, Button, Grid } from '@material-ui/core';
import AuthContext from '../Auth/Context/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    top: '-51px',
    left: '2%',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    width: '100%',
    display: 'inline-flex',
    justifyContent: 'space-between',
    height: '50%',
    marginBottom: '-200px',
  },
}));

export default function VerticalTabs({tabsList, changeHandler, startEdit}) {
  const classes = useStyles();
  const [values, setValues] = useState(0);
  const [editing, setEditing] = useState(false);

  const {permission} = useContext(AuthContext);

  function renderTabs(){
    return tabsList.map((tab, idx) => {
      return(
        <Tab label={tab} key={idx} value={idx}/>
      );
    });
  }

  function handleChange(e, newValue){
    setValues(newValue);
    changeHandler(newValue);
  }

  return (
            
      <Grid className={classes.root}>
        <Tabs
          value={values}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
            {renderTabs()}
        </Tabs>
        {permission > 0 && (
          <Button onClick={startEdit}>
            Edit
          </Button>
        )}
      </Grid>
  );
}