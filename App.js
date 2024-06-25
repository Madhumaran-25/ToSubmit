import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Login from './src/screens/Login';
import HomePage from './src/screens/navigation/HomePage';
import store from './src/redux/store';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, []);


  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="AuthLoading" component={AuthLoadingScreen}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='HomePage' component={HomePage}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})