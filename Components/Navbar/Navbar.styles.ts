import { StyleSheet } from "react-native"

export const makeStyles = (height: number, width: number) =>{
    return StyleSheet.create({
        bar:{
            width: width * 0.9,
            height: height * 0.07,
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
}