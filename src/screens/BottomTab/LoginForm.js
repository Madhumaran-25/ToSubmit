import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {strings, textInputData} from '../../data/Data';
import TextInputOne from '../../components/TextInputOne';
import CustomButton from '../../components/CustomButton';

const LoginForm = () => {
  const [inputs, setInputs] = useState(textInputData);

  const handleChange = (id, text) => {
    setInputs(prevInputs =>
      prevInputs.map(input =>
        input.id === id
          ? {
              ...input,
              value: text,
              isValid: input.regex.test(text),
            }
          : input,
      ),
    );
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
            onChangeText,
            secureTextEntry,
            keyboardType,
            placeholder,
            value,
            isValid,
          }) => (
            <TextInputOne
              key={id}
              header={header}
              placeholder={placeholder}
              regex={regex}
              value={value}
              keyboardType={keyboardType}
              onChangeText={text => handleChange(id, text)}
              isValid={isValid}
              secureTextEntry={secureTextEntry}
            />
          ),
        )}

        <CustomButton
          title={strings.save}
          style={{marginBottom: 20}}
          onPress={() => console.log('Saved')}
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
  }
});
