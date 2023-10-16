import {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

function LoginInput({email, passHandler, mailHandler}) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  function passwordVisibleHandler() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <View>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/icons/email.png')}
          style={{width: width * 0.066, height: height * 0.03}}
        />
        <TextInput
          placeholder="Email Address"
          placeholderTextColor={'lightgray'}
          style={styles.inputText}
          value={email}
          onChangeText={mailHandler}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/icons/lock.png')}
          style={{width: width * 0.06, height: height * 0.035}}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'lightgray'}
          style={styles.inputText}
          secureTextEntry={!passwordVisible}
          onChangeText={passHandler}
        />
        {passwordVisible ? (
          <TouchableOpacity onPress={passwordVisibleHandler}>
            <Image
              source={require('../assets/icons/eye.png')}
              style={{width: width * 0.07, height: height * 0.025}}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={passwordVisibleHandler}>
            <Image
              source={require('../assets/icons/eyehide.png')}
              style={{width: width * 0.07, height: height * 0.025}}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default LoginInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.01,
    marginVertical: height * 0.013,
    borderRadius: 9,
    alignItems: 'center',
    paddingLeft: width * 0.04,
  },
  inputText: {
    paddingLeft: 12,
    width: width * 0.55,
    color: 'black',
    marginRight: width * 0.01,
  },
});
