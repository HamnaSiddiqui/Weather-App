import {View, Text, Pressable, FlatList} from 'react-native';

import {forecastData} from '../../dummyData/Data';
import {styles} from './styles';
import {tempData} from '../../dummyData/Data';
import {ImageUtils} from '../../utils/imageUtils';
import {ApiCalls} from '../../store/appAction';
import {apiResponse} from '../../store/responseSlice';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function forecastsList(item) {
  return (
    <View style={styles.items}>
      <Text style={styles.day}>{item.dates}</Text>
      {/* <View style={styles.rightData}>
        {ImageUtils.day}
        <Text style={styles.dayText}>
          {item.dayTemp}
          {'\u00b0'}
        </Text>
      </View> */}
    </View>
  );
}

function ForecastScreen({navigation}) {
  const forecasts = useSelector(
    state => state.currentWeatherData.currentWeather,
  );
  console.log('forecasts: ', forecasts);
  const dispatch = useDispatch();

  useEffect(() => {
    ApiCalls().then(async response => {
      await dispatch(apiResponse(response));
    });
  }, []);

  let weekDays = [];
  for (day of forecasts.days) {
    console.log('dates: ', day.date);
    weekDays.push(day.date);
  }

  const forecastsData = weekDays.map(date => {
    return {dates: date};
  });

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
          {tempData.map(data => (
            <View key={data.id} style={styles.tempDataContainer}>
              {data.image}
              <Text style={styles.temperature}>{data.temp}</Text>
              <Text style={styles.dataPercent}>{data.percent}</Text>
            </View>
          ))}
        </View>
      </View>
      <FlatList
        data={forecastsData}
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
