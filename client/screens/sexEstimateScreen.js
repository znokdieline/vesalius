import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const sexEstimateScreen = props => {
    return(
        <View style={styles.screen} >
            <Text> estimación de sexo </Text>
        </View>
    );
};

const styles = StyleSheet.crete({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default sexEstimateScreen;