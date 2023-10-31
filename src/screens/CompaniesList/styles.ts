import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
  },
  text: {
    margin: 10,
  },

  card: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    margin: 12,
    overflow: 'hidden', // To clip the logo outside the card
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  coverImage: {
    width: '100%',
    height: 150, // Adjust the height as needed
  },
  logoContainer: {
    position: 'absolute',
    bottom: '30%',
    right: '5%',
    // transform: [{translateX: -25}, {translateY: -25}],
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    zIndex: 1, // To place the logo above the cover image
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  contentContainer: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212B37',
  },
  cardDescription: {
    fontSize: 14,
    marginTop: 5,
    color: '#6A7A87',
  },
});
