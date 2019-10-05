import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import headerButtonsCost from '../components/headerButtonsCost';

const sexEstimateScreen = props => {

    const [ renderGlabela, setRenderGlabela ] = useState('');
    const [ renderOrbit, setRenderOrbit ] = useState('');
    const [ renderNucal, setRenderNucal ] = useState('');
    const [ renderMastoideo, setRenderMastoideo ] = useState('');
    const [ renderMenton, setRenderMenton ] = useState('');

    const [ glabella, setGlabella ] = useState('');
    console.log(glabella);

    const [orbitalSupra, setOrbitalSupra] = useState('');

    const [ nucal, setNucal] = useState('');

    const [ mastoideo, setMastoideo ] = useState('');

    const [ menton, setMenton ] = useState('');

    const [ sexResEstime, setSexEstime ] = useState('');

    const [ result ,setResult ] = useState('')

    const sexEstimation = () => {

        let sumaSexIndi

        sumaSexIndi = glabella + orbitalSupra + nucal + mastoideo + menton

        let resSumEstime = sumaSexIndi / 5;
        
        if ( resSumEstime <= 2 ){
            setSexEstime(' Es posible que sea mujer')
        };

        if( resSumEstime = 3 ){
            setSexEstime(' No es posible determinarlo ');
        };

        if ( resSumEstime <= 4 ){
            setSexEstime(' Es posible que sea hombre ')
        };

    };

    return(
        <ScrollView style={styles.scroll}>
           
        
                
        <View style={styles.screen} >
            
            <View  style={styles.buttons}>
                
                {/* button */}
                    <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.estimaCont}
                                onPress={ () => {setRenderGlabela(true), setRenderOrbit(false), setRenderNucal(false), setRenderMastoideo(false), setRenderMenton(false), setResult(false) }}>
                                <Image
                                    source={require('../resources/images/crestaGlabela-03.png')}
                                    style={styles.imageIcon}
                                />
                            </TouchableOpacity>
                        <Text style={styles.textEstima}>Glabela</Text>
                    </View>
            {/* button end */}

            {/* button */}
            <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.estimaCont}
                                onPress={ () => {setRenderOrbit(true), setRenderGlabela(false), setRenderNucal(false), setRenderMastoideo(false), setRenderMenton(false), setResult(false)}}>
                                <Image
                                    source={require('../resources/images/orbitals-09.png')}
                                    style={styles.imageIcon}
                                />
                            </TouchableOpacity>
                    <Text style={styles.textEstima}>Borde orbital</Text>
            </View>
            {/* button end */}

             {/* button */}
             <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.estimaCont}
                                onPress={ () => {setRenderNucal(true), setRenderGlabela(false), setRenderOrbit(false), setRenderMastoideo(false), setRenderMenton(false),setResult(false) }}>
                                <Image
                                    source={require('../resources/images/cresta-15.png')}
                                    style={styles.imageIcon}
                                />
                            </TouchableOpacity>
                    <Text style={styles.textEstima}>Cresta Nucal</Text>
            </View>
            {/* button end */}

             {/* button */}
             <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.estimaCont}
                                onPress={ () => {setRenderMastoideo(true), setRenderGlabela(false), setRenderOrbit(false), setRenderNucal(false), setRenderMenton(false), setResult(false)}}>
                                <Image
                                    source={require('../resources/images/mastoideo-21.png')}
                                    style={styles.imageIcon}
                                />
                            </TouchableOpacity>
                    <Text style={styles.textEstima}>Mastoideo</Text>
            </View>
            {/* button end */}

             {/* button */}
             <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.estimaCont}
                                onPress={ () => {setRenderMenton(true), setRenderGlabela(false),setRenderOrbit(false), setRenderNucal(false), setRenderMastoideo(false),setResult(false) }}>
                                <Image
                                    source={require('../resources/images/menton-27.png')}
                                    style={styles.imageIcon}
                                />
                            </TouchableOpacity>
                    <Text style={styles.textEstima}>Mentón</Text>
            </View>
            {/* button end */}
           
            {/* button */}
            <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.estimaRes}
                                onPress={ sexEstimation }
                                onPressOut={() => { setResult(true), setRenderMenton(false), setRenderGlabela(false),setRenderOrbit(false), setRenderNucal(false), setRenderMastoideo(false)}}
                                >
                                
                            </TouchableOpacity>
                    <Text style={styles.textEstima}>Estimar</Text>
            </View>
            {/* button end */}
            
            </View> 

            {/* estados glabela */}

            <View style={styles.stateContainerRes} >
            { result ? 
                        <View>
                            <View  >
                                <View style={styles.result} >
                                    <Text style={styles.resultText} > {sexResEstime} </Text>
                                </View>
                            </View>
                        </View>
            : false}

    <View style={{ alignItems:'center', alignContent:'center' }} >

                { renderGlabela ?
                <View>
                    <View style={styles.estatesX} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setGlabella(1)} }>
                                        <Image
                                            source={require('../resources/images/crestaGlabela-04.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>1</Text>
                    </View>
                    {/* button end */}

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setGlabella(2)} }>
                                        <Image
                                            source={require('../resources/images/crestaGlabela-05.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>2</Text>
                    </View>
                    {/* button end */}
                    </View>

                    <View style={styles.estatesX} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setGlabella(3)} }>
                                        <Image
                                            source={require('../resources/images/crestaGlabela-06.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>3</Text>
                    </View>
                    {/* button end */}

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setGlabella(4)} }>
                                        <Image
                                            source={require('../resources/images/crestaGlabela-07.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>4</Text>
                    </View>
                    {/* button end */}

                    </View>
                    <View style={styles.estatesXLast} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setGlabella(5)} }>
                                        <Image
                                            source={require('../resources/images/crestaGlabela-08.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>5</Text>
                    </View>
                    {/* button end */}
                    </View>

                </View> 
                : false }

                { renderOrbit ?
                <View>
                    <View style={styles.estatesX} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setOrbitalSupra(1)} }>
                                        <Image
                                            source={require('../resources/images/orbitals-10.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>1</Text>
                    </View>
                    {/* button end */}

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setOrbitalSupra(2)} }>
                                        <Image
                                            source={require('../resources/images/orbitals-11.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>2</Text>
                    </View>
                    {/* button end */}
                    </View>

                    <View style={styles.estatesX} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setOrbitalSupra(3)} }>
                                        <Image
                                            source={require('../resources/images/orbitals-12.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>3</Text>
                    </View>
                    {/* button end */}

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setOrbitalSupra(4)} }>
                                        <Image
                                            source={require('../resources/images/orbitals-13.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>4</Text>
                    </View>
                    {/* button end */}

                    </View>
                    <View style={styles.estatesXLast} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setOrbitalSupra(5)} }>
                                        <Image
                                            source={require('../resources/images/orbitals-14.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>5</Text>
                    </View>
                    {/* button end */}
                    </View>

                </View> 
                : false }

                { renderNucal ?
                <View>
                    <View style={styles.estatesX} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setNucal(1)} }>
                                        <Image
                                            source={require('../resources/images/cresta-16.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>1</Text>
                    </View>
                    {/* button end */}

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setNucal(2)} }>
                                        <Image
                                            source={require('../resources/images/cresta-17.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>2</Text>
                    </View>
                    {/* button end */}
                    </View>

                    <View style={styles.estatesX} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setNucal(3)} }>
                                        <Image
                                            source={require('../resources/images/cresta-18.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>3</Text>
                    </View>
                    {/* button end */}

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setNucal(4)} }>
                                        <Image
                                            source={require('../resources/images/cresta-19.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>4</Text>
                    </View>
                    {/* button end */}

                    </View>
                    <View style={styles.estatesXLast} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setNucal(5)} }>
                                        <Image
                                            source={require('../resources/images/cresta-20.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>5</Text>
                    </View>
                    {/* button end */}
                    </View>

                </View> 
                : false }

                { renderMastoideo ?
                <View>
                    <View style={styles.estatesX} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setMastoideo(1) } }>
                                        <Image
                                            source={require('../resources/images/mastoideo-22.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>1</Text>
                    </View>
                    {/* button end */}

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setMastoideo(2)} }>
                                        <Image
                                            source={require('../resources/images/mastoideo-23.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>2</Text>
                    </View>
                    {/* button end */}
                    </View>

                    <View style={styles.estatesX} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setMastoideo(3)} }>
                                        <Image
                                            source={require('../resources/images/mastoideo-24.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>3</Text>
                    </View>
                    {/* button end */}

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setMastoideo(4)} }>
                                        <Image
                                            source={require('../resources/images/mastoideo-25.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>4</Text>
                    </View>
                    {/* button end */}

                    </View>
                    <View style={styles.estatesXLast} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setMastoideo(5)} }>
                                        <Image
                                            source={require('../resources/images/mastoideo-26.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>5</Text>
                    </View>
                    {/* button end */}
                    </View>

                </View> 
                : false }

                { renderMenton ?
                <View>
                    <View style={styles.estatesX} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setMenton(1)}}>
                                        <Image
                                            source={require('../resources/images/menton-28.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>1</Text>
                    </View>
                    {/* button end */}

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setMenton(2)}}>
                                        <Image
                                            source={require('../resources/images/menton-29.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>2</Text>
                    </View>
                    {/* button end */}
                    </View>

                    <View style={styles.estatesX} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setMenton(3)}}>
                                        <Image
                                            source={require('../resources/images/menton-30.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>3</Text>
                    </View>
                    {/* button end */}

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setMenton(4)}}>
                                        <Image
                                            source={require('../resources/images/menton-31.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>4</Text>
                    </View>
                    {/* button end */}

                    </View>
                    <View style={styles.estatesXLast} >

                    {/* button */}
                    <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={styles.estimaState}
                                        onPress={ () => {setMenton(5)}}>
                                        <Image
                                            source={require('../resources/images/menton-32.png')}
                                            style={styles.imageState}
                                        />
                                    </TouchableOpacity>
                            <Text style={styles.textEstima}>5</Text>
                    </View>
                    {/* button end */}
                    </View>

                </View> 
                : false }

    </View>
        </View>
        </View>
        
        
        
        </ScrollView>
    );
};

