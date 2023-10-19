import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Navigation from './navigator/Navigators';

const App = () => {
  useEffect(() => SplashScreen.hide(), []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
