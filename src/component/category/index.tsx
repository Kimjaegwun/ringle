import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CategoryList = ['웨비나', '교재', '데일리 브리프', '내 콘텐츠'];

const Cateogry = () => {
  const [select, setSelect] = useState('웨비나');
  return (
    <View style={styles.categoryContainer}>
      <ScrollView style={styles.base} horizontal>
        {CategoryList.map((category: string, index: number) => {
          return (
            <View style={styles.categoryItem} key={index}>
              <TouchableOpacity
                onPress={() => {
                  setSelect(category);
                }}>
                <Text
                  style={[
                    styles.font,
                    {
                      color: select === category ? '#2d2d2d' : '#869AB8',
                    },
                  ]}
                  allowFontScaling={false}>
                  {category}
                </Text>
                <View
                  style={[styles.bar, {opacity: select === category ? 1 : 0}]}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      <Search />
    </View>
  );
};

const Search = () => {
  return (
    <View style={styles.searchWrapper}>
      <Image
        source={require('../../asset/icons/search.png')}
        style={styles.searchIcon}
      />
    </View>
  );
};

export default Cateogry;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  base: {
    paddingHorizontal: 20,
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
