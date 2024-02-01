import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, View, useWindowDimensions } from "react-native"
import RenderItem from "./Components/RenderItem/RenderItem";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { getAllByCategory } from "../../Gateway/appGateway";
import Spinner from "../Spinner/Spinner";
import { makeStyles } from "./Home.styles";

export const Home = () => {
    const {height, width} = useWindowDimensions();
    const [category, setCategory] = useState<string>('people/');
    const navigation: any = useNavigation();
    const styles = makeStyles(height, width);
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
                renderItem={({item}) => RenderItem(item, onViewDetails, height, width)}
                ListEmptyComponent={<Spinner/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
