import { RouteProp, useRoute } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native";
import { getItemDitails } from "../../Gateway/appGateway";
import { IPeopleDetailEntity } from "../../Core/ItemDetailEntity";

interface Props {}

type DetailsRouteType ={
    params:{
        url: string
    }
}
export default function Details(props: Props) {
    const {} = props
    const route: RouteProp<DetailsRouteType> = useRoute();
    const details = getItemDitails(route.params.url) as IPeopleDetailEntity
    
    
    return (
        <View style={styles.container}>
            <Text>Detalles del Personaje: </Text>
            <Text style={styles.detailText}>
                Nombre: {details.name}
            </Text>
            <Text style={styles.detailText}>
                Genero: {details.gender}
            </Text>
            <Text style={styles.detailText}>
                Peso: {details.mass} kg
            </Text>
            <Text style={styles.detailText}>
                Altura: {details.height} cm
            </Text>
            <Text style={styles.detailText}>
                Año de Nacimiento: {details.birthYear}
            </Text>
            <Text style={styles.detailText}>
                Color de Pelo: {details.hairColor}
            </Text>
            <Text style={styles.detailText}>
                Color de Ojos: {details.eyesColor}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        width: '60%'
    },
    detailText:{
        marginTop: 10,
        backgroundColor: 'grey'
    }
})