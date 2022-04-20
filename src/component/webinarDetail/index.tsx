import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Lecture from './lecture';
import Summary from './summary';
import {LectureList} from '../../types/data.json';
import DetailCateogry from './category';
import LectureCard from './lectureCard';
import OtherWebinar from './otherWebinar';
import Orientation from 'react-native-orientation';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

type Props = {
  handleOtherToast: (title: string, id: number) => void;
};

const WebinarDetailComponent = ({handleOtherToast}: Props) => {
  const [category, setCategory] = useState('개요');
  const [select, setSelect] = useState(LectureList[0].url);

  const changeCategory = (text: string) => {
    setCategory(text);
  };

  const changeSelect = (text: string) => {
    setSelect(text);
  };

  const [change, setChange] = useState(false);

  const rotation = useRef(new Animated.Value(0)).current;

  const onPressZero = Animated.timing(rotation, {
    toValue: 0,
    useNativeDriver: true,
  });
  const onPressOne = Animated.timing(rotation, {
    toValue: 1,
    useNativeDriver: true,
  });
  const onPressTwo = Animated.timing(rotation, {
    toValue: 2,
    useNativeDriver: true,
  });
  const widthX = rotation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 150, -150],
    extrapolate: 'clamp',
  });
  const _rotateX = rotation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['0deg', '90deg', '270deg'],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    Orientation.addSpecificOrientationListener(orientation => {
      setChange(prev => {
        if (prev) {
          if (orientation === 'LANDSCAPE-RIGHT') {
            onPressTwo.start();
          }
          if (orientation === 'LANDSCAPE-LEFT') {
            onPressOne.start();
          }
        }
        return prev;
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          position: 'absolute',
          width: 50,
          height: 30,
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
          top: 15,
          left: 15,
          zIndex: 99,
        }}
        onPress={() => {
          setChange(!change);
          if (!change) {
            onPressOne.start();
          } else {
            onPressZero.start();
          }
        }}>
        <Text style={{color: 'white'}}>Button</Text>
      </TouchableOpacity>

      <Animated.View
        style={{
          transform: [
            {
              rotateZ: _rotateX,
            },
            {
              translateX: widthX,
            },
          ],
          zIndex: 98,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Lecture
          select={select}
          width={change ? screenHeight - 85 : screenWidth}
          height={change ? screenWidth : 215}
        />
      </Animated.View>

      <DetailCateogry category={category} changeCategory={changeCategory} />
      {category === '개요' ? (
        <Summary />
      ) : category === '재생 목록' ? (
        <LectureCard select={select} changeSelect={changeSelect} />
      ) : (
        <OtherWebinar handleOtherToast={handleOtherToast} />
      )}
    </View>
  );
};

export default WebinarDetailComponent;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  categoryItem: {
    marginRight: 20,
    justifyContent: 'center',
  },
  font: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 10,
  },
  bar: {
    borderBottomWidth: 2,
    borderColor: '#2d2d2d',
    marginBottom: 3,
  },
  searchWrapper: {
    alignItems: 'center',
    width: 80,
  },
  searchIcon: {
    width: 15,
    height: 15,
  },
});
