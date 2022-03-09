import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebinarInMain from '../component/webinarInMain';

const Contents = () => {
  return (
    <View style={styles.base}>
      <WebinarInMain />
    </View>
  );
};

export default Contents;

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
