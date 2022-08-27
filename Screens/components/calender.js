import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ModalDatePicker} from 'react-native-material-date-picker';

const Calender2 = () => {
  return (
    <View style={styles.calenderBox}>
      <ModalDatePicker
        button={<Text> Open </Text>}
        locale="en"
        onSelect={date => console.log(date)}
        isHideOnSelect={false}
        initialDate={new Date()}
        style={styles.cal}
        color={'green'}
        // language={require('../../locals.json')}
      />
    </View>
  );
};

export default Calender2;

const styles = StyleSheet.create({
  calenderBox: {
    backgroundColor: 'green',
    // flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
  },
  cal: {
    backgroundColor: 'black',
  },
});
