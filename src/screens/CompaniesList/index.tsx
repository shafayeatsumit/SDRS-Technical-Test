import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, Pressable} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import axios from 'axios';
import {getCompaniesUrl} from '../../../config';

export const CompaniesListScreen = ({
  navigation,
}: NativeStackScreenProps<any>) => {
  return (
    <View style={styles.container}>
      <Text
        style={
          styles.text
        }>{`To get the list of companies, you need to do a GET request to the endpoint ${getCompaniesUrl}`}</Text>
      <Text style={styles.text}>
        Once you have the list of companies, you need to display them.
      </Text>
      <Text style={styles.text}>
        Each item in the list should be a Pressable that navigates to the
        CompanyDetails screen
      </Text>
    </View>
  );
};
