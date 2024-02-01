import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native"
import RenderItem from "./Components/RenderItem";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { getAllByCategory } from "../../Gateway/appGateway";

export const Home = () => {
    const [category, setCategory] = useState<string>('people/');
    const navigation: any = useNavigation();
    
    const data: any = getAllByCategory(category);

    const onViewDetails = (url:string) =>{
        navigation.navigate('details', {url})
    }
    const onChangeCategory = (newCategory:string) =>{
        setCategory(newCategory)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a la tienda Star Wars</Text>
            <Navbar onChangeCategory={onChangeCategory}/>
            <FlatList
                data={data}
                style={styles.list}
                renderItem={({item}) => RenderItem(item, onViewDetails)}
                ListEmptyComponent={<Text>Cargando la data...</Text>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list:{
        width: '70%',
        flexDirection: 'column'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})
