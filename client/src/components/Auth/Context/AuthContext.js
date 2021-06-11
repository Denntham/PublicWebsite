import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

//Get the state of the user whether he's logged in or not
const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [permission, setPermission] = useState(undefined);
    
    async function getLoggedIn(){
        try {    
            const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");
            //If user is logged in then set login state to true, else false
            if(loggedInRes.data){
                setLoggedIn(loggedInRes.data.loggedIn);
                setUsername(loggedInRes.data.username);
                setPermission(loggedInRes.data.permission);
            } else {
                setLoggedIn(false);
                setUsername(undefined);
                setPermission(undefined);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
       getLoggedIn();
    }, []);

    return (<AuthContext.Provider value={{loggedIn, username, permission, getLoggedIn}}>
        {props.children}
    </AuthContext.Provider>
    )
}

export default AuthContext;
export {AuthContextProvider};