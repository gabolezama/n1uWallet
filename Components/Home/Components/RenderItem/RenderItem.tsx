import { Text, View, TouchableOpacity } from "react-native";
import { makeStyles } from "./RenderItem.styles";

export default function RenderItem(item: any, onViewDetails: Function, height: number, width: number) {
    const styles = makeStyles(height,width);
    return (
        <View style={styles.cardContainer}>
            <Text>{item.name}</Text>
            <TouchableOpacity style={styles.button} onPress={()=> onViewDetails(item.url)}>
                <Text style={styles.buttonText}>Detalles</Text>
            </TouchableOpacity>
        </View>
    )
}