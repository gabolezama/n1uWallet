import { StyleSheet } from "react-native"

export const makeStyles = () =>{
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        loaderContainer: {
            alignItems: 'center',
        },
        loaderText: {
            color: '#000',
            marginTop: 10,
        },
    })
}