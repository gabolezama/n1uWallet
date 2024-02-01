import React from 'react'
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { makeMutable } from 'react-native-reanimated'
import { makeStyles } from './Navbar.styles'

interface Props {
    onChangeCategory: (category: string)=> void
}

export const NAVBAR_OPTIONS = [
    "people",
    "planets",
    "films",
    "vehicles"
]
export default function Navbar(props: Props) {
    const {height, width} = useWindowDimensions();
    const {onChangeCategory} = props
    const styles = makeStyles(height, width);
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


