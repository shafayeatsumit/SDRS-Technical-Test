import React, {useContext, useState} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import {styles} from './styles';

import {restApi} from '../../helpers/api';
import {saveSession} from '../../helpers/session';
import {AuthContext} from '../../helpers/context';

export const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const {setToken} = useContext(AuthContext);

  const isFormValid = isEmailValid && isPasswordValid;

  const signIn = async () => {
    restApi
      .post('login', {
        email,
        password,
      })
      .then(async resp => {
        const {data} = resp;
        setToken(data.token);
        await saveSession(data.token);
        navigation.navigate('CompaniesList');
      })
      .catch(error => {
        const message = error.message ? error.message : error;
        Alert.alert('Error!', message);
      });
  };

  const validateEmail = (text: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    setIsEmailValid(emailRegex.test(text));
    setEmail(text);
  };

  const validatePassword = (text: string) => {
    setIsPasswordValid(text.length >= 6);
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../../assets/seedrs-logo-black.jpeg')}
          style={styles.image}>
          <Text style={styles.title}>Log in to your account</Text>
        </ImageBackground>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="email"
          onChangeText={validateEmail}
          autoCapitalize="none"
          value={email}
          autoCorrect={false}
          style={styles.text}
        />
        <TextInput
          placeholder="password"
          onChangeText={validatePassword}
          value={password}
          secureTextEntry
          style={styles.text}
        />
        <Button
          disabled={!isFormValid}
          onPress={signIn}
          title="Sign In"
          color="#2A4ED8"
        />
      </View>
    </View>
  );
};
