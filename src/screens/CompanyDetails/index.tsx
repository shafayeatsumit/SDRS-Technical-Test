/* eslint-disable quotes */
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createGraphQLClient} from '../../helpers/api';
import {queryGetCompany} from '../../helpers/gql';
import {AuthContext} from '../../helpers/context';

type CompanyScreenProps = NativeStackScreenProps<any, 'CompanyScreen'> & {
  route: {
    params: {
      companyID: string;
    };
  };
};

export const CompanyDetailsScreen = ({
  navigation,
  route: {params},
}: CompanyScreenProps) => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  const {token, setToken} = useContext(AuthContext);

  const fetchCompanyData = async () => {
    const graphQLClient = createGraphQLClient(token);
    const {companyId} = params;

    try {
      const response = await graphQLClient.request(queryGetCompany, {
        id: companyId,
      });
      setCompany(response.getCompany);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('we do have token here', token, setToken);
    fetchCompanyData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!company) {
    return <Text>Error fetching data.</Text>;
  }

  return (
    <View>
      <Text>{company.name}</Text>
      <Text>{company.description}</Text>
      {/* Render other company details as needed */}
    </View>
  );
};
