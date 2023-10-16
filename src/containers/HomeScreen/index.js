import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {colors} from '../../theme/colors';
import {dayData} from '../../dummyData/Data';
import {logout} from '../../store/loginSlice';
import {styles} from './styles';
import {ImageUtils} from '../../utils/imageUtils';
import TempDetail from '../../common/tempDetail';
import {ApiCalls} from '../../store/appAction';
import {apiResponse} from '../../store/responseSlice';

const {height} = Dimensions.get('window');

function HomeScreen({navigation}) {
  const res = useSelector(state => state.currentWeatherData.currentWeather);
  console.log('testt: ', res);
  const [showText, setShowText] = useState(false);
  const dispatch = useDispatch();

  let weekDays = [];
  for (day of res.days) {
    console.log('dates: ', day.date);
    weekDays.push(day.date);
  }
  let weekTemp = [];
  for (day of res.days) {
    console.log('day-temps: ', day.day.avgtemp_c);
    weekTemp.push(day.day.avgtemp_c);
  }
  let tempIcon = [];
  for (day of res.days) {
    tempIcon.push(day.day.condition.icon);
  }

  const forecastsData = [
    {
      dates: weekDays,
      temps: weekTemp,
      icon: tempIcon,
    },
  ];

  function menuHandler() {
    setShowText(!showText);
  }

  function logoutHandler() {
    dispatch(logout());
    navigation.replace('login');
  }

  useEffect(() => {
    ApiCalls().then(async response => {
      const resp = await dispatch(apiResponse(response));
      console.log(forecastsData.dates);
      // console.log('resp: ', resp.payload.days);
      // let weekDays = [];
      // for (day of resp.payload.days) {
      //   weekDays.push(day.date);
      // }
    });
  }, []);

  function dayDataHandler(item) {
    return (
      <View style={styles.timelyData}>
        {/* <Image source={require(item.icon)} style={{width: 20, height: 20}} /> */}
        <Text style={[styles.degree, {paddingHorizontal: 20}]}>
          {item.temps}
          {'\u00b0'}
        </Text>
        {/* <Text style={styles.time}>{item.dates}</Text> */}
      </View>
    );
  }

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View>{ImageUtils.home}</View>
      <ScrollView style={styles.contentContainer}>
        <View>
          <View style={styles.innerContainer}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={menuHandler}>
                {ImageUtils.dots}
              </TouchableOpacity>
              <View style={styles.headerinnerCont}>
                <Text style={styles.text} numberOfLines={1}>
                  {res.region},{res.country}
                </Text>
                <Text style={styles.headerDate}>{res.localtime}</Text>
              </View>
            </View>
            {showText && (
              <View style={styles.menu}>
                <TouchableOpacity onPress={logoutHandler}>
                  <Text style={{color: 'white', fontSize: 15}}>Logout</Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.mainTemp}>
              <Text style={styles.temp}>{res.temp}</Text>
              <Text style={{fontSize: height * 0.1, color: colors.white}}>
                {'\u00b0'}
              </Text>
            </View>
            <Text style={{fontSize: 20, color: 'white'}}>{res.text}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TempDetail styles={styles.tempDetail} />
          <View style={styles.listContainer}>
            <Text style={{color: '#015E7E', fontSize: 18, fontWeight: 'bold'}}>
              Today
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('forecasts')}>
              <Text style={styles.weekly}>Weekly Forecast</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.outerTimelyComtainer}>
            <FlatList
              data={forecastsData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index}
              renderItem={({item}) => dayDataHandler(item)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
