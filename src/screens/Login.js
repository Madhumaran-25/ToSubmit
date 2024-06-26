import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

// compnents
import TextInputOne from '../components/TextInputOne';
import CustomButton from '../components/CustomButton';

// Social Auth
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {strings, loginData} from '../data/Data';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';


const Login = ({navigation}) => {
  const [inputs, setInputs] = useState(loginData);
  
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '803167929201-p256262d41ivi4m2gsgtu5n3m8fuekrq.apps.googleusercontent.com',
    });
  });

  const handleLogin = () => {
    navigation.navigate('LoginForm');
  };


  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      Alert.alert(
        'Success',
        'You have successfully signed in using your Google account',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('HomePage'),
          },
        ],
        {cancelable: false},
      );
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in is in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services not available or outdated');
      } else {
        console.log('Some other error happened:', error);
      }
    }
  }

  async function onFacebookButtonPress() {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    await auth().signInWithCredential(facebookCredential);

    Alert.alert(
      "Success",
      "You have successfully signed in!",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate('Home')
        }
      ],
      { cancelable: false }
    );
   
  }

  
  const handleChange = (id, text) => {
    setInputs(
      inputs.map(input =>
        input.id === id
          ? {...input, value: text, isValid: input.regex.test(text)}
          : input,
      ),
    );
  };

  return (
    <ScrollView contentContainerStyle={{flex:1, backgroundColor:'#a71111'}}>
     <Text style={styles.headerText}>Login</Text>
      <View style={{alignItems:'center', marginTop:50,}}>
      <Image style={styles.img} source={require('../images/login_image.png')}/>
      </View>
        
        {inputs.map(({ id, header, keyboardType, secureTextEntry, placeholder, value, isValid }) => (
        <TextInputOne
          key={id}
          header={header}
          placeholder={placeholder}
          value={value}
          keyboardType={keyboardType}
          onChange={(text) => handleChange(id, text)}
          isValid={isValid}
          secureTextEntry={secureTextEntry}
        />
      ))}

        <View style={styles.container}>
          <CustomButton
            onPress={handleLogin}
            title={strings.login}
            style={{marginTop: 10}}
          />
        </View>
        <View style={{marginTop:100,}}>
        <CustomButton
            onPress={onGoogleButtonPress}
            title={strings.GoogleSignIn}
            style={{marginTop: 10}}
          />
          <CustomButton
            onPress={onFacebookButtonPress}
            title={strings.FacebookSignIn}
            style={{marginTop: 20}}
          />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 100,
  },
  Header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 35,
    marginTop:50,
    color: '#fff',
    textShadowColor: '#000',
    textShadowRadius: 0,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 10,
    textAlign:'center'
  },
  img: {
    height:200, 
    width:200, 
    borderRadius: 100
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: 'white',
    width: '90%',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
  },
  toggleText: {
    height: 20,
    width: 20,
    left: 120,
    bottom: 50,
    zIndex: 999,
  },
});

export default Login;
