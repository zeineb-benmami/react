import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState: initialState,
  reducers: {
    addEventReducer(state, action) {
      state.events.push(action.payload);
    },
    getEventsReducer(state, action) {
      state.events = action.payload;
    },
    updateEventReducer(state, action) {
      const i = state.events.indexOf(action.payload);
      if (i != -1) {
        state.events[i] = action.payload;
      }
    },
    deleteEventReducer(state, action) {
      const newEvents = state.events.filter((e) => e.id !== action.payload);
      state.events = newEvents;
    },
  },
});

export const {
  addEventReducer,
  getEventsReducer,
  updateEventReducer,
  deleteEventReducer,
} = eventSlice.actions;

export default eventSlice.reducer;
