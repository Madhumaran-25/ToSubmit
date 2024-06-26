import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {strings, textInputData} from '../../data/Data';
import { updateFormData } from '../../redux/formDataSlice';
import TextInputOne from '../../components/TextInputOne';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
  const [inputs, setInputs] = useState(textInputData);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isCurrentInputValid, setIsCurrentInputValid] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();



  const handleChange = (id, text) => {
    setInputs(prevInputs =>
      prevInputs.map(input => {
        if (input.id === id) {
          const isValid = input.regex.test(text);
          const errorMessage = isValid ? '' : 'Invalid input';
          return { ...input, value: text, isValid, errorMessage };
        }
        return input;
      })
    );
  };

  const handleSave = () => {
    inputs.forEach(({ id, value, isValid }) => {
      const { header } = textInputData.find(input => input.id === id);
      dispatch(updateFormData({ id, header, data: { value, isValid } }));
    });
    navigation.navigate('HomePage');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={{backgroundColor: '#A1662F'}}>
        <Text
          style={styles.headerText}>
          {strings.LoginForm}
        </Text>
        {inputs.map(
          ({
            id,
            header,
            regex,
            secureTextEntry,
            keyboardType,
            placeholder,
            value,
            isValid,
            errorMessage
          }) => (
            <View key={id}>
            <TextInputOne
              key={id}
              header={header}
              placeholder={placeholder}
              regex={regex}
              value={value}
              keyboardType={keyboardType}
              onChangeText={text => handleChange(id, text, isValid)}
              isValid={isValid}
              secureTextEntry={secureTextEntry}
            />
            {!isValid && <Text style={styles.errorText}>{errorMessage}</Text>}
            </View>
          ),
        )}
        
        <CustomButton
          title={strings.save}
          style={{marginBottom: 20}}
          onPress={handleSave}
        />
        
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
  },
});
