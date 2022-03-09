import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

type Props = {
  select: string;
};

const {width: screenWidth} = Dimensions.get('window');

const Lecture = ({select}: Props) => {
  const [ratio, setRatio] = useState(0);
  return (
    <View
      style={[styles.base, {height: ratio !== 0 ? screenWidth * ratio : 200}]}>
      <Video
        key={select}
        source={{
          uri: select,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
        controls={true}
        paused={true}
        resizeMode={'contain'}
        onLoad={({naturalSize}) => {
          setRatio(naturalSize.height / naturalSize.width);
        }}
      />
    </View>
  );
};

export default Lecture;

const styles = StyleSheet.create({
  base: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
