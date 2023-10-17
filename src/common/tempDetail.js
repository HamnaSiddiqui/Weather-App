import {View, Text, Image, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');

function TempDetail({styles, styles1}) {
  const current = useSelector(state => state.currentWeatherData.currentWeather);
  console.log('current: ', current.current);

  const currentData = [
    {
      img: (
        <Image
          source={require('../assets/icons/rainDrop.png')}
          style={{width: width * 0.1, height: height * 0.07}}
        />
      ),
      name: 'Humidity',
      data: current.current.humidity + '%',
    },
    {
      img: (
        <Image
          source={require('../assets/icons/rain.png')}
          style={{width: width * 0.1, height: height * 0.07}}
        />
      ),
      name: 'Precipitation',
      data: current.current.precip_mm + '%',
    },
    {
      img: (
        <Image
          source={require('../assets/icons/windy.png')}
          style={{width: width * 0.13, height: height * 0.07}}
        />
      ),
      name: 'Windy',
      data: current.current.wind_kph + ' km/hr',
    },
  ];

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles}>
        {currentData.map(data => (
          <View
            key={data.name}
            style={{
              marginHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {data.img}
            <Text style={[{paddingBottom: 1}, styles1]}>{data.name}</Text>
            <Text style={[{fontSize: 16, fontWeight: 'bold'}, styles1]}>
              {data.data}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default TempDetail;
