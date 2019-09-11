import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const addCollectionScreen = props => {
    return(
        <View style={styles.screen} >
            <Text> agregar collección </Text>
        </View>
    )
};

const styles =  StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default addCollectionScreen;