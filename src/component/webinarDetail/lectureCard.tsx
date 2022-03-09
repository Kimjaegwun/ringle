import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LectureList} from '../../types/data.json';

type Props = {
  select: string;
  changeSelect: (select: string) => void;
};

type RenderProps = {
  item: {
    id: number;
    title: string;
    time: string;
    url: string;
  };
};

const LectureCard = ({select, changeSelect}: Props) => {
  const _renderItem = ({item}: RenderProps) => {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {backgroundColor: select === item.url ? '#edf0f5' : '#FFFFFF'},
        ]}
        onPress={() => {
          changeSelect(item.url);
        }}>
        <Text
          style={[
            styles.title,
            {
              color: select === item.url ? '#7A5DE8' : '#2d2d2d',
            },
          ]}>
          {item.title}
        </Text>
        <View style={styles.playContainer}>
          <Image
            source={require('../../asset/icons/play.png')}
            style={styles.play}
          />
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={item => `card_${item.id}`}
      data={LectureList}
      renderItem={_renderItem}
      removeClippedSubviews={true}
      maxToRenderPerBatch={5}
    />
  );
};

export default LectureCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
  },
  title: {
    fontSize: 13,
    fontWeight: '400',
  },
  playContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  play: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  time: {
    fontSize: 10,
    fontWeight: '200',
  },
});
