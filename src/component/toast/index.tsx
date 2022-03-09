import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, Animated, Dimensions, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../app/store';

type Props = {
  toastModal: {
    bookmark: boolean;
    title: string;
    id: number;
  };
};

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const ToastModal = ({toastModal}: Props) => {
  const webinarData = useSelector((state: RootState) =>
    state.webinar
      .find(item => item.title === toastModal.title)
      ?.data.find(data => data.id === toastModal.id),
  );
  const [fadeIn] = useState(new Animated.Value(0));
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (open == false) {
      fadeInFunc();
    }
    setOpen(false);
  }, [toastModal]);

  const fadeInFunc = () => {
    return Animated.timing(fadeIn, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start(() => fadeOutFunc());
  };

  const fadeOutFunc = () => {
    return Animated.timing(fadeIn, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.container, {opacity: fadeIn}]}>
      <View style={styles.wrapper}>
        <Text allowFontScaling={false} style={styles.text}>
          {webinarData?.bookmark
            ? '[콘텐츠]>[내콘텐츠] 찜한 웨비나에 추가되었습니다.'
            : '[콘텐츠]>[내콘텐츠] 찜한 웨비나에서 삭제되었습니다.'}
        </Text>
      </View>
    </Animated.View>
  );
};

export default ToastModal;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: screenWidth,
    zIndex: 999,
    top: screenHeight * 0.75,
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: '#2D2D2D',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
    flex: 1,
  },
});
