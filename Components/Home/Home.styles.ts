import { StyleSheet } from "react-native"

export const makeStyles = (height: number, width: number) =>{
    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center'
        },
        list:{
            width: width * 0.7,
            flexDirection: 'column'
        },
        title:{
            fontSize: 20,
            fontWeight: 'bold'
        }
    })
}