sexEstimateScreen.navigationOptions = NavData => {
    return{

        headerTitle: 'Estimación de sexo',
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
        flexDirection:'column',
        color: 'white',
        backgroundColor: 'black',
        padding: 30,
        alignContent: 'center',
    },
    screen: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'black'
    },
    estimaCont: {
        height: 60,
        width: 60,
        marginRight: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'grey',
    },
    imageIcon: {
        height: 60,
        width: 60,
    },
    textEstima: {
        paddingTop: 10,
        color: 'white',
        alignSelf: 'center'
    },
    buttons: {
        flexDirection: 'column',
        alignContent:'center',
        alignItems:'center',
        alignSelf: 'center'
    },
    buttonContainer:{
        alignContent:'center',
        alignItems:'center',
        alignSelf: 'center',
        padding: 15,
    },
    stateContainer: {
        width:'75%',
        height:'70%',
        borderRadius:10,
        backgroundColor: '#1E0101',
        // backgroundColor: 'white',
        flexDirection: 'column',
        padding: 20,
    },
    stateContainerRes: {
        width:'75%',
        height:'70%',
        borderRadius:10,
        backgroundColor: '#1E0101',
        // backgroundColor: 'white',
        flexDirection: 'column',
        alignContent:'center',
        alignItems: 'center',
        padding: 20,
    },
    estatesX: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    estimaState: {
        height: 90,
        width: 90,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'grey',
    },
    imageState: {
        height: 90,
        width: 90,
    },
    estatesXLast: {
        flexDirection: 'column'
    },
    result: {
        color:'white',
    },
    resultText:{
        color:'white',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 40,
    },
    estimaRes:{
        height: 40,
        width: 40,
        marginRight: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        color: 'grey',
    }
});

export default sexEstimateScreen;