import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function NoData() {
    const classes = useStyles();

    return (
        <Typography
        className={classes.contentTitle2}
        style={{color: "#848484", paddingTop: '0'}}
        >--</Typography>
    );
}

export default NoData;