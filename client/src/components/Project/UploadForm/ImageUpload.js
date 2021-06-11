import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import placeholder from '../../../resources/forms/placeholder.jpg';
import CustomLabel from '../Components/CustomLabel';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from './styles';

function ImageUpload({setFunc}) {
    
    const classes = useStyles();
    const [selectedFile, setSelectedFile] = useState([]);
    const [previewSource, setPreviewSource] = useState([]);
    const [checkstate, setCheckstate] = useState(false);

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
        if(files.length > 10 || selectedFile.length >= 10 || (selectedFile.length + files.length > 10)) return;
        console.log(tempArr);
        
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

    function removeFile(e){
        const idx = e.currentTarget.value;
        const tempArr = selectedFile;
        const tempPreviewArr = previewSource;
        
        tempArr.splice(idx,1);
        tempPreviewArr.splice(idx,1);

        setPreviewSource(tempPreviewArr);
        setSelectedFile(tempArr);
        setFunc(tempArr);
        setCheckstate(!checkstate);
    }

    useEffect(() => {
        renderImageBoxes();
    }, [checkstate])

    function renderImageBoxes(){
     
            let imageBoxes = []

            for(let i=0;i<10;i++){
                if(previewSource[i]){
                    imageBoxes.push(
                        <Grid container xs={2} alignItems='flex-start' justify='flex-end' className={classes.imageBoxes}>
                            <IconButton value={i} onClick={removeFile} className={classes.delete}>
                                <CancelIcon/>
                            </IconButton>
                            <img 
                            src={previewSource[i]} 
                            className={classes.imageObjects}/>
                        </Grid>
                    )  
                } else {
                    imageBoxes.push(
                        <Grid item xs={2} className={classes.imageBoxes}>
                            <img 
                            src={ placeholder} 
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
                        Upload Foto
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

export default ImageUpload;