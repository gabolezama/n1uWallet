import { StyleSheet } from "react-native"

export const makeStyles = (height: number, width: number) => {
    return StyleSheet.create({
        cardContainer:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 20,
            marginTop: width * 0.01,
            padding: width * 0.01
        },
        button:{
            height: height * 0.05,
            width: width * 0.3,
            justifyContent: 'center',
            backgroundColor: 'cyan',
            borderRadius: 10,
            marginTop: 10
        },
        buttonText:{
            fontSize: 12,
            textAlign: 'center',
            alignSelf: 'center'
        }
    })
}