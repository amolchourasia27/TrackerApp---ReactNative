import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const Chart = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={190}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: 'black',
          backgroundGradientFrom: '#0d6063',
          backgroundGradientTo: '#12868a',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#052627',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 0,
        }}
      />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({});
