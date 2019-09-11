import React from 'react';
import {} from 'react-native';

const dashBoardScreen = props => {
    return (
        <View style={styles.screen} >
            <Text> dashboard </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default dashBoardScreen;