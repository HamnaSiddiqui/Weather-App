import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from '../containers/LoginScreen/index';
import HomeScreen from '../containers/HomeScreen/index';
import ForecastScreen from '../containers/ForecastScreen/index';
import {NavigationContainer} from '@react-navigation/native';
import SettingsScreen from '../containers/settings';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DarwerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

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
        <Stack.Screen name="setting" component={DarwerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
