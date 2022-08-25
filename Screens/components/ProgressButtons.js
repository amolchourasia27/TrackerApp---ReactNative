import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ProgressButtons = props => {
  return (
    <View style={styles.ProgressButtonBox}>
      <TouchableOpacity style={styles.cupButtons}>
        <Text style={styles.text}>Cup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottleButtons}>
        <Text style={styles.text}>Bottle</Text>
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
  },
});
