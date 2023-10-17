import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme/colors';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  contentContainer: {
    position: 'absolute',
    marginTop: height * 0.05,
    paddingBottom: height * 0.5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.white,
    paddingHorizontal: width * 0.05,
    fontSize: 20,
    fontWeight: 'bold',
  },
  innerContainer: {
    alignItems: 'center',
  },
  temp: {
    fontSize: height * 0.12,
    color: colors.white,
    fontWeight: 'bold',
  },
  cloudyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cloudyText: {
    color: colors.white,
    fontSize: 18,
  },
  forecastContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  daysForecast: {
    color: colors.white,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 50,
    fontSize: 18,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.15,
  },
  footerContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginTop: height * 0.05,
    width: height * 0.4,
    paddingVertical: height * 0.02,
    borderRadius: 9,
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  footInnerContainer: {
    flexDirection: 'row',
  },
  menu: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: width * 0.4,
    height: height * 0.1,
    borderRadius: 9,
    overflow: 'hidden',
    position: 'absolute',
    paddingHorizontal: 15,
    paddingVertical: 15,
    left: 10,
    top: height * 0.08,
    zIndex: 1,
  },
  headerinnerCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'white',
    width: width * 0.999,
    height: height,
    marginTop: 90,
    position: 'relative',
  },
  tempDetail: {
    position: 'absolute',
    backgroundColor: '#A8D1DF',
    width: width * 0.1,
    top: height * -0.06,
    height: height * 0.17,
    borderRadius: 9,
    flexDirection: 'row',
    overflow: 'hidden',
    width: width * 0.75,
    paddingHorizontal: 15,
  },
  outerTimelyComtainer: {
    marginTop: height * 0.045,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  timelyData: {
    marginHorizontal: width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  degree: {
    color: '#015E7E',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 8,
  },
  time: {
    color: '#015E7E',
    fontSize: 12,
    marginTop: 10,
  },
  headerDate: {
    color: 'white',
    marginLeft: 10,
    fontSize: 12,
    marginTop: 10,
  },
  mainTemp: {
    marginTop: height * 0.07,
    flexDirection: 'row',
  },
  weekly: {color: '#00A6BF', textDecorationLine: 'underline'},
  listContainer: {
    marginTop: height * 0.13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.07,
  },
  tempText: {
    color: '#F8A13F',
    // fontWeight: 'bold',
    fontSize: 12,
    width: width * 0.2,
  },
  outerView: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
});
