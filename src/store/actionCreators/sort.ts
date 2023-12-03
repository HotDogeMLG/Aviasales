import { SortAction, SortActionTypes } from '../../types/sort';

export const sortCheapestAction = (): SortAction => ({
  type: SortActionTypes.SORT_CHEAPEST,
});
export const sortFastestAction = (): SortAction => ({
  type: SortActionTypes.SORT_FASTEST,
});
export const sortOptimalAction = (): SortAction => ({
  type: SortActionTypes.SORT_OPTIMAL,
});
