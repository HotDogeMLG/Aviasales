import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { sortReducer } from './sortReducer';
import { checkReducer } from './checkReducer';
import { ticketReducer } from './ticketReducer';

const rootReducer = combineReducers({
  check: checkReducer,
  sort: sortReducer,
  tickets: ticketReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
