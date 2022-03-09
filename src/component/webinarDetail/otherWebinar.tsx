import React, {useCallback} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {WebinarDetailNavigationProp, WebinarType} from '../../types';
import WebinarCard from '../webinar';
import {useDispatch, useSelector} from 'react-redux';
import {checkBookmark} from '../../redux/slice';
import {RootState} from '../../app/store';

type Props = {
  handleOtherToast: (title: string, id: number) => void;
};

const OtherWebinar = ({handleOtherToast}: Props) => {
  const webinarData = useSelector((state: RootState) => state.webinar[0].data);
  const navWebinarDetail = useNavigation<WebinarDetailNavigationProp>();

  const dispatch = useDispatch();

  const bookmark = useCallback((title: string, id: number) => {
    dispatch(checkBookmark({title, id}));
  }, []);

  const _renderItem = ({item}: {item: WebinarType}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navWebinarDetail.push('WebinarDetail', {
            title: '추천 웨비나',
            id: item.id,
          });
        }}>
        <WebinarCard
          data={item}
          header={'추천 웨비나'}
          bookmark={bookmark}
          handleToast={handleOtherToast}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={item => `card_${item.id}`}
      data={webinarData}
      renderItem={_renderItem}
      contentContainerStyle={{
        paddingHorizontal: 20,
        marginTop: 20,
      }}
      removeClippedSubviews={true}
      ListFooterComponent={() => {
        return <View style={{height: 350}} />;
      }}
    />
  );
};

export default OtherWebinar;
