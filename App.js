import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StartGameScreen from './Screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [userNumber, setUserNumber]= useState();
  const [gameIsOver, setGameIsOver]= useState(true);
  const [guessRounds, setGuessRound]= useState(0);
  
  const [fontsLoader]= useFonts({
    'outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-Regular': require('./assets/fonts/Outfit-Regular.ttf')

  });

  if (!fontsLoader){
    return <AppLoading/>; 
  }

  function pickedNumberHandler(pickNumber){
    setUserNumber(pickNumber);
    setGameIsOver(false);
  }
  
  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRound(numberOfRounds);
  }

  function onStartNewGameHandler(){
    setUserNumber(null);
    setGuessRound(0);
  }


  let screen = < StartGameScreen onPickNumber={pickedNumberHandler}/>

  if (userNumber) {
    screen= <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  };
  if (gameIsOver  && userNumber){
    screen= <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={onStartNewGameHandler}/>
  };


  return ( 
    <>
    <StatusBar style='light'/>
    <LinearGradient colors= {['#4e0329', '#ddb52f']} style={styles.rootStyle}>
      <ImageBackground source={require('./assets/Image/i-p-r.jpg')}
        resizeMode='cover'
        style={styles.rootStyle}
        imageStyle= {styles.bacgroundImage}>
        <SafeAreaView style={styles.rootStyle}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootStyle: {
    flex:1,
  },
  bacgroundImage: {
    opacity: 0.15
  }
});
