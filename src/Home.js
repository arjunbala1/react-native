import React,{useState} from "react";

import { View,Text,StyleSheet,TouchableHighlight,TextInput,KeyboardAvoidingView,SafeAreaView,Button, Dimensions } from "react-native";
import LottieView from 'lottie-react-native';
import { Modal } from "../components/Modal";
import CheckBox from "@react-native-community/checkbox";
import SwipeButton from 'rn-swipe-button';
import Typing from '../assets/lottie/Typing.json';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Task from "../components/Task";
import { TouchableOpacity } from "react-native-gesture-handler";


const {height,width} = Dimensions.get('window');

export default function Home({navigation}) {

    const [isModalVisible, setIsModalVisible] = React.useState(false);
//Popup 

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const handleModalNot = () => setIsModalVisible(() => !isModalVisible);

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [task, setTask] = useState();

    const [taskItems, setTaskItem] = useState([]);

    const handleAddTask = () => {
        setTaskItem([...taskItems, task]);
        setTask(null);
    }

    const completeTask = (index) =>{
        let itemCopy = [...taskItems];
        itemCopy.splice(index, 1);
        setTaskItem(itemCopy);
    }

    return(
//Main Container
        <SafeAreaView style = {Styles.MainContainer}>

{/* Set reminder and the checkbox container */}
<Text style={Styles.Heading}>Its your Tasks</Text>
        
            <View style={Styles.itemsContainer}>
                {/* TaskViewing session */}  
                    {
                        taskItems.map((item,index)=> {
                           return(
                               <TouchableOpacity  key = {index} onPress={() => completeTask(index)}>
                                    <Task text={item}/>
                               </TouchableOpacity>
                           ) 
                          
                        })
                    }
                
            </View>
{/* ---------------------------- input----------------- */}
            <KeyboardAvoidingView style={Styles.textInputContainer}
            behavior="padding"
            keyboardHorizontalOffset={Platform.select({ios: 80, android: 20})}>
                <LottieView  source={Typing} autoPlay loop style={Styles.typing}></LottieView>
                    <TextInput 
                        selectionColor={'#ffffff'} 
                        style={Styles.InputText} 
                        onChangeText={text => setTask(text)}
                       > </TextInput>
                <TouchableHighlight style={Styles.remButton} onPress={handleModal}>
                    <Text style={Styles.remText}>Set</Text>
                </TouchableHighlight>
                
            </KeyboardAvoidingView>
{/* ---------------------------- ////input----------------- */}



{/* Pop Up modal */}


            <Modal isVisible={isModalVisible}>
                <Modal.Container>
                    <Modal.Header title="Just a minute.."/>
                <Modal.Body>
                        <Text style={Styles.text}></Text>

{/* ---------------------------- CheckBox----------------- */}
                        {/* <View style={Styles.checkContainer}>
                            <CheckBox
                             tintColors={'#ffffff'}

                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)} />
                            <Text style={Styles.text}>Set Reminder</Text>
                        </View> */}
{/* ---------------------------/- CheckBox----------------- */}
{/* set time for reminder */}


{/* set time for reminder closed */}
{/* ---------------------------- swipe button----------------- */}
                        <SwipeButton
                        containerStyles={{borderRadius: 0}}
                        railStyles={{borderRadius: 0}}
                            disabled={false}
                            //disable the button by doing true (Optional)
                            swipeSuccessThreshold={90}
                            height={55}
                            //height of the button (Optional)
                            width={width-90}
                            //width of the button (Optional)
                            title="Swipe to Proceed >>>>>" titleFontSize={14}
                            //You can also set your own icon for the button (Optional)
                            onSwipeSuccess={() => {
                                alert('Data Added ...');
                                handleAddTask();
                                
                            }}
                            //After the completion of swipe
                            thumbIconWidth={90}
                            railFillBackgroundColor="#565756"
                            railFillBorderColor="#ffffff" 
                            thumbIconBackgroundColor="#000000" 
                            thumbIconBorderColor="#ffffff" 
                            railBackgroundColor="#ffffff" 
                            railBorderColor="#ffffff" 
                            thumbIconStyles={{borderRadius: 0}}
                            
                            />
{/* ----------------------------/ swipe button----------------- */}
<TouchableHighlight style={Styles.closeButton}  onPress={handleModalNot} >
    <Text style={Styles.closeText}>CLOSE</Text>
</TouchableHighlight>

                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal.Container>
        </Modal>
{/* Pop Up modal closed*/}
    </SafeAreaView>
//Main Container closed
    )
}
//styles 
const Styles =  StyleSheet.create({
    MainContainer: {
        flex: 3,
        backgroundColor:'#212121'
    },
    InputText: {
        width: '70%',
        height:60,
        borderRadius:40,
        fontFamily:'Montserrat Regular 400',
        padding:12,
        borderWidth:1,
        borderColor:'#212121',
        shadowColor:'grey',
        backgroundColor:'#ffffff',
        color:'#000000',
        fontSize:20

    },
    textInputContainer:{
        flexDirection:'row',
        justifyContent:'center',
    },
    typing:{
        height:100,
        width:100,
        position:'absolute',
    },
    remButton:{
        width:60,
        height:60,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        backgroundColor:'#000000'
    },
    remText:{
        fontFamily:'Montserrat SemiBold 600',
        fontSize:10,
        color:'#ffffff',
        
    },
    text: {
      fontSize: 16,
      color:'#ffffff'
    },
    checkContainer:{
        width:"100%",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

    },
    datepickText:{
        color:'#ffffff',
        marginLeft:80
    },
    closeButton:{
      backgroundColor:'#26ff87',
      alignItems:'center',
      justifyContent:'center',
      height:30,
      borderRadius:14,
      width:280,
      marginLeft:4,
      width:180,
      marginTop:25,
      marginLeft:110
    },
    closeText:{
      color:'#000000',
      
    },
    Heading:{
        fontSize:34,
        fontFamily:'Montserrat SemiBold 600',
        color:'#ffffff',
        marginTop:20,
        marginLeft:20,
        marginBottom:20,


    },
    itemsContainer:{
        height:"80%",
        width:width,
        marginLeft:40,
    }
    
})