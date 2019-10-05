import React from 'react';
import { HeaderButton  } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const headerButtonsCost = props =>{
    return(
        <HeaderButton 
            { ...props }
            IconComponent={Ionicons}
            iconSize={25}
        />
    )
};



export default headerButtonsCost;