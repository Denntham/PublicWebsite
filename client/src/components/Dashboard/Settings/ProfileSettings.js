import { Avatar, Button, Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import AuthContext from '../../Auth/Context/AuthContext';
import CreateIcon from '@material-ui/icons/Create';
import useStyles from './styles';
import CustomInput from '../../Reuseables/CustomInput';
import CustomLabel from '../../Reuseables/CustomLabel';
import CustomSelect from '../../Reuseables/CustomSelect';
import axios from 'axios';
import {RegionDropdown} from 'react-country-region-selector';
import { useHistory } from 'react-router';

function ProfileSettings() {
    const {username} = useContext(AuthContext);
    
    const [fullName, setFullName] = useState(undefined);
    const [gender, setGender] = useState(undefined);
    const [bio, setBio] = useState(undefined);
    const [phone, setPhone] = useState(undefined);
    const [website, setWebsite] = useState(undefined);
    const [address, setAddress] = useState(undefined);
    const [city, setCity] = useState(undefined);
    const [province, setProvince] = useState(undefined);
    const [selectedFile, setSelectedFile] = useState(undefined);
    const [previewSource, setPreviewSource] = useState();

    const history = useHistory()

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setSelectedFile(file);
        previewFile(file);
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }

    async function handleSubmitEdit(e){
        e.preventDefault();

        if(fullName || gender || bio || phone || website || address) {
            const parsedInput = {
                fullName: fullName,
                gender: gender,
                bio: bio,
                phone: phone,
                website: website,
                address: address,
                city: city,
                province: province
            }
            
            await axios.put('http://localhost:5000/user/edit', parsedInput);
            history.push("/dashboard");
        }

        if(selectedFile){
            const imageFile = new FormData();
            imageFile.append('file', selectedFile);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };

            await axios.post('http://localhost:5000/avatar/upload/', imageFile, config);
        }
    }

    const classes = useStyles();
    return (
        <Grid 
        container xs={12}
        alignContent='center'
        justify='center'
        className={classes.rootSettings}
        >
            <Grid container>
                <form onSubmit={handleSubmitEdit} className={classes.form}>
                    <div>
                        <input style={{display: 'none'}} 
                        accept="image/*" 
                        id="upload-img-button" 
                        type="file"
                        onChange={handleFileInputChange}/>
                        <label htmlFor="upload-img-button">
                            <CreateIcon className={classes.uploadImage}/>
                        </label>
                        <Avatar src={previewSource} style={{width: '150px', height: '150px'}}/>
                    </div>
                    <CustomInput value={fullName} text="Nama Lengkap" changeFunc={setFullName}/>
                    <CustomInput value={bio} text="Deskripsi" changeFunc={setBio}/>
                    <CustomInput value={phone} text="Nomor Telefon" type={'number'} changeFunc={setPhone}/>
                    <CustomInput value={website} text="Website" changeFunc={setWebsite}/>
                    <CustomInput value={address} text="Alamat" changeFunc={setAddress}/>
                    <CustomInput value={city} text="Kota" changeFunc={setCity}/>
                    <CustomInput value={province} text="Provinsi" changeFunc={setProvince}/>
                    <Grid container xs={10} className={classes.inputblock}>
                        <Grid item xs={2}>
                            <CustomLabel 
                            labelFor="buildingType" 
                            text="Gender" 
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomSelect options={["Laki-laki", "Perempuuan"]} values={["Laki-laki","Perempuan"]} onChangeFunc={(e) => setGender(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Button type="submit" className={classes.button1}>
                        Submit
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
}

export default ProfileSettings;