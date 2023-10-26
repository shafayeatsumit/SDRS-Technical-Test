/* eslint-disable quotes */
import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import request from 'graphql-request';
import {getCompanyDocument, graphqlEndpoint} from '../../../config';

export const CompanyDetailsScreen = ({
  navigation,
  route: {params},
}: NativeStackScreenProps<any>) => {
  return (
    <View style={styles.container}>
      <Text>{`To get the company details, you need to do a graphQL request to the endpoint ${graphqlEndpoint}, with the header:`}</Text>
      <Text
        style={
          styles.boldText
        }>{`'x-api-key': 'the-api-token-you-got-earlier'`}</Text>
      <Text>and the document:</Text>
      <Text>{getCompanyDocument}</Text>
      <Text>
        Along with the company's ID you pressed from the previous screen passed
        as a variable
      </Text>
      <Text>
        You can use the package graphql-request for this, or any other package
        you choose.
      </Text>
    </View>
  );
};
