import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from './screens/SignIn';
import {CompaniesListScreen} from './screens/CompaniesList';
import {CompanyDetailsScreen} from './screens/CompanyDetails';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{title: 'Sign In'}}
        />
        <Stack.Screen
          name="CompaniesList"
          component={CompaniesListScreen}
          options={{title: 'Companies'}}
        />
        <Stack.Screen
          name="CompanyDetails"
          component={CompanyDetailsScreen}
          options={{title: 'Company Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
