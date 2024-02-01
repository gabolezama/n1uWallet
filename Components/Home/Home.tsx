import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native"
import { getAllVehicles } from "../../Services/Swapi.service";
import RenderItem from "./Components/RenderItem";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

interface SelectorProps {
}


export const Home = (props: SelectorProps) => {
    const [category, setCategory] = useState('people/');
    const navigation: any = useNavigation();
    
    const data: any = getAllVehicles(category);

    const onViewDetails = (url:string) =>{
        navigation.navigate('details', {url})
    }
    const onChangeCategory = (newCategory:string) =>{
        setCategory(newCategory)
    }

    return (
        <View style={styles.container}>
            <Text>Bienvenido a la tienda Star Wars</Text>
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
    }
})
