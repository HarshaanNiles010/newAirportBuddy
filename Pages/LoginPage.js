import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native'
import { LoginPageStyle } from '../Styles/LoginPageStyle'

export default function LoginPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style = {LoginPageStyle.container}>
            <Image style={LoginPageStyle.image} source={require('../assets/icons8-small-airplane-96.png')} />
        <View style={LoginPageStyle.inputView}>
            <TextInput
            style={LoginPageStyle.TextInput}
            placeholder='Email.'
            placeholderTextColor='#003f5c'
            onChangeText={(email) => setEmail(email)}
            />
        </View>
        <View style={LoginPageStyle.inputView}>
            <TextInput
            style={LoginPageStyle.TextInput}
            placeholder='Password.'
            placeholderTextColor='#003f5c'
            secureTextEntry
            onChangeText={(password) => setPassword(password)}
            />
        </View>
        <TouchableOpacity>
        <Text style={LoginPageStyle.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={LoginPageStyle.loginBtn}>
        <Text>LOGIN</Text>
        </TouchableOpacity>
        </View>
    )
}