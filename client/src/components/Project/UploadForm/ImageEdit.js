import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import placeholder from '../../../resources/forms/placeholder.jpg';
import CustomLabel from '../Components/CustomLabel';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from './styles';
import { useParams } from 'react-router';
import axios from 'axios';

function ImageEdit({setFunc, photosIDs}) {
    
    const classes = useStyles();
    const [selectedFile, setSelectedFile] = useState([]);
    const [previewSource, setPreviewSource] = useState([]);
    const [checkstate, setCheckstate] = useState(false);

    const [staticPhotosIDs, setStaticPhotosIDs] = useState(photosIDs);

    const {projectID} = useParams();

    function readFileAsURL(inputFile){
        const reader = new FileReader();

        return new Promise((resolve, reject) => {
            reader.onerror = () => {
                reader.abort();
                reject(new DOMException("Error occured when parsing input file."));
            };

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.readAsDataURL(inputFile);
        });
    };

    const handleFileInputChange = (e) => {
        const files = e.target.files;
        const tempArr = selectedFile;
        if(files.length > 10 || selectedFile.length >= 10 || 
            (selectedFile.length + files.length > 10) 
            || previewSource.length > 10 || previewSource.length + files.length > 10) return;
        
        for(let i=0;i<files.length;i++){
            tempArr.push(files[i]);
        }
        setSelectedFile(tempArr);
        setFunc(tempArr);
        previewFiles(files);
    }

    const previewFiles = async(files) => {
        if(previewSource.length + files.length > 10 || previewSource.length > 10 || files.length > 10) return;
        let readerResults = previewSource.length > 0 ? previewSource : [];
        for(let i=0;i<files.length;i++){
            const imgSrc = await readFileAsURL(files[i]);
            readerResults.push(imgSrc);

            if(i == files.length - 1){
                setPreviewSource(readerResults);
                setCheckstate(!checkstate);
            }
        }
    }

    async function removeFile(idx, ID){
        const targetIdx = Number(idx) - staticPhotosIDs;
        const tempArr = selectedFile;
        const tempPreviewArr = previewSource;

        if(!ID){
            tempArr.splice(targetIdx,1);
            tempPreviewArr.splice(idx,1);
            setPreviewSource(tempPreviewArr);
            setSelectedFile(tempArr);
            setCheckstate(!checkstate);
        }

        if(ID){
            tempPreviewArr.splice(idx,1);
            setPreviewSource(tempPreviewArr);
            await axios.delete(`http://localhost:5000/projectImage/delete/${projectID}/${ID}`)
            setCheckstate(!checkstate);
        }
    }

    //Init PreviewSource
    useEffect(() => {
        const tempArr = [];
        for(let i=0;i<photosIDs.length;i++){
            tempArr.push(`http://localhost:5000/projectImage/render/${photosIDs[i]}`);
        }
        setPreviewSource(tempArr);
    },[])

    useEffect(() => {
        renderImageBoxes();
    }, [checkstate])

    function renderImageBoxes(){
     
            let imageBoxes = []
            for(let i=0;i<10;i++){
                if(previewSource[i]){
                    imageBoxes.push(
                        <Grid container xs={2} alignItems='flex-start' justify='flex-end' className={classes.imageBoxes}>
                            <IconButton value={i, staticPhotosIDs[i] ? staticPhotosIDs[i] : undefined} onClick={() => removeFile(i, staticPhotosIDs[i] ? staticPhotosIDs[i] : undefined)} className={classes.delete}>
                                <CancelIcon/>
                            </IconButton>
                            <img 
                            src={previewSource[i]} 
                            className={classes.imageObjects}/>
                        </Grid>
                    )  
                } 
                else {
                    imageBoxes.push(
                        <Grid item xs={2} className={classes.imageBoxes}>
                            <img 
                            src={ placeholder } 
                            className={classes.imageObjects}/>
                        </Grid>
                    )  
                }
            } 
            return imageBoxes;
    }
    return (
        <Grid container xs={12} className={classes.inputblock}>
            <Grid item xs={12}>
                <CustomLabel 
                labelFor="name"
                text="Gambar Projek" 
                isRequired
                style={{width: '100%'}}
                />
                <Typography className={classes.desc}>
                    Disarankan untuk mengunggah foto yang terdiri dari foto utama dan tampilan detail dari beberapa arah. Foto dapat diunggah hingga 10 foto. 
                    Tekan pilih gambar dan letakkan hingga 10 foto disini.
                </Typography>
                <Grid container justify='center' alignItems='center' xs={12} style={{marginTop: '15px', marginBottom: '-15px'}}>
                   {renderImageBoxes()}
                </Grid>
               
                <Grid container justify='center' alignItems='center' xs={12} style={{marginTop: '15px', marginBottom: '-15px'}}>
                    <Button className={classes.button1} component="label">
                        Upload Gambar
                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            multiple
                            onChange={handleFileInputChange}
                        />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
    );
}

export default ImageEdit;