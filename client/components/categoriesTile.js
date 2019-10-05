import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback,View, Text, StyleSheet, Platform, Image, Button } from 'react-native';


const categoriesTile = props => {

    let TouchableCmp = TouchableOpacity;

    if ( Platform.OS === 'android' && Platform.Version >= 21 ){
        TouchableCmp = TouchableNativeFeedback;
    }

    return(
        <View style={ styles.gridItem } >
            <TouchableCmp style={ styles.touchableStyle } onPress={ () => { console.log('se presiona') } } >
                <View style={{ ...styles.container, ...{backgroundColor: props.color}}  }>
                    <Image source={require('../resources/images/vesaliusone-06.png')}/>
                    <Text style={ styles.title } numberOfLines={ 2 } >{ props.title } </Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

{/* <Button
                title='hola'
                onPress={() => nav.navigation.navigate('AddCollection')}
                onPress={ () => console.log(props.SetScreen)}
            /> */}

// props.navigation.navigate('AddCollection')



const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' >= 21 ? 'hidden' : 'visible',
        elevation: 5,
       
    },
    container:{
        flex: 1,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: .26,
        shadowOffset: { width:0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'gray'
    },
    touchableStyle: {
        flex: 1,
    },
    ButtonStyle: {
        width:10,
        height:10,
        backgroundColor: 'white'

    }
});

export default categoriesTile; 