import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Company from './Company';
import {styles} from './styles';

import {restApi} from '../../helpers/api';
import Header from '../../components/Header';

export const CompaniesListScreen = ({
  navigation,
}: NativeStackScreenProps<any>) => {
  const [companies, setCompanies] = useState(null);

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
      .get('companies')
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

  if (!companies) {
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'#89C143'} />
    </View>;
  }
  return (
    <View style={styles.container}>
      <Header showBackButton={false} />
      <FlatList
        data={companies}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
