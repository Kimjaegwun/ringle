import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  bookmark: any;
  active: boolean;
  handleToast: () => void;
};

const HeaderMark = ({title, bookmark, active, handleToast}: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.row}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={styles.backContainer}>
          <Text style={styles.arrow} allowFontScaling={false}>
            {'〈'}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          bookmark();
          handleToast();
        }}>
        <View style={styles.searchContainer}>
          <Image
            source={
              active
                ? require('../../asset/icons/active-heart.png')
                : require('../../asset/icons/heart.png')
            }
            style={styles.heart}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderMark;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    paddingBottom: 10,
    paddingTop: 7,
    alignItems: 'center',
  },
  backContainer: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  arrow: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchContainer: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heart: {
    width: 17,
    height: 17,
  },
});
