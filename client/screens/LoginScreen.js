import  React, { useState }  from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button, Alert, ScrollView, SafeAreaView, FlatList  } from 'react-native';

import { connectionServices } from '../services/Services';
import { AsyncStorage } from 'react-native';



const LoginScreen = props => {
    
    const [ logMail, setLogMail ] = useState('');
    const [ logPassword, setLogPassword ] = useState('');
    const [ user, setUser ] = useState({user:'', mail: ''});

    const [ message, setMessage ] = useState('');



    
    
    //fetch
    
    login = () => {

        // console.log('envio de mail y password')
       
        
        const data = {
            'mail':   logMail,
            'password': logPassword 
        }

        storeData = async (user_token, user) => {
            try {
              await AsyncStorage.setItem('user_token', user_token)
            } catch (e) {
              // saving error
            }
          }
        
        // console.log('esta es la data que se envía --->',data)
        
        if( data.mail === ''|| data.password === '' ){
            return (
                Alert.alert(
                    'Introduzca sus datos',
                    'Por favor ingrese sus datos de usuario y contraseña',
                    [
                        { text: 'Cancel',
                    onPress: () => console.log( 'Cancel press' ),
                style: 'cancel',
            },
            { text:'Ok', onPress: () => console.log('OK Presses')},
                    ],
                    {cancelable: false},
                )
            )
        }


        connectionServices.post('/login', data)
        .then(response => {

            if (response.success) {
                // console.log( 'this is the response ---> ' ,response)
                setUser({user: response.user.userName, mail:response.user.mail})
                storeData(response.token)
                props.navigation.navigate('DashBoard')
            } else {
                setMessage('Tu contraseña o tu user son incorrectos')
            }

        }
        ).catch(error => console.log(error))
        // console.log( 'this is the data ---> ' ,data)
    }


    return(
        <ScrollView style={styles.scroll}>
        <View style={styles.screen}>
            <Image 
            source={require('../resources/images/vesalius-07.png')} 
            style={styles.logoStyle} />
            <View>
            <Text style={styles.textIn} > "Non fas est mortuis insultare" </Text>
                <View style={styles.inputContainer}>
                {message ? <Text style={styles.textAlert} > Su mail y/o password es incorrecto.  </Text> : null}
                    <TextInput
                        id='mail'
                        style={ styles.inputLog }
                        placeholder='Enter your email'
                        placeholderTextColor="gray"
                        // onFocus={true}
                        autoCapitalize="none"
                        onChangeText={(text) => setLogMail(text)}
                    />

                    <Text style={styles.textStyle}> Mail </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                            id='password'
                            style={ styles.inputLog }
                            placeholder='Enter your Password'
                            secureTextEntry={true}
                            placeholderTextColor="gray"
                            // onFocus={true}
                            autoCapitalize="none"
                            onChangeText={(text) => setLogPassword(text)}
                    />

                    <Text style={styles.textStyle}> Password </Text>
                </View>
                <Button
                    style={styles.buttonSingUp}
                    title='Login' onPress={ login } 
                />
                <Button
                    style={styles.buttonSingUp}
                    title=' Crear cuenta'
                    onPress={() => {props.navigation.navigate('NewAccount')}}

                    
                />
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll:{
        flex: 1,
        color: 'white',
        backgroundColor: 'black',
        padding: 30,
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'black'
    },
    logoStyle:{
        width: 140,
        height: 100,
        bottom: 10,
        alignSelf: 'center'

    },
    textIn:{
        color: 'white',
        fontSize: 15,
        margin: 30,
        alignItems: 'center',
        alignContent: 'center'
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
    buttonSingUp: {
        color: 'white',
        margin: 20
    }
});

export default LoginScreen;