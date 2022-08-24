import React from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('History')}>
        <Text>History</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
