// AuthLoadingScreen.js
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const AuthLoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.replace('HomePage');
      } else {
        navigation.replace('Login');
      }
    });

    return () => unsubscribe();
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default AuthLoadingScreen;
