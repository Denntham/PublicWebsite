import { Card, FormLabel, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function CustomLabel({labelFor, text, desc, isRequired}) {

    const classes = useStyles();

    function RequiredTag(){
        return(
            <Card className={classes.requiredTag}>Required</Card>
        )
    }

    return (
        <div style={{paddingTop: '10px'}}>
            <FormLabel 
            className={classes.fieldLabel} 
            htmlFor={labelFor}>
                {text}

                {isRequired && (
                    <RequiredTag/>
                )}
            </FormLabel>
            {desc !== "" && desc !== null && (
                <Typography className={classes.desc}>
                    {desc}
                </Typography>
            )}
        </div>
    );
}

export default CustomLabel;