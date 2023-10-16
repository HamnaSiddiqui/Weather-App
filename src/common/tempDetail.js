import {View, Text, Image, Dimensions} from 'react-native';

import {tempData} from '../dummyData/Data';

const {width, height} = Dimensions.get('window');

function TempDetail({styles}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles}>
        {tempData.map(data => (
          <View
            key={data.id}
            style={{
              marginHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {data.image}
            <Text style={{paddingBottom: 1, color: 'white'}}>{data.temp}</Text>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              {data.percent}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default TempDetail;
