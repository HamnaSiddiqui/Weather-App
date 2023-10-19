import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

import {loginUser} from '../../store/loginSlice';
import LoginInput from '../../components/LoginInput';
import {styles} from './styles';

function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  const [mailText, setMailText] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function passwordHandler(enteredText) {
    setPassword(enteredText);
  }

  function mailHandler(enteredText) {
    setMailText(enteredText);
  }

  const email = 'Hh';
  const pass = '123';

  function loginHandler() {
    if (mailText === email && password === pass) {
      dispatch(loginUser(email, pass));
      navigation.navigate('home');
      setError(false);
    }
    setError(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <LoginInput
        mailText={mailText}
        passHandler={passwordHandler}
        mailHandler={mailHandler}
      />
      {error ? (
        <View style={styles.textContainer}>
          <Text style={{color: 'red', fontSize: 15}}>Invalid Credentials!</Text>
        </View>
      ) : null}
      <TouchableOpacity onPress={loginHandler}>
        <Text style={styles.signinText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
