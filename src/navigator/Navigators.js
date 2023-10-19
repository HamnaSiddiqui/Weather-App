import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../containers/LoginScreen/index';
import HomeScreen from '../containers/HomeScreen/index';
import ForecastScreen from '../containers/ForecastScreen/index';
import ModalScreen from '../modals/modal';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen
        name="forecasts"
        component={ForecastScreen}
        options={{animationEnabled: true, animationTypeForReplace: 'pop'}}
      />
      <Stack.Screen name="modal" component={ModalScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
