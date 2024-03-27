import { StyleSheet, View, Dimensions } from "react-native";
function Card({children}) {
    return(
        <View style= {styles.card}>{children}</View>
    );
}


export default Card;

const dimensions= Dimensions.get('window').width;

const styles= StyleSheet.create({
    card: {
        marginTop: dimensions< 380 ? 80: 36,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width:0 , height:2}
    },
});