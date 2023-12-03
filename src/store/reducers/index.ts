import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { sortReducer } from './sortReducer';
import { checkReducer } from './checkReducer';

export type Action = {
  type: string;
  payload?: any;
};

export type State = {
  sort: 'cheapest' | 'fastest' | 'optimal';
  check: 'no transfers' | '1 transfer' | '2 transfers' | '3 transfers';
};

const rootReducer = combineReducers({
  check: checkReducer,
  sort: sortReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
