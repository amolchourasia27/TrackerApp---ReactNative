import React, {useState} from 'react';
import {View, Button, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';

import Footer from './components/footer';
import ProgressButtons from './components/ProgressButtons';

const Home = ({navigation}) => {
  const [progress, setProgress] = useState(0.1);
  return (
    <View style={styles.bodyWrapper}>
      <View style={styles.headingBox}>
        <Text style={styles.headingText}>Today</Text>
      </View>
      <View style={styles.headingBox2}>
        <Text style={styles.headingText2}>water target num</Text>
      </View>
      <View>
        <ProgressBar
          style={styles.progressBar}
          styleAttr="Horizontal"
          indeterminate={false}
          progress={progress}
          color="#1AC0C6"
        />
      </View>
      <ProgressButtons />
      <Footer navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bodyWrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    flexDirection: 'column',
    flex: 1,
  },
  headingBox: {
    alignSelf: 'center',
    paddingVertical: 30,
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1AC0C6',
  },
  headingBox2: {
    alignSelf: 'center',
    paddingVertical: '1%',
  },
  headingText2: {
    fontSize: 18,
    color: '#1c44c6',
  },
  progressBar: {
    padding: 80,
    height: '50%',
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'green',
  },
});
