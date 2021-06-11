import { Checkbox, FormControlLabel, FormGroup, withStyles } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import useStyles from './styles';

const CustomCheck = withStyles({
    root: {
      color: 'black',
      transform: "scale(0.7)",
      "&$checked": {
        color: '#0F255E'
      },
    },
    checked: {},
    disabled: {}
  })(Checkbox);


function CustomCheckbox({handleCheckbox, categories}){

    const classes = useStyles();
    
    function renderboxes(){
        return categories.map((category,idx) => {
            return(
            <>
                <FormControlLabel
                        className={classes.filterOptions}
                        control={
                        <CustomCheck
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            value={category}
                            onChange={handleCheckbox}
                            checkedIcon={
                            <CheckBoxIcon 
                                fontSize="small"
                                />}
                        />
                        }
                    label={<span className={classes.checkboxLabel}>{category}</span>}
                />
            </>
        )
    })
}

    return(
        <>
            {renderboxes()}
        </>
    )
}

export default CustomCheckbox;