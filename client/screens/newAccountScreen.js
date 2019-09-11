import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const newAccountScreen = props => {
    return(
      <View style={styles.screen} >
          <Text> New Account </Text>
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

export default newAccountScreen;