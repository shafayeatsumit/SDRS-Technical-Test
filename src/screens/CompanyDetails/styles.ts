import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  coverImageContainer: {
    width: '100%',
    height: 220,
  },
  coverImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  header: {
    height: 80,
    backgroundColor: 'red',
  },
  logoContainer: {
    height: 100,
    width: 100,
    backgroundColor: 'transparent',
    left: 20,
    marginTop: -40,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 0,
  },

  name: {
    fontSize: 22,
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: 70,
    left: 20,
    color: '#2F3B46',
  },
  country: {
    marginLeft: 'auto',
  },
  description: {
    marginTop: 10,
    marginLeft: 25,
    marginRight: 20,
    fontSize: 14,
    color: '#A7ACB0',
    fontWeight: '600',
  },

  stats: {
    height: 150,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 20,
    // backgroundColor: 'tomato',
  },
  fundRaised: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  percentage: {
    fontSize: 15,
    color: '#737C82',
    fontWeight: '500',
  },

  endDate: {
    marginTop: 10,
  },
  investmentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  investmentText: {
    marginTop: 5,
  },
  numberOfInvestors: {
    marginTop: 10,
  },
  percentageRaised: {
    marginTop: 10,
  },
  valuation: {
    marginTop: 10,
  },
});
