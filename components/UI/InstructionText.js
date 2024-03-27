import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function InstructionText({children, style}) {
    return (
        <Text style= {[styles.instructionText, style]}>
            {children}
        </Text>
    );
}

export default InstructionText;


const styles= StyleSheet.create({
    instructionText:{
        fontFamily: 'outfit-Regular',
        color: Colors.white,
        fontSize: 26,
    },
});