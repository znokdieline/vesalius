import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';


const UserTile = props => {

    const data = {

        ...this.username
    }
    return(
        <View style={styles.component} >
            <View style={styles.userComponent} >
                <View style={{ ...styles.container, ...{backgroundColor: props.color}}}>
                <Image 
            source={require('../resources/images/vesalius-08.png')} 
            style={styles.logoStyle} />
                    <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>{data.username}</Text>
                        <Text style={styles.textItems}>School</Text>
                        <Text style={styles.textItems}>Collections</Text>
                    </View>

                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    component: {
        flex: 1,
        alignItems: 'center',
    },
    userComponent:{
        // flex: 1,
        margin: 15,
        height: 120,
        width: 350,
        borderRadius: 10,
        overflow: Platform.OS === 'android' >= 21 ? 'hidden' : 'visible',
        elevation: 5,
        backgroundColor: '#230C00',
    },
    container:{
        flexDirection: 'row',
        flex: 1,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: .26,
        shadowOffset: { width:0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        alignItems: "center",
        alignContent: 'center',
    },
    logoStyle:{
        width: 20,
        height: 20,
        bottom: 10,
        // alignSelf: 'flex-start',
        padding: 20,

    },
    textTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:20,
        paddingLeft: 10,
        alignContent: 'center',
        alignContent:'center'
        
    },
    textContainer: {
        flexDirection: 'column',
    },
    textItems: {
        color: 'white',
        fontSize: 15,
        paddingLeft: 10,
        // alignContent: 'center',
        alignContent:'center'
        
    }
});

export default UserTile;