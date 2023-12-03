export enum SortActionTypes {
  SORT_CHEAPEST = 'SORT_CHEAPEST',
  SORT_FASTEST = 'SORT_FASTEST',
  SORT_OPTIMAL = 'SORT_OPTIMAL',
}

interface SortCheapestAction {
  type: SortActionTypes.SORT_CHEAPEST;
}

interface SortFastestAction {
  type: SortActionTypes.SORT_FASTEST;
}

interface SortOptimalAction {
  type: SortActionTypes.SORT_OPTIMAL;
}

export type SortAction =
  | SortCheapestAction
  | SortFastestAction
  | SortOptimalAction;

export type SortState = 'cheapest' | 'fastest' | 'optimal';
