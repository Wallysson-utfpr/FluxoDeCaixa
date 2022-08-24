import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/imgbackground.jpg')} style={styles.imageBackground}>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa toda a parte da tela
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems: 'center',
    width: "100%",
  },

});
