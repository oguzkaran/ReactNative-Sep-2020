import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Platform} from 'react-native';

import BackgroundTimer from 'react-native-background-timer';

const App = () => {
  const [seconds, setSeconds] = useState(3600);
  const [timerOn, setTimerOn] = useState(false);
  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSeconds(s => {
        return s > 0 ? s - 1 : 0;
      });
    }, 1000);
  };

  useEffect(() => {
    if (timerOn)
      startTimer();
    else
      BackgroundTimer.stopBackgroundTimer();

    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [timerOn]);

  useEffect(() => {
    if (seconds === 0) BackgroundTimer.stopBackgroundTimer();
  }, [seconds]);

  return (
    <View style={styles.container}>
      <Text>
        {Platform.OS === 'android'
          ? Platform.Version === 29
            ? 'Android 10'
            : 'Android'
          : 'IoS'}
      </Text>
      <Text style={styles.time}>
        {secondsToTime(seconds).hoursDisplay}:
        {secondsToTime(seconds).minutesDisplay}:
        {secondsToTime(seconds).secondsDisplay}
      </Text>
      <Button
        title="Start/Stop"
        onPress={() => {
          setTimerOn(!timerOn);
        }}
      />
    </View>
  );
};

const secondsToTime = totalSeconds => {
  const hours = Math.floor(totalSeconds / 60 / 60);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  const hoursDisplay = hours < 10 ? `0${hours}` : hours;
  const minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;
  const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;

  return {
    hoursDisplay,
    minutesDisplay,
    secondsDisplay,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Platform.OS === 'ios' ? 'blue' : 'green',
  },
  time: {
    color: Platform.OS === 'android' ? 'black' : 'white',
    marginBottom: 25,
    textAlign: 'center',
  },
});

export default App;
