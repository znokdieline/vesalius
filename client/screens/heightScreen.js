import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import headerButtonsCost from '../components/headerButtonsCost';

const heightScreen = props => {

const [ masculineFemurSize, setMasculineFemurSize ] = useState('');
const [ maculineTibiaSize,  setMasculineTibiaSize ] = useState('');
const [ femeFemurSize, setFemFemurSize ] = useState('');
const [ femeTibiaSize,  setFemTibiaSize ] = useState('');

const [ renderMale, setRenderMale ] = useState('');
const [ renderFemale, setRenderFemale ] = useState('');
// hombre
const [ renderFemurResult, setRenderFemurResult ] = useState('');
const [ renderTibiaResult, setRenderTibiaResult ]= useState('');
// mujer
const [ renderFemurFemResult, setRenderFemurFemResult ] = useState('');
const [ renderFemTibiaResult, setRenderFemTibiaResult ] = useState('');

// hombre
const [ maxHeightRes, setMaxHeightRes ] = useState('');
const [ minimo, setMinimo ] = useState(''); 

const [ maxTibia, setMaxTibia ] = useState('');
const [ minTibia, setMinTibia ] = useState('');

// mujer
const [ maxFemFemur, setMaxFemur ] = useState('');
const [ minFemFemur, setMinFemur ] = useState('');

const[ maxFemTibia, setMaxFemTibia ] = useState('');
const [ minFemTibia, setMinFemTibia ] = useState('');




//femur masculino
    const masculineFemur = () => {

        let estimeFemur
        estimeFemur = (2.26 * masculineFemurSize) + 66.379

        let maxMaleHeight = (estimeFemur + 3.417);
        
        setMaxHeightRes( maxMaleHeight );
        console.log( 'maximo masculino por femur--->', maxMaleHeight  )

        
        let minMaleHeight = (estimeFemur - 3.417);

        console.log('minimo masculino por femur--->', minMaleHeight );
        setMinimo(minMaleHeight);
        

    };

     

//tibia masculino
    
    const masculineTibia = () => {
        let estimeTibia 
        estimeTibia = (1.96 * maculineTibiaSize) + 93.752;
        let maxMaleHeightTib = estimeTibia + 2.812;
        console.log( 'maximo masculino por tibia--->', maxMaleHeightTib  )
        setMaxTibia(maxMaleHeightTib)
        let minMaleHeightTib = estimeTibia - 2.812;
        console.log('minimo masculino por tibia--->', minMaleHeightTib );
        setMinTibia(minMaleHeightTib);
    }; 

//femur feme
    
    const femeFemur = () => {
        let estimeFemurFem 
        estimeFemurFem = ( 2.59 * femeFemurSize ) + 49.742;

        let maxFemeHeightfemur = estimeFemurFem + 3.816;

        setMaxFemur(maxFemeHeightfemur)

        console.log( 'maximo masculino por tibia--->', maxFemeHeightfemur  )

        let minFemeHeightFemur = estimeFemurFem - 3.816;

        setMinFemur(minFemeHeightFemur)

        console.log( 'minimo femenino femur--->', minFemeHeightFemur );
    }; 

//tibia feme
    
    const femeTibia = () => {

        let estimeTibiaFem 
        estimeTibiaFem = ( 2.72 * femeTibiaSize ) + 63.781;

        let maxFemeHeightTibia = estimeTibiaFem + 3.513;
        setMaxFemTibia(maxFemeHeightTibia)

        console.log( 'maximo femenino por tibia--->', maxFemeHeightTibia )
        
        let minFemeHeightTibia = estimeTibiaFem - 3.513;
        setMinFemTibia(minFemeHeightTibia)
        console.log( 'minimo femenino femur--->', minFemeHeightTibia );
    }; 



    return(
        <ScrollView style={styles.scroll}>
        <View style={styles.screen}>
            <Image 
            source={require('../resources/images/vesalius-08.png')} 
            style={styles.logoStyle} />
            <View style={{ alignItems: 'center' }} >
            <Text style={styles.textIn} > "Non fas est mortuis insultare" </Text>
            <Text style={styles.textInst} > "Puedes Realizar una estimación de altura por los siguientes parámetros" </Text>
            
            <View style={ styles.butonsSet } >
            <TouchableOpacity
                style={styles.renderOn}
                onPress={() => {setRenderMale(true),setRenderFemale (false) } }
            >
                <Text style={styles.textOnpPress}> Hombre</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.renderOn}
                onPress={() => {setRenderFemale (true), setRenderMale(false)} }
            >
                <Text style={styles.textOnpPress}> Mujer</Text>
            </TouchableOpacity>
            </View>

            { renderMale ? 
            <View>
            <Text style={styles.textTitleStyle}> Hombre </Text>
                <View style={styles.inputContainer}>
                <View style={{flexDirection:'row'}} >
                    <TextInput
                        id='mail'
                        style={ styles.inputLog }
                        placeholder='Femur'
                        placeholderTextColor="gray"
                        // onFocus={true}
                        keyboardType='number-pad'
                        autoCapitalize="none"
                        onChangeText={(text) => setMasculineFemurSize(text)}
                    />
                        <TouchableOpacity
                            style={styles.enterButton}
                            onPress={masculineFemur}
                            onPressOut= {() => { setRenderFemurResult(true), setRenderTibiaResult(false) }}
                             >
                            <Text style={styles.textSend}> Enter </Text>
                        </TouchableOpacity>
                </View>

                    <Text style={styles.textStyle}> Medida de Femur </Text>
                </View>
                <View style={styles.inputContainer}>
                <View style={{flexDirection:'row'}} >
                    <TextInput
                            id='tibiamale'
                            style={ styles.inputLog }
                            placeholder='Tibia'
                            placeholderTextColor="gray"
                            // onFocus={true}
                            autoCapitalize="none"
                            onChangeText={(text) => setMasculineTibiaSize(text)}
                    />
                    <TouchableOpacity
                            style={styles.enterButton}
                            onPress={masculineTibia}
                            onPressOut={() => { setRenderTibiaResult(true), setRenderFemurResult(false) }}
                             >
                            <Text style={styles.textSend}> Enter </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.textStyle}> Medida de Tibia </Text>
                </View>
                    {renderFemurResult ?

                        <View>
                            <Text style={styles.textTitleStyle}>Altura por Femur</Text>
                            <Text style={styles.textTitleStyle}>Altura máxima es {maxHeightRes} cm.</Text>
                            <Text style={styles.textTitleStyle}>Altura mínima  es {minimo} cm.</Text>
                        </View>

                    :false }

                    {renderTibiaResult ?

                        <View>
                            <Text style={styles.textTitleStyle}>Altura Por Tibia</Text>
                            <Text style={styles.textTitleStyle}>Altura máxima es {maxTibia} cm.</Text>
                            <Text style={styles.textTitleStyle}>Altura mínima  es {minTibia} cm.</Text>
                        </View>
                    :false }
                    
                </View>

                

            : false}
            {renderFemale ?
            <View>
                <Text style={styles.textTitleStyle}> Mujer </Text>
                <View style={styles.inputContainer}>
                <View style={{flexDirection:'row'}} >
                    <TextInput
                        id='mail'
                        style={ styles.inputLog }
                        placeholder='Femur'
                        placeholderTextColor="gray"
                        // onFocus={true}
                        autoCapitalize="none"
                        onChangeText={(text) => setFemFemurSize(text)}
                    />
                    <TouchableOpacity
                            style={styles.enterButton}
                            onPress={femeFemur}
                            onPressOut={()=> {setRenderFemurFemResult(true), setRenderFemTibiaResult(false)} }
                             >
                            <Text style={styles.textSend}> Enter </Text>
                     </TouchableOpacity>
                </View>
                    <Text style={styles.textStyle}> Medida de Femur </Text>
                </View>

                <View style={styles.inputContainer}>
                <View style={{flexDirection:'row'}} >
                    <TextInput
                            id='tibia'
                            style={ styles.inputLog }
                            placeholder='Tibia'
                            placeholderTextColor="gray"
                            // onFocus={true}
                            autoCapitalize="none"
                            onChangeText={(text) => setFemTibiaSize(text)}
                    />
                    <TouchableOpacity
                            style={styles.enterButton}
                            onPress={femeTibia}
                            onPressOut={()=> { setRenderFemTibiaResult(true), setRenderFemurFemResult(false)} }
                             >
                            <Text style={styles.textSend}> Enter </Text>
                     </TouchableOpacity>
                    </View>
                    <Text style={styles.textStyle}> Medida de Tibia </Text>
                </View>

                {renderFemurFemResult ?

                    <View>
                        <Text style={styles.textTitleStyle}>Altura por Femur</Text>
                        <Text style={styles.textTitleStyle}>Altura máxima es {maxFemFemur} cm.</Text>
                        <Text style={styles.textTitleStyle}>Altura mínima  es {minFemFemur} cm.</Text>
                    </View>

                    :false }

                    {renderFemTibiaResult ?

                    <View>
                        <Text style={styles.textTitleStyle}>Altura Por Tibia</Text>
                        <Text style={styles.textTitleStyle}> Altura máxima es {maxFemTibia} cm. </Text>
                        <Text style={styles.textTitleStyle}> Altura mínima  es {minFemTibia} cm. </Text>
                    </View>

                    :false }
            </View>
            : false}

            </View>
        </View>
        </ScrollView>
    );
};

