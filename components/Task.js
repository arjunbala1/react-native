import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';


const Task =(props) =>{

    return(
        <View style={Styles.MainContainer}>
            <View style= {Styles.itemLeft}>
                <View style={Styles.roundpoint}></View>
                <Text style={Styles.textData}>{props.text}</Text>
            </View>
            <View style={Styles.roundpointContainer}>
                <TouchableOpacity style={Styles.roundRight}></TouchableOpacity>
            </View>
        </View>
    )
}

const Styles=StyleSheet.create({
    MainContainer:{
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#ffffff',
        width:'80%',
        height:50,
        marginTop:10,
        alignItems:'center',
        borderRadius:10,
        padding:5,
        
    },
    itemLeft:{
        padding:10,
        flexDirection:'row',
        flexWrap:'wrap',
    },
    textData:{
        fontFamily:'Montserrat Regular 400',
        fontSize:16,
        color:"#000000",
        marginLeft:10,
        maxWidth:"80%"
    },
    roundpoint:{
        width:35,
        height:25,
        borderRadius:10,
        backgroundColor:'#34eb86',
        opacity:0.5,
    },
    roundpointContainer:{
        position:'absolute',
        right:10,
    },
    roundRight:{
        width:20,
        height:20,
        borderRadius:10,
        backgroundColor:'#ffffff',
        borderWidth:1,
        borderColor:'#34eb86',
    }
})

export default Task;