export enum CheckActionTypes {
  CHECK_CHANGE = 'CHECK_CHANGE',
}

interface CheckChange {
  type: CheckActionTypes.CHECK_CHANGE;
  payload: string[];
}

export type CheckAction = CheckChange;

export type CheckState = {
  noTransfers: boolean;
  oneTransfer: boolean;
  twoTransfers: boolean;
  threeTransfers: boolean;
  checkboxValue: string[];
};
