import { Button, Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyles from './styles';

function InputTags({tagsList, targetList, addTag, removeTag}) {
    const [changes, setChanges] = useState(false);
    const classes = useStyles();

    function renderTags(){
        return tagsList.map((tag, idx) => {
            return (
                <Button className={classes.notAddedTag} value={tag} key={idx} onClick={(e)=>{addTag(e); setChanges(!changes);}}>{tag}</Button>
            )
        })
    }

    function addedTags(){
        return targetList.map((tag, idx) => {
            return(
                <Button className={classes.addedTag} value={tag} key={idx} onClick={(e)=>{removeTag(e); setChanges(!changes);}}>{tag}</Button>
            )
        })
    }

    useEffect(() => {
        addedTags();
        renderTags();
    }, [changes])

    return (
        <div className={classes.tagsContainer}>
            <div className={classes.addedTagsContainer}>
                {addedTags()}
            </div>
            <div className={classes.tagsBank}>
                {renderTags()}
            </div>
        </div>
    );
}

export default InputTags;