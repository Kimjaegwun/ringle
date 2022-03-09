import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
};

const Header = ({title}: Props) => {
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
      <View style={styles.searchContainer}>
        <Image
          source={require('../../asset/icons/search.png')}
          style={styles.search}
        />
      </View>
    </View>
  );
};

export default Header;

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
  search: {
    width: 15,
    height: 15,
  },
});
