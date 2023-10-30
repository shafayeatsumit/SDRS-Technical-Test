import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import axios from 'axios';
import {getCompaniesUrl} from '../../../config';
import {AuthContext, AuthContextType} from '../../helpers/context';
import {restApi} from '../../helpers/api';

export const CompaniesListScreen = ({
  navigation,
}: NativeStackScreenProps<any>) => {
  const {token, setToken} = useContext(AuthContext);
  const [companies, setCompanies] = useState([]);

  const navigateToCompanyDetails = companyId => {
    navigation.navigate('CompanyDetails', {companyId});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigateToCompanyDetails(item.id)}
        style={{padding: 10, borderWidth: 0.2, marginVertical: 5}}>
        <Text>{item.id}</Text>
      </TouchableOpacity>
    );
  };

  const fetchCompanies = async () => {
    console.log('we have the token here', token);
    restApi
      .get('companies', {token})
      .then(async resp => {
        const {data} = resp;
        setCompanies(data);
      })
      .catch(error => {
        const message = error.message ? error.message : error;
        console.log('message error', message);
      });
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={companies}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
