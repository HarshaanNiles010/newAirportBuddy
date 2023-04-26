import { StatusBar } from 'expo-status-bar';
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

import HomePage from './Pages/HomePage';
import { globalStyles } from './Styles/GlobalStyle';
export default function App() {
  return (
    <View >
      <HomePage>

      </HomePage>
    </View>
  );
}

