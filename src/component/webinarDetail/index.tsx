import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Lecture from './lecture';
import Summary from './summary';
import {LectureList} from '../../types/data.json';
import DetailCateogry from './category';
import LectureCard from './lectureCard';
import OtherWebinar from './otherWebinar';

type Props = {
  handleOtherToast: (title: string, id: number) => void;
};

const WebinarDetailComponent = ({handleOtherToast}: Props) => {
  const [category, setCategory] = useState('개요');
  const [select, setSelect] = useState(LectureList[0].url);

  const changeCategory = (text: string) => {
    setCategory(text);
  };

  const changeSelect = (text: string) => {
    setSelect(text);
  };

  return (
    <View>
      <Lecture select={select} />
      <DetailCateogry category={category} changeCategory={changeCategory} />
      {category === '개요' ? (
        <Summary />
      ) : category === '재생 목록' ? (
        <LectureCard select={select} changeSelect={changeSelect} />
      ) : (
        <OtherWebinar handleOtherToast={handleOtherToast} />
      )}
    </View>
  );
};

export default WebinarDetailComponent;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
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
