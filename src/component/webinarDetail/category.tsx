import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CategoryList = ['개요', '재생 목록', 'Ringle Team의 다른 웨비나'];

type Props = {
  category: string;
  changeCategory: (select: string) => void;
};

const DetailCateogry = ({category, changeCategory}: Props) => {
  return (
    <View style={styles.categoryContainer}>
      <ScrollView horizontal bounces={false}>
        {CategoryList.map((item: string, index: number) => {
          return (
            <View style={styles.categoryItem} key={index}>
              <TouchableOpacity
                onPress={() => {
                  changeCategory(item);
                }}>
                <Text
                  style={[
                    styles.font,
                    {
                      color: item === category ? '#7A5DE8' : '#869AB8',
                    },
                  ]}
                  allowFontScaling={false}>
                  {item}
                </Text>
                <View
                  style={[styles.bar, {opacity: item === category ? 1 : 0}]}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DetailCateogry;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: '#edf0f5',
    paddingLeft: 20,
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
    borderBottomWidth: 3,
    borderColor: '#7A5DE8',
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
