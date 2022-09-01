import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const Progress = props => {
  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'black',
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(26, 192, 198, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = {
    data: [1, props.prg],
  };
  return (
    <View>
      <ProgressChart
        data={data}
        width={Dimensions.get('window').width}
        height={280}
        strokeWidth={16}
        radius={36}
        chartConfig={chartConfig}
        hideLegend={true}
      />
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({});
