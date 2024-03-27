import { TextInput, View, StyleSheet,Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { useState } from "react";
import Title from "../components/UI/Title";
import Colors from "../constants/Colors.js";
import Card from "../components/UI/Card.js";
import InstructionText from "../components/UI/InstructionText.js";
function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnterNumber] = useState('')
    const {widht, height}= useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnterNumber(enteredText);
    }

    function resetInputHandler(){
        setEnterNumber('');
    }
    function confirmInputHandler() {
        const chosenNumber= parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber> 99){
            Alert.alert('INvalid number',
            'Number has to be a number between 1 and 99',
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return ;
        }
        onPickNumber(chosenNumber);
    }
    
    const marginTopDistance= height < 380? 30:100;

    return (
        <ScrollView style= {styles.screen}>
            <KeyboardAvoidingView style= {styles.screen} behavior="position">
                <View style= {[styles.rootContainer, {marginTop: marginTopDistance}]}>
                    <Title>Guess My Number</Title>
                    
                    <Card>
                        <InstructionText>
                            Enter a Number
                        </InstructionText>
                        <TextInput 
                            style= {styles.numberInput} 
                            maxLength= {2} 
                            keyboardType= 'number-pad'
                            value={enteredNumber}
                            onChangeText={numberInputHandler}/>
                            <View style= {styles.ButtonsContainer}>
                            <View style= {styles.ButtonContainer}>
                                <PrimaryButton onPress= {resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style= {styles.ButtonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

//const deviceHeight= Dimensions.get('window').height;

const styles= StyleSheet.create({
    screen: {
        flex: 1,
    },
    
    rootContainer: {
        flex: 1,
        //marginTop: deviceHeight< 380? 30:100,
        alignItems: 'center'
    }, 
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        borderColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    ButtonsContainer:{
        flexDirection: 'row'
    },
    ButtonContainer:{
        flex: 1
    }
});