import { StyleSheet } from 'react-native'

export const HomePageStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#41BBD9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        marginBottom: 40
    },
    inputView: {
        backgroundColor: '#F5EFED',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 20,
        alignItems: 'center'
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20
    },
    forgot_button: {
        height: 30,
        marginBottom: 20
    },
    loginBtn: {
        width: '80%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#F18F01'
    }
})