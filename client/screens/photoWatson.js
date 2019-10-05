import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const photoWatson = props => {
    return(
        <View style={styles.screen} >
            <Text> Para watson </Text>
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

export default photoWatson;