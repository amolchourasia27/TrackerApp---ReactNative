import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Calender2 = () => {
  const completed = {
    key: 'completed',
    color: 'green',
    selectedDotColor: 'green',
  };
  const halfDone = {key: 'halfDone', color: 'blue', selectedDotColor: 'blue'};
  const missed = {key: 'missed', color: 'orange', selectedDotColor: 'red'};
  return (
    <View>
      <CalendarList
        theme={{
          backgroundColor: 'white',
          calendarBackground: 'black',
          textSectionTitleColor: '#b6c1cd',
          textDisabledColor: '#2d4150',
          dayTextColor: '#d9e1e8',
          monthTextColor: '#1AC0C6',
        }}
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={months => {}} //render graph for that month
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={4}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={4}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        horizontal={true}
        maxDate={new Date()}
        markingType={'multi-dot'}
        markedDates={{
          '2022-08-25': {
            dots: [completed, halfDone, missed],
          },
          '2022-08-26': {dots: [completed, missed], disabled: false},
        }}
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
