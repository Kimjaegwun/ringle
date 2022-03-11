import React, {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BannerType} from '../../types';
import {BannerData} from '../../types/data.json';

const {width: screenWidth} = Dimensions.get('window');

type Props = {
  item: BannerType;
};

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState(new Animated.Value(0.3));

  useEffect(() => {
    hanedleAnimation();
  }, [index]);

  const hanedleAnimation = () => {
    return Animated.timing(animation, {
      toValue: 1.2,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setAnimation(new Animated.Value(0.3));
    });
  };

  const checkBannerIndex = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const checkIndex = Math.floor(
      e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width,
    );

    setIndex(checkIndex);
  };

  const _renderItem = ({item}: Props) => {
    return (
      <View style={styles.bannerContainer}>
        <View style={[styles.row, {marginBottom: 15}]}>
          <Text style={styles.generalFont} allowFontScaling={false}>
            UPCOMING LIVE
          </Text>
          <View style={styles.circle} />
        </View>

        <Text style={styles.title} allowFontScaling={false}>
          {item.title}
        </Text>
        <Text style={styles.content} allowFontScaling={false}>
          Ringle Class
        </Text>
        <Text
          style={[styles.content, {marginBottom: 15}]}
          allowFontScaling={false}>
          {item.date}
        </Text>

        <View style={[styles.row, {marginBottom: 20}]}>
          <Image source={{uri: item.avatar}} style={styles.avatar} />
          <View style={{marginLeft: 15}}>
            <Text style={styles.generalFont} allowFontScaling={false}>
              {item.tutor}
            </Text>
            <Text style={styles.content} allowFontScaling={false}>
              {item.university}
            </Text>
          </View>
        </View>

        <Text style={styles.generalFont} allowFontScaling={false}>
          현재 신청 {item.currentCount} 명
        </Text>
        <View style={styles.bar}>
          <View
            style={[styles.line, {flex: item.currentCount / item.limitCount}]}
          />
        </View>
        <Text style={styles.content} allowFontScaling={false}>
          전체 정원 {item.limitCount} 명
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} allowFontScaling={false}>
            자세히 보기
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={BannerData}
        renderItem={_renderItem}
        keyExtractor={(item: BannerType) => `page_${item.id}`}
        horizontal
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={checkBannerIndex}
      />

      <View style={styles.dotWrapper}>
        {Array.from({length: BannerData?.length || 0}).map((_, idx) => (
          <Animated.View
            style={
              idx === index
                ? [styles.active_dot, {transform: [{scale: animation}]}]
                : styles.dot
            }
            key={idx}
          />
        ))}
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerContainer: {
    width: screenWidth,
    paddingVertical: 40,
    paddingHorizontal: 50,
    backgroundColor: '#141414',
  },
  generalFont: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 20,
    backgroundColor: '#ff2e4c',
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  content: {
    fontSize: 11,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  bar: {
    height: 5,
    backgroundColor: 'gray',
    marginVertical: 3,
    borderRadius: 4,
    flexDirection: 'row',
  },
  line: {
    backgroundColor: '#FFFFFF',
    height: 5,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    width: screenWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 13,
  },
  dotWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active_dot: {
    width: 7,
    height: 7,
    borderRadius: 10,
    backgroundColor: '#2d2d2d',
    marginRight: 7,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#c4c4c4',
    marginRight: 7,
  },
});
