import { Button, Divider, Grid, InputAdornment, OutlinedInput, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CustomLabel from '../Components/CustomLabel';
import CustomSelect from '../Components/CustomSelect';
import InputTags from '../Components/InputTags';
import axios from 'axios';
import {ROOM_TYPE, LOCATIONS, LOCATIONS_DICT, STYLES} from '../../MenuOptions';
//For dates
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import useStyles from './styles';
import ImageUpload from './ImageUpload';
import { useHistory } from 'react-router';

function ProjectUpload() {

    const [name, setName] = useState(undefined);
    const [location, setLocation] = useState(undefined);
    const [province, setProvince] = useState(undefined);
    const [city, setCity] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const [buildingType, setBuildingType] = useState(undefined);
    const [year, setYear] = useState(new Date());
    const [category, setCategory] = useState(undefined);
    const [price, setPrice] = useState(0);
    const [projectStatus, setProjectStatus] = useState(undefined);
    const [designStyle, setDesignStyle] = useState([]);

    const [citiesList, setCitiesList] = useState([]);
    
    //HANDLE IMAGES
    const [photos, setPhotos] = useState([]);

    const [tagsList, setTagList] = useState(STYLES);

    const classes = useStyles();
    const history = useHistory();

    function addTags(e){
        if(!designStyle.includes(e.currentTarget.value) && designStyle.length < 5){
            let designs = designStyle;
            let tags = tagsList;
            designs.push(e.currentTarget.value);
            
            setDesignStyle(designs);

            const elementPos = tagsList.findIndex(tag => String(tag) === String(e.currentTarget.value));
            tags.splice(elementPos, 1); 
            setTagList(tags);
        }
    }

    function removeTag(e){
        if(designStyle.includes(e.currentTarget.value)){
            let designs = designStyle;
            let tags = tagsList;
            const elementPos = designs.findIndex(tag => String(tag) === String(e.currentTarget.value));
            designs.splice(elementPos, 1); 

            setDesignStyle(designs);

            tagsList.push(e.currentTarget.value);
            setTagList(tags);
        }
    }

    function photosHandler(files){
        setPhotos(files);
    }

    useEffect(() => {
        if(province){
            const provinceData = LOCATIONS_DICT.states.filter( obj => {
                return obj.name === province
            })
            const cities = provinceData[0].cities.map((city) => {
                return city["name"];
            })
            setCitiesList(cities);
        }
    }, [province]) 

    async function handleSubmit(e){
        e.preventDefault();
        
        try{
            if(photos.length < 1) return;
            
            const registerData={
                name: name, 
                location: location, 
                city: city,
                province: province,
                description: description, 
                buildingType: buildingType,
                year: year.getFullYear(), 
                category: category, 
                price: price, 
                projectStatus: projectStatus, 
                designStyle: designStyle
            }

            const imageFiles = new FormData();
            for(let i =0;i<photos.length;i++){
                imageFiles.append('file', photos[i]);
            }

            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };

            const res = await axios.post('http://localhost:5000/project/newproject', registerData);
            await axios.post(`http://localhost:5000/projectImage/upload/v2/${res.data.id}`, imageFiles, config);
            history.push(`/projects/${res.data.id}`)
        }  catch(errors) {
            if(errors) console.log(errors);
        }
    }

    return (
        <Grid container className={classes.root}
        justify='center' alignItems='center'
        >
            <Grid item xs={8} className={classes.formContainer}>
                <Typography className={classes.formTitle}>
                    Upload Portfolio
                </Typography>
                <form style={{width: '80%'}} onSubmit={handleSubmit}>
                    <ImageUpload setFunc={photosHandler}/>
                    <Grid container xs={12} className={classes.inputblock}>
                        <Grid item xs={4}>
                            <CustomLabel 
                            labelFor="name" 
                            text="Nama Projek" 
                            isRequired
                            desc="Dapat berupa nama konsep desain atau inisial nama client dan jenisnya
                            (Contoh: AA House)"
                            />
                        </Grid>
                            <Grid item xs={8}>
                                <TextField id="name" 
                                variant="outlined" 
                                type="text"
                                fullWidth
                                required
                                InputProps={{className: classes.input}}
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                />
                        </Grid>
                    </Grid>
                    <Grid container xs={12} className={classes.inputblock}>
                        <Grid item xs={4}>
                            <CustomLabel 
                            labelFor="desc" 
                            text="Deskripsi" 
                            isRequired
                            desc="Deskripsi dapat berupa konsep desain, proses pengerjaan dan 
                            lainnya yang menjelaskan proyek anda"
                            />
                        </Grid>
                            <Grid item xs={8}>
                                <TextField id="desc" 
                                variant="outlined" 
                                type="text"
                                required
                                fullWidth
                                multiline
                                InputProps={{className: classes.inputLong}}
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                />
                        </Grid>
                    </Grid>
                    <Grid container xs={12} className={classes.inputblock}>
                        <Grid item xs={4}>
                            <CustomLabel 
                            labelFor="buildingType" 
                            text="Tipe Ruangan" 
                            isRequired
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect options={ROOM_TYPE} values={ROOM_TYPE} onChangeFunc={(e) => setBuildingType(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} className={classes.inputblock}>
                        <Grid item xs={4}>
                            <CustomLabel 
                            labelFor="category" 
                            text="Kategori" 
                            isRequired
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect options={["Architecture", "Interior"]} values={["Architecture", "Interior"]} onChangeFunc={(e) => setCategory(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} className={classes.inputblock}>
                        <Grid item xs={4}>
                            <CustomLabel 
                            labelFor="projectStatus" 
                            text="Status Project"
                            desc="Tell us the progress of your project."
                            isRequired
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <CustomSelect 
                            name="projectStatus"
                            options={["Concept", "In-Progress", "Finished"]} 
                            values={["Concept", "In-Progress", "Finished"]}
                            onChangeFunc={(e) => setProjectStatus(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} className={classes.inputblock}>
                        <Grid item xs={4}>
                            <CustomLabel 
                            text="Style Desain" 
                            isRequired
                            desc={`Pilih tags yang cocok dengan projek anda! (Max. 5)`}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <InputTags tagsList={STYLES} targetList={designStyle} addTag={addTags} removeTag={removeTag}/>
                        </Grid>
                    </Grid>
                    
                    {projectStatus && projectStatus !== "" && projectStatus !== "Concept" && (
                    <Grid container xs={12} className={classes.inputblock}>
                        <Grid item xs={4}>
                            <CustomLabel 
                            text="Tahun Selesai" 
                            isRequired
                            />
                        </Grid>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid item xs={8}>
                                <DatePicker
                                views={["year"]}
                                value={year}
                                variant="outlined"
                                inputVariant="outlined"
                                onChange={setYear}
                                className={classes.datePicker}
                                />
                        </Grid>
                        </MuiPickersUtilsProvider>
                    </Grid>
                    )}
                    <Divider/>
                    <Grid container xs={12} className={classes.inputblock}>
                        <Grid item xs={4}>
                            <CustomLabel 
                            labelFor="desc" 
                            text="Alamat" 
                            isRequired
                            />
                        </Grid>
                            <Grid item xs={8}>
                                <TextField 
                                variant="outlined" 
                                type="text"
                                required
                                fullWidth
                                InputProps={{className: classes.input}}
                                onChange={(e) => setLocation(e.target.value)}
                                value={location}
                                />
                        </Grid>
                    </Grid>
                    <Grid container xs={12} className={classes.inputblock}>
                        <Grid item xs={4}>
                            <CustomLabel 
                            labelFor="desc" 
                            text="Provinsi" 
                            isRequired
                            />
                        </Grid>
                            <Grid item xs={8}>
                            <CustomSelect
                             options={LOCATIONS} 
                             values={LOCATIONS} 
                             onChangeFunc={(e) => setProvince(e.target.value)}
                             />
                        </Grid>
                    </Grid>
                    {citiesList.length > 0 && (
                    <Grid container xs={12} className={classes.inputblock}>
                        <Grid item xs={4}>
                            <CustomLabel 
                            labelFor="desc" 
                            text="Kota" 
                            isRequired
                            />
                        </Grid>
                            <Grid item xs={8}>
                            <CustomSelect
                             options={citiesList} 
                             values={citiesList} 
                             onChangeFunc={(e) => setCity(e.target.value)}
                             />
                        </Grid>
                    </Grid>
                    )}
                    <Divider/>
                    <Grid container xs={12} className={classes.inputblock}>
                        <Grid item xs={4}>
                            <CustomLabel 
                            labelFor="desc" 
                            text="Estimasi Harga" 
                            isRequired
                            desc="Estimasi berupa harga per meter persegi"
                            />
                        </Grid>
                            <Grid item xs={8}>
                                <OutlinedInput id="desc" 
                                variant="outlined" 
                                fullWidth
                                required
                                startAdornment={<InputAdornment position="start">Rp.</InputAdornment>}
                                InputProps={{className: classes.input}}
                                className={classes.input}
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                />
                        </Grid>
                    </Grid>
                    <Grid container justify='center' alignItems='center' xs={12} style={{marginTop: '15px', marginBottom: '15px'}}>
                        <Button className={classes.button2} type="submit">
                            Upload Project
                        </Button>
                    </Grid>
                </form> 
            </Grid>
        </Grid>
    );
}

export default ProjectUpload;