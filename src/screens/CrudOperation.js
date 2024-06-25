
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import TextInputOne from '../components/TextInputOne';
import CustomButton from '../components/CustomButton';
import { strings } from '../data/Data';




const CrudOperations = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');


  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createPost = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId: parseInt(userId),
      });
      setData([response.data, ...data]);
      setTitle('');
      setBody('');
      setUserId('');
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (id) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title,
        body,
        userId: parseInt(userId),
      });
      const updatedData = data.map((item) => (item.id === id ? response.data : item));
      setData(updatedData);
      setTitle('');
      setBody('');
      setUserId('');
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const filteredData = data.filter((item) => item.id !== id);
      setData(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const inputs = [
    {placeholder: 'Title', value: title, onChangeText: setTitle},
    {placeholder: 'Body', value: body, onChangeText: setBody},
    {placeholder: 'User ID', value: userId, onChangeText: setUserId},
  ];


  return (
    <View style={styles.container}>
    {inputs.map((input, index) => (
        <TextInputOne
          key={index}
          placeholder={input.placeholder}
          value={input.value}
          onChangeText={input.onChangeText}
        />
      ))}
    
      <CustomButton
        title= {strings.createPost}
        onPress={createPost}
        style={{ marginTop: 10 }}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Title: {item.title}</Text>
            <Text>Body: {item.body}</Text>
            <Text>User ID: {item.userId}</Text>
            <CustomButton
               title={strings.update}  
               onPress={() => updatePost(item.id)}  
               style={{ marginTop: 10 }}/>
            <CustomButton 
               title={strings.delete}  
               onPress={() => deletePost(item.id)} 
               style={{ marginTop: 10 }}/>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:'#c0c0c0'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },
});

export default CrudOperations;
