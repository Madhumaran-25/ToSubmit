// ProfilePage.js

import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

const ProfilePage = () => {
  const formData = useSelector(state => state.formData.formData);
  {
    console.log(formData, 'details');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Details</Text>
      <ScrollView style={styles.detailsContainer}>
        {formData.map(({id, header, value}) => (
          <View style={{marginHorizontal: 10}}>
            <Text key={id} style={styles.detailItem}>
              {id}: {header}:
            </Text>
            <Text style={styles.detailItem1}>{value}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
    backgroundColor: 'blue',
    width: '100%',
    paddingVertical: 10,
    textAlign: 'center',
  },
  detailItem: {
    fontSize: 20,
    color: '#000',
  },
  detailItem1: {
    color: 'blue',
    fontSize: 20,
    margin: 5,
  },
});

export default ProfilePage;
