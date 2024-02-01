import { StyleSheet } from "react-native"

export const makeStyles = (height: number, width: number) => {
    return StyleSheet.create({
        container: {
            height: height * 0.5,
            borderColor: 'black',
            alignSelf: 'center',
            borderWidth: 1,
            padding: width * 0.05,
            margin: width * 0.05,
            borderRadius: 20,
        },
        detailText: {
            marginTop: 10,
            backgroundColor: 'grey'
        },
        keyText: {
            fontWeight: 'bold'
        },
        keyVelueContainer: {
            marginBottom: 10
        }
    })
}