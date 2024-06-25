import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CrudOperations from '../CrudOperation';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:10,}}>
    <Text style={{fontSize:20, color:'blue', fontWeight:'bold'}}>API Call </Text>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text  style={{fontSize:20, color:'blue', fontWeight:'bold'}}>Back to login page</Text>
      </TouchableOpacity>
      </View>
      <CrudOperations/>
      
    </SafeAreaView>
  );
};

export default Home;
