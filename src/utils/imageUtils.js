import {Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const ImageUtils = {
  home: (
    <Image
      source={require('../assets/icons/home.jpg')}
      style={{width: width * 0.999, height: height * 0.9999}}
      blurRadius={7}
    />
  ),
  dots: (
    <Image
      source={require('../assets/icons/dots.png')}
      style={{
        width: width * 0.07,
        height: height * 0.04,
        marginLeft: 10,
      }}
    />
  ),
  back: (
    <Image
      source={require('../assets/icons/back.png')}
      style={{width: width * 0.09, height: height * 0.02}}
    />
  ),
  day: (
    <Image
      source={require('../assets/icons/day.png')}
      style={{width: width * 0.1, height: height * 0.05}}
    />
  ),
};
