import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createGraphQLClient} from '../../helpers/api';
import {queryGetCompany} from '../../helpers/gql';
import {AuthContext} from '../../helpers/context';
import BarGraph from './BarGraph';
import Header from '../../components/Header';
import {daysUntilEndDate} from '../../helpers/date-time';

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
    fetchCompanyData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color="#89C143" />
      </View>
    );
  }

  if (!company) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Error fetching data.</Text>;
      </View>
    );
  }

  const {
    coverImageUrl,
    name,
    percentageRaised,
    description,
    endDate,
    investmentRaised,
    numberOfInvestors,
    investmentSought,
    logoUrl,
  } = company;

  // Normalize the money amount to a string with two decimal places and thousands separators in GBP
  function normalizeInvestment(investmentAmount: number) {
    const normalizedInvestment = investmentAmount.toLocaleString('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return normalizedInvestment;
  }

  const normalizedInvestmentRaised = normalizeInvestment(investmentRaised);
  const normalizedInvestmentSought = normalizeInvestment(investmentSought);
  const daysLeft = daysUntilEndDate(endDate);

  return (
    <View style={styles.container}>
      <Header showBackButton={true} />
      <View style={styles.coverImageContainer}>
        <Image source={{uri: coverImageUrl}} style={styles.coverImage} />
        <View style={styles.logoContainer}>
          <Image source={{uri: logoUrl}} style={styles.logo} />
        </View>
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.daysLeft}>{daysLeft}</Text>
      <View style={styles.stats}>
        <View style={styles.fundRaised}>
          <Text style={styles.percentage}>{percentageRaised}%</Text>
          <Text style={styles.percentage}>{normalizedInvestmentSought}</Text>
        </View>
        <BarGraph
          percentage={percentageRaised}
          investmentRaised={normalizedInvestmentRaised}
          numberOfInvestors={numberOfInvestors}
        />
      </View>
    </View>
  );
};
