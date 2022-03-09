import {StackNavigationProp} from '@react-navigation/stack';

export interface BannerType {
  id: number;
  title: string;
  date: string;
  tutor: string;
  avatar: string;
  university: string;
  currentCount: number;
  limitCount: number;
}

export interface WebinarType {
  id: number;
  tag: string;
  image: string;
  title: string;
  tutor: string;
  avatar: string;
  university: string;
  bookmark: boolean;
  section?: string;
}

export interface WebinarList<T> {
  title: string;
  web_tag: string;
  data: T[];
}

export type WebinarNavigationProp = StackNavigationProp<
  {Webinar: {title: string; web_tag: string}},
  'Webinar'
>;

export type WebinarDetailNavigationProp = StackNavigationProp<
  {WebinarDetail: {title: string; id: number}},
  'WebinarDetail'
>;
