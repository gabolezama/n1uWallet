import { Text, View } from "react-native";
import { makeStyles } from "./Spinner.styles";
import { Circle } from "react-native-progress";

function Spinner() {
    const styles = makeStyles();
    return (
      <View style={styles.loaderContainer}>
        <Circle color="blue" size={70}/>
        <Text style={styles.loaderText}>Cargando...</Text>
      </View>
    )
}

export default Spinner
