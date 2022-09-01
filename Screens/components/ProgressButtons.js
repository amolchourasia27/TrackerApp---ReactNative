import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

const ProgressButtons = (props, data) => {
  const [isDone, setIsDone] = useState(false);
  let WaterStats = props.data;
  useEffect(() => {
    setIsDone(false);
  }, [WaterStats]);
  const showToast = () => {
    ToastAndroid.show('Good target done', ToastAndroid.LONG);
  };
  const handelPress = () => {
    if (WaterStats >= 0.9) {
      showToast();
      console.log(WaterStats);
      setIsDone(true);
      // store data in database
      // set target to 0 after everyday 12am
      // give a toast message
      // before DB write subtract something
    } else {
      props.setProgress(WaterStats + 0.1);
    }
  };
  const handelPressBottle = () => {
    if (WaterStats === 1 || WaterStats >= 0.6) {
      showToast();
      setIsDone(true);
      if (WaterStats >= 0.6) {
        setIsDone(true);
      }
      // store data in database
      // set target to 0 after everyday 12am
      // give a toast message
      // before DB write subtract 0.5
    } else {
      props.setProgress(WaterStats + 0.5);
      console.log(WaterStats + 'bottle');
    }
  };
  return (
    <View style={styles.ProgressButtonBox}>
      <TouchableOpacity
        style={styles.cupButtons}
        disabled={isDone}
        onPress={() => handelPress()}>
        <Text style={styles.text}>Cup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottleButtons}
        disabled={isDone}
        onPress={() => handelPressBottle()}>
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
    backgroundColor: 'black',
    borderColor: '#12878b',
    borderWidth: 1,
  },
  bottleButtons: {
    height: 35,
    width: 75,
    borderRadius: 10,
    backgroundColor: 'black',
    borderColor: '#12878b',
    borderWidth: 1,
  },
  text: {
    fontSize: 15,
    padding: '10%',
    alignSelf: 'center',
    color: 'white',
  },
});
