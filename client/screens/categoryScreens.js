import React from 'react';
import { FlatList,StyleSheet, Text } from 'react-native';


import { CATEGORIES } from '../data/Categories';

import CategoriesTile from '../components/categoriesTile';


const categoryScreens = props => {

    const renderGridItem = itemData => {
    
        return (
            
            <CategoriesTile
            title={ itemData.item.title }
            color={ itemData.item.color }  
            />

);
};

return(
    <FlatList style={styles.back}
            keyExtractor={(item, index) => item.id}
            data={ CATEGORIES }
            renderItem={ renderGridItem }
            numColumns= {2}
        />
    );

    
};

const styles = StyleSheet.create({
    back:{
        backgroundColor: '#D3D3D3'
    },
    userCol:{
        backgroundColor: '#EE2F27'
    }
});
export default categoryScreens;