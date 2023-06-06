import React from 'react';
import { createAppContainer } from 'react-navigation' 
import { createDrawerNavigator } from 'react-navigation-drawer' 

import Home from './src/pages/Home'
import LoginCli from './src/pages/LoginCli'

import CustomDrawer from './components/CustomDrawer'

const Routes = createAppContainer(
    createDrawerNavigator({
        Home,
        LoginCli,
    },{
        initialRouteName: 'HomeUwU',
        contentComponent: CustomDrawer
    })
);

export default Routes;