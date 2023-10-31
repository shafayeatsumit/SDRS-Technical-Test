import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StarterScreen} from './screens/Starter';
import {SignInScreen} from './screens/SignIn';
import {CompaniesListScreen} from './screens/CompaniesList';
import {CompanyDetailsScreen} from './screens/CompanyDetails';
import {AuthContext} from './helpers/context';

const Stack = createNativeStackNavigator();
type TokenType = string | null;

export const App = () => {
  const [token, setToken] = useState<TokenType>(null);

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
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CompanyDetails"
            component={CompanyDetailsScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};
