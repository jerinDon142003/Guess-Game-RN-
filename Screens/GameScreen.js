import {View, Text, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import Title from "../components/UI/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import InstructionText from "../components/UI/InstructionText";
import Card from "../components/UI/Card";
import {Ionicons} from '@expo/vector-icons'
import GuessLogItems from "../components/game/GuessLogItems";
function generateRandomBetween(min, max, exclude){
    const rndNum= Math.floor(Math.random() * (max-min))+ min;
    if (rndNum=== exclude){
        return generateRandomBetween(min, max, exclude);

    }else{
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary= 100;

function GameScreen({userNumber, onGameOver}) {
    const initialGuess= generateRandomBetween(1, 100, userNumber );
    const [currentGuess, setCurrentGuess]= useState(initialGuess);
    const [guessRounds, setGuessRound]= useState([initialGuess]);
    const { width, height}= useWindowDimensions();

    useEffect(()=>  {
        if (currentGuess===userNumber){
            onGameOver(guessRounds.length);
        }
    },[currentGuess, userNumber, onGameOver]);

    useEffect(()=> {
        minBoundary= 1;
        maxBoundary= 100;
    }, []);
    function nextGuessHandler(direction){

        if ((direction == 'lower' && currentGuess<userNumber) || (direction == 'greater' && currentGuess>userNumber)){
            Alert.alert("don't lie!", 'You know this is wrong ...', [{text: 'Sorry!', style:'cancel'}]);
            return ;
        }

        if (direction == 'lower'){
            maxBoundary= currentGuess;
        } else{
            minBoundary= currentGuess+1;         
        }
        const newRndNumber= generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRound(prevGuessRounds => [newRndNumber,...prevGuessRounds]);

    }

    const guessRoundsListLength= guessRounds.length;
    let content= (<>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
            <View style= {styles.ButtonsContainer}>
                <View style= {styles.ButtonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    -
                </PrimaryButton>
                </View>
                <View style= {styles.ButtonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
                </View>
            </View>
        </Card>
    
    </>
    );
    
    if (width>500){
        content= (
            <>
                <View style={styles.buttonContainerWide}>
                    <View style= {styles.ButtonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        -
                    </PrimaryButton>
                    </View>
                    
                    <NumberContainer>{currentGuess}</NumberContainer>    
                    <View style= {styles.ButtonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
                    </View>
                </View>
            
            </>
        )
    }

    return (
        <View style= {styles.screen}>
            <Title>Opponents Guess</Title>
            {content}
            <View style= {styles.listContainer}>
                {/*guessRounds.map(guessRounds=> <Text key= {guessRounds}>{guessRounds}</Text>)*/}
                <FlatList data= {guessRounds} renderItem={(itemData) => <GuessLogItems roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>}
                keyExtractor={(item) => item}
                />
            </View>
        </View>
    );   

};

export default GameScreen;

const styles= StyleSheet.create({
    screen: {
        flex:1,
        padding : 24,
        alignItems: 'center'
    },
    ButtonsContainer:{
        flexDirection: 'row'
    },
    ButtonContainer:{
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    },
    listContainer: {
        flex: 1,
        padding : 16
    },
    buttonContainerWide:{
        flexDirection: 'row',
        alignItems: 'center'
    }
    
});