import React from 'react';
import {View, Button, TextInput, Text} from 'react-native';
import {styles} from './styles';
import axios from 'axios';
import {email, loginUrl, password} from '../../../config';

export const SignInScreen = () => {
  const signIn = async () => {};

  return (
    <View style={styles.container}>
      <Text
        style={
          styles.text
        }>{`In order to sign in, you need to do a post request to the url ${loginUrl} with the email "${email}" and password "${password}".`}</Text>
      <Text style={styles.text}>
        If the call is successful, the response object will contain a token
        which you need to store in your app's state for later. Once you have
        done this, the user should be navigated to the CompaniesList Screen
      </Text>
      <Text style={styles.text}>
        Feel free to delete this text once your done!
      </Text>
      <TextInput placeholder="email" style={styles.text} />
      <TextInput placeholder="password" style={styles.text} />
      <Button onPress={signIn} title="Sign In" />
    </View>
  );
};
