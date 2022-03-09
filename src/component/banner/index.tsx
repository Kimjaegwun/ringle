import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
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
      />
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
});
