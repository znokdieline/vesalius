import React, { useState } from 'react';
import { View,Image, Text, Button, TextInput, StyleSheet } from 'react-native';

import { connectionServices } from '../services/Services';

const newAccountScreen = props => {

    const [ signUpNameUser, setSignUpUser ] = useState('');
    const [ signUpMail, setSignUpMail ] = useState('');
    const [ signUpPassword, setSignUpPassword ] = useState('');
    const [ userSignUp, setUserSignUp ] = useState({user:'', mail: '', password:''})
    const [ messageUp, setMessageUp ] = useState('');


    //fetch

    signUp = () =>{
        
        const data = {
            'userName': signUpNameUser,
            'mail': signUpMail,
            'password': signUpPassword
        }
        
        
        
        connectionServices.post('/signup', data)
            .then(response => {
                console.log(response)
                setUserSignUp({user: response.userName, mail:response.mail, password:response.password})
                props.navigation.navigate('Login')
            })
            .catch(error => console.log(error))
    }





    return(
      <View style={styles.screen} >
        <Image 
            source={require('../resources/images/vesalius-07.png')} 
            style={styles.logoStyle} />
            <View style={styles.inputContainer}>
            {messageUp ? <Text style={styles.textAlert} > introduzca sus datos </Text> : null}
                <TextInput
                    id='userName'
                    style={ styles.inputLog }
                    placeholder='User Name'
                    placeholderTextColor="gray"
                    autoCapitalize='none'
                    onChangeText={ (text) => setSignUpUser(text) }
                />

                <Text style={styles.textStyle}> Nombre de usuario </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    id='mail'
                    style={ styles.inputLog }
                    placeholder='mail'
                    placeholderTextColor="gray"
                    autoCapitalize='none'
                    onChangeText={ (text) => setSignUpMail(text) }
                />

                <Text style={styles.textStyle}> Mail </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    id='password'
                    style={ styles.inputLog }
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor="gray"
                    autoCapitalize='none'
                    onChangeText={ (text) => setSignUpPassword(text) }
                />

                <Text style={styles.textStyle}> Password </Text>
            </View>
            <Button
                    style={styles.buttonSingUp}
                    title='Enviar'
                    onPress={ signUp } 
                />
      </View>  
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'black'
    },
    logoStyle:{
        width: 100,
        height: 70,
        bottom: 40,
        alignSelf: 'center'

    },
    inputLog: {
        height: 40,
        width: 300,
        borderColor:'gray',
        borderWidth: 1, 
        borderRadius: 10,
        color: 'gray',
        padding: 10,
    },
    textAlert:{
        color: 'red',
        fontSize: 20,
        margin: 10,
        alignItems: 'center',
        alignContent: 'center'
    },
    textStyle: {
        color: 'gray',
        padding: 15,
    },
    inputContainer: {
        alignItems : 'center',
        alignContent: 'center',
    }
});

export default newAccountScreen;