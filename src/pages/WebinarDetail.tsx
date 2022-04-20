import React, {createContext, useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../app/store';
import HeaderMark from '../component/headerMark';
import {checkBookmark} from '../redux/slice';
import {WebinarType} from '../types';
import WebinarDetailComponent from '../component/webinarDetail';
import ToastModal from '../component/toast';
import Orientation from 'react-native-orientation';

export const WebinarDetailData = createContext<WebinarType | null>(null);

type Props = {
  route: {
    params: {
      title: string;
      id: number;
    };
  };
};

const WebinarDetail = ({route}: Props) => {
  const {title, id} = route.params;
  const webinarData = useSelector((state: RootState) =>
    state.webinar
      .find(item => item.title === title)
      ?.data.find(data => data.id === id),
  );
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const bookmark = useCallback((title: string, id: number) => {
    dispatch(checkBookmark({title, id}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const activeBookmark = () => {
    bookmark(title, id);
  };

  const [toastModal, setToastModal] = useState({
    bookmark: false,
    title: route.params.title,
    id: route.params.id,
  });
  const handleToast = useCallback(() => {
    setToastModal(prev => {
      return {
        bookmark: !prev.bookmark,
        title: route.params.title,
        id: route.params.id,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleOtherToast = useCallback((title: string, id: number) => {
    setToastModal(prev => {
      return {bookmark: !prev.bookmark, title: title, id: id};
    });
  }, []);

  if (webinarData) {
    return (
      <View style={styles.base}>
        <HeaderMark
          title={webinarData.title}
          bookmark={activeBookmark}
          active={webinarData.bookmark}
          handleToast={handleToast}
        />
        <WebinarDetailData.Provider value={webinarData}>
          <WebinarDetailComponent handleOtherToast={handleOtherToast} />
        </WebinarDetailData.Provider>

        <ToastModal toastModal={toastModal} />
      </View>
    );
  }

  return (
    <View>
      <Text allowFontScaling={false}>Loading...</Text>
    </View>
  );
};

export default WebinarDetail;

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
