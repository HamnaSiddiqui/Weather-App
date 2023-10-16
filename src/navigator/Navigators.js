import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../containers/LoginScreen/index';
import HomeScreen from '../containers/HomeScreen/index';
import ForecastScreen from '../containers/ForecastScreen/index';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen
          name="forecasts"
          component={ForecastScreen}
          options={{animationEnabled: true, animationTypeForReplace: 'pop'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
