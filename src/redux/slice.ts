import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WebinarList, WebinarType} from '../types';
import {WebinarData} from '../types/data.json';

const initialState: WebinarList<WebinarType>[] = WebinarData;

export const webinarSlice = createSlice({
  name: 'webinar',
  initialState,
  reducers: {
    checkBookmark: (
      state,
      action: PayloadAction<{title: string; id: number}>,
    ) => {
      const {title, id} = action.payload;

      const findTitle = state.find(item => item.title === title);
      const searchWebinar = findTitle?.data.find(item => item.id === id);

      searchWebinar!.bookmark = !searchWebinar?.bookmark;
    },
  },
});

// Action creators are generated for each case reducer function
export const {checkBookmark} = webinarSlice.actions;

export default webinarSlice.reducer;
