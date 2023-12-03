import { SortState, SortAction, SortActionTypes } from '../../types/sort';

const sortDefaultState: SortState = 'cheapest';

export const sortReducer = (
  state: SortState = sortDefaultState,
  action: SortAction
): SortState => {
  switch (action.type) {
    case SortActionTypes.SORT_CHEAPEST:
      return 'cheapest';
    case SortActionTypes.SORT_FASTEST:
      return 'fastest';
    case SortActionTypes.SORT_OPTIMAL:
      return 'optimal';
    default:
      return state;
  }
};
