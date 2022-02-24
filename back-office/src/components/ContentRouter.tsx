import { Component, FC, ReactElement, ReactInstance } from 'react';

import Agenda from '../pages/Agenda';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Workshop from '../pages/Workshop';

interface ContentRouterProps{
    selectedScreen: string
}



const ContentRouter: FC<ContentRouterProps> = ({selectedScreen}: ContentRouterProps) => {

    const renderComponentDynamically = (s: string): ReactElement | null => {
        const routes = [
            {name: 'Agenda', component: <Agenda/>},
            {name: 'Dashboard', component: <Dashboard/>},
            {name: 'Ateliers', component: <Workshop/>},
            {name: 'Profil', component: <Profile/>},
        ]; 

        const route = routes.find(e => e.name === s);
        if(route){
            return route.component
        }
        return null;
    } 


    return(
        <>
            {renderComponentDynamically(selectedScreen)}
        </>
    );
}

export default ContentRouter;