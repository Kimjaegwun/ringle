import React, {useContext} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {WebinarDetailData} from '../../pages/WebinarDetail';

const {height: screenHeight} = Dimensions.get('window');

const Summary = () => {
  const data = useContext(WebinarDetailData);

  if (data) {
    return (
      <ScrollView style={{minHeight: screenHeight}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.tutorContainer}>
            <Image source={{uri: data.avatar}} style={styles.avatar} />
            <View style={styles.detail}>
              <Text style={styles.name} allowFontScaling={false}>
                {data.tutor}
              </Text>
              <Text style={styles.univ} allowFontScaling={false}>
                {data.university}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.bar} />

        <View style={styles.contentContainer}>
          <Text style={styles.description}>
            *본 세션은 한국어로 진행되는 세션입니다.
          </Text>
          <Text style={styles.contents}>
            "영어 실력이 더 이상 늘지 않아요"{'\n'}"영어 정체기에 빠졌어요"
            {'\n\n'}어느 순간부터 영어가 늘지 않는다고 느껴진다면, 이번 영상을
            꼭 시청해보세요!{'\n'}링글러의 고충에 공감하며 영어 실력 향상의
            한계를 극복하기 위한 현실적 공부법을 공유합니다.
          </Text>
        </View>
      </ScrollView>
    );
  }

  return <Text>Loading...</Text>;
};

export default Summary;

const styles = StyleSheet.create({
  titleContainer: {
    padding: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  tutorContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  detail: {
    marginLeft: 25,
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  univ: {
    fontSize: 12,
    fontWeight: '500',
    color: 'gray',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  bar: {
    height: 7,
    backgroundColor: '#f7f7f7',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  description: {
    fontSize: 14,
    marginBottom: 15,
  },
  contents: {
    fontSize: 13,
    fontStyle: 'italic',
    lineHeight: 20,
  },
});