heightScreen.navigationOptions = NavData => {
    return{
        headerTitle: 'Estimación de altura',
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
    scroll:{
        flex: 1,
        color: 'white',
        backgroundColor: 'black',
        padding: 30,
        alignContent: 'center'
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'black'
    },
    logoStyle:{
        width: 50,
        height: 50,
        bottom: 5,
        alignSelf: 'center'

    },
    textIn:{
        color: 'white',
        fontSize: 15,
        margin: 10,
        alignItems: 'center',
        alignContent: 'center'
    },
    textInst: {
        color: 'white',
        fontSize: 15,
        alignItems: 'center',
        alignContent: 'center',
        padding: 20,
    },
    textTitleStyle: {
        color: 'white',
        fontSize: 20,
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
    },
    inputLog: {
        height: 40,
        width: 130,
        borderColor:'gray',
        borderWidth: 1, 
        borderRadius: 10,
        color: 'gray',
        padding: 10,
        marginRight: 10,
    },
    butonsSet: {
        flexDirection:'row',
        padding: 10,
    },
    renderOn: {
        height: 40,
        width: 100,
        marginRight: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E42C26',
        color: 'white',
    },
    enterButton:{
        height: 40,
        width: 70,
        marginRight: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'grey',
    },
    textOnpPress: {
        color: 'white',
        alignSelf: 'center', 
        fontSize: 15,
        fontWeight: 'bold'
    },
    textSend: {
        color: '#E42C26',
        alignSelf: 'center', 
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default heightScreen;