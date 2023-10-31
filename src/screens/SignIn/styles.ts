import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 25,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  text: {
    marginVertical: 10,
    fontSize: 18,
  },
  imageContainer: {
    height: '35%',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
