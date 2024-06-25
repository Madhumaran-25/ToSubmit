import React, {useState} from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TextInputOne = ({ header, value, secureTextEntry, keyboardType, regex, onChangeText, placeholder, style, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  const handleChangeText = (text) => {
      onChangeText(text); 
  };
  
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);  
  };
  
  return (
    <View style={[styles.container, style]}>
      {header && <Text style={styles.header}>{header}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        {...props}
      />
         {secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
            <Image
              source={isPasswordVisible ? require('../images/eye-on.png') : require('../images/eye.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
         )}
        
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  header: {
    marginBottom: 5,
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight:'600',
    color:'#fff',
  },
  input: {
    height: 40,
    backgroundColor:'#fff',
    paddingHorizontal: 10,
    borderRadius: 4,
    marginHorizontal:10,
  },
    iconImage: {
    width: 20,
    height: 20,
    position:'absolute',
    right:20,
    bottom:30,
  },
  icon: {
    padding: 10,
  },
});

export default TextInputOne;