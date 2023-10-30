import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface CompanyInterface {
  __typename: string;
  city: string;
  country: string;
  coverImageUrl: string;
  createdAt: string;
  description: string;
  endDate: string;
  id: string;
  investmentRaised: number;
  investmentSought: number;
  logo: string;
  logoUrl: string;
  name: string;
  numberOfInvestors: number;
  percentageRaised: number;
  updatedAt: string;
  valuation: number;
}

const Company: React.FC<{company: CompanyInterface}> = ({company}) => {
  return (
    <View style={styles.card}>
      <Image
        source={{uri: company.coverImageUrl}} // Replace with your image URL
        style={styles.coverImage}
      />
      <View style={styles.logoContainer}>
        <Image source={{uri: company.logoUrl}} style={styles.logo} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.cardTitle}>{company.name}</Text>
        <Text numberOfLines={3} style={styles.cardDescription}>
          {company.description}
        </Text>
      </View>
    </View>
  );
};

export default Company;
