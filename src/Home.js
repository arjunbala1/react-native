import React from "react";

import { View,Text,StyleSheet,TouchableHighlight,TextInput } from "react-native";
import LottieView from 'lottie-react-native';

import Typing from '../assets/lottie/Typing.json'

export default function Home() {
    return(
        <View style = {Styles.MainContainer}>
            <View style={Styles.textInputContainer}>
                <TextInput style={Styles.InputText}  > </TextInput>
                
                <LottieView  source={Typing} autoPlay loop style={Styles.typing}></LottieView>
                <TouchableHighlight style={Styles.remButton}>
                    <Text style={Styles.remText}>set remind me</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const Styles =  StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems:'center'
    },
    InputText: {
        width: '60%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        fontFamily:'Montserrat Regular 400',
        padding:12,
    },
    textInputContainer:{
        width:'100%',
        height:40,
        flexDirection:'row',
        position: 'absolute',
        top:680,
        left:25,
        alignItems:'center',
    },
    typing:{
        height:100,
        width:100,
        position:'absolute',
        right:64
    },
    remButton:{
        width:90,
        height:40,
        borderRadius:40,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
    },
    remText:{
        fontFamily:'Montserrat SemiBold 600',
        fontSize:10,
        color:'#322761'
    }
    
})