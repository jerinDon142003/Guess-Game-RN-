import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function GuessLogItems({roundNumber, guess}) {
    return (
        <View style= {styles.listItem}>
            <Text>{roundNumber}</Text>
            <Text>Opponents's Guess: {guess}</Text>
        </View>

    );
}


export default GuessLogItems;


const styles= StyleSheet.create({
    listItem: {
        borderColor: Colors.white,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '100%'
    }
});