import { StyleSheet, Text } from "react-native";

function Title({children}){
    return (<Text style= {styles.title}>{children}</Text>
    );
}

export default Title;

const styles= StyleSheet.create({
    title: {
        fontFamily: 'outfit-Bold',
        fontSize: 24,
        fontWeight:'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
});