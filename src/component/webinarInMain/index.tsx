import React, {useCallback, useState} from 'react';
import {
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {checkBookmark} from '../../redux/slice';
import {
  WebinarDetailNavigationProp,
  WebinarNavigationProp,
  WebinarType,
} from '../../types';
import {RootState} from '../../app/store';
import Banner from '../banner';
import Cateogry from '../category';
import WebinarMainCard from './webinarMainCard';
import {WebinarCategory} from './webinarCategory';
import ToastModal from '../toast';

type RenderProps = {
  item: WebinarType;
};

const WebinarInMain = () => {
  const navWebinar = useNavigation<WebinarNavigationProp>();
  const navWebinarDetail = useNavigation<WebinarDetailNavigationProp>();
  const webinarData = useSelector((state: RootState) => state.webinar);
  const dispatch = useDispatch();

  const bookmark = useCallback((title: string, id: number) => {
    dispatch(checkBookmark({title, id}));
  }, []);

  const _renderItem =
    (section: string) =>
    ({item}: RenderProps) => {
      return (
        <TouchableOpacity
          onPress={() => {
            navWebinarDetail.navigate('WebinarDetail', {
              title: section,
              id: item.id,
            });
          }}>
          <WebinarMainCard
            item={item}
            bookmark={bookmark}
            header={section}
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
    <View>
      <Cateogry />

      <SectionList
        keyExtractor={item => `section_${item.id}`}
        stickySectionHeadersEnabled={false}
        sections={webinarData}
        renderSectionHeader={({section}) => {
          return (
            <View style={{marginBottom: 25}}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} allowFontScaling={false}>
                  {section.title}
                </Text>
                <TouchableOpacity
                  style={styles.navBtn}
                  onPress={() => {
                    navWebinar.navigate('Webinar', {
                      title: section.title,
                      web_tag: section.web_tag,
                    });
                  }}>
                  <Text style={styles.arrow} allowFontScaling={false}>
                    {'〉'}
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                keyExtractor={item => `card_${item.id}`}
                horizontal
                data={section.data}
                renderItem={_renderItem(section.title)}
                contentContainerStyle={{
                  paddingHorizontal: 10,
                }}
                removeClippedSubviews={true}
                maxToRenderPerBatch={5}
              />
            </View>
          );
        }}
        renderItem={() => {
          return null;
        }}
        ListHeaderComponent={() => {
          return (
            <View>
              <Banner />
              <WebinarCategory />
            </View>
          );
        }}
        ListFooterComponent={() => {
          return <View style={{height: 100}} />;
        }}
        removeClippedSubviews={true}
      />

      <ToastModal toastModal={toastModal} />
    </View>
  );
};

export default WebinarInMain;

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  navBtn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  arrow: {
    fontSize: 12,
    fontWeight: '600',
  },
});
