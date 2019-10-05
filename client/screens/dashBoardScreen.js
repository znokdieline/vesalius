import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, AsyncStorage, FlatList, Platform, Image, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


import headerButtonsCost from '../components/headerButtonsCost';

import CategoriesTile from '../components/categoriesTile';
import { connectionServices } from '../services/Services';
import { CATEGORIES } from '../data/Categories';
import Category from '../models/Category';



const dashBoardScreen = props => {
    
    const [ userToken, setUserToken ] = useState('');
    const [ userStore, setUserStore ]= useState({ user: '', mail: '' })
    
    const dataUser = userStore;
    console.log('este es del const data ---> ', dataUser)

    //fetch
    userDashboard = () => {


        getData = async () => {
            try {
              const value = await AsyncStorage.getItem('user_token')
              if(value !== null) {
                setUserToken(value)

                connectionServices.get('/userdashboard',{}, value)
                .then(response  => {
                    if( response.success ) {
                        setUserStore ({user: response.user.username, mail:response.user.mail, escuela: response.user.educativeInstitution })
                    }
                } )
                .catch(error=> console.log(error))
            }
        } catch(error) {
            console.log(error)
        }
    }

        getData()

    };

    useEffect( () => {
        userDashboard();
    },[]
    )

    const renderGridItem = itemData => {
        
            return (
            
            <CategoriesTile
            title={ itemData.item.title }
            color={ itemData.item.color }
            id={ itemData.item.id }
            SetScreen={ itemData.item.SetScreen }
            />


)};




return (
    <View style={styles.screen} >
        {/* aquí empieza el main del user */}

            <View style={styles.component} >
            <View style={styles.userComponent} >
                <View style={{ ...styles.container, ...{backgroundColor: props.color}}}>
                <Image 
            source={require('../resources/images/vesalius-08.png')} 
            style={styles.logoStyle} />
                    <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Hola {dataUser.user}</Text>
                    <Text style={styles.textMail}>{dataUser.mail}</Text>
                        <Text style={styles.textItems}>School</Text>
                        <Text style={styles.textItems}>Collections</Text>
                    </View>

                </View>
            </View>
        </View>
    {/* aquí termina el main del user */}
            <View style={styles.textHeader}>
            
                <Text style={styles.textSen}> Heureux qui meurt dans le seigneur </Text>
                <Text style={styles.textSen}> le seigneur </Text>
            </View>
            <Text style={styles.flatTex}> Seleccione las opción </Text>
            
            <FlatList
            keyExtractor={(item, index) => item.id}
            data={ CATEGORIES }
            renderItem={ renderGridItem }
            numColumns= {2}
        />
           
            <View>
            </View>
        </View>
    );
};

dashBoardScreen.navigationOptions = NavData => {
    return{
        headerTitle: 'Este es tu dashboard',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={ headerButtonsCost } >
                <Item title='Menu' iconName='ios-menu' onPress={ () => {
                NavData.navigation.toggleDrawer();   
                    }} />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',

    },

   
    userCol:{
        backgroundColor: '#EE2F27'
    },
    textHeader: {
        alignItems:"center",
        padding: 10,
    },
    textSen: {
        color: '#333132',
        fontSize: 17,

    },
    flatTex: {
        color: 'white',
        padding: 5,
        alignSelf: 'center'
    },
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
        paddingRight: 30,

    },
    textTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:30,
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
        
    },
    textMail: {
        color: 'grey',
        fontSize: 10,
        paddingLeft: 10,
        // alignContent: 'center',
        alignContent:'center'
    }
});

export default dashBoardScreen;