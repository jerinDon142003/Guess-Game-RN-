import { View, Text, Pressable,StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
function PrimaryButton({children, onPress}) {

    return (
        <Pressable onPress={onPress}>
            <View style= {styles.ButtonContainer}>
                <Text style= {styles.ButtonText}>
                    {children}
                </Text>
            </View>
        </Pressable>
    );
}

export default PrimaryButton;

const styles= StyleSheet.create({
    ButtonContainer: {
        backgroundColor: Colors.primary500,
        borderRadius: 28,
        paddingVertical: 8,
        margin: 4,
        paddingHorizontal: 16, 
        elevation: 2
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center'
    }
});