import React, {useContext, useEffect, useState} from 'react';
import {View, FlatList, Alert, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Company from './Company';
import {styles} from './styles';

import {AuthContext} from '../../helpers/context';
import {restApi} from '../../helpers/api';

export const CompaniesListScreen = ({
  navigation,
}: NativeStackScreenProps<any>) => {
  const {token, setToken} = useContext(AuthContext);
  const [companies, setCompanies] = useState([]);

  const navigateToCompanyDetails = (companyId: string) => {
    navigation.navigate('CompanyDetails', {companyId});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigateToCompanyDetails(item.id)}>
        <Company company={item} />
      </TouchableOpacity>
    );
  };

  const fetchCompanies = async () => {
    restApi
      .get('companies', {token})
      .then(async resp => {
        const {data} = resp;
        setCompanies(data);
      })
      .catch(error => {
        const message = error.message ? error.message : error;
        Alert.alert('Error!', message);
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
