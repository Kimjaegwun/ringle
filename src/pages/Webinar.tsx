import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {RootState} from '../app/store';
import Header from '../component/header';
import WebinarCard from '../component/webinar';
import {checkBookmark} from '../redux/slice';
import {WebinarDetailNavigationProp, WebinarType} from '../types';
import ToastModal from '../component/toast';

type Props = {
  route: {
    params: {
      title: string;
      web_tag: string;
    };
  };
};

const Webinar = ({route}: Props) => {
  const {title, web_tag} = route.params;
  const navWebinarDetail = useNavigation<WebinarDetailNavigationProp>();

  const webinarData = useSelector((state: RootState) =>
    state.webinar.find(item => item.title === title),
  );
  const dispatch = useDispatch();

  const bookmark = useCallback((title: string, id: number) => {
    dispatch(checkBookmark({title, id}));
  }, []);

  const _renderItem = ({item}: {item: WebinarType}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navWebinarDetail.navigate('WebinarDetail', {
            title: title,
            id: item.id,
          });
        }}>
        <WebinarCard
          data={item}
          header={title}
          bookmark={bookmark}
          handleToast={handleToast}
        />
      </TouchableOpacity>
    );
  };

  const [toastModal, setToastModal] = useState({
    bookmark: false,
    title: '',
    id: 0,
  });
  const handleToast = useCallback((title: string, id: number) => {
    setToastModal(prev => {
      return {bookmark: !prev.bookmark, title: title, id: id};
    });
  }, []);

  return (
    <View style={styles.base}>
      <Header title={title} />

      <View style={styles.tagWrapper}>
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>#{web_tag}</Text>
        </View>
      </View>

      <FlatList
        keyExtractor={item => `card_${item.id}`}
        data={webinarData?.data}
        renderItem={_renderItem}
        contentContainerStyle={{
          paddingHorizontal: 20,
          marginTop: 10,
        }}
        removeClippedSubviews={true}
      />

      <ToastModal toastModal={toastModal} />
    </View>
  );
};

export default Webinar;

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tagWrapper: {
    flexWrap: 'wrap',
    paddingLeft: 20,
    paddingVertical: 10,
  },
  tagContainer: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#CA5DE8',
    backgroundColor: '#CA5DE833',
  },
  tag: {
    color: '#CA5DE8',
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
});
