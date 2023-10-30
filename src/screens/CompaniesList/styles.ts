import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  text: {
    margin: 10,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 10,
    overflow: 'hidden', // To clip the logo outside the card
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
