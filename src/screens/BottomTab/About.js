import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const About = () => {
  const Address =
    '3/290 \nTheni Main road,\nNagalapuram\nTheni - 625534\nContact: 9962294894 ';
  const Address1 =
    '1/175 \nGandamanur Main road,\nGopalapuram\nTheni - 625534\nContact: 9962294894 ';
  return (
    <ScrollView style={{marginHorizontal:22}}>
      <Text
        style={{
          fontSize: 25,
          color: '#0f0352',
          fontWeight: 'bold',
          fontStyle: 'italic',
          marginTop: 15,
          textDecorationLine: 'underline',
        }}>
        Branches
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: '#000000',
          marginTop: 5,
          fontWeight: 'bold',
        }}>
        We are a brand serving in various places. our main branch is located in
        Nagalapuram. And there are two more outlets available in gopalapuram and
        Theni. We are planning to open the outlets in various parts of
        Tamilnadu. The exact address of our branches are given below
      </Text>

      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 25,
            color: '#fff',
            backgroundColor: 'rgb(216,78,80)',
          }}>
          {' '}
          1. Nagalapuram
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: '#000',
            backgroundColor: '#0ef0ef',
            padding: 10,
            paddingBottom: 10,
          }}>
          {Address}
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: '#fff',
            backgroundColor: 'rgb(216,78,80)',
            marginTop: 30,
          }}>
          {' '}
          2. Gopalapuram
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: '#000',
            backgroundColor: '#1ef1ef',
            padding: 10,
          }}>
          {Address1}
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: '#fff',
            marginTop: 30,
            backgroundColor: 'rgb(216,78,80)',
          }}>
          {' '}
          3. Theni
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: '#000',
            backgroundColor: '#0ef0ef',
            padding: 10,
            marginBottom: 10,
          }}>
          {Address1}
        </Text>
      </View>
    </ScrollView>
  );
};

export default About;
