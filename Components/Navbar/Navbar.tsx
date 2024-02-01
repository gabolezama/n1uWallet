import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

interface Props {
    onChangeCategory: (category: string)=> void
}
const NAVBAR_OPTIONS = [
    "people",
    "planets",
    "films",
    "vehicles"
]
export default function Navbar(props: Props) {
    const {onChangeCategory} = props

    return (
        <FlatList
            data={NAVBAR_OPTIONS}
            style={styles.bar}
            contentContainerStyle={styles.barContent}
            renderItem={({item})=>(
                <TouchableOpacity style={styles.button} onPress={()=>onChangeCategory(item)}>
                    <Text style={styles.buttonText}>{item}</Text>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({
    bar:{
        width: '90%',
        height: '7%',
        marginTop: 10
    },
    barContent:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button:{
        padding: 5,
        color: 'white',
        backgroundColor: 'purple',
        borderRadius: 10
    },
    buttonText:{
        color: 'white'
    }
})


