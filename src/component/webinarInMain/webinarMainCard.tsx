import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WebinarType} from '../../types';

type Props = {
  item: WebinarType;
  bookmark: (title: string, id: number) => void;
  header: string;
  handleToast: (title: string, id: number) => void;
};

const WebinarMainCard = ({item, bookmark, header, handleToast}: Props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imgWrapper}>
        <Image
          source={{uri: item.image}}
          style={styles.img}
          resizeMode="cover"
        />
        <View style={styles.bookmarkWrapper}>
          <TouchableOpacity
            onPress={() => {
              bookmark(header, item.id);
              handleToast(header, item.id);
            }}>
            <View style={styles.bookmarkContainer}>
              <Image
                source={
                  item.bookmark
                    ? require('../../asset/icons/active-heart.png')
                    : require('../../asset/icons/heart.png')
                }
                style={styles.heart}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.tag} allowFontScaling={false} numberOfLines={1}>
          #{item.tag}
        </Text>
        <Text style={styles.title} allowFontScaling={false} numberOfLines={2}>
          {item.title}
        </Text>

        <View style={styles.tutorContainer}>
          <Image source={{uri: item.avatar}} style={styles.avatar} />
          <View style={styles.detail}>
            <Text
              style={styles.name}
              allowFontScaling={false}
              numberOfLines={1}>
              {item.tutor}
            </Text>
            <View style={{flex: 1}}>
              <Text
                style={styles.univ}
                allowFontScaling={false}
                numberOfLines={1}>
                {item.university}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(WebinarMainCard);

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    width: 200,
    flex: 1,
  },
  imgWrapper: {},
  img: {
    width: 200,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingTop: 12,
    paddingBottom: 15,
  },
  tag: {
    fontSize: 10,
    color: 'gray',
  },
  bookmarkWrapper: {
    width: 200,
    alignItems: 'flex-end',
    paddingTop: 15,
    paddingRight: 10,
    position: 'absolute',
  },
  bookmarkContainer: {
    backgroundColor: '#e2e2e2',
    borderRadius: 50,
    padding: 6,
  },
  heart: {
    width: 15,
    height: 15,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 15,
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
