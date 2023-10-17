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
import {logout} from '../../store/loginSlice';
import {styles} from './styles';
import {ImageUtils} from '../../utils/imageUtils';
import TempDetail from '../../common/tempDetail';
import {ApiCalls} from '../../store/appAction';
import {apiResponse} from '../../store/responseSlice';

const {width, height} = Dimensions.get('window');

function HomeScreen({navigation}) {
  const res = useSelector(state => state.currentWeatherData.currentWeather);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
  const day = String(currentDate.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);

  const [showText, setShowText] = useState(false);
  const dispatch = useDispatch();

  function menuHandler() {
    setShowText(!showText);
  }

  function logoutHandler() {
    dispatch(logout());
    navigation.replace('login');
  }

  let hours = [];
  for (let hr of res.forecast) {
    for (let time of hr.hour) {
      hours.push(time);
    }
  }
  // console.log('hours: ', hours);

  useEffect(() => {
    ApiCalls().then(async response => {
      await dispatch(apiResponse(response));
    });
  }, []);

  function dayDataHandler(item) {
    // console.log('item', item.time);
    return (
      <View style={styles.timelyData}>
        <Image
          source={{uri: 'https:' + item.condition.icon}}
          style={{width: width * 0.05, height: height * 0.06}}
        />
        <Text style={styles.degree}>
          {item.temp_c}
          {'\u00b0'}
        </Text>
        <View style={styles.outerView}>
          <Text style={styles.tempText} numberOfLines={2}>
            {item.condition.text}
          </Text>
        </View>
        <Text style={styles.time}>{item.time}</Text>
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
          <TempDetail styles={styles.tempDetail} styles1={{color: 'white'}} />
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
              data={res.forecast.filter.hour}
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
