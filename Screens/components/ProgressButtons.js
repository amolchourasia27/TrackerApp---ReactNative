import React from 'react';
import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

const ProgressButtons = (props, data) => {
  const work = false;
  const showToast = () => {
    ToastAndroid.show('Good target done', ToastAndroid.LONG);
    const work = true;
  };
  if (props.data >= 1) {
    showToast();
    // store data in database
    // set target to 0 after everyday 12am
    // give a toast message
  }
  return (
    <View style={styles.ProgressButtonBox}>
      <TouchableOpacity
        style={styles.cupButtons}
        disabled={work}
        onPress={() => props.setProgress(props.data + 0.1)}>
        <Text style={styles.text}>Cup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottleButtons}
        onPress={() => props.setProgress(props.data + 0.5)}>
        <Text style={styles.text}>Bottle</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.setProgress(0)}>
        <Text>reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProgressButtons;

const styles = StyleSheet.create({
  ProgressButtonBox: {
    height: '15%',
    paddingBottom: '5%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 2,
  },
  cupButtons: {
    height: 35,
    width: 75,
    borderRadius: 10,
    backgroundColor: '#12878b',
  },
  bottleButtons: {
    height: 35,
    width: 75,
    borderRadius: 10,
    backgroundColor: '#12878b',
  },
  text: {
    fontSize: 15,
    padding: '10%',
    alignSelf: 'center',
    color: 'black',
  },
});
