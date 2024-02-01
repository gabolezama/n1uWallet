import { StyleSheet } from "react-native"

export const makeStyles = () =>{
    return StyleSheet.create({
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
}