import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

type Props = {
  select: string;
  width: number | string;
  height: number | string;
};

const {width: screenWidth} = Dimensions.get('window');

const Lecture = ({select, width, height}: Props) => {
  const [ratio, setRatio] = useState(0);
  return (
    <View style={styles.base}>
      <Video
        key={select}
        source={{
          uri: select,
        }}
        style={{
          width,
          height,
        }}
        controls={true}
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
