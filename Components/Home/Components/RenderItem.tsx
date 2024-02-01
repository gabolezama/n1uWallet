import { Text, View, StyleSheet, TouchableOpacity } from "react-native"



export default function RenderItem(item: any, onViewDetails: Function) {

    return (
        <View style={styles.cardContainer}>
            <Text>{item?.name || item?.title}</Text>
            <TouchableOpacity style={styles.button} onPress={()=> onViewDetails(item.url)}>
                <Text style={styles.buttonText}>Detalles</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        marginTop: 10,
        padding: 10
    },
    button:{
        height: 40,
        width: 60,
        justifyContent: 'center',
        backgroundColor: 'cyan',
        borderRadius: 10,
        marginTop: 10
    },
    buttonText:{
        fontSize: 10,
        textAlign: 'center',
        alignSelf: 'center'
    }
})