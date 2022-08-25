import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Footer = ({navigation}) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.fButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.fText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fButton}
        onPress={() => navigation.navigate('History')}>
        <Text style={styles.fText}>History</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // marginVertical: '10%',
    backgroundColor: '#1AC0C6',
    alignItems: 'center',
    zIndex: 1,
  },
  fButton: {
    height: 45,
    width: 95,
    backgroundColor: '#1AC0C6',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black',
  },
  fText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
  },
});
