import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const burialCollectionScreen = props => {
    return(
        <View style={styles.screen} >
            <Text> Colecciónes </Text>
            <Text> Detalle de colección </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default burialCollectionScreen;