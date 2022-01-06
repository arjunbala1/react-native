import React,{useEffect} from "react";

import { Animated, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LottieView from 'lottie-react-native';

import Logo from '../assets/lottie/roundDot.json'
import Splash from '../assets/Images/splashTick.png'

const SplashScreen = ({navigation}) =>{

    const edges = useSafeAreaInsets();

    

    useEffect(() => {
        
        setTimeout(() => {
            {navigation.navigate('Home')}

    }, 2000);
    });



    return(
        <Animated.View style={Styles.Maincontainer}>
            

            <Animated.View style={Styles.AnimateView}>
               
                <LottieView source={Logo} autoPlay loop ></LottieView>
            </Animated.View>
            
        </Animated.View>
    )
}
const Styles=StyleSheet.create({
    Maincontainer:{
        position:'absolute',backgroundColor:"#000000",top:0,bottom:0,left:0,right:0,
        
    },
    AnimateView:{
        flex:1,alignItems:'center',
        justifyContent:'center',
        
    },
    imageSplash:{
        width:100,height:100,marginBottom:20
    },
    text:{
        fontFamily:'Gilroy-Bold',
        fontSize:20,color:'#346576'
    }

})
export default SplashScreen;