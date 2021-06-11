import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CustomLabel from '../Reuseables/CustomLabel';

const useStyles = makeStyles((theme) => ({
    inputblock: {
		display: 'inline-flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		minWidth: '100%',
		padding: '20px 10px 20px 10px',
	},
	input: {
		backgroundColor: '#F3F3F4',
		border: 'none',
		zIndex: 1,
		height: '36px',
		width: '100%',
		margin: '0.5rem 0rem 0.5rem 0rem',
	},
	inputLong: {
		backgroundColor: '#F3F3F4',
		display: 'inline-flex',
		alignItems: 'flex-start',
		border: 'none',
		zIndex: 1,
		width: '100%',
		margin: '0.5rem 0rem 0.5rem 0rem',
	},
}))

function CustomInput({value, changeFunc, text, desc, type, isRequired}) {
    const classes = useStyles();

    return (
        <Grid container xs={10} className={classes.inputblock}>
            <Grid item xs={2}>
                <CustomLabel 
                    labelFor="field" 
                    text={text}
                    isRequired={isRequired ? true : false}
                    desc={desc ? desc : ''}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="field" 
                        variant="outlined" 
                        type={type ? type : 'text'}
                        fullWidth
                        InputProps={{className: classes.input}}
                        onChange={(e) => changeFunc(e.target.value)}
                        value={value}
                        />
                </Grid>
            </Grid>
    );
}

export default CustomInput;