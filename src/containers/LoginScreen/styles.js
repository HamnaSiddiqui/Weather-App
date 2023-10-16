import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme/colors';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.3,
    alignItems: 'center',
    marginHorizontal: width * 0.05,
    overflow: 'hidden',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: height * 0.04,
  },
  signinText: {
    backgroundColor: '#447EAE',
    marginTop: 20,
    paddingHorizontal: width * 0.3,
    paddingVertical: height * 0.02,
    borderRadius: 9,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
});
