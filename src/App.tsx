import React, {useState} from 'react';
import {Button} from 'react-native';
import {
  NavigationContainer,
  CommonNavigationAction,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StarterScreen} from './screens/Starter';
import {SignInScreen} from './screens/SignIn';
import {CompaniesListScreen} from './screens/CompaniesList';
import {CompanyDetailsScreen} from './screens/CompanyDetails';
import {AuthContext} from './helpers/context';
import {clearSession} from './helpers/session';

const Stack = createNativeStackNavigator();
type TokenType = string | null;

export const App = () => {
  const [token, setToken] = useState<TokenType>(null);

  const logOutButton = () => {
    return <Button onPress={() => clearSession()} title="Log Out" />;
  };

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{token, setToken}}>
        <Stack.Navigator initialRouteName="Sarter">
          <Stack.Screen
            name="Sarter"
            component={StarterScreen}
            options={{title: 'Start'}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              title: 'Sign In',
              headerLeft: undefined,
            }}
          />
          <Stack.Screen
            name="CompaniesList"
            component={CompaniesListScreen}
            options={{
              title: 'Companies',
              headerLeft: undefined,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CompanyDetails"
            component={CompanyDetailsScreen}
            options={{
              title: 'Company Details',
              headerRight: logOutButton,
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};
