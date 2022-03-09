import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WebinarType} from '../../types';

type Props = {
  data: WebinarType;
  header: string;
  bookmark: (title: string, id: number) => void;
  handleToast: (title: string, id: number) => void;
};

const WebinarCard = ({data, header, bookmark, handleToast}: Props) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.imgContainer}>
        <Image
          source={{uri: data.image}}
          style={styles.img}
          resizeMode="cover"
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.tag} allowFontScaling={false} numberOfLines={1}>
            #{data.tag}
          </Text>
          <View style={styles.bookmarkContainer}>
            <TouchableOpacity
              onPress={() => [
                bookmark(header, data.id),
                handleToast(header, data.id),
              ]}>
              <View style={styles.heartWarpper}>
                <Image
                  source={
                    data.bookmark
                      ? require('../../asset/icons/active-heart.png')
                      : require('../../asset/icons/heart.png')
                  }
                  style={styles.heart}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.title} allowFontScaling={false} numberOfLines={2}>
          {data.title}
        </Text>

        <View style={styles.tutorContainer}>
          <Image source={{uri: data.avatar}} style={styles.avatar} />
          <View style={styles.detail}>
            <Text
              style={styles.name}
              allowFontScaling={false}
              numberOfLines={1}>
              {data.tutor}
            </Text>
            <View style={{flex: 1}}>
              <Text
                style={styles.univ}
                allowFontScaling={false}
                numberOfLines={1}>
                {data.university}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(WebinarCard);

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 10,
  },
  imgContainer: {
    flex: 2,
  },
  img: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  contentContainer: {
    flex: 3,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  tag: {
    fontSize: 11,
    color: 'gray',
    paddingTop: 3,
  },
  bookmarkContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  heartWarpper: {
    backgroundColor: '#e2e2e2',
    borderRadius: 50,
    padding: 6,
  },
  heart: {
    width: 12,
    height: 12,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
    height: 35,
  },
  tutorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  detail: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 11,
    fontWeight: '600',
  },
  univ: {
    fontSize: 11,
    fontWeight: '500',
    color: 'gray',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
});
