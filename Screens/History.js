import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Footer from './components/footer';

const History = ({navigation}) => {
  return (
    <View style={styles.bodyWrapper}>
      <Footer navigation={navigation} />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  bodyWrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: '10%',
  },
});
