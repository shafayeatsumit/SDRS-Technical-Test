import React, {useContext, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import {getSession} from '../../helpers/session';
import {AuthContext} from '../../helpers/context';

export const StarterScreen = ({navigation}) => {
  const {setToken} = useContext(AuthContext);

  const checkSession = async () => {
    const authToken = await getSession();
    if (!authToken) {
      navigation.replace('SignIn');
      return;
    }

    setToken(authToken);
    navigation.replace('CompaniesList');
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};
