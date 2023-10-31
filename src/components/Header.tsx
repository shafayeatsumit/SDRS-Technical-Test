import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {clearSession} from '../helpers/session';

interface HeaderProps {
  showBackButton: boolean;
}

const Header: React.FC<HeaderProps> = ({showBackButton}) => {
  const navigation = useNavigation();

  function handleLogout() {
    clearSession();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      }),
    );
  }

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handleBackPress}>
          <Image
            source={require('../../assets/back-icon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/seedrs-logo.jpeg')}
          style={styles.logo}
        />
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={handleLogout}>
        <Image
          source={require('../../assets/logout-icon.png')}
          style={styles.icon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  iconContainer: {
    marginTop: 20,
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  logoContainer: {
    paddingTop: 25,
  },
  logo: {
    width: 150,
    height: 40,
  },
});

export default Header;
