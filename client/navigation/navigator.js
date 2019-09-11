import React from 'react';
import {} from 'react-native'

import { createStackNavigator } from 'react-navigationstack';
import { createAppContainer } from 'react-navigation'

const vesaliusnavigator =  createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    NewAccount: {
        screen: newAccountScreen
    },
    DashBoard: {
        screen: dashBoardScreen
    },
    Collections: {
        screen: burialCollectionScreen
    },
    AddCollection: {
        screen: addCollectionScreen
    },
    SexEstimate: {
        screen: sexEstimateScreen
    },
    Watson: {
        scree: photoWatson
    },
    heightEstime: {
        heightScreen
    }
});

export default createAppContainer(vesaliusnavigator);