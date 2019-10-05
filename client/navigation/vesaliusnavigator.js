import React from 'react';
import { Platform, StyleSheet } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';

import LoginScreen from '../screens/LoginScreen';
import newAccountScreen from '../screens/newAccountScreen';
import dashBoardScreen from '../screens/dashBoardScreen';
import burialCollectionScreen from '../screens/burialCollectionScreen';
import addCollectionScreen from '../screens/addCollectionScreen';
import sexEstimateScreen from '../screens/sexEstimateScreen';
import photoWatson from '../screens/photoWatson';
import heightScreen from '../screens/heightScreen';
import categoryScreens from '../screens/categoryScreens'


// navegation options config

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: '#E42C26'
    },

};


const vesaliusnavigator =  createStackNavigator({

    // Login: {
    //     screen: LoginScreen
    // },
    // NewAccount: {
    //     screen: newAccountScreen
    // },
    DashBoard: {
        screen: dashBoardScreen
    },
    heightEstime: {
        screen: heightScreen
    },
    SexEstimate: {
        screen: sexEstimateScreen
    },
    AddCollection: {
        screen: addCollectionScreen
    },
    Collections: {
        screen: burialCollectionScreen
    },
    Watson: {
        screen: photoWatson
    }
},{
    defaultNavigationOptions: defaultNavigationOptions
    
});

const categriesNav = createStackNavigator({
   
    dashBoardScreen:{
        screen: dashBoardScreen,
    },
    heightEstime: {
        screen: heightEstime
    },
    SexEstimate: {
        screen: sexEstimateScreen
    },
    Collections:{
        screen: burialCollectionScreen
    },
    AddCollection: {
        screen: addCollectionScreen
    }
});



const drawerNav = createDrawerNavigator({
    
    home: vesaliusnavigator,

    DashBoard: dashBoardScreen,

    heightEstime: heightScreen,

    SexEstimate: sexEstimateScreen,

    Collections: burialCollectionScreen,

   
    AddCollection: addCollectionScreen
}); 


const styles = StyleSheet.create({
    headerStyleColor: {
        backgroundColor: '#400101'
    },

    
});

export default createAppContainer(drawerNav);