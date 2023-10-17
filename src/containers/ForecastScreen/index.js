import {View, Text, Pressable, FlatList, Image, Dimensions} from 'react-native';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {styles} from './styles';
import {ImageUtils} from '../../utils/imageUtils';
import {ApiCalls} from '../../store/appAction';
import {apiResponse} from '../../store/responseSlice';
import TempDetail from '../../common/tempDetail';

const {width, height} = Dimensions.get('window');

function forecastsList(item) {
  return (
    <View style={styles.items}>
      <Text style={styles.day}>{item.date}</Text>
      <View style={styles.rightData}>
        <Image
          source={{uri: 'https:' + item.day.condition.icon}}
          style={{width: width * 0.1, height: height * 0.07}}
        />
        <Text style={styles.dayText}>
          {item.day.avgtemp_c}
          {'\u00b0'}
        </Text>
      </View>
    </View>
  );
}

function ForecastScreen({navigation}) {
  const forecasts = useSelector(
    state => state.currentWeatherData.currentWeather,
  );
  console.log('forecasts: ', forecasts.current.wind_kph);
  const dispatch = useDispatch();

  useEffect(() => {
    ApiCalls().then(async response => {
      await dispatch(apiResponse(response));
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          {ImageUtils.back}
        </Pressable>
        <Text style={styles.heading}>
          {forecasts.region},{forecasts.country}
        </Text>
      </View>
      <Text style={styles.next7Days}>Next 7 Days</Text>
      <View style={styles.indexChart}>
        <View style={styles.tempDetail}>
          <TempDetail styles={styles.tempDetail} styles1={{color: 'black'}} />
        </View>
      </View>
      <FlatList
        data={forecasts.forecast}
        keyExtractor={(item, index) => {
          return index;
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => forecastsList(item)}
      />
    </View>
  );
}

export default ForecastScreen;
