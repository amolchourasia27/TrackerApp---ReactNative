import React, {useState} from 'react';
import {View, Button, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';

import Footer from './components/footer';
import ProgressButtons from './components/ProgressButtons';
import Progress from './components/Progress';

const Home = ({navigation}) => {
  const [progress, setProgress] = useState(0);
  return (
    <View style={styles.bodyWrapper}>
      <View style={styles.headingBox}>
        <Text style={styles.headingText}>Today</Text>
      </View>
      <View style={styles.headingBox2}>
        <Text style={styles.headingText2}>
          water target {Math.round(progress * 100)}%
        </Text>
      </View>
      <Progress prg={progress} />
      <View />
      <ProgressButtons data={progress} setProgress={setProgress} />
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
    height: 200,
    width: '80%',
    alignSelf: 'center',
  },
});
