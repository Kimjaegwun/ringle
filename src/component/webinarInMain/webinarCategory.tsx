import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {WebinarNavigationProp} from '../../types';
import {RootState} from '../../app/store';

const {width: screenWidth} = Dimensions.get('window');

const WebinarCategoryData = [
  '인기 웨비나',
  '링글 Radio 영상',
  '링글 LIVE 영상',
  '비즈니스/커리어',
  '실생활 영어',
  '영어와 공부',
  '트렌트/문화',
  '영어권 스쿨라이프',
  '찜한 웨비나',
];

export const WebinarCategory = () => {
  const navWebinar = useNavigation<WebinarNavigationProp>();
  const webinarData = useSelector((state: RootState) => state.webinar);

  return (
    <View style={styles.webinarContainer}>
      <Text style={styles.categoryTitle}>카테고리별 웨비나</Text>
      <ScrollView
        style={styles.categoryWrapper}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryContainer}>
          {WebinarCategoryData.map((category: string, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.categoryBtn}
                onPress={() => {
                  navWebinar.navigate('Webinar', {
                    title: webinarData[0].title,
                    web_tag: webinarData[0].web_tag,
                  });
                }}>
                <Text style={styles.btnText}>{category}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  navBtn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  arrow: {
    fontSize: 12,
    fontWeight: '600',
  },
  cardContainer: {
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#869AB8',
    width: 180,
  },
  imgWrapper: {},
  img: {
    width: 180,
    height: 130,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  webinarContainer: {
    marginVertical: 20,
  },
  categoryTitle: {marginLeft: 20},
  categoryWrapper: {
    marginTop: 5,
  },
  categoryContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: screenWidth * 1.5,
    paddingLeft: 20,
  },
  categoryBtn: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#c9c9c9',
    paddingHorizontal: 9,
    paddingVertical: 7,
    margin: 5,
  },
  btnText: {
    fontWeight: '300',
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 10,
  },
  tag: {
    fontSize: 10,
    color: 'gray',
  },
});
