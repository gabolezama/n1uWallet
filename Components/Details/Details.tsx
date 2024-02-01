import { RouteProp, useRoute } from "@react-navigation/native"
import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { getItemDitails } from "../../Gateway/appGateway";
import { makeStyles } from "./Details.styles";
import Spinner from "../Spinner/Spinner";

interface Props {}

type DetailsRouteType ={
    params:{
        url: string
    }
}
export default function Details(props: Props) {
    const {width, height} = useWindowDimensions();
    const {} = props
    const route: RouteProp<DetailsRouteType> = useRoute();
    const details: string[][] = getItemDitails(route.params.url) as any;
    const styles = makeStyles(height, width); 
    
    return ( 
        <View style={styles.details}>
            {
                details.length > 0 ?
                <ScrollView style={styles.container}>
                    {details.map(([key, value], index) => (
                        <View key={index} style={styles.keyVelueContainer}>
                            <Text style={styles.keyText}>{key}:</Text>
                            <Text>{value}</Text>
                        </View>
                    ))}
                </ScrollView>
                :
                <Spinner />
            }
        </View>
    )
}