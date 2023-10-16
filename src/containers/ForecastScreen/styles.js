import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#447EAE',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    marginTop: 20,
    color: 'white',
    paddingHorizontal: width * 0.15,
    fontWeight: 'bold',
  },
  next7Days: {
    color: 'white',
    fontSize: 18,
    marginTop: height * 0.05,
  },
  tempDataContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempDetail: {
    backgroundColor: '#E5F9FF',
    height: height * 0.17,
    borderRadius: 15,
    flexDirection: 'row',
    overflow: 'hidden',
    width: width * 0.8,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indexChart: {
    marginTop: height * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.05,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.05,
    overflow: 'hidden',
    paddingBottom: height * 0.05,
  },
  rightData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  day: {
    width: width * 0.55,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    // backgroundColor: 'red',
  },
  dataPercent: {
    color: '#015E7E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dayText: {
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 15,
  },
  temperature: {
    paddingBottom: 1,
    color: '#015E7E',
  },
});
