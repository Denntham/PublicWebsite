import React, { useContext } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

//Import pages
import Home from "./components/Home/Home";
import Login from './components/Auth/Login/Login';
import NavBar from "./components/layout/NavBar";
import Home2 from "./components/Home/NewHome/Home";

//Contexts
import AuthContext from './components/Auth/Context/AuthContext';
import Register from "./components/Auth/Register/Register";
import ProjectIndex from "./components/Project/ProjectIndex";
import ProjectView from "./components/Project/ProjectView/ProjectView";
import DashboardIndex from "./components/Dashboard/DashboardIndex";
import ServiceIndex from "./components/Project/Panels/ServiceView/ServiceIndex";
import UserSettings from "./components/Dashboard/Settings/UserSettings";
import ProjectUpload from "./components/Project/UploadForm/ProjectUpload";
import EditForm from "./components/Project/UploadForm/EditForm";
import InspirationsList from "./components/Dashboard/Inspirations/InspirationsList";

function Router(){
    const {loggedIn} = useContext(AuthContext);

    return(
        <BrowserRouter>
            <NavBar/>   
            
            <Route exact path="/">
                <Home2/>
            </Route>
            
            <Route exact path={["/projects"]}>
                <ProjectIndex/>
            </Route>

            <Route path={["/projects/:projectID"]} component={ProjectView}/>

            <Route exact path={["/services"]}>
                <ProjectIndex/>
            </Route>

            <Route path={["/services/:userID"]} component={ServiceIndex}/>

            {loggedIn === false && (
                <>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                </>
            )}
            {loggedIn === true && (
                <>
                <Switch>
                    <Route path={(["/newproject"])}>
                        <ProjectUpload/>
                    </Route>
                    <Route exact path={(["/dashboard"])}>
                        <DashboardIndex/>
                    </Route>
                    
                    <Route path={(["/dashboard/settings"])}>
                        <UserSettings/>
                    </Route>

                    <Route path={(["/dashboard/outbox"])}>
                        <UserSettings contentStart={'outbox'}/>
                    </Route>

                    <Route path={(["/dashboard/inbox"])}>
                        <UserSettings contentStart={'inbox'}/>
                    </Route>

                    <Route path={(["/dashboard/inspirations/:albumID"])}>
                        <InspirationsList/>
                    </Route>

                    <Route path={(["/edit/:projectID"])}>
                        <EditForm/>
                    </Route>
                </Switch>
                </>
            )}
        </BrowserRouter>
    );
};

export default Router;