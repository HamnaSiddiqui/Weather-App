import {Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const cloudData = [
  {
    name: 'Today Cloudy',
    temp: '32 / 27',
  },
  {
    name: 'Tomorrow Cloudy',
    temp: '33 / 27',
  },
  {
    name: 'Sat Cloudy',
    temp: '32 / 27',
  },
];

export const forecastData = [
  {
    day: 'Mon, 1 Oct',
    id: 1,
    dayTemp: '33',
  },
  {
    day: 'Tue, 1 Oct',
    id: 2,
    dayTemp: '33',
  },
  {
    day: 'Wed, 1 Oct',
    id: 3,
    dayTemp: '33',
  },
  {
    day: 'Thu, 1 Oct',
    id: 4,
    dayTemp: '33',
  },
  {
    day: 'Fri, 1 Oct',
    id: 5,
    dayTemp: '33',
  },
  {
    day: 'Sat, 1 Oct',
    id: 6,
    dayTemp: '33',
  },
  {
    day: 'Sun, 1 Oct',
    id: 6,
    dayTemp: '33',
  },
];

export const tempData = [
  {
    image: (
      <Image
        source={require('../assets/icons/rainDrop.png')}
        style={{width: width * 0.1, height: height * 0.07}}
      />
    ),
    temp: 'Humidity',
    percent: '62 %',
    id: 1,
  },
  {
    image: (
      <Image
        source={require('../assets/icons/rain.png')}
        style={{width: width * 0.1, height: height * 0.07}}
      />
    ),
    temp: 'Precipitation',
    percent: '10 %',
    id: 2,
  },
  {
    image: (
      <Image
        source={require('../assets/icons/windy.png')}
        style={{width: width * 0.13, height: height * 0.07}}
      />
    ),
    temp: 'Windy',
    percent: '18 km/h',
    id: 3,
  },
];

export const dayData = [
  {
    image: (
      <Image
        source={require('../assets/icons/day.png')}
        style={{width: width * 0.13, height: height * 0.07}}
      />
    ),
    deg: '20',
    time: '11 AM',
  },
  {
    image: (
      <Image
        source={require('../assets/icons/cloudy.png')}
        style={{width: width * 0.13, height: height * 0.07}}
      />
    ),
    deg: '16',
    time: '01 AM',
  },
  {
    image: (
      <Image
        source={require('../assets/icons/night.png')}
        style={{width: width * 0.13, height: height * 0.06}}
      />
    ),
    deg: '16',
    time: '05 AM',
  },
  {
    image: (
      <Image
        source={require('../assets/icons/rain.png')}
        style={{width: width * 0.13, height: height * 0.07}}
      />
    ),
    deg: '20',
    time: '11 PM',
  },
];
