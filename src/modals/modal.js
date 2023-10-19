import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

function ModalScreen({isVisible, modalHandler, logout}) {
  return (
    <Modal
      onBackdropPress={() => isVisible}
      onBackButtonPress={() => isVisible}
      isVisible={modalHandler}
      swipeDirection="down"
      onSwipeComplete={modalHandler}
      animationIn="slideInUp"
      animationOut="bounceOutDown"
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <View style={styles.modalContent}>
        <View style={styles.center}>
          <View style={styles.barIcon} />
          <TouchableOpacity onPress={logout}>
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default ModalScreen;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 300,
    paddingBottom: 20,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: '#bbb',
    borderRadius: 3,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 100,
    backgroundColor: 'black',
    borderRadius: 9,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
});
