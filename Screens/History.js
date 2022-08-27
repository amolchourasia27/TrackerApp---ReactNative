import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import Footer from './components/footer';
import Calender2 from './components/calender';
import Chart from './components/chart';

const History = ({navigation}) => {
  return (
    <View style={styles.bodyWrapper}>
      <View style={styles.calenderContainer}>
        <Calender2 />
      </View>
      <View style={styles.chartContainer}>
        <Chart />
      </View>
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
  calenderContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: '45%',
  },
  chartContainer: {
    flex: 2,
    flexDirection: 'row',
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
