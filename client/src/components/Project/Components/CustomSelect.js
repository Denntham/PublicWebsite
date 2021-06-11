import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const CustomInput = withStyles((theme) => ({

    input: {
      borderRadius: 4,
      width: '100%',
      position: 'relative',
      backgroundColor: 'white',
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

  const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
    }
  }));

function FilterSelect({options, values, onChangeFunc, defaultVal}) {
    const classes = useStyles();

    function renderOptions(){
        return options.map((option, idx) => {
            return (
                <MenuItem dense value={values[idx]} key={idx}>{option}</MenuItem>
            )
        })
    }
    
    return (
        <FormControl className={classes.root}>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          onChange={onChangeFunc}
          defaultValue={defaultVal ? defaultVal : ""}
          input={<CustomInput />}
        >
          <MenuItem dense value="">
            <em>--</em>
          </MenuItem>
          {renderOptions()}
        </Select>
      </FormControl>
    );
}

export default FilterSelect;